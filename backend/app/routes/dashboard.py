from fastapi import APIRouter
from ..services.dashboard_service import get_mock_dashboard_data

router = APIRouter()

@router.get("/dashboard")
async def get_dashboard():
    return get_mock_dashboard_data()
