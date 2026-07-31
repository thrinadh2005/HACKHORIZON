import json
from typing import List, Dict, Any
from fastapi import WebSocket

class ConnectionManager:
    def __init__(self):
        # Active connections: websocket -> user_info
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)

    async def broadcast_event(self, event_type: str, payload: Dict[str, Any]):
        event_message = {
            "type": event_type,
            "timestamp": payload.get("timestamp"),
            "data": payload
        }
        message_str = json.dumps(event_message, default=str)
        for connection in list(self.active_connections):
            try:
                await connection.send_text(message_str)
            except Exception:
                self.disconnect(connection)

realtime_manager = ConnectionManager()
