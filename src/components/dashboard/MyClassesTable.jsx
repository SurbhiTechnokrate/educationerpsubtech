import React from 'react';
import { useApp } from '../../context/AppContext';
import { GraduationCap } from 'lucide-react';
import { myClassesData } from '../../data/mockData';

export const MyClassesTable = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">My Classes & Divisions</h3>
              <span className="text-[10px] text-slate-400 font-semibold">Nursery to 10th Class Spectrum</span>
            </div>
          </div>
          <button
            onClick={() => setCurrentPage('classes')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All ({myClassesData.length})
          </button>
        </div>

        {/* Scrollable Container for Tablet & Mobile */}
        <div className="overflow-x-auto touch-scroll">
          <div className="min-w-[480px]">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider py-2.5 px-3">
              <div className="col-span-3">Class & Section</div>
              <div className="col-span-4">Subject</div>
              <div className="col-span-2 text-center">Students</div>
              <div className="col-span-2">Schedule</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            {/* Rows */}
            <div className="space-y-1.5">
              {myClassesData.slice(0, 5).map((cls) => (
                <div
                  key={cls.id}
                  className="grid grid-cols-12 gap-2 items-center text-xs py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="col-span-3 font-semibold text-slate-800 flex items-center gap-1.5">
                    <span className="font-bold text-blue-600">{cls.class}</span>
                    <span className="text-slate-400">- {cls.division}</span>
                    {cls.isClassTeacher && (
                      <span className="text-[9px] bg-purple-100 text-purple-700 px-1.5 py-0.2 rounded font-bold">CT</span>
                    )}
                  </div>
                  <div className="col-span-4 text-slate-600 font-medium truncate" title={cls.subject}>
                    {cls.subject}
                  </div>
                  <div className="col-span-2 text-center font-bold text-slate-800">
                    {cls.students}
                  </div>
                  <div className="col-span-2 text-slate-500 font-medium truncate" title={cls.schedule}>
                    {cls.schedule}
                  </div>
                  <div className="col-span-1 text-right">
                    <button
                      onClick={() => setCurrentPage('classes')}
                      className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
