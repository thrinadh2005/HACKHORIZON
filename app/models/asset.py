import uuid
from datetime import datetime
from sqlalchemy import Column, String, Integer, Float, Boolean, DateTime, ForeignKey, Text, JSON
from sqlalchemy.orm import relationship
from app.database import Base

def generate_uuid():
    return str(uuid.uuid4())

class AssetCategory(Base):
    __tablename__ = "asset_categories"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    name = Column(String(100), nullable=False, unique=True) # Generator, WaterPump, Shelter, Transformer, CCTV
    code = Column(String(30), nullable=False, unique=True)
    icon_name = Column(String(50))
    default_inspection_interval_days = Column(Integer, default=30)

    assets = relationship("Asset", back_populates="category")

class Asset(Base):
    __tablename__ = "assets"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    asset_code = Column(String(50), nullable=False, unique=True) # G-018, PS-07, etc.
    name = Column(String(150), nullable=False)
    category_id = Column(String(36), ForeignKey("asset_categories.id"))
    zone_id = Column(String(36), ForeignKey("zones.id"), nullable=True)
    ward_id = Column(String(36), ForeignKey("wards.id"), nullable=True)
    department_id = Column(String(36), ForeignKey("departments.id"), nullable=True)
    assigned_officer_id = Column(String(36), ForeignKey("users.id"), nullable=True)
    
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    address = Column(Text, nullable=True)
    
    operational_status = Column(String(30), default="Operational") # Operational, Maintenance, Failed, Offline
    criticality = Column(String(20), default="Medium") # Critical, High, Medium, Low
    health_score = Column(Float, default=100.0)
    ai_risk_level = Column(String(20), default="Low")
    capacity = Column(String(100), nullable=True)
    fuel_level_percent = Column(Float, nullable=True)
    manufacturer = Column(String(100), nullable=True)
    model = Column(String(100), nullable=True)
    serial_number = Column(String(100), nullable=True)
    qr_code_hash = Column(String(128), unique=True, nullable=True)
    rfid_tag_id = Column(String(128), unique=True, nullable=True)
    installation_date = Column(DateTime, nullable=True)
    expected_life_years = Column(Integer, default=15)
    last_inspection_at = Column(DateTime, nullable=True)
    next_maintenance_at = Column(DateTime, nullable=True)
    attributes_json = Column(JSON, nullable=True) # Dynamic Key-Value attributes
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    category = relationship("AssetCategory", back_populates="assets")
    inspections = relationship("Inspection", back_populates="asset")

class InspectionTemplate(Base):
    __tablename__ = "inspection_templates"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    title = Column(String(150), nullable=False)
    category_id = Column(String(36), ForeignKey("asset_categories.id"))
    version = Column(Integer, default=1)
    checklist_structure = Column(JSON, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class Inspection(Base):
    __tablename__ = "inspections"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    inspection_code = Column(String(50), nullable=False, unique=True)
    asset_id = Column(String(36), ForeignKey("assets.id"))
    template_id = Column(String(36), ForeignKey("inspection_templates.id"), nullable=True)
    inspector_id = Column(String(36), ForeignKey("users.id"))
    status = Column(String(30), default="Scheduled") # Scheduled, Assigned, InProgress, Submitted, Approved, Rejected
    priority = Column(String(20), default="Medium")
    due_at = Column(DateTime, nullable=False)
    submitted_at = Column(DateTime, nullable=True)
    
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)
    gps_verified = Column(Boolean, default=False)
    compliance_score = Column(Float, nullable=True)
    checklist_responses = Column(JSON, nullable=True)
    observations = Column(Text, nullable=True)
    voice_note_url = Column(Text, nullable=True)
    digital_signature_url = Column(Text, nullable=True)
    offline_client_tx_id = Column(String(36), nullable=True)
    
    created_at = Column(DateTime, default=datetime.utcnow)

    asset = relationship("Asset", back_populates="inspections")
    evidence = relationship("InspectionEvidence", back_populates="inspection")

class InspectionEvidence(Base):
    __tablename__ = "inspection_evidence"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    inspection_id = Column(String(36), ForeignKey("inspections.id"))
    media_type = Column(String(20), nullable=False) # Photo, Video, Document
    file_url = Column(Text, nullable=False)
    file_size_bytes = Column(Integer, nullable=True)
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)
    ai_detected_defects = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    inspection = relationship("Inspection", back_populates="evidence")
