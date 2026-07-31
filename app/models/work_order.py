import uuid
from datetime import datetime
from sqlalchemy import Column, String, Integer, Float, Boolean, DateTime, ForeignKey, Text, JSON
from sqlalchemy.orm import relationship
from app.database import Base

def generate_uuid():
    return str(uuid.uuid4())

class WorkOrder(Base):
    __tablename__ = "work_orders"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    work_order_code = Column(String(50), nullable=False, unique=True) # WO-1052
    asset_id = Column(String(36), ForeignKey("assets.id"))
    inspection_id = Column(String(36), ForeignKey("inspections.id"), nullable=True)
    maintenance_type = Column(String(50), default="Corrective") # Preventive, Corrective, Emergency, Predictive
    priority = Column(String(20), default="Medium") # Critical, High, Medium, Low
    status = Column(String(30), default="Draft") # Draft, Scheduled, Assigned, Accepted, Traveling, OnSite, Executing, QualityCheck, Completed, Closed
    assigned_technician_id = Column(String(36), ForeignKey("users.id"), nullable=True)
    supervisor_id = Column(String(36), ForeignKey("users.id"), nullable=True)
    description = Column(Text, nullable=True)
    sla_deadline_at = Column(DateTime, nullable=False)
    started_at = Column(DateTime, nullable=True)
    completed_at = Column(DateTime, nullable=True)
    estimated_cost = Column(Float, nullable=True)
    actual_cost = Column(Float, nullable=True)
    parts_consumed = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class SparePart(Base):
    __tablename__ = "spare_parts"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    part_number = Column(String(50), nullable=False, unique=True)
    name = Column(String(100), nullable=False)
    category = Column(String(50), nullable=False) # Mechanical, Electrical, Civil
    warehouse_name = Column(String(100), nullable=False, default="Central Warehouse")
    available_stock = Column(Integer, default=0)
    reserved_stock = Column(Integer, default=0)
    minimum_threshold = Column(Integer, default=5)
    unit_cost = Column(Float, default=0.0)
    status = Column(String(20), default="Healthy") # Healthy, Low Stock, Out of Stock
    created_at = Column(DateTime, default=datetime.utcnow)

class InventoryReservation(Base):
    __tablename__ = "inventory_reservations"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    work_order_id = Column(String(36), ForeignKey("work_orders.id"))
    spare_part_id = Column(String(36), ForeignKey("spare_parts.id"))
    reserved_by_id = Column(String(36), ForeignKey("users.id"))
    quantity = Column(Integer, nullable=False)
    status = Column(String(20), default="Active") # Active, Issued, Released, Expired
    expires_at = Column(DateTime, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
