# LifeOps AI — Agentic Personal ERP System

## Problem Statement
Managing personal finances, schedules, emails, and tasks can become overwhelming. There's a lack of unified systems that not only aggregate this information but actively reason over it to prevent late payments, missed events, and unoptimized spending.

## Features
- **Unified Life Dashboard**: A beautiful, single-pane-of-glass view for schedule, tasks, bills, and workflows.
- **AI Insights**: Contextual alerts about overlapping bills, unused subscriptions, and smart suggestions.
- **Agentic Workflows (Sense → Reason → Plan → Act)**:
  - **Sense**: Extracts meaning from unstructured data (e.g., an email about a bill).
  - **Reason**: Checks context (e.g., calendar availability, financial balance).
  - **Plan**: Formulates an action (e.g., create a task).
  - **Act**: Executes the action (e.g., sends a notification).
- **Interactive Agent Test Panel**: Directly test the orchestration of agents from the dashboard.
- **Approval Center**: Review high-risk agent actions with "Human-in-the-Loop" Approve/Reject mechanics.
- **Agent Activity Log**: Real-time transparency showing exactly what each agent did.
- **Navigation Routing**: Seamless navigation between dashboard modules with graceful placeholder states.

## Tech Stack
- **Frontend**: React, Vite, React Router, Tailwind CSS (v4), Lucide React, Recharts, Axios
- **Backend**: FastAPI, Uvicorn, Pydantic, Python-dotenv
- **AI/Agents**: Simulated LangChain orchestration (Email, Finance, Calendar, Task, Risk, Notification agents)

## Folder Structure
```text
lifeops-ai/
├── frontend/             # React app
│   └── src/
│       ├── components/   # UI Modules (AgentTestPanel, ApprovalCenter, etc.)
│       └── App.jsx       # Routing and layout logic
├── backend/              # FastAPI application
│   ├── app/
│   │   ├── main.py       # API Entrypoint
│   │   ├── routes/       # API Routes (dashboard, agents)
│   │   └── services/     # Business logic and mock data
├── agents/               # LangChain-style simulated agents
│   ├── orchestrator/     # Main coordinator agent
│   └── ...               # Individual agent classes
└── ...
```

## How to Run Frontend
Ensure you have Node.js installed.
```bash
cd frontend
npm install
npm run dev
```
The frontend will be available at [http://localhost:5173](http://localhost:5173).

## How to Run Backend
Ensure you have Python 3.10+ installed.
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
The backend will be available at [http://127.0.0.1:8000](http://127.0.0.1:8000).

## API Endpoints
- `GET /health` - Health check
- `GET /api/dashboard` - Returns full mock data for the React dashboard
- `GET /api/agents/test` - Runs a mock test of the agent pipeline
- `POST /api/agents/test` - Allows passing a custom `event_text` payload to the orchestrator.

## Recommended Demo Flow
1. **Open Dashboard**: View the unified dashboard showing AI Insights, Schedules, and Spending.
2. **Review AI Insights**: Note how the system has flagged overlapping bills.
3. **Agent Activity Log**: See exactly how the agents derived those insights.
4. **Run Agent Test**: Use the Agent Test Panel to submit a new bill and watch the orchestrated response (Risk assessment, Task creation, Notification).
5. **Approval Center**: Demonstrate the human-in-the-loop requirement for the high-risk payment that the agents just scheduled.
6. **Navigate**: Click through the sidebar to view routing and module placeholders.

## Future Scope
- **Real Integrations**: Gmail API, Google Calendar API, Plaid/Bank API.
- **Vector Memory**: Implement LangGraph and a vector database for long-term memory retrieval.
- **Audit Logs**: Traceability of all agent decisions saved to a persistent database.
