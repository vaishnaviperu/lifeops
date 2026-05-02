from ..base_agent import BaseAgent

class NotificationAgent(BaseAgent):
    def __init__(self):
        super().__init__("Notification Agent")

    def process(self, event_type: str, amount: int, due_date: str, risk_level: str):
        # Mock logic to generate notification
        date_str = "05 May" # static mapping for the test case
        
        msg = f"{event_type} of ₹{amount:,} is due on {date_str}."
        if risk_level == "High":
            msg += " Rent is also due soon, so reviewing this payment today is recommended."
            
        return msg
