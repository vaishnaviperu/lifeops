import React from 'react';
import { Calendar as CalendarIcon, MoreHorizontal } from 'lucide-react';

const ScheduleCard = ({ schedule }) => {
  if (!schedule) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CalendarIcon className="text-gray-400" size={20} />
          <h3 className="font-bold text-gray-900">Today's Schedule</h3>
        </div>
        <a href="#" className="text-xs font-medium text-purple-600 hover:text-purple-700">View calendar</a>
      </div>

      <div className="relative">
        <div className="absolute left-[39px] top-2 bottom-2 w-px bg-gray-100"></div>
        <ul className="space-y-4">
          {schedule.map((event, index) => (
            <li key={index} className="flex gap-4 group">
              <div className="w-16 text-right shrink-0 pt-0.5">
                <span className="text-xs font-medium text-gray-500">{event.time}</span>
              </div>
              <div className="relative z-10 flex items-start gap-4 flex-1">
                <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${event.color} ring-4 ring-white shadow-sm`}></div>
                <div className="flex-1 bg-gray-50 group-hover:bg-gray-100 rounded-lg px-4 py-2 transition-colors flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">{event.title}</span>
                  <span className="text-xs text-gray-400">{event.duration}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScheduleCard;
