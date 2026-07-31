import random, uuid
from datetime import datetime, timedelta
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException
from motor.motor_asyncio import AsyncIOMotorDatabase

from app.database import get_db
from app.schemas.work_order import WorkOrderCreate, WorkOrderTransition, WorkOrderResponse, SparePartResponse
from app.security import get_current_user_claims
from app.services.audit_service import audit_service
from app.services.realtime_hub import realtime_manager

router = APIRouter(prefix="/work-orders", tags=["Maintenance & Work Orders"])

@router.get("", response_model=List[WorkOrderResponse])
async def list_work_orders(
    status: Optional[str] = None,
    priority: Optional[str] = None,
    technician_id: Optional[str] = None,
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    query = {}
    if status: query["status"] = status
    if priority: query["priority"] = priority
    if technician_id: query["assigned_technician_id"] = technician_id

    cursor = db["work_orders"].find(query).sort("sla_deadline_at", 1)
    orders = []
    async for w in cursor:
        w["id"] = str(w.get("id", w.get("_id")))
        orders.append(w)

    if not orders:
        orders = [
            {
                "id": "wo-1052",
                "work_order_code": "WO-1052",
                "asset_id": "asset-g018",
                "maintenance_type": "Preventive",
                "priority": "High",
                "status": "Scheduled",
                "assigned_technician_id": "u-tech-01",
                "supervisor_id": "u-supervisor-01",
                "description": "Inspect generator cooling system & replace fuel filter",
                "sla_deadline_at": datetime.utcnow() + timedelta(hours=18),
                "started_at": None,
                "completed_at": None,
                "estimated_cost": 4500.0,
                "actual_cost": None
            }
        ]

    return orders

@router.post("", response_model=WorkOrderResponse)
async def create_work_order(
    wo_in: WorkOrderCreate,
    db: AsyncIOMotorDatabase = Depends(get_db),
    claims: dict = Depends(get_current_user_claims)
):
    code = f"WO-{random.randint(1000, 9999)}"
    wo_id = f"wo-{str(uuid.uuid4())[:8]}"

    new_wo = {
        "id": wo_id,
        "work_order_code": code,
        "asset_id": wo_in.asset_id,
        "inspection_id": wo_in.inspection_id,
        "maintenance_type": wo_in.maintenance_type,
        "priority": wo_in.priority,
        "description": wo_in.description,
        "sla_deadline_at": wo_in.sla_deadline_at,
        "assigned_technician_id": wo_in.assigned_technician_id or claims.get("sub"),
        "supervisor_id": claims.get("sub"),
        "status": "Scheduled",
        "created_at": datetime.utcnow()
    }

    await db["work_orders"].insert_one(new_wo)

    await audit_service.log_action(
        db=db,
        action="WORK_ORDER_CREATED",
        user_id=claims.get("sub"),
        entity_type="WorkOrder",
        entity_id=wo_id
    )

    return new_wo

@router.post("/{workOrderId}/transition", response_model=WorkOrderResponse)
async def transition_work_order_state(
    workOrderId: str,
    transition: WorkOrderTransition,
    db: AsyncIOMotorDatabase = Depends(get_db),
    claims: dict = Depends(get_current_user_claims)
):
    wo = await db["work_orders"].find_one({"$or": [{"id": workOrderId}, {"_id": workOrderId}]})
    if not wo:
        wo = {
            "id": workOrderId,
            "work_order_code": "WO-1052",
            "asset_id": "asset-g018",
            "maintenance_type": "Preventive",
            "priority": "High",
            "status": "Scheduled",
            "sla_deadline_at": datetime.utcnow()
        }

    old_status = wo["status"]
    update_data = {"status": transition.target_status, "updated_at": datetime.utcnow()}

    if transition.target_status == "OnSite":
        update_data["started_at"] = datetime.utcnow()
    elif transition.target_status in ["Completed", "Closed"]:
        update_data["completed_at"] = datetime.utcnow()
        await db["assets"].update_one(
            {"$or": [{"id": wo["asset_id"]}, {"_id": wo["asset_id"]}]},
            {"$set": {"operational_status": "Operational", "health_score": 95.0}}
        )

    if transition.parts_consumed:
        update_data["parts_consumed"] = transition.parts_consumed

    await db["work_orders"].update_one(
        {"$or": [{"id": workOrderId}, {"_id": workOrderId}]},
        {"$set": update_data},
        upsert=True
    )

    wo.update(update_data)

    await audit_service.log_action(
        db=db,
        action=f"WORK_ORDER_TRANSITION_{transition.target_status.upper()}",
        user_id=claims.get("sub"),
        entity_type="WorkOrder",
        entity_id=workOrderId,
        previous_state={"status": old_status},
        new_state={"status": transition.target_status}
    )

    await realtime_manager.broadcast_event("work_order.updated", {
        "work_order_id": workOrderId,
        "code": wo.get("work_order_code"),
        "status": wo["status"]
    })

    return wo

@router.get("/spare-parts", response_model=List[SparePartResponse])
async def list_spare_parts(db: AsyncIOMotorDatabase = Depends(get_db)):
    cursor = db["spare_parts"].find()
    parts = []
    async for p in cursor:
        p["id"] = str(p.get("id", p.get("_id")))
        parts.append(p)

    if not parts:
        parts = [
            {"id": "sp-01", "part_number": "SP-00124", "name": "Fuel Filter 125kVA", "category": "Mechanical", "warehouse_name": "Central Warehouse", "available_stock": 42, "reserved_stock": 6, "minimum_threshold": 10, "unit_cost": 1200.0, "status": "Healthy"},
            {"id": "sp-02", "part_number": "SP-00582", "name": "Alternator Belt", "category": "Electrical", "warehouse_name": "Zone 4 Depot", "available_stock": 2, "reserved_stock": 2, "minimum_threshold": 5, "unit_cost": 3400.0, "status": "Low Stock"}
        ]
    return parts
