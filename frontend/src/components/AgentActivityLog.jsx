import React from 'react';
import { Activity, Mail, Wallet, CalendarDays, ListTodo, ShieldAlert, Bell, CheckCircle2 } from 'lucide-react';

const AgentActivityLog = () => {
  const activities = [
    { agent: 'Email Agent', action: 'extracted bill details', icon: <Mail size={14} className="text-blue-500" />, time: 'Just now' },
    { agent: 'Finance Agent', action: 'checked monthly budget', icon: <Wallet size={14} className="text-green-500" />, time: 'Just now' },
    { agent: 'Calendar Agent', action: 'checked due date', icon: <CalendarDays size={14} className="text-orange-500" />, time: '1 min ago' },
    { agent: 'Task Agent', action: 'created payment task', icon: <ListTodo size={14} className="text-pink-500" />, time: '1 min ago' },
    { agent: 'Risk Agent', action: 'marked priority as High', icon: <ShieldAlert size={14} className="text-red-500" />, time: '1 min ago' },
    { agent: 'Notification Agent', action: 'generated alert', icon: <Bell size={14} className="text-yellow-500" />, time: '2 mins ago' },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col">
      <div className="p-5 border-b border-gray-100 flex items-center gap-2">
        <Activity className="text-blue-600" size={20} />
        <h3 className="font-bold text-gray-900">Agent Activity Log</h3>
      </div>
      
      <div className="p-5 flex-1 overflow-y-auto">
        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-200"></div>
          <ul className="space-y-4">
            {activities.map((item, index) => (
              <li key={index} className="relative flex gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0 z-10">
                  {item.icon}
                </div>
                <div className="flex-1 bg-gray-50 group-hover:bg-gray-100 rounded-lg p-3 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold text-gray-900">{item.agent}</span>
                    <span className="text-[10px] text-gray-400">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-green-500 shrink-0" />
                    <p className="text-xs text-gray-600">{item.action}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AgentActivityLog;
