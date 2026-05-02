import sys
import os

# Add the root directory to sys.path to import agents package properly
current_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.abspath(os.path.join(current_dir, "../../.."))
if root_dir not in sys.path:
    sys.path.append(root_dir)

from agents.orchestrator.orchestrator import OrchestratorAgent

def run_agent_test(event_text: str):
    try:
        orchestrator = OrchestratorAgent()
        result = orchestrator.process(event_text)
        return result
    except Exception as e:
        return {"error": str(e), "message": "Failed to run agent test."}
