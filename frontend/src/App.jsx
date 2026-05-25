import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import AIInsights from './components/AIInsights';
import ScheduleCard from './components/ScheduleCard';
import PaymentsCard from './components/PaymentsCard';
import WorkflowStatus from './components/WorkflowStatus';
import SpendingOverview from './components/SpendingOverview';
import Notifications from './components/Notifications';
import ConnectedAccounts from './components/ConnectedAccounts';
import AgentTestPanel from './components/AgentTestPanel';
import ApprovalCenter from './components/ApprovalCenter';
import AgentActivityLog from './components/AgentActivityLog';
import PlaceholderPage from './components/PlaceholderPage';
import { fetchDashboardData } from './services/api';

const MainDashboard = ({ data }) => {
  return (
    <>
      <Header />

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <StatCard {...data.stats.priorities} />
        <StatCard {...data.stats.payments} />
        <StatCard {...data.stats.schedule} />
        <StatCard {...data.stats.budget} />
        <StatCard {...data.stats.subscriptions} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6 flex flex-col">
          <div className="flex-1 min-h-[250px]">
            <AIInsights insights={data.insights} />
          </div>
          <div className="flex-1 min-h-[300px]">
            <AgentTestPanel />
          </div>
          <div className="flex-1 min-h-[250px]">
            <WorkflowStatus workflows={data.workflows} />
          </div>
        </div>

        {/* Middle Column */}
        <div className="lg:col-span-1 space-y-6 flex flex-col">
          <div className="flex-1 min-h-[300px]">
            <AgentActivityLog />
          </div>
          <div className="flex-1 min-h-[250px]">
            <ScheduleCard schedule={data.schedule} />
          </div>
          <div className="flex-1 min-h-[250px]">
            <SpendingOverview spending={data.spending} />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-6 flex flex-col">
          <div className="flex-1 min-h-[250px]">
            <ApprovalCenter />
          </div>
          <div className="flex-1 min-h-[250px]">
            <PaymentsCard payments={data.payments} />
          </div>
          <div className="flex-1 min-h-[250px]">
            <Notifications notifications={data.notifications} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <ConnectedAccounts accounts={data.connectedAccounts} />
    </>
  );
};

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const dashboardData = await fetchDashboardData();
        setData(dashboardData);
      } catch (err) {
        setError("Failed to load dashboard data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
        <p className="text-gray-500 font-medium animate-pulse">Initializing Agentic Workspace...</p>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-red-100 text-center max-w-md">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Connection Error</h2>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar />
        
        <main className="flex-1 ml-64 p-8 pt-0 max-w-[1600px] mx-auto">
          <Routes>
            <Route path="/" element={<MainDashboard data={data} />} />
            <Route path="/dashboard" element={<MainDashboard data={data} />} />
            <Route path="/tasks" element={<><Header /><PlaceholderPage title="Tasks" /></>} />
            <Route path="/calendar" element={<><Header /><PlaceholderPage title="Calendar" /></>} />
            <Route path="/finance" element={<><Header /><PlaceholderPage title="Finance" /></>} />
            <Route path="/subscriptions" element={<><Header /><PlaceholderPage title="Subscriptions" /></>} />
            <Route path="/documents" element={<><Header /><PlaceholderPage title="Documents" /></>} />
            <Route path="/workflows" element={<><Header /><PlaceholderPage title="Workflows" /></>} />
            <Route path="/goals" element={<><Header /><PlaceholderPage title="Goals" /></>} />
            <Route path="/reports" element={<><Header /><PlaceholderPage title="Reports" /></>} />
            <Route path="/insights" element={<><Header /><PlaceholderPage title="AI Insights" /></>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
