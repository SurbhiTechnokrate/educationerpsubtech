import React from 'react';
import { useApp } from '../../context/AppContext';
import { Megaphone } from 'lucide-react';

export const AnnouncementsCard = () => {
  const { announcements, setCurrentPage } = useApp();

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <Megaphone className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Recent Announcements</h3>
          </div>
          <button
            onClick={() => setCurrentPage('announcements')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All
          </button>
        </div>

        {/* List */}
        <div className="mt-3 space-y-3">
          {announcements.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => setCurrentPage('announcements')}
              className="flex items-start justify-between gap-3 p-1.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className="flex items-start gap-2.5 min-w-0">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${item.dotColor} mt-1.5 flex-shrink-0`}
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 flex-shrink-0 whitespace-nowrap">
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
