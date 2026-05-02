import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChevronDown, ArrowRight } from 'lucide-react';

const SpendingOverview = ({ spending }) => {
  if (!spending) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-gray-900">Spending Overview</h3>
        <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900 transition-colors">
          This Month <ChevronDown size={14} />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-between gap-6">
        <div className="relative w-32 h-32 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={spending}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {spending.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => `₹${value.toLocaleString()}`}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-sm font-bold text-gray-900">₹41,000</span>
            <span className="text-[10px] text-gray-500">of ₹50,000</span>
          </div>
        </div>

        <div className="flex-1">
          <ul className="space-y-3">
            {spending.map((item, index) => (
              <li key={index} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="font-medium text-gray-700">{item.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 w-12 text-right">₹{item.value.toLocaleString()}</span>
                  <span className="text-gray-400 w-8 text-right">{item.percent}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <a href="#" className="flex items-center gap-1 text-xs font-medium text-purple-600 hover:text-purple-700 w-max">
          View full report <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

export default SpendingOverview;
