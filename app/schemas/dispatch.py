from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class DispatchCreate(BaseModel):
    incident_id: str
    team_id: str

class DispatchResponse(BaseModel):
    id: str
    dispatch_code: str
    incident_id: str
    team_id: str
    assigned_by_id: str
    status: str
    dispatched_at: datetime
    eta_minutes: Optional[int] = None
    completed_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class ResponseTeamResponse(BaseModel):
    id: str
    team_code: str
    name: str
    agency: str
    status: str
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    last_gps_updated_at: Optional[datetime] = None
    fatigue_status: str
    crew_count: int
    vehicle_info: Optional[str] = None

    class Config:
        from_attributes = True

class TeamTelemetryIngest(BaseModel):
    team_id: str
    latitude: float
    longitude: float
    speed_kmh: Optional[float] = 0.0
    battery_level: Optional[int] = 100
    sos_triggered: Optional[bool] = False
