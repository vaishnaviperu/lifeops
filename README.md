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

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS (v4), Lucide React, Recharts, Axios
- **Backend**: FastAPI, Uvicorn, Pydantic, Python-dotenv
- **AI/Agents**: LangChain, simulated agent orchestration

## Folder Structure
```text
lifeops-ai/
├── frontend/             # React app with Tailwind CSS and Vite
├── backend/              # FastAPI application
│   ├── app/
│   │   ├── main.py       # API Entrypoint
│   │   ├── routes/       # API Routes (dashboard, agents)
│   │   └── services/     # Business logic and mock data
├── agents/               # LangChain-style simulated agents
│   ├── orchestrator/     # Main coordinator agent
│   └── ...               # Individual agent classes (Email, Finance, etc.)
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

## Current Status
This project is currently an **MVP** utilizing mock data. The frontend is fully designed and styled according to the requirements, and it correctly fetches from the FastAPI backend. The agent framework is structured into logical components (BaseAgent, Orchestrator, etc.) and demonstrates the agentic pipeline with deterministic mock outputs.

## Future Scope
- **Real Integrations**: Gmail API, Google Calendar API, Plaid/Bank API.
- **Vector Memory**: Implement LangGraph and a vector database for long-term memory retrieval.
- **Approval Center**: A human-in-the-loop dashboard for confirming high-risk agent actions.
- **Audit Logs**: Traceability of all agent decisions.
