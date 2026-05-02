import React, { useState } from 'react';
import axios from 'axios';
import { Play, Loader2, Bot, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';

const API_URL = 'http://127.0.0.1:8000/api';

const AgentTestPanel = () => {
  const [eventText, setEventText] = useState('Electricity bill of ₹2,300 is due on 05 May.');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleRunAgent = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_URL}/agents/test`, { event_text: eventText });
      setResult(response.data);
    } catch (err) {
      setError('Failed to run agent. Ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col">
      <div className="p-5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="text-purple-600" size={20} />
          <h3 className="font-bold text-gray-900">Agent Test Panel</h3>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-4">
          <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Simulated Event Text</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
            />
            <button 
              onClick={handleRunAgent}
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} />}
              Run Workflow
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 border border-red-100">
            {error}
          </div>
        )}

        {result && (
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex-1 overflow-y-auto text-sm">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Event Detected</span>
                <p className="font-medium text-gray-900">{result.event_detected}</p>
              </div>

              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Agents Orchestrated</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {result.agents_called?.map((agent, i) => (
                    <span key={i} className="bg-white border border-gray-200 text-xs text-gray-600 px-2 py-1 rounded-md">
                      {agent}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1">
                    <CheckCircle2 size={14} className="text-blue-500" />
                    <span className="text-xs font-bold text-gray-700">Task Created</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{result.task?.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Priority: {result.task?.priority}</p>
                </div>

                <div className="bg-white p-3 rounded-lg border border-red-100 shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1">
                    <AlertTriangle size={14} className="text-red-500" />
                    <span className="text-xs font-bold text-gray-700">Risk Assessment</span>
                  </div>
                  <p className="text-sm font-medium text-red-600">{result.risk?.level} Risk</p>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{result.risk?.reason}</p>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Notification Generated</span>
                <p className="text-gray-700 bg-purple-50 p-3 rounded-lg text-sm border border-purple-100 leading-relaxed">
                  "{result.notification}"
                </p>
              </div>
            </div>
          </div>
        )}
        
        {!result && !loading && !error && (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
            <Bot size={48} className="mb-3 opacity-20" />
            <p className="text-sm">Click run to test the multi-agent workflow.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentTestPanel;
