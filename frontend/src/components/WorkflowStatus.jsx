import React from 'react';

const WorkflowStatus = ({ workflows }) => {
  if (!workflows) return null;

  const statusColor = {
    'In Progress': 'text-blue-600 bg-blue-50',
    'Planning': 'text-purple-600 bg-purple-50',
    'Pending': 'text-orange-600 bg-orange-50',
  };

  const dotColor = {
    'In Progress': 'bg-blue-500',
    'Planning': 'bg-purple-500',
    'Pending': 'bg-orange-500',
    'Pay Electricity Bill': 'bg-red-500' // specific override from image reference
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-gray-900">Workflow Status</h3>
        <a href="#" className="text-xs font-medium text-purple-600 hover:text-purple-700">View all</a>
      </div>

      <ul className="space-y-4">
        {workflows.map((workflow, index) => {
           const dot = dotColor[workflow.title] || dotColor[workflow.status] || 'bg-gray-500';
           return (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-1.5 h-1.5 rounded-full ${dot}`}></div>
                <span className="text-sm font-medium text-gray-700">{workflow.title}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusColor[workflow.status]}`}>
                  {workflow.status}
                </span>
                <span className="text-xs text-gray-500 w-16 text-right">{workflow.due}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkflowStatus;
