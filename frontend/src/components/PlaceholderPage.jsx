import React from 'react';
import { Hammer } from 'lucide-react';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-[60vh] text-center">
      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 border border-purple-200">
        <Hammer size={32} className="text-purple-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon: {title}</h2>
      <p className="text-gray-500 max-w-md">
        This module is currently under development. The LifeOps AI agent logic is being trained to handle {title.toLowerCase()} workflows.
      </p>
    </div>
  );
};

export default PlaceholderPage;
