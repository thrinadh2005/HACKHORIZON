import uuid
from datetime import datetime
from sqlalchemy import Column, String, Integer, Float, Boolean, DateTime, ForeignKey, Text, JSON
from app.database import Base

def generate_uuid():
    return str(uuid.uuid4())

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    user_id = Column(String(36), nullable=True)
    user_email = Column(String(100), nullable=True)
    role = Column(String(50), nullable=True)
    action = Column(String(100), nullable=False) # e.g., ASSET_CREATED, EMERGENCY_BROADCAST, INCIDENT_ESCALATED
    entity_type = Column(String(50), nullable=True)
    entity_id = Column(String(36), nullable=True)
    previous_state = Column(JSON, nullable=True)
    new_state = Column(JSON, nullable=True)
    ip_address = Column(String(45), nullable=True)
    correlation_id = Column(String(64), nullable=True)
    timestamp = Column(DateTime, default=datetime.utcnow)

class DecisionLog(Base):
    __tablename__ = "decision_logs"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    decision_maker_id = Column(String(36), ForeignKey("users.id"))
    decision_title = Column(String(200), nullable=False)
    justification = Column(Text, nullable=False)
    operational_period = Column(String(50), nullable=True)
    supporting_data = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class GrievanceCase(Base):
    __tablename__ = "grievance_cases"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    case_code = Column(String(50), nullable=False, unique=True) # RC-10428
    citizen_name = Column(String(150), nullable=False)
    citizen_phone = Column(String(20), nullable=False)
    category = Column(String(100), nullable=False) # House Damage Compensation, Utility Restoration, Fallen Tree, Debris
    priority = Column(String(20), default="Medium")
    status = Column(String(30), default="Verification") # Verification, Assigned, InProgress, Approved, Closed
    assigned_department_id = Column(String(36), ForeignKey("departments.id"), nullable=True)
    zone_id = Column(String(36), ForeignKey("zones.id"), nullable=True)
    ward_id = Column(String(36), ForeignKey("wards.id"), nullable=True)
    description = Column(Text, nullable=False)
    sla_deadline_at = Column(DateTime, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
