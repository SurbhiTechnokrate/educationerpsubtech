import React from 'react';
import { useApp } from '../../context/AppContext';
import { BookOpen, ChevronRight } from 'lucide-react';
import { syllabusProgressData } from '../../data/mockData';

export const SyllabusProgressCard = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Syllabus Progress</h3>
          </div>
          <button
            onClick={() => setCurrentPage('syllabus')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All
          </button>
        </div>

        {/* Progress Bars */}
        <div className="mt-4 space-y-4">
          {syllabusProgressData.map((item) => (
            <div
              key={item.id}
              onClick={() => setCurrentPage('syllabus')}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <span className="group-hover:text-blue-600 transition-colors">{item.subject}</span>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-slate-800">{item.progress}%</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-500`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
