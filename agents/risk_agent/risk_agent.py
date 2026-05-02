from ..base_agent import BaseAgent

class RiskAgent(BaseAgent):
    def __init__(self):
        super().__init__("Risk Agent")

    def process(self, event_type: str, days_until_due: int):
        # Mock logic to assess risk
        level = "Low"
        reason = "Plenty of time to act."
        
        if days_until_due < 5:
            level = "High"
            reason = "Payment due soon and overlaps with rent."
            
        return {
            "level": level,
            "reason": reason
        }
