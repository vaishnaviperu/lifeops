import React from 'react';
import { Home, Zap, Wifi, CreditCard } from 'lucide-react';

const iconMap = {
  'Rent': <Home className="text-orange-500" size={16} />,
  'Electricity Bill': <Zap className="text-yellow-500" size={16} />,
  'Internet Bill': <Wifi className="text-blue-500" size={16} />,
  'Credit Card Bill': <CreditCard className="text-green-500" size={16} />,
};

const bgMap = {
  'Rent': 'bg-orange-50',
  'Electricity Bill': 'bg-yellow-50',
  'Internet Bill': 'bg-blue-50',
  'Credit Card Bill': 'bg-green-50',
};

const PaymentsCard = ({ payments }) => {
  if (!payments) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-gray-900">Upcoming Payments</h3>
        <a href="#" className="text-xs font-medium text-purple-600 hover:text-purple-700">View all</a>
      </div>

      <ul className="space-y-4">
        {payments.map((payment, index) => (
          <li key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg ${bgMap[payment.title] || 'bg-gray-100'} flex items-center justify-center shrink-0`}>
                {iconMap[payment.title] || <CreditCard className="text-gray-500" size={16} />}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{payment.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{payment.due}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">{payment.amount}</p>
              <p className={`text-[10px] font-medium mt-1 uppercase tracking-wider ${
                payment.priority === 'High' ? 'text-red-500' :
                payment.priority === 'Medium' ? 'text-orange-500' : 'text-green-500'
              }`}>
                {payment.priority}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentsCard;
