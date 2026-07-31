import random
from datetime import datetime
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException
from app.schemas.shelter import ShelterResponse, ShelterCheckinCreate, ShelterCheckinResponse, ReliefPackageResponse
from app.security import get_current_user_claims
from app.services.ai_engine import ai_engine
from app.services.realtime_hub import realtime_manager

router = APIRouter(prefix="/shelters", tags=["Evacuation & Shelter Operations"])

@router.get("/occupancy", response_model=List[ShelterResponse])
async def list_shelters_occupancy():
    return [
        {
            "id": "sh-012",
            "shelter_code": "S-12",
            "name": "Rajam High School Emergency Shelter",
            "zone_id": "z-1",
            "ward_id": "w-18",
            "latitude": 17.7290,
            "longitude": 83.3080,
            "address": "Ward 18 Main Road, Visakhapatnam",
            "total_capacity": 1500,
            "current_occupancy": 1230,
            "status": "Open",
            "has_generator": True,
            "has_water_supply": True,
            "has_medical_team": True,
            "facilities_status": {
                "drinking_water": "Available",
                "food_kitchen": "Operational",
                "medical_room": "Active",
                "isolation_ward": "Available"
            }
        },
        {
            "id": "sh-018",
            "shelter_code": "S-18",
            "name": "GVMC Community Hall Zone 4",
            "zone_id": "z-4",
            "ward_id": "w-12",
            "latitude": 17.7150,
            "longitude": 83.2950,
            "address": "Zone 4 Hub, Visakhapatnam",
            "total_capacity": 900,
            "current_occupancy": 900,
            "status": "Full",
            "has_generator": True,
            "has_water_supply": True,
            "has_medical_team": False,
            "facilities_status": {
                "drinking_water": "Limited",
                "food_kitchen": "Operational"
            }
        }
    ]

@router.post("/check-in", response_model=ShelterCheckinResponse)
async def checkin_citizen_to_shelter(
    payload: ShelterCheckinCreate,
    claims: dict = Depends(get_current_user_claims)
):
    checkin_id = f"chk-{random.randint(1000, 9999)}"
    family_code = payload.family_id or f"FAM-{random.randint(10000, 99999)}"

    response = {
        "id": checkin_id,
        "shelter_id": payload.shelter_id,
        "family_id": family_code,
        "citizen_name": payload.citizen_name,
        "age": payload.age,
        "gender": payload.gender,
        "phone": payload.phone,
        "vulnerable_category": payload.vulnerable_category,
        "checkin_at": datetime.utcnow(),
        "checkout_at": None
    }

    await realtime_manager.broadcast_event("shelter.occupancy_changed", {
        "shelter_id": payload.shelter_id,
        "family_id": family_code,
        "citizen_name": payload.citizen_name,
        "vulnerable_category": payload.vulnerable_category
    })

    return response

@router.get("/relief-packages", response_model=List[ReliefPackageResponse])
async def list_relief_packages():
    return [
        {
            "id": "pkg-01",
            "sku": "REL-FOOD-FAMILY",
            "category": "Food Kit",
            "contents_summary": "Rice 10kg, Wheat 5kg, Dal 2kg, Edible Oil 1L, Salt, Spices",
            "total_quantity": 5000,
            "available_quantity": 3420,
            "shelter_id": "sh-012"
        },
        {
            "id": "pkg-02",
            "sku": "REL-WATER-20L",
            "category": "Water Kit",
            "contents_summary": "20L Purified Mineral Water Canister + Water Purification Tablets",
            "total_quantity": 8000,
            "available_quantity": 4120,
            "shelter_id": "sh-012"
        }
    ]
