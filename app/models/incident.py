import uuid
from datetime import datetime
from sqlalchemy import Column, String, Integer, Float, Boolean, DateTime, ForeignKey, Text, JSON
from sqlalchemy.orm import relationship
from app.database import Base

def generate_uuid():
    return str(uuid.uuid4())

class Incident(Base):
    __tablename__ = "incidents"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    incident_code = Column(String(50), nullable=False, unique=True) # INC-2048
    title = Column(String(200), nullable=False)
    category = Column(String(100), nullable=False) # Flooding, PowerFailure, TreeFall, BuildingCollapse, MedicalEmergency
    source = Column(String(50), nullable=False) # CitizenSOS, Helpline112, FieldOfficer, IoTSensor, CCTV_AI, Drone
    severity_level = Column(Integer, default=1) # 1 (Informational) to 5 (Critical)
    status = Column(String(30), default="Open") # Open, Validated, Assigned, InProgress, Mitigated, Resolved, Closed
    zone_id = Column(String(36), ForeignKey("zones.id"), nullable=True)
    ward_id = Column(String(36), ForeignKey("wards.id"), nullable=True)
    
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    address = Column(Text, nullable=True)
    description = Column(Text, nullable=True)
    reported_by_name = Column(String(100), nullable=True)
    reported_by_phone = Column(String(20), nullable=True)
    
    ai_severity_score = Column(Float, nullable=True)
    ai_suggested_resources = Column(JSON, nullable=True)
    merged_into_incident_id = Column(String(36), ForeignKey("incidents.id"), nullable=True)
    sla_response_deadline_at = Column(DateTime, nullable=True)
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class PublicAlert(Base):
    __tablename__ = "public_alerts"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    alert_code = Column(String(50), nullable=False, unique=True)
    title = Column(String(200), nullable=False)
    category = Column(String(50), nullable=False) # CycloneWarning, FloodAlert, EvacuationOrder, ShelterInfo
    severity = Column(String(20), nullable=False) # Advisory, Watch, Warning, Emergency, Extreme
    headline = Column(Text, nullable=False)
    detailed_message = Column(Text, nullable=False)
    target_area_geojson = Column(Text, nullable=True)
    channels_json = Column(JSON, nullable=True) # ["CellBroadcast", "SMS", "Push", "WhatsApp"]
    translations_json = Column(JSON, nullable=True) # {te: ..., hi: ..., en: ...}
    status = Column(String(30), default="Draft") # Draft, UnderReview, Approved, Broadcasting, Expired, Cancelled
    created_by_id = Column(String(36), ForeignKey("users.id"))
    approved_by_id = Column(String(36), ForeignKey("users.id"), nullable=True)
    broadcast_at = Column(DateTime, nullable=True)
    expires_at = Column(DateTime, nullable=True)
    delivery_stats = Column(JSON, nullable=True)
    
    created_at = Column(DateTime, default=datetime.utcnow)
