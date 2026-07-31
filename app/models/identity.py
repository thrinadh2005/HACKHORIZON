import uuid
from datetime import datetime
from sqlalchemy import Column, String, Integer, Float, Boolean, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from app.database import Base

def generate_uuid():
    return str(uuid.uuid4())

class Department(Base):
    __tablename__ = "departments"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    name = Column(String(100), nullable=False, unique=True)
    code = Column(String(20), nullable=False, unique=True)
    contact_email = Column(String(100))
    contact_phone = Column(String(20))
    created_at = Column(DateTime, default=datetime.utcnow)

    users = relationship("User", back_populates="department")

class Zone(Base):
    __tablename__ = "zones"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    name = Column(String(50), nullable=False, unique=True)
    zone_number = Column(Integer, nullable=False, unique=True)
    boundary_geojson = Column(Text, nullable=True) # GeoJSON representation for boundary
    created_at = Column(DateTime, default=datetime.utcnow)

    wards = relationship("Ward", back_populates="zone")

class Ward(Base):
    __tablename__ = "wards"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    zone_id = Column(String(36), ForeignKey("zones.id"))
    ward_number = Column(Integer, nullable=False, unique=True)
    name = Column(String(100), nullable=False)
    population = Column(Integer, default=0)
    preparedness_score = Column(Float, default=0.0)
    boundary_geojson = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    zone = relationship("Zone", back_populates="wards")

class User(Base):
    __tablename__ = "users"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    entra_id = Column(String(128), unique=True, nullable=True)
    full_name = Column(String(150), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    phone = Column(String(20))
    hashed_password = Column(String(255), nullable=False)
    department_id = Column(String(36), ForeignKey("departments.id"), nullable=True)
    role = Column(String(50), nullable=False, default="FieldOfficer") 
    # Roles: Commissioner, DisasterHead, ZoneSupervisor, FieldOfficer, MaintenanceTechnician, Admin, EOC_Operator
    assigned_zone_id = Column(String(36), ForeignKey("zones.id"), nullable=True)
    assigned_ward_id = Column(String(36), ForeignKey("wards.id"), nullable=True)
    is_active = Column(Boolean, default=True)
    last_login_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    department = relationship("Department", back_populates="users")
