from pydantic import BaseModel
from typing import Optional, Dict, Any, List
from datetime import datetime

class WorkOrderCreate(BaseModel):
    asset_id: str
    inspection_id: Optional[str] = None
    maintenance_type: str = "Corrective" # Preventive, Corrective, Emergency, Predictive
    priority: str = "Medium"
    description: Optional[str] = None
    sla_deadline_at: datetime
    assigned_technician_id: Optional[str] = None

class WorkOrderTransition(BaseModel):
    target_status: str # Accepted, Traveling, OnSite, Executing, QualityCheck, Completed, Closed
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    parts_consumed: Optional[List[Dict[str, Any]]] = None
    notes: Optional[str] = None

class WorkOrderResponse(BaseModel):
    id: str
    work_order_code: str
    asset_id: str
    maintenance_type: str
    priority: str
    status: str
    assigned_technician_id: Optional[str] = None
    supervisor_id: Optional[str] = None
    description: Optional[str] = None
    sla_deadline_at: datetime
    started_at: Optional[datetime] = None
    completed_at: Optional[datetime] = None
    estimated_cost: Optional[float] = None
    actual_cost: Optional[float] = None
    parts_consumed: Optional[List[Dict[str, Any]]] = None

    class Config:
        from_attributes = True

class SparePartResponse(BaseModel):
    id: str
    part_number: str
    name: str
    category: str
    warehouse_name: str
    available_stock: int
    reserved_stock: int
    minimum_threshold: int
    unit_cost: float
    status: str

    class Config:
        from_attributes = True
