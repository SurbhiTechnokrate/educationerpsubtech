import React from 'react';
import { useApp } from '../../context/AppContext';
import { Calendar } from 'lucide-react';
import { upcomingExamsData } from '../../data/mockData';

export const UpcomingExamsCard = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Upcoming Exams</h3>
          </div>
          <button
            onClick={() => setCurrentPage('exams')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All
          </button>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider py-2.5 px-2">
          <div className="col-span-5">Subject</div>
          <div className="col-span-4">Class</div>
          <div className="col-span-3 text-right">Date</div>
        </div>

        {/* Rows */}
        <div className="space-y-2">
          {upcomingExamsData.map((exam) => (
            <div
              key={exam.id}
              className="grid grid-cols-12 gap-2 items-center text-xs py-2.5 px-2.5 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <div className="col-span-5 font-medium text-slate-700 truncate" title={exam.subject}>
                {exam.subject}
              </div>
              <div className="col-span-4 text-slate-600 font-semibold truncate">
                {exam.class}
              </div>
              <div className="col-span-3 text-right text-slate-500 font-medium whitespace-nowrap text-[11px]">
                {exam.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
