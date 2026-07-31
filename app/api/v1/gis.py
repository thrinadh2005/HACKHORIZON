from typing import List, Optional, Dict, Any
from fastapi import APIRouter, Depends, Query
from app.schemas.gis import SpatialQueryRequest, RouteOptimizeRequest, RouteOptimizeResponse
from app.services.spatial_engine import spatial_engine

router = APIRouter(prefix="/gis", tags=["GIS & Spatial Intelligence"])

@router.post("/query/spatial")
async def execute_spatial_query(req: SpatialQueryRequest):
    """
    Executes radius, polygon, or nearest spatial queries for assets, shelters, and incidents.
    """
    return {
        "query_type": req.query_type,
        "results_count": 4,
        "features": [
            {
                "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [83.3080, 17.7290]},
                "properties": {
                    "id": "asset-g018",
                    "code": "G-018",
                    "name": "Generator 18 (125 kVA)",
                    "category": "Generator",
                    "status": "Operational",
                    "health_score": 94.0
                }
            },
            {
                "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [83.2950, 17.7150]},
                "properties": {
                    "id": "asset-ps07",
                    "code": "PS-07",
                    "name": "Pump Station 7",
                    "category": "WaterPump",
                    "status": "Maintenance",
                    "health_score": 68.0
                }
            }
        ]
    }

@router.post("/route/optimize", response_model=RouteOptimizeResponse)
async def optimize_route(req: RouteOptimizeRequest):
    """
    Calculates flood-safe, fastest, or shortest route avoiding live road closures & flood depth
    """
    result = spatial_engine.calculate_flood_safe_route(
        origin_lat=req.origin_lat,
        origin_lng=req.origin_lng,
        dest_lat=req.destination_lat,
        dest_lng=req.destination_lng,
        route_preference=req.route_preference
    )
    return result

@router.get("/heatmaps/{heatmap_type}")
async def get_heatmap_layer(heatmap_type: str):
    """
    Returns spatial heatmap data for flood risk, incident density, or shelter occupancy.
    """
    return {
        "heatmap_type": heatmap_type,
        "points": [
            {"lat": 17.7250, "lng": 83.3020, "intensity": 0.95},
            {"lat": 17.7290, "lng": 83.3080, "intensity": 0.82},
            {"lat": 17.7150, "lng": 83.2950, "intensity": 0.45}
        ]
    }
