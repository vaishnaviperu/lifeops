import React, { useState, useEffect } from 'react';
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
import { fetchDashboardData } from './services/api';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const dashboardData = await fetchDashboardData();
      setData(dashboardData);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8 pt-0 max-w-7xl mx-auto">
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
            <div className="flex-1 min-h-[300px]">
              <AIInsights insights={data.insights} />
            </div>
            <div className="flex-1 min-h-[300px]">
              <WorkflowStatus workflows={data.workflows} />
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-1 space-y-6 flex flex-col">
            <div className="flex-1 min-h-[300px]">
              <ScheduleCard schedule={data.schedule} />
            </div>
            <div className="flex-1 min-h-[300px]">
              <SpendingOverview spending={data.spending} />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6 flex flex-col">
            <div className="flex-1 min-h-[300px]">
              <PaymentsCard payments={data.payments} />
            </div>
            <div className="flex-1 min-h-[300px]">
              <Notifications notifications={data.notifications} />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <ConnectedAccounts accounts={data.connectedAccounts} />
      </main>
    </div>
  );
}

export default App;
