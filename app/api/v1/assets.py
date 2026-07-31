import hashlib, uuid, random
from datetime import datetime
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from motor.motor_asyncio import AsyncIOMotorDatabase

from app.database import get_db
from app.schemas.asset import AssetCreate, AssetResponse, DigitalTwinResponse, AssetCategoryResponse
from app.security import get_current_user_claims
from app.services.ai_engine import ai_engine
from app.services.audit_service import audit_service
from app.services.realtime_hub import realtime_manager

router = APIRouter(prefix="/assets", tags=["Asset Management & Digital Twins"])

@router.get("/categories", response_model=List[AssetCategoryResponse])
async def list_asset_categories(db: AsyncIOMotorDatabase = Depends(get_db)):
    cursor = db["asset_categories"].find()
    cats = []
    async for c in cursor:
        c["id"] = str(c.get("id", c.get("_id")))
        cats.append(c)
    if not cats:
        cats = [
            {"id": "cat-1", "name": "Generator", "code": "GEN", "icon_name": "Zap", "default_inspection_interval_days": 15},
            {"id": "cat-2", "name": "WaterPump", "code": "PUMP", "icon_name": "Droplet", "default_inspection_interval_days": 10},
            {"id": "cat-3", "name": "Shelter", "code": "SHLTR", "icon_name": "Home", "default_inspection_interval_days": 30},
            {"id": "cat-4", "name": "Transformer", "code": "XFRM", "icon_name": "Activity", "default_inspection_interval_days": 30}
        ]
    return cats

@router.get("", response_model=List[AssetResponse])
async def list_assets(
    zone_id: Optional[str] = None,
    ward_id: Optional[str] = None,
    category_id: Optional[str] = None,
    status: Optional[str] = None,
    criticality: Optional[str] = None,
    limit: int = Query(100, le=500),
    db: AsyncIOMotorDatabase = Depends(get_db)
):
    query = {}
    if zone_id: query["zone_id"] = zone_id
    if ward_id: query["ward_id"] = ward_id
    if category_id: query["category_id"] = category_id
    if status: query["operational_status"] = status
    if criticality: query["criticality"] = criticality

    cursor = db["assets"].find(query).limit(limit)
    assets = []
    async for a in cursor:
        a["id"] = str(a.get("id", a.get("_id")))
        assets.append(a)

    if not assets:
        # Mock default assets
        assets = [
            {
                "id": "asset-g018",
                "asset_code": "G-018",
                "name": "Generator 18 (125 kVA)",
                "category_id": "cat-1",
                "zone_id": "z-4",
                "ward_id": "w-18",
                "latitude": 17.7290,
                "longitude": 83.3080,
                "address": "Ward 18 Coastal Substation",
                "operational_status": "Operational",
                "criticality": "Critical",
                "health_score": 94.0,
                "ai_risk_level": "Low",
                "capacity": "125 kVA",
                "fuel_level_percent": 82.0,
                "manufacturer": "Cummins",
                "model": "C125D5",
                "serial_number": "SN-99428-A",
                "qr_code_hash": "qr-g018-hash",
                "rfid_tag_id": "rfid-g018-tag",
                "last_inspection_at": datetime.utcnow(),
                "next_maintenance_at": datetime.utcnow()
            },
            {
                "id": "asset-p042",
                "asset_code": "P-042",
                "name": "Pump Station PS-07",
                "category_id": "cat-2",
                "zone_id": "z-4",
                "ward_id": "w-12",
                "latitude": 17.7150,
                "longitude": 83.2950,
                "address": "Ward 12 Drainage Canal",
                "operational_status": "Maintenance",
                "criticality": "High",
                "health_score": 68.0,
                "ai_risk_level": "High",
                "capacity": "5200 L/min",
                "fuel_level_percent": 61.0,
                "manufacturer": "Kirloskar",
                "model": "KPD-500",
                "serial_number": "SN-48102-B",
                "qr_code_hash": "qr-p042-hash",
                "rfid_tag_id": "rfid-p042-tag",
                "last_inspection_at": datetime.utcnow(),
                "next_maintenance_at": datetime.utcnow()
            }
        ]

    return assets

@router.get("/{assetId}", response_model=AssetResponse)
async def get_asset_by_id(assetId: str, db: AsyncIOMotorDatabase = Depends(get_db)):
    asset = await db["assets"].find_one({"$or": [{"id": assetId}, {"_id": assetId}, {"asset_code": assetId}]})
    if not asset:
        # Return fallback mock asset
        return {
            "id": assetId,
            "asset_code": "G-018",
            "name": "Generator 18 (125 kVA)",
            "category_id": "cat-1",
            "zone_id": "z-4",
            "ward_id": "w-18",
            "latitude": 17.7290,
            "longitude": 83.3080,
            "address": "Ward 18 Coastal Substation",
            "operational_status": "Operational",
            "criticality": "Critical",
            "health_score": 94.0,
            "ai_risk_level": "Low",
            "capacity": "125 kVA",
            "fuel_level_percent": 82.0,
            "manufacturer": "Cummins",
            "model": "C125D5",
            "serial_number": "SN-99428-A",
            "qr_code_hash": "qr-g018-hash",
            "rfid_tag_id": "rfid-g018-tag",
            "last_inspection_at": datetime.utcnow(),
            "next_maintenance_at": datetime.utcnow()
        }
    asset["id"] = str(asset.get("id", asset.get("_id")))
    return asset

@router.get("/{assetId}/digital-twin", response_model=DigitalTwinResponse)
async def get_digital_twin_profile(assetId: str, db: AsyncIOMotorDatabase = Depends(get_db)):
    asset = await get_asset_by_id(assetId, db)

    ai_pred = ai_engine.predict_asset_failure(
        health_score=asset["health_score"],
        age_years=3.5,
        fuel_level=asset.get("fuel_level_percent") or 82.0
    )

    return {
        "asset": asset,
        "maintenance_timeline": [
            {"id": "wo-1", "code": "WO-1052", "type": "Preventive", "status": "Completed", "created_at": datetime.utcnow()}
        ],
        "recent_inspections": [
            {"id": "insp-1", "code": "INSP-402", "status": "Submitted", "score": 96.0, "submitted_at": datetime.utcnow()}
        ],
        "telemetry_history": [
            {"parameter": "Fuel Level", "value": "82%", "status": "Normal"},
            {"parameter": "Engine Temp", "value": "71°C", "status": "Normal"}
        ],
        "dependency_graph": {
            "upstream": ["Main Substation Alpha"],
            "downstream": ["Shelter S-12", "Medical Camp 4"]
        },
        "rul_forecast_years": ai_pred["remaining_useful_life_years"]
    }

@router.post("/register", response_model=AssetResponse)
async def register_new_asset(
    asset_in: AssetCreate,
    db: AsyncIOMotorDatabase = Depends(get_db),
    claims: dict = Depends(get_current_user_claims)
):
    existing = await db["assets"].find_one({"asset_code": asset_in.asset_code})
    if existing:
        raise HTTPException(status_code=400, detail=f"Asset with code '{asset_in.asset_code}' already exists")

    asset_id = f"asset-{str(uuid.uuid4())[:8]}"
    qr_hash = hashlib.sha256(f"{asset_in.asset_code}-{asset_in.name}".encode()).hexdigest()[:16]

    new_asset = {
        "id": asset_id,
        "asset_code": asset_in.asset_code,
        "name": asset_in.name,
        "category_id": asset_in.category_id,
        "zone_id": asset_in.zone_id,
        "ward_id": asset_in.ward_id,
        "department_id": asset_in.department_id,
        "assigned_officer_id": asset_in.assigned_officer_id,
        "latitude": asset_in.latitude,
        "longitude": asset_in.longitude,
        "address": asset_in.address,
        "operational_status": "Operational",
        "criticality": asset_in.criticality,
        "health_score": 100.0,
        "ai_risk_level": "Low",
        "capacity": asset_in.capacity,
        "fuel_level_percent": 100.0,
        "manufacturer": asset_in.manufacturer,
        "model": asset_in.model,
        "serial_number": asset_in.serial_number,
        "qr_code_hash": qr_hash,
        "rfid_tag_id": f"rfid-{asset_in.asset_code}",
        "attributes_json": asset_in.attributes_json,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }

    await db["assets"].insert_one(new_asset)

    await audit_service.log_action(
        db=db,
        action="ASSET_REGISTERED",
        user_id=claims.get("sub"),
        user_email=claims.get("email"),
        role=claims.get("role"),
        entity_type="Asset",
        entity_id=asset_id,
        new_state={"asset_code": new_asset["asset_code"], "name": new_asset["name"]}
    )

    await realtime_manager.broadcast_event("asset.registered", {
        "asset_id": asset_id,
        "asset_code": new_asset["asset_code"],
        "name": new_asset["name"],
        "status": new_asset["operational_status"]
    })

    return new_asset

@router.post("/{assetId}/qr-bind")
async def bind_qr_code(
    assetId: str,
    qr_hash: str,
    db: AsyncIOMotorDatabase = Depends(get_db),
    claims: dict = Depends(get_current_user_claims)
):
    await db["assets"].update_one(
        {"$or": [{"id": assetId}, {"_id": assetId}]},
        {"$set": {"qr_code_hash": qr_hash}}
    )
    return {"message": "QR code bound successfully", "asset_id": assetId, "qr_code_hash": qr_hash}
