from pydantic import BaseModel
from typing import Optional, Dict, Any, List
from datetime import datetime

class ShelterResponse(BaseModel):
    id: str
    shelter_code: str
    name: str
    zone_id: Optional[str] = None
    ward_id: Optional[str] = None
    latitude: float
    longitude: float
    address: Optional[str] = None
    total_capacity: int
    current_occupancy: int
    status: str
    has_generator: bool
    has_water_supply: bool
    has_medical_team: bool
    facilities_status: Optional[Dict[str, Any]] = None

    class Config:
        from_attributes = True

class ShelterCheckinCreate(BaseModel):
    shelter_id: str
    family_id: Optional[str] = None
    citizen_name: str
    age: Optional[int] = None
    gender: Optional[str] = None
    phone: Optional[str] = None
    vulnerable_category: Optional[str] = None

class ShelterCheckinResponse(BaseModel):
    id: str
    shelter_id: str
    family_id: Optional[str] = None
    citizen_name: str
    age: Optional[int] = None
    gender: Optional[str] = None
    phone: Optional[str] = None
    vulnerable_category: Optional[str] = None
    checkin_at: datetime
    checkout_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class ReliefPackageResponse(BaseModel):
    id: str
    sku: str
    category: str
    contents_summary: str
    total_quantity: int
    available_quantity: int
    shelter_id: Optional[str] = None

    class Config:
        from_attributes = True
