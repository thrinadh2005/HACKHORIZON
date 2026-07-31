from pydantic import BaseModel
from typing import Optional, Dict, Any, List
from datetime import datetime

class AssetCategoryResponse(BaseModel):
    id: str
    name: str
    code: str
    icon_name: Optional[str] = None
    default_inspection_interval_days: int

    class Config:
        from_attributes = True

class AssetCreate(BaseModel):
    asset_code: str
    name: str
    category_id: str
    zone_id: Optional[str] = None
    ward_id: Optional[str] = None
    department_id: Optional[str] = None
    assigned_officer_id: Optional[str] = None
    latitude: float
    longitude: float
    address: Optional[str] = None
    criticality: str = "Medium"
    capacity: Optional[str] = None
    manufacturer: Optional[str] = None
    model: Optional[str] = None
    serial_number: Optional[str] = None
    attributes_json: Optional[Dict[str, Any]] = None

class AssetResponse(BaseModel):
    id: str
    asset_code: str
    name: str
    category_id: str
    zone_id: Optional[str] = None
    ward_id: Optional[str] = None
    latitude: float
    longitude: float
    address: Optional[str] = None
    operational_status: str
    criticality: str
    health_score: float
    ai_risk_level: str
    capacity: Optional[str] = None
    fuel_level_percent: Optional[float] = None
    manufacturer: Optional[str] = None
    model: Optional[str] = None
    serial_number: Optional[str] = None
    qr_code_hash: Optional[str] = None
    rfid_tag_id: Optional[str] = None
    last_inspection_at: Optional[datetime] = None
    next_maintenance_at: Optional[datetime] = None
    attributes_json: Optional[Dict[str, Any]] = None

    class Config:
        from_attributes = True

class DigitalTwinResponse(BaseModel):
    asset: AssetResponse
    maintenance_timeline: List[dict]
    recent_inspections: List[dict]
    telemetry_history: List[dict]
    dependency_graph: Dict[str, Any]
    rul_forecast_years: float

class InspectionCreate(BaseModel):
    asset_id: str
    template_id: Optional[str] = None
    due_at: datetime
    priority: str = "Medium"

class InspectionSubmit(BaseModel):
    checklist_responses: Dict[str, Any]
    observations: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    voice_note_url: Optional[str] = None
    digital_signature_url: Optional[str] = None
    offline_client_tx_id: Optional[str] = None

class InspectionResponse(BaseModel):
    id: str
    inspection_code: str
    asset_id: str
    inspector_id: str
    status: str
    priority: str
    due_at: datetime
    submitted_at: Optional[datetime] = None
    compliance_score: Optional[float] = None
    gps_verified: bool
    checklist_responses: Optional[Dict[str, Any]] = None
    observations: Optional[str] = None

    class Config:
        from_attributes = True
