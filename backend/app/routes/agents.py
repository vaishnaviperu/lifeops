from fastapi import APIRouter
from pydantic import BaseModel
from ..services.agent_service import run_agent_test

router = APIRouter()

class AgentTestRequest(BaseModel):
    event_text: str = "Electricity bill of ₹2,300 is due on 05 May."

@router.get("/agents/test")
async def test_agent_get():
    # Allow simple GET for testing without body
    default_text = "Electricity bill of ₹2,300 is due on 05 May."
    return run_agent_test(default_text)

@router.post("/agents/test")
async def test_agent_post(request: AgentTestRequest):
    return run_agent_test(request.event_text)
