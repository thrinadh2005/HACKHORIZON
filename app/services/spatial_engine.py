import math
from typing import List, Dict, Any

class SpatialEngine:
    @staticmethod
    def calculate_haversine_distance(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
        """
        Calculate the great circle distance in meters between two points
        on the earth (specified in decimal degrees)
        """
        R = 6371000.0 # radius of Earth in meters
        dlat = math.radians(lat2 - lat1)
        dlon = math.radians(lon2 - lon1)
        a = (math.sin(dlat / 2) ** 2 +
             math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) *
             math.sin(dlon / 2) ** 2)
        c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
        return R * c

    @staticmethod
    def calculate_flood_safe_route(
        origin_lat: float, origin_lng: float,
        dest_lat: float, dest_lng: float,
        route_preference: str = "FloodSafe"
    ) -> Dict[str, Any]:
        """
        Simulates dynamic route optimization factoring in flood depth and road closures.
        Returns optimized waypoints, distance, travel time, and risk score.
        """
        base_distance_m = SpatialEngine.calculate_haversine_distance(
            origin_lat, origin_lng, dest_lat, dest_lng
        )
        distance_km = round(base_distance_m / 1000.0, 2)
        
        # Calculate interpolated waypoints
        num_waypoints = 5
        waypoints = []
        for i in range(num_waypoints + 1):
            fraction = i / num_waypoints
            lat = round(origin_lat + (dest_lat - origin_lat) * fraction, 6)
            lng = round(origin_lng + (dest_lng - origin_lng) * fraction, 6)
            waypoints.append([lat, lng])
            
        estimated_speed_kmh = 30.0 if route_preference == "FloodSafe" else 40.0
        travel_time_min = max(2, int((distance_km / estimated_speed_kmh) * 60))
        
        return {
            "route_name": f"{route_preference} Dynamic Corridor",
            "total_distance_km": distance_km if distance_km > 0 else 0.5,
            "estimated_travel_time_minutes": travel_time_min,
            "flood_risk_score": 12.5 if route_preference == "FloodSafe" else 45.0,
            "road_closures_encountered": ["Beach Road Underpass Closed"] if route_preference != "FloodSafe" else [],
            "waypoints": waypoints
        }

    @staticmethod
    def check_geofence_breach(lat: float, lng: float, geofence_center_lat: float, geofence_center_lng: float, max_radius_m: float = 5000.0) -> bool:
        dist = SpatialEngine.calculate_haversine_distance(lat, lng, geofence_center_lat, geofence_center_lng)
        return dist > max_radius_m

spatial_engine = SpatialEngine()
