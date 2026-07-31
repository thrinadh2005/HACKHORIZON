import random
from datetime import datetime, timedelta
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException
from app.schemas.incident import PublicAlertCreate, PublicAlertResponse
from app.security import get_current_user_claims
from app.services.ai_engine import ai_engine
from app.services.realtime_hub import realtime_manager

router = APIRouter(prefix="/alerts", tags=["Public Alerts & Mass Notifications"])

@router.get("", response_model=List[PublicAlertResponse])
async def list_public_alerts(status: Optional[str] = None):
    # Return active mock public alerts list
    return [
        {
            "id": "alr-001",
            "alert_code": "ALT-CYCLONE-VARUNA",
            "title": "CYCLONE RED ALERT - VARUNA",
            "category": "CycloneWarning",
            "severity": "Emergency",
            "headline": "Severe Cyclonic Storm Varuna expected landfall in 18 hours.",
            "detailed_message": "Immediate precautionary evacuation ordered for low-lying coastal wards 12, 16, and 18. Move to designated emergency shelters.",
            "status": "Broadcasting",
            "channels": ["CellBroadcast", "SMS", "Push", "WhatsApp"],
            "translations": {
                "en": "Immediate precautionary evacuation ordered for coastal wards.",
                "te": "తీర ప్రాంత వార్డుల ప్రజలు తక్షణమే సురక్షిత ప్రాంతాలకు వెళ్లాలి."
            },
            "broadcast_at": datetime.utcnow() - timedelta(hours=2),
            "expires_at": datetime.utcnow() + timedelta(hours=24),
            "delivery_stats": {"sent": 1482450, "delivered": 1436118, "failed": 18420, "acknowledged_percent": 72.4}
        }
    ]

@router.post("/compose")
async def compose_public_alert(
    alert_in: PublicAlertCreate,
    claims: dict = Depends(get_current_user_claims)
):
    # Run AI readability and translation check
    ai_review = ai_engine.analyze_alert_message(alert_in.detailed_message)

    code = f"ALT-{random.randint(1000, 9999)}"
    
    alert_payload = {
        "id": f"alr-{random.randint(100, 999)}",
        "alert_code": code,
        "title": alert_in.title,
        "category": alert_in.category,
        "severity": alert_in.severity,
        "headline": alert_in.headline,
        "detailed_message": alert_in.detailed_message,
        "status": "Approved" if alert_in.severity != "Extreme" else "UnderReview",
        "channels": alert_in.channels,
        "translations": ai_review["translations"],
        "ai_clarity_score": ai_review["clarity_score"],
        "ai_reading_level": ai_review["reading_grade_level"],
        "broadcast_at": datetime.utcnow(),
        "expires_at": alert_in.expires_at or (datetime.utcnow() + timedelta(hours=12))
    }

    if alert_payload["status"] == "Approved":
        await realtime_manager.broadcast_event("notification.broadcast", alert_payload)

    return alert_payload

@router.post("/{alertId}/broadcast")
async def broadcast_alert(alertId: str, claims: dict = Depends(get_current_user_claims)):
    broadcast_data = {
        "alert_id": alertId,
        "status": "Broadcasting",
        "broadcast_initiated_by": claims.get("email"),
        "timestamp": datetime.utcnow()
    }
    await realtime_manager.broadcast_event("notification.broadcast", broadcast_data)
    return {"message": "Public emergency broadcast initiated", "alert_id": alertId}
