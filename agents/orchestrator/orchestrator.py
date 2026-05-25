from ..base_agent import BaseAgent
from ..email_agent.email_agent import EmailAgent
from ..finance_agent.finance_agent import FinanceAgent
from ..calendar_agent.calendar_agent import CalendarAgent
from ..task_agent.task_agent import TaskAgent
from ..risk_agent.risk_agent import RiskAgent
from ..notification_agent.notification_agent import NotificationAgent

class OrchestratorAgent(BaseAgent):
    def __init__(self):
        super().__init__("Orchestrator Agent")
        self.email_agent = EmailAgent()
        self.finance_agent = FinanceAgent()
        self.calendar_agent = CalendarAgent()
        self.task_agent = TaskAgent()
        self.risk_agent = RiskAgent()
        self.notification_agent = NotificationAgent()

    def process(self, event_text: str):
        # 1. Sense: Extract info from event text
        email_data = self.email_agent.extract_event(event_text)
        
        # 2. Reason: Analyze financial and schedule context
        finance_data = self.finance_agent.check_budget_context(email_data["amount"], email_data["type"])
        calendar_data = self.calendar_agent.check_due_date(email_data["due_date"])
        risk_data = self.risk_agent.assess_risk(email_data["type"], calendar_data["days_until_due"])
        
        # 3. Plan: Create action items
        task_data = self.task_agent.create_task(email_data["type"], email_data["due_date"])
        
        # 4. Act: Generate notification
        notification_msg = self.notification_agent.generate_notification(
            email_data["type"], 
            email_data["amount"], 
            email_data["due_date"], 
            risk_data["level"]
        )

        return {
            "agent": self.name,
            "event_detected": email_data["type"],
            "amount": email_data["amount"],
            "due_date": email_data["due_date"],
            "agents_called": [
                self.email_agent.name, 
                self.finance_agent.name, 
                self.calendar_agent.name, 
                self.task_agent.name, 
                self.risk_agent.name, 
                self.notification_agent.name
            ],
            "decision": "Create high-priority task and notify user before due date.",
            "task": task_data,
            "risk": risk_data,
            "risk_level": risk_data["level"],
            "suggested_action": "Review payment and schedule reminder.",
            "notification": notification_msg
        }
