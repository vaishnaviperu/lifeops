import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <header className="flex items-center justify-between py-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          Good morning, Arjun 👋
        </h2>
        <p className="text-sm text-gray-500 mt-1">{currentDate}</p>
      </div>

      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="w-64 pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all shadow-sm"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <kbd className="hidden sm:inline-block border border-gray-200 rounded px-1.5 text-[10px] font-medium text-gray-500">⌘</kbd>
            <kbd className="hidden sm:inline-block border border-gray-200 rounded px-1.5 text-[10px] font-medium text-gray-500">K</kbd>
          </div>
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full border border-gray-200 shadow-sm">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
