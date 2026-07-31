import os
import asyncio
from typing import Optional
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.config import settings

try:
    from sqlalchemy.orm import declarative_base
    Base = declarative_base()
except Exception:
    class Base:
        pass

class MongoDB:
    client: Optional[AsyncIOMotorClient] = None
    db: Optional[AsyncIOMotorDatabase] = None
    is_connected: bool = False

db_instance = MongoDB()

async def connect_to_mongo():
    print("Connecting to MongoDB Atlas Cluster...")
    try:
        db_instance.client = AsyncIOMotorClient(
            settings.MONGODB_URL,
            serverSelectionTimeoutMS=settings.MONGODB_SERVER_SELECTION_TIMEOUT_MS
        )
        db_instance.db = db_instance.client[settings.MONGODB_DB_NAME]
        await db_instance.client.admin.command('ping')
        db_instance.is_connected = True
        print("Successfully connected to MongoDB Atlas!")
    except Exception as e:
        db_instance.is_connected = False
        print(f"MongoDB Atlas Connection Info: {e}")

async def close_mongo_connection():
    if db_instance.client:
        db_instance.client.close()
        db_instance.is_connected = False
        print("Closed MongoDB connection.")

def get_database() -> AsyncIOMotorDatabase:
    if db_instance.db is None:
        db_instance.client = AsyncIOMotorClient(
            settings.MONGODB_URL,
            serverSelectionTimeoutMS=settings.MONGODB_SERVER_SELECTION_TIMEOUT_MS
        )
        db_instance.db = db_instance.client[settings.MONGODB_DB_NAME]
    return db_instance.db

async def get_db():
    """FastAPI Dependency for MongoDB Database Instance"""
    return get_database()

