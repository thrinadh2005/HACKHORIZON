from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from datetime import datetime

class IncidentCreate(BaseModel):
    title: str
    category: str
    source: str # CitizenSOS, Helpline112, FieldOfficer, IoTSensor, CCTV_AI, Drone
    latitude: float
    longitude: float
    address: Optional[str] = None
    description: Optional[str] = None
    reported_by_name: Optional[str] = None
    reported_by_phone: Optional[str] = None

class IncidentResponse(BaseModel):
    id: str
    incident_code: str
    title: str
    category: str
    source: str
    severity_level: int
    status: str
    zone_id: Optional[str] = None
    ward_id: Optional[str] = None
    latitude: float
    longitude: float
    address: Optional[str] = None
    description: Optional[str] = None
    ai_severity_score: Optional[float] = None
    ai_suggested_resources: Optional[Dict[str, Any]] = None
    sla_response_deadline_at: Optional[datetime] = None
    created_at: datetime

    class Config:
        from_attributes = True

class PublicAlertCreate(BaseModel):
    title: str
    category: str
    severity: str
    headline: str
    detailed_message: str
    target_zones: Optional[List[str]] = None
    target_wards: Optional[List[str]] = None
    channels: List[str] # ["CellBroadcast", "SMS", "Push", "WhatsApp"]
    expires_at: Optional[datetime] = None

class PublicAlertResponse(BaseModel):
    id: str
    alert_code: str
    title: str
    category: str
    severity: str
    headline: str
    detailed_message: str
    status: str
    channels: Optional[List[str]] = None
    translations: Optional[Dict[str, Any]] = None
    broadcast_at: Optional[datetime] = None
    expires_at: Optional[datetime] = None
    delivery_stats: Optional[Dict[str, Any]] = None

    class Config:
        from_attributes = True
