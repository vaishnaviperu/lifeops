import React from 'react';
import { CheckCircle2, CreditCard, Calendar, PieChart, Repeat } from 'lucide-react';

const iconMap = {
  'Today\'s Priorities': <CheckCircle2 className="text-purple-500" size={24} />,
  'Upcoming Payments': <CreditCard className="text-green-500" size={24} />,
  'Schedule Today': <Calendar className="text-blue-500" size={24} />,
  'Monthly Budget': <PieChart className="text-orange-500" size={24} />,
  'Active Subscriptions': <Repeat className="text-purple-600" size={24} />
};

const StatCard = ({ title, value, footer, alert, progress }) => {
  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
          {iconMap[title] || <CheckCircle2 className="text-gray-500" size={24} />}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
          <p className="text-xs text-gray-400 mt-1">{footer}</p>
        </div>
      </div>
      
      {(alert || progress !== undefined) && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          {alert && (
            <p className={`text-xs font-medium ${alert.includes('Due') ? 'text-red-500' : 'text-blue-500'}`}>
              {alert}
            </p>
          )}
          {progress !== undefined && (
            <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1">
              <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StatCard;
