import React from 'react';
import { Mail, Calendar as CalendarIcon, Zap, Building } from 'lucide-react';

const iconMap = {
  'Gmail': <Mail size={16} />,
  'Calendar': <CalendarIcon size={16} />,
  'Subscription': <Zap size={16} />,
  'Bank': <Building size={16} />
};

const Notifications = ({ notifications }) => {
  if (!notifications) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900">Recent Notifications</h3>
        <a href="#" className="text-xs font-medium text-purple-600 hover:text-purple-700">View all</a>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 -mr-2">
        <ul className="space-y-4">
          {notifications.map((notif, index) => (
            <li key={index} className="flex gap-3 group cursor-pointer">
              <div className={`w-8 h-8 rounded-full ${notif.bgColor} flex items-center justify-center shrink-0 mt-0.5`}>
                <span className={notif.iconColor}>{iconMap[notif.source] || <Zap size={16} />}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs font-bold text-gray-900 leading-tight group-hover:text-purple-600 transition-colors">
                    {notif.title}
                  </p>
                  <span className="text-[10px] text-gray-400 shrink-0 mt-0.5">{notif.time}</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">{notif.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
