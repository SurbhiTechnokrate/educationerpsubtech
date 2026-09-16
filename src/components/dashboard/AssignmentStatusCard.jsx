import React from 'react';
import { useApp } from '../../context/AppContext';
import { FileSpreadsheet } from 'lucide-react';
import { assignmentStatusData } from '../../data/mockData';

export const AssignmentStatusCard = () => {
  const { setCurrentPage } = useApp();

  // SVG Donut calculation
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const submittedStroke = (assignmentStatusData.submittedPercentage / 100) * circumference;
  const pendingStroke = (assignmentStatusData.pendingPercentage / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Assignment Status</h3>
          </div>
          <button
            onClick={() => setCurrentPage('assignments')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All
          </button>
        </div>

        {/* Content: Donut Chart + Legend */}
        <div className="mt-4 flex items-center justify-between gap-4">
          {/* Donut Chart */}
          <div className="relative w-28 h-28 flex items-center justify-center flex-shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                className="text-slate-100"
                strokeWidth="12"
                stroke="currentColor"
                fill="transparent"
              />
              {/* Pending Segment (Amber) */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                className="text-amber-400 transition-all duration-700"
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={0}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
              {/* Submitted Segment (Emerald) */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                className="text-emerald-500 transition-all duration-700"
                strokeWidth="12"
                strokeDasharray={`${submittedStroke} ${circumference}`}
                strokeDashoffset={0}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-base font-extrabold text-slate-900 leading-none">
                {assignmentStatusData.submittedPercentage}%
              </span>
              <span className="text-[10px] font-semibold text-slate-500 mt-0.5">
                Submitted
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-600 font-medium">Submitted</span>
              </div>
              <span className="font-bold text-slate-800">
                {assignmentStatusData.submittedPercentage}% ({assignmentStatusData.submittedCount})
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-slate-600 font-medium">Pending</span>
              </div>
              <span className="font-bold text-slate-800">
                {assignmentStatusData.pendingPercentage}% ({assignmentStatusData.pendingCount})
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="text-slate-600 font-medium">Not Submitted</span>
              </div>
              <span className="font-bold text-slate-800">
                {assignmentStatusData.notSubmittedPercentage}% ({assignmentStatusData.notSubmittedCount})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
