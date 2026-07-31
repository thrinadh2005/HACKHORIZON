from app.api.v1.auth import router as auth_router
from app.api.v1.admin import router as admin_router
from app.api.v1.assets import router as assets_router
from app.api.v1.inspections import router as inspections_router
from app.api.v1.work_orders import router as work_orders_router
from app.api.v1.incidents import router as incidents_router
from app.api.v1.eoc import router as eoc_router
from app.api.v1.dispatch import router as dispatch_router
from app.api.v1.alerts import router as alerts_router
from app.api.v1.shelters import router as shelters_router
from app.api.v1.gis import router as gis_router
from app.api.v1.ai import router as ai_router
from app.api.v1.websocket import router as ws_router

__all__ = [
    "auth_router",
    "admin_router",
    
    "assets_router",
    "inspections_router",
    "work_orders_router",
    "incidents_router",
    "eoc_router",
    "dispatch_router",
    "alerts_router",
    "shelters_router",
    "gis_router",
    "ai_router",
    "ws_router"
]
