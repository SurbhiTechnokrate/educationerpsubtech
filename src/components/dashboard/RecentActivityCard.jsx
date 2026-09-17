import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Clock,
  FileCheck,
  FileText,
  Calendar,
  MessageSquare,
  BookOpen
} from 'lucide-react';

export const RecentActivityCard = () => {
  const { activities } = useApp();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FileCheck':
        return FileCheck;
      case 'FileText':
        return FileText;
      case 'Calendar':
        return Calendar;
      case 'MessageSquare':
        return MessageSquare;
      case 'BookOpen':
        return BookOpen;
      default:
        return FileText;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Clock className="w-4 h-4 text-blue-600" />
          <h3 className="font-bold text-slate-900 text-sm">Recent Activity</h3>
        </div>

        {/* Activity List */}
        <div className="mt-3.5 space-y-3">
          {activities.slice(0, 5).map((act) => {
            const Icon = getIcon(act.icon);
            return (
              <div key={act.id} className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${act.color || 'bg-blue-50 text-blue-600 border-blue-200'}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-slate-800 truncate" title={act.title}>
                    {act.title}
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {act.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
