import uuid
from datetime import datetime
from sqlalchemy import Column, String, Integer, Float, Boolean, DateTime, ForeignKey, Text, JSON
from app.database import Base

def generate_uuid():
    return str(uuid.uuid4())

class ResponseTeam(Base):
    __tablename__ = "response_teams"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    team_code = Column(String(50), nullable=False, unique=True) # RT-14, RT-09
    name = Column(String(100), nullable=False)
    agency = Column(String(100), nullable=False) # NDRF, Fire, Police, Municipal, Health
    leader_id = Column(String(36), ForeignKey("users.id"), nullable=True)
    status = Column(String(30), default="Available") # Available, Assigned, EnRoute, OnSite, Busy, Maintenance
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)
    last_gps_updated_at = Column(DateTime, nullable=True)
    fatigue_status = Column(String(20), default="Ready") # Ready, Monitor, ReliefRecommended, RotationRequired
    crew_count = Column(Integer, default=1)
    vehicle_info = Column(String(100), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class Dispatch(Base):
    __tablename__ = "dispatches"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    dispatch_code = Column(String(50), nullable=False, unique=True)
    incident_id = Column(String(36), ForeignKey("incidents.id"))
    team_id = Column(String(36), ForeignKey("response_teams.id"))
    assigned_by_id = Column(String(36), ForeignKey("users.id"))
    status = Column(String(30), default="Assigned") # Assigned, Accepted, EnRoute, Arrived, Active, Completed
    dispatched_at = Column(DateTime, default=datetime.utcnow)
    eta_minutes = Column(Integer, nullable=True)
    completed_at = Column(DateTime, nullable=True)

class TeamTelemetry(Base):
    __tablename__ = "team_telemetry"

    id = Column(String(36), primary_key=True, default=generate_uuid)
    team_id = Column(String(36), ForeignKey("response_teams.id"))
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    speed_kmh = Column(Float, default=0.0)
    battery_level = Column(Integer, default=100)
    sos_triggered = Column(Boolean, default=False)
    recorded_at = Column(DateTime, default=datetime.utcnow)
