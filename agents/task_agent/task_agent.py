from ..base_agent import BaseAgent

class TaskAgent(BaseAgent):
    def __init__(self):
        super().__init__("Task Agent")

    def create_task(self, event_type: str, due_date: str):
        # Mock logic to create a task
        return {
            "title": f"Pay {event_type}",
            "priority": "High",
            "status": "In Progress"
        }
