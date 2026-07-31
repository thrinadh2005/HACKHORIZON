import uuid
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException
from motor.motor_asyncio import AsyncIOMotorDatabase

from app.database import get_db
from app.schemas.identity import UserCreate, UserResponse, DepartmentResponse, ZoneResponse, WardResponse
from app.security import get_password_hash, get_current_user_claims
from app.services.audit_service import audit_service

router = APIRouter(prefix="/admin", tags=["Platform Administration & Governance"])

@router.get("/users", response_model=List[UserResponse])
async def list_users(
    role: Optional[str] = None,
    zone_id: Optional[str] = None,
    db: AsyncIOMotorDatabase = Depends(get_db),
    claims: dict = Depends(get_current_user_claims)
):
    query = {}
    if role:
        query["role"] = role
    if zone_id:
        query["assigned_zone_id"] = zone_id
        
    cursor = db["users"].find(query)
    users = []
    async for u in cursor:
        u["id"] = str(u.get("id", u.get("_id")))
        users.append(u)
    return users

@router.post("/users", response_model=UserResponse)
async def create_user(
    user_in: UserCreate,
    db: AsyncIOMotorDatabase = Depends(get_db),
    claims: dict = Depends(get_current_user_claims)
):
    existing = await db["users"].find_one({"email": user_in.email})
    if existing:
        raise HTTPException(status_code=400, detail="User email already exists")

    new_user = {
        "id": f"u-{str(uuid.uuid4())[:8]}",
        "email": user_in.email,
        "hashed_password": get_password_hash(user_in.password),
        "full_name": user_in.full_name,
        "phone": user_in.phone,
        "role": user_in.role,
        "department_id": user_in.department_id,
        "assigned_zone_id": user_in.assigned_zone_id,
        "assigned_ward_id": user_in.assigned_ward_id,
        "is_active": True
    }
    await db["users"].insert_one(new_user)

    await audit_service.log_action(
        db=db,
        action="USER_CREATED",
        user_id=claims.get("sub"),
        user_email=claims.get("email"),
        role=claims.get("role"),
        entity_type="User",
        entity_id=new_user["id"]
    )

    return new_user

@router.get("/departments", response_model=List[DepartmentResponse])
async def list_departments(db: AsyncIOMotorDatabase = Depends(get_db)):
    cursor = db["departments"].find()
    depts = []
    async for d in cursor:
        d["id"] = str(d.get("id", d.get("_id")))
        depts.append(d)
    if not depts:
        depts = [
            {"id": "dept-1", "name": "Disaster Management", "code": "DM"},
            {"id": "dept-2", "name": "Municipal Engineering", "code": "ENG"},
            {"id": "dept-3", "name": "Water Supply & Drainage", "code": "WSD"}
        ]
    return depts

@router.get("/zones", response_model=List[ZoneResponse])
async def list_zones(db: AsyncIOMotorDatabase = Depends(get_db)):
    cursor = db["zones"].find()
    zones = []
    async for z in cursor:
        z["id"] = str(z.get("id", z.get("_id")))
        zones.append(z)
    if not zones:
        zones = [
            {"id": "z-1", "name": "Zone 1 (North)", "zone_number": 1},
            {"id": "z-2", "name": "Zone 2 (Central)", "zone_number": 2},
            {"id": "z-3", "name": "Zone 3 (South)", "zone_number": 3},
            {"id": "z-4", "name": "Zone 4 (Coastal)", "zone_number": 4}
        ]
    return zones

@router.get("/wards", response_model=List[WardResponse])
async def list_wards(zone_id: Optional[str] = None, db: AsyncIOMotorDatabase = Depends(get_db)):
    query = {"zone_id": zone_id} if zone_id else {}
    cursor = db["wards"].find(query)
    wards = []
    async for w in cursor:
        w["id"] = str(w.get("id", w.get("_id")))
        wards.append(w)
    if not wards:
        wards = [
            {"id": "w-12", "zone_id": "z-4", "ward_number": 12, "name": "Ward 12 Beach Road", "population": 18450, "preparedness_score": 88.5},
            {"id": "w-18", "zone_id": "z-4", "ward_number": 18, "name": "Ward 18 Coastal Hub", "population": 22100, "preparedness_score": 92.0}
        ]
    return wards

@router.get("/audit-logs")
async def list_audit_logs(
    limit: int = 50,
    action: Optional[str] = None,
    db: AsyncIOMotorDatabase = Depends(get_db),
    claims: dict = Depends(get_current_user_claims)
):
    query = {"action": action} if action else {}
    cursor = db["audit_logs"].find(query).sort("timestamp", -1).limit(limit)
    logs = []
    async for l in cursor:
        l["id"] = str(l.get("id", l.get("_id")))
        logs.append(l)
    return logs
