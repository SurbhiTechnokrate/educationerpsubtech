import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  UserPlus,
  BookOpen,
  Calendar,
  FileText,
  FileCheck
} from 'lucide-react';

export const MetricCards = () => {
  const { kpis, setCurrentPage, openModal } = useApp();

  const cards = [
    {
      id: 'total-classes',
      label: 'Total Classes',
      value: kpis.totalClasses,
      icon: Users,
      iconBg: 'bg-blue-100/70',
      iconColor: 'text-blue-600',
      onClick: () => setCurrentPage('classes')
    },
    {
      id: 'total-students',
      label: 'Total Students',
      value: kpis.totalStudents,
      icon: UserPlus,
      iconBg: 'bg-emerald-100/70',
      iconColor: 'text-emerald-600',
      onClick: () => setCurrentPage('students')
    },
    {
      id: 'subjects-assigned',
      label: 'Subjects Assigned',
      value: kpis.subjectsAssigned,
      icon: BookOpen,
      iconBg: 'bg-purple-100/70',
      iconColor: 'text-purple-600',
      onClick: () => setCurrentPage('subjects')
    },
    {
      id: 'todays-classes',
      label: "Today's Classes",
      value: kpis.todaysClasses,
      icon: Calendar,
      iconBg: 'bg-orange-100/70',
      iconColor: 'text-orange-600',
      onClick: () => setCurrentPage('timetable')
    },
    {
      id: 'pending-assignments',
      label: 'Pending Assignments',
      value: kpis.pendingAssignments,
      icon: FileText,
      iconBg: 'bg-rose-100/70',
      iconColor: 'text-rose-600',
      onClick: () => setCurrentPage('assignments')
    },
    {
      id: 'pending-marks',
      label: 'Pending Marks',
      value: kpis.pendingMarks,
      icon: FileCheck,
      iconBg: 'bg-cyan-100/70',
      iconColor: 'text-cyan-600',
      onClick: () => setCurrentPage('marks')
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {cards.map((card) => {
        const IconComponent = card.icon;
        return (
          <div
            key={card.id}
            onClick={card.onClick}
            className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group flex items-center gap-3.5 hover:border-slate-300"
          >
            <div
              className={`w-12 h-12 rounded-2xl ${card.iconBg} ${card.iconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200`}
            >
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 leading-tight">
                {card.label}
              </p>
              <p className="text-2xl font-bold text-slate-900 mt-0.5 tracking-tight">
                {card.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
