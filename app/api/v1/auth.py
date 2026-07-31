import uuid
from datetime import datetime
from urllib.parse import urlencode
import httpx

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import RedirectResponse
from motor.motor_asyncio import AsyncIOMotorDatabase

from app.database import get_db
from app.schemas.identity import UserLogin, UserCreate, Token, UserResponse
from app.security import verify_password, get_password_hash, create_access_token, get_current_user_claims
from app.services.audit_service import audit_service
from app.config import settings

router = APIRouter(prefix="/auth", tags=["Authentication & Identity"])

# ─── Role-based demo accounts (fallback when DB is empty) ─────────────────────
DEMO_USERS = {
    "commissioner@gvmc.gov.in": {
        "id": "u-001", "full_name": "Dr. S. Kumar, IAS",
        "role": "Commissioner", "password": "password123",
        "assigned_zone_id": None, "assigned_ward_id": None,
    },
    "disasterhead@gvmc.gov.in": {
        "id": "u-002", "full_name": "Sri R. Naidu",
        "role": "DisasterHead", "password": "disaster123",
        "assigned_zone_id": None, "assigned_ward_id": None,
    },
    "zonesupervisor@gvmc.gov.in": {
        "id": "u-003", "full_name": "Sri P. Rao",
        "role": "ZoneSupervisor", "password": "zone123",
        "assigned_zone_id": "z-4", "assigned_ward_id": None,
    },
    "fieldofficer@gvmc.gov.in": {
        "id": "u-004", "full_name": "Sri A. Reddy",
        "role": "FieldOfficer", "password": "field123",
        "assigned_zone_id": "z-4", "assigned_ward_id": "w-22",
    },
    "eoc@gvmc.gov.in": {
        "id": "u-005", "full_name": "Sri M. Das",
        "role": "EOC_Operator", "password": "eoc123",
        "assigned_zone_id": None, "assigned_ward_id": None,
    },
    "technician@gvmc.gov.in": {
        "id": "u-006", "full_name": "Sri V. Kumar",
        "role": "MaintenanceTechnician", "password": "tech123",
        "assigned_zone_id": "z-1", "assigned_ward_id": "w-5",
    },
    "admin@gvmc.gov.in": {
        "id": "u-007", "full_name": "Sri L. Rao",
        "role": "Admin", "password": "admin123",
        "assigned_zone_id": None, "assigned_ward_id": None,
    },
}

def _build_token_response(user: dict, user_id: str) -> dict:
    token_payload = {
        "sub": user_id,
        "email": user["email"],
        "role": user["role"],
        "zone_id": user.get("assigned_zone_id"),
        "ward_id": user.get("assigned_ward_id"),
        "department_id": user.get("department_id"),
    }
    access_token = create_access_token(data=token_payload)
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "expires_in": 28800,
        "user_info": {
            "id": user_id,
            "full_name": user["full_name"],
            "email": user["email"],
            "role": user["role"],
            "zone_id": user.get("assigned_zone_id"),
            "ward_id": user.get("assigned_ward_id"),
        },
    }


# ─── Email / Password Login ────────────────────────────────────────────────────
@router.post("/login", response_model=Token)
async def login(credentials: UserLogin, db: AsyncIOMotorDatabase = Depends(get_db)):
    users_col = db["users"]
    user = None

    try:
        user = await users_col.find_one({"email": credentials.email})
    except Exception:
        pass

    # Check DB user
    if user and verify_password(credentials.password, user.get("hashed_password", "")):
        pass  # valid DB user
    else:
        # Fallback: check demo users
        demo = DEMO_USERS.get(credentials.email)
        if demo and credentials.password == demo["password"]:
            user = {
                "id": demo["id"],
                "email": credentials.email,
                "hashed_password": get_password_hash(demo["password"]),
                "full_name": demo["full_name"],
                "role": demo["role"],
                "assigned_zone_id": demo["assigned_zone_id"],
                "assigned_ward_id": demo["assigned_ward_id"],
                "is_active": True,
            }
            # Persist to DB
            try:
                await users_col.update_one(
                    {"email": credentials.email}, {"$set": user}, upsert=True
                )
            except Exception:
                pass
        else:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password",
                headers={"WWW-Authenticate": "Bearer"},
            )

    if not user.get("is_active", True):
        raise HTTPException(status_code=400, detail="User account is deactivated")

    try:
        await users_col.update_one(
            {"email": credentials.email},
            {"$set": {"last_login_at": datetime.utcnow()}},
        )
    except Exception:
        pass

    user_id = str(user.get("id", user.get("_id", str(uuid.uuid4()))))

    try:
        await audit_service.log_action(
            db=db, action="USER_LOGIN_SUCCESS",
            user_id=user_id, user_email=user["email"], role=user["role"],
        )
    except Exception:
        pass

    return _build_token_response(user, user_id)


# ─── Google OAuth2 ─────────────────────────────────────────────────────────────
@router.get("/google")
async def google_login():
    """Redirect user to Google's OAuth2 consent screen."""
    if not settings.GOOGLE_CLIENT_ID:
        raise HTTPException(
            status_code=503,
            detail="Google OAuth is not configured. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env"
        )
    params = {
        "client_id": settings.GOOGLE_CLIENT_ID,
        "redirect_uri": settings.GOOGLE_REDIRECT_URI,
        "response_type": "code",
        "scope": "openid email profile",
        "access_type": "offline",
        "prompt": "select_account",
    }
    url = "https://accounts.google.com/o/oauth2/v2/auth?" + urlencode(params)
    return RedirectResponse(url)


@router.get("/google/callback")
async def google_callback(code: str, db: AsyncIOMotorDatabase = Depends(get_db)):
    """Exchange Google auth code for user profile and issue a JWT."""
    if not settings.GOOGLE_CLIENT_ID or not settings.GOOGLE_CLIENT_SECRET:
        raise HTTPException(status_code=503, detail="Google OAuth not configured")

    async with httpx.AsyncClient() as client:
        # 1. Exchange code for tokens
        token_resp = await client.post(
            "https://oauth2.googleapis.com/token",
            data={
                "code": code,
                "client_id": settings.GOOGLE_CLIENT_ID,
                "client_secret": settings.GOOGLE_CLIENT_SECRET,
                "redirect_uri": settings.GOOGLE_REDIRECT_URI,
                "grant_type": "authorization_code",
            },
        )
        if token_resp.status_code != 200:
            raise HTTPException(status_code=400, detail="Failed to exchange Google code for token")
        tokens = token_resp.json()

        # 2. Fetch user profile
        profile_resp = await client.get(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            headers={"Authorization": f"Bearer {tokens['access_token']}"},
        )
        if profile_resp.status_code != 200:
            raise HTTPException(status_code=400, detail="Failed to fetch Google profile")
        profile = profile_resp.json()

    email: str = profile.get("email", "")
    full_name: str = profile.get("name", email)

    users_col = db["users"]
    user = None
    try:
        user = await users_col.find_one({"email": email})
    except Exception:
        pass

    if not user:
        # Auto-provision as FieldOfficer — admin can upgrade role later
        user = {
            "id": str(uuid.uuid4()),
            "email": email,
            "hashed_password": "",
            "full_name": full_name,
            "role": "FieldOfficer",
            "assigned_zone_id": None,
            "assigned_ward_id": None,
            "google_sub": profile.get("sub"),
            "is_active": True,
            "created_at": datetime.utcnow(),
        }
        try:
            await users_col.insert_one(user)
        except Exception:
            pass

    if not user.get("is_active", True):
        raise HTTPException(status_code=403, detail="Account deactivated. Contact GVMC Admin.")

    user_id = str(user.get("id", user.get("_id", str(uuid.uuid4()))))

    # Redirect frontend with token in query param (handled by frontend JS)
    jwt_token = create_access_token(data={
        "sub": user_id,
        "email": user["email"],
        "role": user["role"],
        "zone_id": user.get("assigned_zone_id"),
        "ward_id": user.get("assigned_ward_id"),
    })

    frontend_url = "http://localhost:5173"
    return RedirectResponse(
        f"{frontend_url}/?token={jwt_token}&email={email}&role={user['role']}&name={full_name}"
    )


# ─── Token Validation & Keep-Alive ────────────────────────────────────────────
@router.post("/validate-token")
async def validate_token(claims: dict = Depends(get_current_user_claims)):
    return {"valid": True, "claims": claims}


@router.post("/session/keep-alive")
async def keep_alive(claims: dict = Depends(get_current_user_claims)):
    new_token = create_access_token(data=claims)
    return {"refreshed_token": new_token, "expires_in": 28800}
