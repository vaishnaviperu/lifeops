import React, { useState } from 'react';
import { ShieldCheck, Check, X, AlertTriangle } from 'lucide-react';

const ApprovalCenter = () => {
  const [status, setStatus] = useState('pending'); // pending, approved, rejected

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col">
      <div className="p-5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-green-600" size={20} />
          <h3 className="font-bold text-gray-900">Approval Center</h3>
        </div>
        <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">1 Pending</span>
      </div>
      
      <div className="p-5 flex-1 flex flex-col justify-center">
        {status === 'pending' ? (
          <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-gray-50">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Action Required</span>
                <p className="font-medium text-gray-900 text-sm">Schedule Electricity Bill Payment</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Amount</span>
                <p className="font-bold text-gray-900">₹2,300</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-4 bg-white p-2 rounded-lg border border-gray-100">
              <AlertTriangle size={14} className="text-red-500" />
              <span className="text-xs text-red-600 font-medium">High Risk: Overlaps with Rent</span>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={() => setStatus('approved')}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1.5"
              >
                <Check size={16} /> Approve
              </button>
              <button 
                onClick={() => setStatus('rejected')}
                className="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1.5"
              >
                <X size={16} /> Reject
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-6">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${status === 'approved' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
              {status === 'approved' ? <Check size={24} /> : <X size={24} />}
            </div>
            <p className="font-medium text-gray-900">{status === 'approved' ? 'Action Approved' : 'Action Rejected'}</p>
            <p className="text-xs text-gray-500 mt-1">
              {status === 'approved' ? 'Payment has been scheduled.' : 'Payment schedule cancelled.'}
            </p>
            <button 
              onClick={() => setStatus('pending')}
              className="mt-4 text-xs text-purple-600 font-medium hover:underline"
            >
              Reset Demo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApprovalCenter;
