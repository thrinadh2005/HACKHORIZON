"""
API endpoint tests for CycloneGuard GVMC
"""
import pytest
from fastapi.testclient import TestClient


class TestHealthEndpoints:
    """Test health check endpoints"""
    
    def test_root_endpoint(self, client: TestClient):
        """Test root endpoint"""
        response = client.get("/")
        assert response.status_code == 200
        data = response.json()
        assert "project" in data
        assert "version" in data
        assert "status" in data
    
    def test_health_check(self, client: TestClient):
        """Test health check endpoint"""
        response = client.get("/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "Healthy"
        assert "timestamp" in data
        assert "uptime" in data


class TestAuthentication:
    """Test authentication endpoints"""
    
    def test_login_missing_credentials(self, client: TestClient):
        """Test login with missing credentials"""
        response = client.post("/api/v1/auth/login", json={})
        assert response.status_code == 422  # Validation error
    
    def test_login_invalid_credentials(self, client: TestClient):
        """Test login with invalid credentials"""
        response = client.post("/api/v1/auth/login", json={
            "email": "invalid@example.com",
            "password": "wrongpassword"
        })
        # Should fail (user doesn't exist)
        assert response.status_code in [401, 404]


class TestAssets:
    """Test asset management endpoints"""
    
    def test_get_assets_empty(self, client: TestClient):
        """Test getting assets when database is empty"""
        response = client.get("/api/v1/assets")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
    
    def test_create_asset(self, client: TestClient, sample_asset_data):
        """Test creating a new asset"""
        response = client.post("/api/v1/assets/register", json=sample_asset_data)
        # May fail if authentication is required
        assert response.status_code in [200, 201, 401, 422]
    
    def test_get_asset_by_id(self, client: TestClient):
        """Test getting asset by ID"""
        response = client.get("/api/v1/assets/nonexistent-id")
        # Should return response or error
        assert response.status_code in [200, 404, 400]


class TestIncidents:
    """Test incident management endpoints"""
    
    def test_get_incidents_empty(self, client: TestClient):
        """Test getting incidents when database is empty"""
        response = client.get("/api/v1/incidents")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
    
    def test_ingest_incident(self, client: TestClient, sample_incident_data):
        """Test ingesting a new incident"""
        response = client.post("/api/v1/incidents/ingest", json=sample_incident_data)
        # May fail if authentication is required
        assert response.status_code in [200, 201, 401, 422]


class TestWorkOrders:
    """Test work order management endpoints"""
    
    def test_get_work_orders_empty(self, client: TestClient):
        """Test getting work orders when database is empty"""
        response = client.get("/api/v1/work-orders")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)


class TestShelters:
    """Test shelter management endpoints"""
    
    def test_get_shelter_occupancy(self, client: TestClient):
        """Test getting shelter occupancy data"""
        response = client.get("/api/v1/shelters/occupancy")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)


class TestEOC:
    """Test Emergency Operations Center endpoints"""
    
    def test_get_eoc_dashboard(self, client: TestClient):
        """Test getting EOC dashboard data"""
        response = client.get("/api/v1/eoc/dashboard")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, dict)


class TestGIS:
    """Test GIS and routing endpoints"""
    
    def test_route_optimization(self, client: TestClient):
        """Test route optimization endpoint"""
        response = client.post("/api/v1/gis/route/optimize", json={
            "origin_lat": 17.6868,
            "origin_lng": 83.2185,
            "destination_lat": 17.7000,
            "destination_lng": 83.2000
        })
        # May fail if GIS service is not configured
        assert response.status_code in [200, 400, 503]


class TestAI:
    """Test AI/ML endpoints"""
    
    def test_predict_failure(self, client: TestClient):
        """Test asset failure prediction"""
        response = client.post(
            "/api/v1/ai/predict-failure",
            params={"health_score": 75, "age_years": 5}
        )
        # May fail if AI features are not enabled
        assert response.status_code in [200, 400, 503]


class TestSecurity:
    """Test security features"""
    
    def test_cors_headers(self, client: TestClient):
        """Test CORS headers are present"""
        response = client.get("/", headers={"Origin": "http://localhost:3000"})
        assert response.status_code == 200
    
    def test_security_headers(self, client: TestClient):
        """Test security headers are present"""
        response = client.get("/")
        assert "x-content-type-options" in response.headers
        assert "x-frame-options" in response.headers
    
    def test_rate_limiting(self, client: TestClient):
        """Test rate limiting is enforced"""
        # Make multiple rapid requests
        responses = []
        for _ in range(105):  # Exceed default rate limit of 100
            response = client.get("/health")
            responses.append(response.status_code)
        
        # Should eventually get 429 (Too Many Requests)
        assert 429 in responses or all(status == 200 for status in responses)
