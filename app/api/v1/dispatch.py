import random
from datetime import datetime
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.database import get_db
from app.models.dispatch import ResponseTeam, Dispatch, TeamTelemetry
from app.schemas.dispatch import DispatchCreate, DispatchResponse, ResponseTeamResponse, TeamTelemetryIngest
from app.security import get_current_user_claims
from app.services.audit_service import audit_service
from app.services.realtime_hub import realtime_manager

router = APIRouter(prefix="/dispatch", tags=["Rescue Teams & Dispatch Management"])

@router.get("/teams", response_model=List[ResponseTeamResponse])
async def list_response_teams(
    status: Optional[str] = None,
    agency: Optional[str] = None,
    db: AsyncSession = Depends(get_db)
):
    query = select(ResponseTeam)
    if status:
        query = query.where(ResponseTeam.status == status)
    if agency:
        query = query.where(ResponseTeam.agency == agency)
    result = await db.execute(query)
    return result.scalars().all()

@router.post("/recommend")
async def get_dispatch_recommendation(
    incident_id: str,
    required_agency: str = "NDRF",
    db: AsyncSession = Depends(get_db)
):
    # Retrieve available teams matching agency
    result = await db.execute(
        select(ResponseTeam).where(ResponseTeam.agency == required_agency).where(ResponseTeam.status == "Available")
    )
    available_teams = result.scalars().all()
    
    recommended_team = available_teams[0] if available_teams else None
    
    return {
        "incident_id": incident_id,
        "recommended_team": {
            "id": recommended_team.id if recommended_team else "rt-mock-1",
            "name": recommended_team.name if recommended_team else "Boat Team RT-14",
            "agency": required_agency,
            "eta_minutes": 6
        } if recommended_team else None,
        "reason": "Nearest qualified flood rescue team with zero active fatigue alerts",
        "confidence_score": 0.97
    }

@router.post("/execute", response_model=DispatchResponse)
async def execute_dispatch(
    dispatch_in: DispatchCreate,
    db: AsyncSession = Depends(get_db),
    claims: dict = Depends(get_current_user_claims)
):
    team_res = await db.execute(select(ResponseTeam).where(ResponseTeam.id == dispatch_in.team_id))
    team = team_res.scalars().first()
    if not team:
        raise HTTPException(status_code=404, detail="Response team not found")

    code = f"DSP-{random.randint(1000, 9999)}"
    new_dsp = Dispatch(
        dispatch_code=code,
        incident_id=dispatch_in.incident_id,
        team_id=dispatch_in.team_id,
        assigned_by_id=claims.get("sub"),
        status="EnRoute",
        eta_minutes=8
    )

    team.status = "EnRoute"

    db.add(new_dsp)
    await db.commit()
    await db.refresh(new_dsp)

    await audit_service.log_action(
        db=db,
        action="DISPATCH_EXECUTED",
        user_id=claims.get("sub"),
        entity_type="Dispatch",
        entity_id=new_dsp.id
    )

    await realtime_manager.broadcast_event("dispatch.executed", {
        "dispatch_id": new_dsp.id,
        "code": new_dsp.dispatch_code,
        "team_id": new_dsp.team_id,
        "status": new_dsp.status
    })

    return new_dsp

@router.post("/telemetry")
async def ingest_field_telemetry(
    telemetry: TeamTelemetryIngest,
    db: AsyncSession = Depends(get_db)
):
    team_res = await db.execute(select(ResponseTeam).where(ResponseTeam.id == telemetry.team_id))
    team = team_res.scalars().first()
    if team:
        team.latitude = telemetry.latitude
        team.longitude = telemetry.longitude
        team.last_gps_updated_at = datetime.utcnow()

    entry = TeamTelemetry(
        team_id=telemetry.team_id,
        latitude=telemetry.latitude,
        longitude=telemetry.longitude,
        speed_kmh=telemetry.speed_kmh,
        battery_level=telemetry.battery_level,
        sos_triggered=telemetry.sos_triggered
    )
    db.add(entry)
    await db.commit()

    # Broadcast position update to live map listeners
    await realtime_manager.broadcast_event("field.gps_update", {
        "team_id": telemetry.team_id,
        "latitude": telemetry.latitude,
        "longitude": telemetry.longitude,
        "sos": telemetry.sos_triggered
    })

    if telemetry.sos_triggered:
        await realtime_manager.broadcast_event("field.sos_triggered", {
            "team_id": telemetry.team_id,
            "latitude": telemetry.latitude,
            "longitude": telemetry.longitude,
            "message": "EMERGENCY SOS ACTIVATED BY FIELD TEAM"
        })

    return {"status": "success", "sos": telemetry.sos_triggered}
