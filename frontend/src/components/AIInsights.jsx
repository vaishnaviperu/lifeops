import React from 'react';
import { Zap, AlertCircle, ChevronRight, RefreshCw, AlertTriangle } from 'lucide-react';

const AIInsights = ({ insights }) => {
  if (!insights) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden h-full">
      <div className="p-5 border-b border-gray-100 flex items-center gap-2">
        <Zap className="text-purple-500" size={20} />
        <h3 className="font-bold text-gray-900">AI Insights</h3>
      </div>
      
      <div className="p-5">
        {/* Main Insight */}
        <div className="bg-purple-50 rounded-xl p-4 mb-4 border border-purple-100">
          <div className="flex gap-3">
            <div className="mt-0.5">
              <AlertCircle className="text-purple-600" size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 text-sm mb-1">{insights.main.title}</h4>
              <p className="text-xs text-purple-700 leading-relaxed mb-3">
                {insights.main.description}
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium py-2 px-4 rounded-lg transition-colors shadow-sm">
                {insights.main.button}
              </button>
            </div>
          </div>
        </div>

        {/* Other Insights */}
        <ul className="space-y-3">
          {insights.others.map((insight, index) => {
            let icon = <Zap className="text-yellow-500" size={16} />;
            if (insight.includes('subscription')) icon = <RefreshCw className="text-green-500" size={16} />;
            if (insight.includes('late')) icon = <AlertTriangle className="text-blue-500" size={16} />;

            return (
              <li key={index} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
                <div className="mt-0.5 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 shrink-0">
                  {icon}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed flex-1">
                  {insight}
                </p>
                <ChevronRight className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AIInsights;
