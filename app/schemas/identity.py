from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in: int
    user_info: dict

class DepartmentResponse(BaseModel):
    id: str
    name: str
    code: str
    contact_email: Optional[str] = None
    contact_phone: Optional[str] = None

    class Config:
        from_attributes = True

class ZoneResponse(BaseModel):
    id: str
    name: str
    zone_number: int
    boundary_geojson: Optional[str] = None

    class Config:
        from_attributes = True

class WardResponse(BaseModel):
    id: str
    zone_id: Optional[str] = None
    ward_number: int
    name: str
    population: int
    preparedness_score: float

    class Config:
        from_attributes = True

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    full_name: str
    phone: Optional[str] = None
    role: str = "FieldOfficer"
    department_id: Optional[str] = None
    assigned_zone_id: Optional[str] = None
    assigned_ward_id: Optional[str] = None

class UserLogin(BaseModel):
    email: str
    password: str

class UserResponse(BaseModel):
    id: str
    full_name: str
    email: str
    phone: Optional[str] = None
    role: str
    department_id: Optional[str] = None
    assigned_zone_id: Optional[str] = None
    assigned_ward_id: Optional[str] = None
    is_active: bool
    last_login_at: Optional[datetime] = None

    class Config:
        from_attributes = True
