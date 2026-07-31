import os
from pydantic_settings import BaseSettings
from typing import List, Optional
from functools import lru_cache

class Settings(BaseSettings):
    # Application
    PROJECT_NAME: str = "CycloneGuard GVMC Backend"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    
    # Security / JWT
    SECRET_KEY: str = os.getenv("SECRET_KEY", "dev-secret-key-change-in-production")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 480  # 8 hours for shift operations
    
    # Entra ID Integration
    ENTRA_CLIENT_ID: Optional[str] = os.getenv("ENTRA_CLIENT_ID")
    ENTRA_TENANT_ID: Optional[str] = os.getenv("ENTRA_TENANT_ID")
    ENTRA_REDIRECT_URI: Optional[str] = os.getenv("ENTRA_REDIRECT_URI")

    # Google OAuth
    GOOGLE_CLIENT_ID: Optional[str] = os.getenv("GOOGLE_CLIENT_ID")
    GOOGLE_CLIENT_SECRET: Optional[str] = os.getenv("GOOGLE_CLIENT_SECRET")
    GOOGLE_REDIRECT_URI: Optional[str] = os.getenv("GOOGLE_REDIRECT_URI")

    # Google OAuth2
    GOOGLE_CLIENT_ID: Optional[str] = os.getenv("GOOGLE_CLIENT_ID")
    GOOGLE_CLIENT_SECRET: Optional[str] = os.getenv("GOOGLE_CLIENT_SECRET")
    GOOGLE_REDIRECT_URI: str = os.getenv("GOOGLE_REDIRECT_URI", "http://localhost:8000/api/v1/auth/google/callback")
    
    # MongoDB Configuration
    MONGODB_URL: str = os.getenv(
        "MONGODB_URL",
        "mongodb://localhost:27017/cycloneguard_gvmc"
    )
    MONGODB_DB_NAME: str = os.getenv("MONGODB_DB_NAME", "cycloneguard_gvmc")
    MONGODB_SERVER_SELECTION_TIMEOUT_MS: int = int(os.getenv("MONGODB_SERVER_SELECTION_TIMEOUT_MS", "1000"))
    
    # Redis
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    
    # GIS & Media
    GIS_TILE_SERVER_URL: str = "https://tile.openstreetmap.org"
    MEDIA_STORAGE_PATH: str = "./storage/media"
    
    # CORS - Parse comma-separated origins
    ALLOWED_ORIGINS: str = os.getenv(
        "ALLOWED_ORIGINS",
        "http://localhost:3000,http://localhost:5173,http://127.0.0.1:5173"
    )
    
    # Rate Limiting
    RATE_LIMIT_PER_MINUTE: int = int(os.getenv("RATE_LIMIT_PER_MINUTE", "100"))
    RATE_LIMIT_PER_HOUR: int = int(os.getenv("RATE_LIMIT_PER_HOUR", "1000"))
    
    # Logging
    LOG_LEVEL: str = os.getenv("LOG_LEVEL", "INFO")
    LOG_FORMAT: str = os.getenv("LOG_FORMAT", "json")
    
    # Monitoring
    SENTRY_DSN: Optional[str] = os.getenv("SENTRY_DSN")
    ENABLE_METRICS: bool = os.getenv("ENABLE_METRICS", "true").lower() == "true"
    METRICS_PORT: int = int(os.getenv("METRICS_PORT", "9090"))
    
    # Email Configuration
    SMTP_HOST: Optional[str] = os.getenv("SMTP_HOST")
    SMTP_PORT: int = int(os.getenv("SMTP_PORT", "587"))
    SMTP_USER: Optional[str] = os.getenv("SMTP_USER")
    SMTP_PASSWORD: Optional[str] = os.getenv("SMTP_PASSWORD")
    SMTP_FROM: Optional[str] = os.getenv("SMTP_FROM", "noreply@gvmc.gov.in")
    
    # SMS Gateway
    SMS_GATEWAY_URL: Optional[str] = os.getenv("SMS_GATEWAY_URL")
    SMS_API_KEY: Optional[str] = os.getenv("SMS_API_KEY")
    SMS_SENDER_ID: Optional[str] = os.getenv("SMS_SENDER_ID", "GVMC")
    
    # AI/ML Configuration
    AI_MODEL_PATH: str = os.getenv("AI_MODEL_PATH", "./models")
    ENABLE_AI_FEATURES: bool = os.getenv("ENABLE_AI_FEATURES", "true").lower() == "true"
    
    # WebSocket Configuration
    WS_HEARTBEAT_INTERVAL: int = int(os.getenv("WS_HEARTBEAT_INTERVAL", "30"))
    WS_MAX_CONNECTIONS: int = int(os.getenv("WS_MAX_CONNECTIONS", "1000"))
    
    @property
    def allowed_origins_list(self) -> List[str]:
        """Parse ALLOWED_ORIGINS string into list"""
        return [origin.strip() for origin in self.ALLOWED_ORIGINS.split(",")]
    
    def validate_production_config(self) -> None:
        """Validate critical settings for production"""
        if self.ENVIRONMENT == "production":
            if self.SECRET_KEY == "dev-secret-key-change-in-production":
                raise ValueError("SECRET_KEY must be set in production")
            if "localhost" in self.MONGODB_URL or "hackhorizon" in self.MONGODB_URL:
                raise ValueError("MONGODB_URL must be set to production database")
            if "*" in self.ALLOWED_ORIGINS:
                raise ValueError("ALLOWED_ORIGINS cannot be '*' in production")

    class Config:
        case_sensitive = True
        env_file = ".env"

@lru_cache()
def get_settings() -> Settings:
    """Get cached settings instance"""
    settings = Settings()

    if not settings.MONGODB_URL or "cluster.mongodb.net" in settings.MONGODB_URL or "username:password" in settings.MONGODB_URL:
        settings.MONGODB_URL = "mongodb://localhost:27017/cycloneguard_gvmc"

    if settings.ENVIRONMENT == "production":
        settings.validate_production_config()
    return settings

settings = get_settings()
