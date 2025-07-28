from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pathlib import Path
import os
import logging

# Import database functions
from .database import connect_to_mongo, close_mongo_connection, create_indexes, seed_database

# Import route modules
from .routes.contact import router as contact_router
from .routes.blog import router as blog_router

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app
app = FastAPI(title="Portfolio API", version="1.0.0")

# Create API router with prefix
api_router = APIRouter(prefix="/api")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is running!", "status": "healthy"}

# Health check for database
@api_router.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "database": "connected",
        "version": "1.0.0"
    }

# Include routers
api_router.include_router(contact_router, tags=["contact"])
api_router.include_router(blog_router, tags=["blog"])

# Include API router in main app
app.include_router(api_router)

# Startup event
@app.on_event("startup")
async def startup_event():
    """Initialize database connection and setup"""
    try:
        await connect_to_mongo()
        await create_indexes()
        await seed_database()
        logger.info("✅ Application startup completed successfully")
    except Exception as e:
        logger.error(f"❌ Application startup failed: {e}")
        raise

# Shutdown event
@app.on_event("shutdown")
async def shutdown_event():
    """Clean up database connection"""
    await close_mongo_connection()
    logger.info("✅ Application shutdown completed")
