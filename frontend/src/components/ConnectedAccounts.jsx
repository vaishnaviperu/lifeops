import React from 'react';
import { Mail, Calendar as CalendarIcon, Building, CheckCircle2, Plus } from 'lucide-react';

const iconMap = {
  'M': <Mail size={18} className="text-red-500" />,
  '37': <CalendarIcon size={18} className="text-blue-500" />,
  'Bank': <Building size={18} className="text-gray-700" />
};

const ConnectedAccounts = ({ accounts }) => {
  if (!accounts) return null;

  return (
    <div className="flex items-center gap-4 mt-6">
      <h3 className="font-bold text-gray-900 mr-2 shrink-0">Connected Accounts</h3>
      
      <div className="flex gap-4 overflow-x-auto pb-2 flex-1 scrollbar-hide">
        {accounts.map((acc, index) => (
          <div key={index} className="bg-white border border-gray-100 rounded-xl px-4 py-2 flex items-center gap-3 shadow-sm shrink-0 min-w-[180px]">
            <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center border border-gray-100 shrink-0">
              {iconMap[acc.icon] || <Building size={18} />}
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">{acc.name}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[10px] text-gray-500">{acc.status}</span>
                <CheckCircle2 size={10} className="text-green-500" />
              </div>
            </div>
          </div>
        ))}

        <button className="bg-white border border-dashed border-gray-300 rounded-xl px-4 py-2 flex items-center justify-center gap-2 hover:bg-gray-50 hover:border-purple-300 transition-colors shrink-0 text-purple-600">
          <Plus size={16} />
          <span className="text-xs font-medium">Add Account</span>
        </button>
      </div>
    </div>
  );
};

export default ConnectedAccounts;
