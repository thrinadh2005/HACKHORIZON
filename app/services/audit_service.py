import uuid
from datetime import datetime
from typing import Optional, Dict, Any
from motor.motor_asyncio import AsyncIOMotorDatabase

class AuditService:
    @staticmethod
    async def log_action(
        db: AsyncIOMotorDatabase,
        action: str,
        user_id: Optional[str] = None,
        user_email: Optional[str] = None,
        role: Optional[str] = None,
        entity_type: Optional[str] = None,
        entity_id: Optional[str] = None,
        previous_state: Optional[Dict[str, Any]] = None,
        new_state: Optional[Dict[str, Any]] = None,
        ip_address: Optional[str] = None,
        correlation_id: Optional[str] = None
    ):
        audit_entry = {
            "id": f"aud-{str(uuid.uuid4())[:8]}",
            "user_id": user_id,
            "user_email": user_email,
            "role": role,
            "action": action,
            "entity_type": entity_type,
            "entity_id": entity_id,
            "previous_state": previous_state,
            "new_state": new_state,
            "ip_address": ip_address,
            "correlation_id": correlation_id,
            "timestamp": datetime.utcnow()
        }
        try:
            await db["audit_logs"].insert_one(audit_entry)
        except Exception as e:
            print(f"Audit log insertion notice: {e}")
        return audit_entry

audit_service = AuditService()
