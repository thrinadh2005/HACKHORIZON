"""
Production-grade security middleware for CycloneGuard GVMC
"""
import time
import json
import logging
from typing import Callable, Optional
from fastapi import Request, Response, HTTPException, status
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.types import ASGIApp
from app.config import settings
import hashlib
import re

# Configure logging
logging.basicConfig(
    level=getattr(logging, settings.LOG_LEVEL),
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    """Add security headers to all responses"""
    
    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        response = await call_next(request)
        
        # Security headers
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        response.headers["Permissions-Policy"] = "geolocation=(), microphone=(), camera=()"
        
        # Content Security Policy (basic)
        if settings.ENVIRONMENT == "production":
            csp = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' wss://;"
            response.headers["Content-Security-Policy"] = csp
        
        return response


class RateLimitMiddleware(BaseHTTPMiddleware):
    """Simple in-memory rate limiting middleware"""
    
    def __init__(self, app: ASGIApp, requests_per_minute: int = 100):
        super().__init__(app)
        self.requests_per_minute = requests_per_minute
        self.requests = {}  # In-memory store (use Redis in production)
    
    def _get_client_identifier(self, request: Request) -> str:
        """Get client identifier from IP or forwarded header"""
        forwarded = request.headers.get("X-Forwarded-For")
        if forwarded:
            return forwarded.split(",")[0].strip()
        return request.client.host if request.client else "unknown"
    
    def _is_rate_limited(self, identifier: str) -> bool:
        """Check if client has exceeded rate limit"""
        now = time.time()
        minute_ago = now - 60
        
        # Clean old entries
        if identifier in self.requests:
            self.requests[identifier] = [
                timestamp for timestamp in self.requests[identifier]
                if timestamp > minute_ago
            ]
        else:
            self.requests[identifier] = []
        
        # Check rate limit
        if len(self.requests[identifier]) >= self.requests_per_minute:
            return True
        
        # Add current request
        self.requests[identifier].append(now)
        return False
    
    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        # Skip rate limiting for health checks
        if request.url.path in ["/", "/health", "/metrics"]:
            return await call_next(request)
        
        identifier = self._get_client_identifier(request)
        
        if self._is_rate_limited(identifier):
            logger.warning(f"Rate limit exceeded for {identifier}")
            return JSONResponse(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                content={"detail": "Rate limit exceeded. Please try again later."}
            )
        
        return await call_next(request)


class RequestLoggingMiddleware(BaseHTTPMiddleware):
    """Log all incoming requests with structured logging"""
    
    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        start_time = time.time()
        
        # Log request
        logger.info(
            json.dumps({
                "event": "request_started",
                "method": request.method,
                "path": request.url.path,
                "query_params": str(request.query_params),
                "client_host": request.client.host if request.client else "unknown",
                "user_agent": request.headers.get("user-agent", "unknown"),
                "correlation_id": request.state.correlation_id if hasattr(request.state, "correlation_id") else None
            })
        )
        
        try:
            response = await call_next(request)
            process_time = time.time() - start_time
            
            # Log response
            logger.info(
                json.dumps({
                    "event": "request_completed",
                    "method": request.method,
                    "path": request.url.path,
                    "status_code": response.status_code,
                    "process_time": round(process_time, 4),
                    "correlation_id": request.state.correlation_id if hasattr(request.state, "correlation_id") else None
                })
            )
            
            return response
            
        except Exception as e:
            process_time = time.time() - start_time
            logger.error(
                json.dumps({
                    "event": "request_failed",
                    "method": request.method,
                    "path": request.url.path,
                    "error": str(e),
                    "process_time": round(process_time, 4),
                    "correlation_id": request.state.correlation_id if hasattr(request.state, "correlation_id") else None
                })
            )
            raise


class InputValidationMiddleware(BaseHTTPMiddleware):
    """Validate and sanitize input data"""
    
    # Patterns for common injection attacks
    SQL_INJECTION_PATTERN = re.compile(
        r"(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|EXEC|ALTER)\b)",
        re.IGNORECASE
    )
    XSS_PATTERN = re.compile(
        r"<script\b[^>]*>(.*?)</script>|javascript:",
        re.IGNORECASE
    )
    
    def _sanitize_string(self, value: str) -> str:
        """Basic sanitization for string inputs"""
        if not isinstance(value, str):
            return value
        
        # Check for SQL injection
        if self.SQL_INJECTION_PATTERN.search(value):
            logger.warning(f"Potential SQL injection detected: {value[:100]}")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid input detected"
            )
        
        # Check for XSS
        if self.XSS_PATTERN.search(value):
            logger.warning(f"Potential XSS detected: {value[:100]}")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid input detected"
            )
        
        return value
    
    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        # Skip validation for GET requests and file uploads
        if request.method in ["GET", "OPTIONS", "HEAD"]:
            return await call_next(request)
        
        # Skip validation for health endpoints
        if request.url.path in ["/", "/health", "/metrics"]:
            return await call_next(request)
        
        try:
            # For POST/PUT requests, we could validate the body
            # This is a basic implementation - enhance based on needs
            return await call_next(request)
            
        except HTTPException:
            raise
        except Exception as e:
            logger.error(f"Input validation error: {str(e)}")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid request data"
            )


class CacheControlMiddleware(BaseHTTPMiddleware):
    """Add cache control headers for static assets"""
    
    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        response = await call_next(request)
        
        # Add cache control for static assets
        if request.url.path.startswith("/static/") or request.url.path.endswith((".css", ".js", ".png", ".jpg", ".jpeg", ".gif", ".ico", ".svg")):
            response.headers["Cache-Control"] = "public, max-age=31536000, immutable"
        else:
            # No caching for API responses
            response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate, max-age=0"
        
        return response


class RequestSizeLimitMiddleware(BaseHTTPMiddleware):
    """Limit request size to prevent DoS attacks"""
    
    def __init__(self, app: ASGIApp, max_size_mb: int = 10):
        super().__init__(app)
        self.max_size = max_size_mb * 1024 * 1024  # Convert to bytes
    
    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        content_length = request.headers.get("content-length")
        
        if content_length:
            try:
                size = int(content_length)
                if size > self.max_size:
                    logger.warning(f"Request too large: {size} bytes")
                    return JSONResponse(
                        status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
                        content={"detail": f"Request too large. Maximum size is {self.max_size // (1024*1024)}MB"}
                    )
            except ValueError:
                pass
        
        return await call_next(request)
