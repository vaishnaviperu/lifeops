import re
from ..base_agent import BaseAgent

class EmailAgent(BaseAgent):
    def __init__(self):
        super().__init__("Email Agent")

    def extract_event(self, text: str):
        # Mock logic to extract type, amount, due date from text
        # e.g., "Electricity bill of ₹2,300 is due on 05 May."
        event_type = "Unknown"
        amount = 0
        due_date = "Unknown"
        
        if "electricity" in text.lower():
            event_type = "Electricity Bill"
            
        amount_match = re.search(r'₹([\d,]+)', text)
        if amount_match:
            amount = int(amount_match.group(1).replace(',', ''))
            
        date_match = re.search(r'on (\d{2} [A-Za-z]+)', text)
        if date_match:
            due_date = f"2025-{date_match.group(1).replace(' ', '-')}" # Simple mock mapping
            # Assuming '05 May' maps to '2025-05-05' ideally, but this is a mock.
            if "05 May" in text:
                due_date = "2025-05-05"
                
        return {
            "type": event_type,
            "amount": amount,
            "due_date": due_date
        }
