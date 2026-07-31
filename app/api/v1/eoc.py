from datetime import datetime, timedelta
from typing import List, Optional, Dict, Any
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.database import get_db
from app.models.governance import DecisionLog
from app.security import get_current_user_claims
from app.services.audit_service import audit_service
from app.services.realtime_hub import realtime_manager

router = APIRouter(prefix="/eoc", tags=["Emergency Operations Center (EOC)"])

@router.get("/dashboard")
async def get_eoc_dashboard_overview(db: AsyncSession = Depends(get_db)):
    """
    Returns real-time command overview for EOC Command Staff
    """
    return {
        "emergency_level": "LEVEL-4",
        "cyclone_name": "VARUNA",
        "expected_landfall_hours": 18,
        "wind_speed_kmh": 145,
        "active_operational_period": "08:00 - 20:00 IST",
        "incident_commander": "Dr. S. Kumar (Disaster Head)",
        "city_readiness_percent": 92.4,
        "critical_incidents_count": 5,
        "active_responders_count": 482,
        "shelters_open_count": 63,
        "overall_status": "ACTIVE"
    }

@router.post("/operational-period")
async def create_operational_period(
    period_name: str,
    objectives: List[str],
    db: AsyncSession = Depends(get_db),
    claims: dict = Depends(get_current_user_claims)
):
    await audit_service.log_action(
        db=db,
        action="EOC_OPERATIONAL_PERIOD_CREATED",
        user_id=claims.get("sub"),
        new_state={"period_name": period_name, "objectives": objectives}
    )
    return {
        "message": "Operational Period established",
        "period_name": period_name,
        "start_time": datetime.utcnow(),
        "end_time": datetime.utcnow() + timedelta(hours=12),
        "objectives": objectives
    }

@router.post("/sitrep")
async def publish_sitrep(
    summary: str,
    highlights: List[str],
    db: AsyncSession = Depends(get_db),
    claims: dict = Depends(get_current_user_claims)
):
    sitrep_payload = {
        "sitrep_id": "SITREP-2026-07-31-01",
        "published_at": datetime.utcnow(),
        "summary": summary,
        "highlights": highlights,
        "published_by": claims.get("email")
    }

    await audit_service.log_action(
        db=db,
        action="EOC_SITREP_PUBLISHED",
        user_id=claims.get("sub"),
        new_state=sitrep_payload
    )

    await realtime_manager.broadcast_event("eoc.sitrep_published", sitrep_payload)

    return sitrep_payload

@router.post("/decision-log")
async def record_strategic_decision(
    title: str,
    justification: str,
    db: AsyncSession = Depends(get_db),
    claims: dict = Depends(get_current_user_claims)
):
    decision = DecisionLog(
        decision_maker_id=claims.get("sub"),
        decision_title=title,
        justification=justification,
        operational_period="08:00 - 20:00"
    )
    db.add(decision)
    await db.commit()
    await db.refresh(decision)

    await audit_service.log_action(
        db=db,
        action="EOC_STRATEGIC_DECISION_LOGGED",
        user_id=claims.get("sub"),
        entity_type="DecisionLog",
        entity_id=decision.id,
        new_state={"title": title, "justification": justification}
    )

    return decision
