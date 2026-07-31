"""
Pytest configuration and fixtures for CycloneGuard GVMC tests
"""
import pytest
import asyncio
from fastapi.testclient import TestClient
from app.main import app
from app.database import db_instance, connect_to_mongo, close_mongo_connection
from app.config import settings


@pytest.fixture(scope="session")
def event_loop():
    """Create event loop for async tests"""
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()


@pytest.fixture(scope="session")
async def database():
    """Setup and teardown database connection"""
    # Use test database
    test_db_name = settings.MONGODB_DB_NAME + "_test"
    settings.MONGODB_DB_NAME = test_db_name
    
    await connect_to_mongo()
    
    yield db_instance.db
    
    # Cleanup
    if db_instance.db:
        await db_instance.client.drop_database(test_db_name)
    await close_mongo_connection()


@pytest.fixture
def client():
    """Create test client with lifespan context"""
    with TestClient(app) as c:
        yield c


@pytest.fixture
def auth_headers(client):
    """Create authenticated headers for testing"""
    # Test user credentials
    login_data = {
        "email": "test@gvmc.gov.in",
        "password": "testpassword123"
    }
    
    # Create test user first (in a real implementation)
    # response = client.post("/api/v1/auth/register", json=login_data)
    
    # Login
    response = client.post("/api/v1/auth/login", json=login_data)
    
    if response.status_code == 200:
        token = response.json().get("access_token")
        return {"Authorization": f"Bearer {token}"}
    
    # Return empty headers if login fails
    return {}


@pytest.fixture
def sample_asset_data():
    """Sample asset data for testing"""
    return {
        "name": "Test Generator",
        "category": "GEN",
        "code": "TEST-GEN-001",
        "location": {
            "latitude": 17.6868,
            "longitude": 83.2185,
            "address": "Test Address, Visakhapatnam"
        },
        "status": "active",
        "specifications": {
            "capacity": "100kVA",
            "fuel_type": "diesel",
            "manufacturer": "Test Manufacturer"
        }
    }


@pytest.fixture
def sample_incident_data():
    """Sample incident data for testing"""
    return {
        "title": "Test Incident",
        "description": "Test incident description",
        "category": "infrastructure",
        "severity": "L3",
        "location": {
            "latitude": 17.6868,
            "longitude": 83.2185
        },
        "reported_by": "test@gvmc.gov.in"
    }
