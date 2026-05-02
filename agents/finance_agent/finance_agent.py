from ..base_agent import BaseAgent

class FinanceAgent(BaseAgent):
    def __init__(self):
        super().__init__("Finance Agent")

    def process(self, amount: int, event_type: str):
        # Mock logic to check if funds are available or payment context
        status = "OK"
        if amount > 10000:
            status = "High Value"
        return {
            "status": status,
            "context": f"Sufficient funds expected for {event_type} of ₹{amount}."
        }
