from typing import Dict, Any, Optional
from fastapi import APIRouter, Depends
from app.services.ai_engine import ai_engine
from app.security import get_current_user_claims

router = APIRouter(prefix="/ai", tags=["AI & Predictive Intelligence"])

@router.post("/predict-failure")
async def predict_asset_failure(
    health_score: float = 85.0,
    age_years: float = 3.5,
    fuel_level: float = 82.0
):
    return ai_engine.predict_asset_failure(health_score, age_years, fuel_level)

@router.post("/defect-detection")
async def detect_defects_in_photo(image_url: str):
    return ai_engine.detect_defects_from_image(image_url)

@router.post("/shelter-forecast")
async def forecast_shelter_overflow(capacity: int = 1500, current_occupancy: int = 1230):
    return ai_engine.forecast_shelter_overflow(capacity, current_occupancy)

@router.post("/message-review")
async def review_and_translate_alert(detailed_message: str):
    return ai_engine.analyze_alert_message(detailed_message)
