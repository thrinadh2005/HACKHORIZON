import time
import json
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.config import settings
from app.database import connect_to_mongo, close_mongo_connection
from app.middleware import (
    SecurityHeadersMiddleware,
    RateLimitMiddleware,
    RequestLoggingMiddleware,
    InputValidationMiddleware,
    CacheControlMiddleware,
    RequestSizeLimitMiddleware
)
from app.monitoring import monitoring_service, setup_sentry, StructuredLogger
from app.api.v1 import (
    auth_router,
    admin_router,
    assets_router,
    inspections_router,
    work_orders_router,
    incidents_router,
    eoc_router,
    dispatch_router,
    alerts_router,
    shelters_router,
    gis_router,
    ai_router,
    ws_router
)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Connect MongoDB Atlas
    await connect_to_mongo()
    
    # Initialize monitoring
    monitoring_service.init_app(app)
    
    # Initialize Sentry if configured
    setup_sentry()
    
    yield
    
    # Shutdown: Close MongoDB connection
    await close_mongo_connection()

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url=f"{settings.API_V1_STR}/docs",
    redoc_url=f"{settings.API_V1_STR}/redoc",
    lifespan=lifespan
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Security Middleware (order matters - add in reverse order of execution)
app.add_middleware(SecurityHeadersMiddleware)
app.add_middleware(CacheControlMiddleware)
app.add_middleware(RequestSizeLimitMiddleware, max_size_mb=10)
app.add_middleware(InputValidationMiddleware)
app.add_middleware(RateLimitMiddleware, requests_per_minute=settings.RATE_LIMIT_PER_MINUTE)
app.add_middleware(RequestLoggingMiddleware)

# Middleware for Request Timing & Correlation ID
@app.middleware("http")
async def add_process_time_and_correlation(request: Request, call_next):
    start_time = time.time()
    correlation_id = request.headers.get("X-Correlation-ID", "corr-" + str(int(start_time * 1000)))
    request.state.correlation_id = correlation_id
    
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    response.headers["X-Correlation-ID"] = correlation_id
    return response

# Root & Health Endpoints
@app.get("/", tags=["Health"])
async def root():
    return {
        "project": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "status": "Operational",
        "database": "MongoDB Atlas Cluster",
        "docs": f"{settings.API_V1_STR}/docs"
    }

@app.get("/health", tags=["Health"])
async def health_check():
    return {
        "status": "Healthy",
        "timestamp": time.time(),
        "database_connected": True,
        "uptime": monitoring_service.get_uptime(),
        "version": settings.VERSION,
        "environment": settings.ENVIRONMENT
    }

@app.get("/metrics", tags=["Health"])
async def metrics():
    """Prometheus metrics endpoint (if not using instrumentator)"""
    if settings.ENABLE_METRICS:
        from prometheus_client import generate_latest
        from fastapi.responses import Response
        return Response(content=generate_latest(), media_type="text/plain")
    return JSONResponse({"detail": "Metrics disabled"}, status_code=404)

# Include V1 Routers
app.include_router(auth_router, prefix=settings.API_V1_STR)
app.include_router(admin_router, prefix=settings.API_V1_STR)
app.include_router(assets_router, prefix=settings.API_V1_STR)
app.include_router(inspections_router, prefix=settings.API_V1_STR)
app.include_router(work_orders_router, prefix=settings.API_V1_STR)
app.include_router(incidents_router, prefix=settings.API_V1_STR)
app.include_router(eoc_router, prefix=settings.API_V1_STR)
app.include_router(dispatch_router, prefix=settings.API_V1_STR)
app.include_router(alerts_router, prefix=settings.API_V1_STR)
app.include_router(shelters_router, prefix=settings.API_V1_STR)
app.include_router(gis_router, prefix=settings.API_V1_STR)
app.include_router(ai_router, prefix=settings.API_V1_STR)
app.include_router(ws_router)
