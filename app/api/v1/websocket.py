from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from app.services.realtime_hub import realtime_manager

router = APIRouter(tags=["Real-Time WebSockets"])

@router.websocket("/ws/v1/live-feed")
async def websocket_live_feed(websocket: WebSocket):
    await realtime_manager.connect(websocket)
    try:
        while True:
            # Keep connection open & receive client pings/heartbeats
            data = await websocket.receive_text()
            if data == "ping":
                await websocket.send_text("pong")
    except WebSocketDisconnect:
        realtime_manager.disconnect(websocket)
