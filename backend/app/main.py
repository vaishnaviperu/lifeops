from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import dashboard, agents

app = FastAPI(
    title="LifeOps AI Backend",
    description="Agentic Personal ERP System API",
    version="0.1.0",
)

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(dashboard.router, prefix="/api", tags=["dashboard"])
app.include_router(agents.router, prefix="/api", tags=["agents"])

@app.get("/health", tags=["health"])
async def health_check():
    return { "status": "ok", "service": "LifeOps AI Backend" }
