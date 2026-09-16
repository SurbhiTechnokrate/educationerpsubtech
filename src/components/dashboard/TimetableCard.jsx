import React from 'react';
import { useApp } from '../../context/AppContext';
import { Calendar } from 'lucide-react';

export const TimetableCard = () => {
  const { timetable, setCurrentPage } = useApp();

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Today's Timetable</h3>
          </div>
          <button
            onClick={() => setCurrentPage('timetable')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All
          </button>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider py-2.5 px-2">
          <div className="col-span-4">Time</div>
          <div className="col-span-3">Class</div>
          <div className="col-span-2">Subject</div>
          <div className="col-span-3">Topic</div>
        </div>

        {/* Rows */}
        <div className="space-y-2">
          {timetable.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-2 items-center text-xs py-2 px-2.5 rounded-xl bg-slate-50/70 hover:bg-slate-100/80 transition-colors"
            >
              <div className="col-span-4 flex items-center">
                {/* Thick accent bar on left */}
                <div
                  className={`border-l-4 ${item.borderColor} pl-2 font-medium text-slate-700`}
                >
                  {item.time}
                </div>
              </div>
              <div className="col-span-3 font-semibold text-slate-900">
                {item.class}
              </div>
              <div className="col-span-2 text-slate-600 truncate">
                {item.subject}
              </div>
              <div className="col-span-3 text-slate-500 font-medium truncate" title={item.topic}>
                {item.topic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
