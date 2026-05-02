import React from 'react';
import { 
  Home, Activity, CheckSquare, Calendar, DollarSign, 
  CreditCard, FileText, Settings, Target, BarChart2, 
  Zap, BrainCircuit, Mail, Wallet, CalendarDays, 
  ListTodo, ShieldAlert, Bell
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={18} />, label: 'Home', active: true },
    { icon: <Activity size={18} />, label: 'Life Dashboard' },
    { icon: <CheckSquare size={18} />, label: 'Tasks' },
    { icon: <Calendar size={18} />, label: 'Calendar' },
    { icon: <DollarSign size={18} />, label: 'Finance' },
    { icon: <CreditCard size={18} />, label: 'Subscriptions' },
    { icon: <FileText size={18} />, label: 'Documents' },
    { icon: <Settings size={18} />, label: 'Workflows' },
    { icon: <Target size={18} />, label: 'Goals' },
    { icon: <BarChart2 size={18} />, label: 'Reports' },
    { icon: <Zap size={18} />, label: 'AI Insights' },
  ];

  const agentItems = [
    { icon: <BrainCircuit size={18} className="text-purple-500" />, label: 'Orchestrator' },
    { icon: <Mail size={18} className="text-blue-500" />, label: 'Email Agent' },
    { icon: <Wallet size={18} className="text-green-500" />, label: 'Finance Agent' },
    { icon: <CalendarDays size={18} className="text-orange-500" />, label: 'Calendar Agent' },
    { icon: <ListTodo size={18} className="text-pink-500" />, label: 'Task Agent' },
    { icon: <FileText size={18} className="text-gray-500" />, label: 'Document Agent' },
    { icon: <ShieldAlert size={18} className="text-red-500" />, label: 'Risk Agent' },
    { icon: <Bell size={18} className="text-yellow-500" />, label: 'Notification Agent' },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 overflow-y-auto">
      {/* Brand */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <Zap size={20} className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900 leading-tight">LifeOps AI</h1>
            <p className="text-xs text-gray-500">Agentic Life OS</p>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="px-4 py-2 flex-1">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.active 
                    ? 'bg-purple-50 text-purple-700' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Agents */}
        <div className="mt-8">
          <h2 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Agents</h2>
          <ul className="space-y-1">
            {agentItems.map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-gray-600 font-bold">
            AS
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">Arjun Sharma</p>
            <p className="text-xs text-gray-500">Premium Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
