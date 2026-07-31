import uuid
from datetime import datetime
from sqlalchemy import Column, String, Integer, Float, Boolean, DateTime, ForeignKey, Text, JSON
from app.database import Base

def generate_uuid():
    return str(uuid.uuid4())

class EmergencyShelter(Base):
    __tablename__ = "emergency_shelters"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    shelter_code = Column(String(50), nullable=False, unique=True) # S-12, S-18
    name = Column(String(150), nullable=False)
    zone_id = Column(String(36), ForeignKey("zones.id"), nullable=True)
    ward_id = Column(String(36), ForeignKey("wards.id"), nullable=True)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    address = Column(Text, nullable=True)
    total_capacity = Column(Integer, nullable=False)
    current_occupancy = Column(Integer, default=0)
    status = Column(String(30), default="Standby") # Standby, Open, Full, Closed
    has_generator = Column(Boolean, default=False)
    has_water_supply = Column(Boolean, default=False)
    has_medical_team = Column(Boolean, default=False)
    manager_id = Column(String(36), ForeignKey("users.id"), nullable=True)
    facilities_status = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class ShelterCheckin(Base):
    __tablename__ = "shelter_checkins"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    shelter_id = Column(String(36), ForeignKey("emergency_shelters.id"))
    family_id = Column(String(50), nullable=True)
    citizen_name = Column(String(150), nullable=False)
    age = Column(Integer, nullable=True)
    gender = Column(String(15), nullable=True)
    phone = Column(String(20), nullable=True)
    aadhaar_hash = Column(String(128), nullable=True)
    vulnerable_category = Column(String(50), nullable=True) # Elderly, PwD, Pregnant, Infant, MedicalNeeds
    checkin_at = Column(DateTime, default=datetime.utcnow)
    checkout_at = Column(DateTime, nullable=True)

class ReliefPackage(Base):
    __tablename__ = "relief_packages"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    sku = Column(String(50), nullable=False, unique=True)
    category = Column(String(50), nullable=False) # Food Kit, Water Kit, Hygiene Kit, Medical Kit, Baby Care Kit
    contents_summary = Column(Text, nullable=False)
    total_quantity = Column(Integer, default=0)
    available_quantity = Column(Integer, default=0)
    shelter_id = Column(String(36), ForeignKey("emergency_shelters.id"), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
