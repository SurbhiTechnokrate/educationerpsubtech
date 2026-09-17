import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Zap,
  FilePlus,
  CalendarCheck,
  UserCheck,
  BookOpen
} from 'lucide-react';

export const QuickActionsCard = () => {
  const { openModal } = useApp();

  const actions = [
    {
      id: 'create-assignment',
      title: 'Create Assignment',
      icon: FilePlus,
      bg: 'bg-blue-50/80 hover:bg-blue-100/80 border-blue-200/80',
      iconColor: 'text-blue-600',
      iconBg: 'bg-white',
      onClick: () => openModal('createAssignment')
    },
    {
      id: 'enter-marks',
      title: 'Enter Marks',
      icon: CalendarCheck,
      bg: 'bg-purple-50/80 hover:bg-purple-100/80 border-purple-200/80',
      iconColor: 'text-purple-600',
      iconBg: 'bg-white',
      onClick: () => openModal('enterMarks')
    },
    {
      id: 'mark-attendance',
      title: 'Mark Attendance',
      icon: UserCheck,
      bg: 'bg-emerald-50/80 hover:bg-emerald-100/80 border-emerald-200/80',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-white',
      onClick: () => openModal('markAttendance')
    },
    {
      id: 'add-lesson-plan',
      title: 'Add Lesson Plan',
      icon: BookOpen,
      bg: 'bg-rose-50/80 hover:bg-rose-100/80 border-rose-200/80',
      iconColor: 'text-rose-600',
      iconBg: 'bg-white',
      onClick: () => openModal('addLessonPlan')
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
          <Zap className="w-4 h-4 text-blue-600 fill-blue-600" />
          <h3 className="font-bold text-slate-900 text-sm">Quick Actions</h3>
        </div>

        {/* 2x2 Grid */}
        <div className="mt-3.5 grid grid-cols-2 gap-2.5 sm:gap-3">
          {actions.map((act) => {
            const Icon = act.icon;
            return (
              <button
                key={act.id}
                onClick={act.onClick}
                className={`p-2.5 sm:p-3 rounded-xl border ${act.bg} flex items-center gap-2 sm:gap-2.5 text-left transition-all duration-150 group shadow-sm`}
              >
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${act.iconBg} ${act.iconColor} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                  {act.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
