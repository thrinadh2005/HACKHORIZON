from pydantic import BaseModel
from typing import Optional, List, Dict, Any

class SpatialQueryRequest(BaseModel):
    query_type: str # radius, polygon, nearest
    center_latitude: Optional[float] = None
    center_longitude: Optional[float] = None
    radius_meters: Optional[float] = 1000.0
    polygon_geojson: Optional[str] = None
    categories: Optional[List[str]] = None

class RouteOptimizeRequest(BaseModel):
    origin_lat: float
    origin_lng: float
    destination_lat: float
    destination_lng: float
    route_preference: str = "FloodSafe" # Fastest, Shortest, FloodSafe

class RouteOptimizeResponse(BaseModel):
    route_name: str
    total_distance_km: float
    estimated_travel_time_minutes: int
    flood_risk_score: float
    road_closures_encountered: List[str]
    waypoints: List[List[float]] # [[lat, lng], ...]
