import asyncio
import os
import uvicorn
from app.config import settings
from app.database import db_instance, connect_to_mongo
from app.security import get_password_hash

async def seed_initial_data():
    await connect_to_mongo()
    if db_instance.db is None:
        print("Database not connected. Skipping seed.")
        return

    users_col = db_instance.db["users"]
    categories_col = db_instance.db["asset_categories"]
    assets_col = db_instance.db["assets"]
    incidents_col = db_instance.db["incidents"]

    # Seed Admin / Commissioner User if missing
    existing_user = await users_col.find_one({"email": "commissioner@gvmc.gov.in"})
    if not existing_user:
        admin_doc = {
            "email": "commissioner@gvmc.gov.in",
            "hashed_password": get_password_hash("password123"),
            "full_name": "Dr. S. Kumar",
            "phone": "+919876543210",
            "role": "Commissioner",
            "is_active": True
        }
        await users_col.insert_one(admin_doc)
        print("Seeded Commissioner user: commissioner@gvmc.gov.in / password123")

    # Seed Default Asset Categories
    categories = [
        {"name": "Generator", "code": "GEN", "icon_name": "Zap", "default_inspection_interval_days": 15},
        {"name": "WaterPump", "code": "PUMP", "icon_name": "Droplet", "default_inspection_interval_days": 10},
        {"name": "Shelter", "code": "SHLTR", "icon_name": "Home", "default_inspection_interval_days": 30},
        {"name": "Transformer", "code": "XFRM", "icon_name": "Activity", "default_inspection_interval_days": 30}
    ]
    for cat in categories:
        await categories_col.update_one({"code": cat["code"]}, {"$set": cat}, upsert=True)

    print("Seed complete.")

if __name__ == "__main__":
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        loop.run_until_complete(seed_initial_data())
    except Exception as e:
        print(f"Seed warning: {e}")

    print("Starting CycloneGuard FastAPI server on http://localhost:8000 ...")
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
