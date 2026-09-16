import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  BookOpen,
  Plus,
  Clock,
  CheckCircle,
  Calendar,
  Layers,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { ALL_CLASSES } from '../data/mockData';

export const LessonPlansPage = () => {
  const { lessonPlans, openModal } = useApp();
  const [selectedClass, setSelectedClass] = useState('all');

  const filteredPlans = lessonPlans.filter(plan => {
    if (selectedClass === 'all') return true;
    return plan.class.includes(selectedClass) || selectedClass.includes(plan.class);
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Lesson Plans & Curriculum</h2>
            <span className="px-2.5 py-0.5 bg-rose-100 text-rose-700 text-xs font-black rounded-full">
              Nursery to 10th Class
            </span>
          </div>
          <p className="text-sm text-slate-500 font-medium mt-0.5">
            Structured lesson delivery, pedagogical objectives, and teaching aids across all grade levels (BRD §13).
          </p>
        </div>

        <button
          onClick={() => openModal('addLessonPlan')}
          className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-md shadow-rose-600/30 transition-all flex items-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Lesson Plan</span>
        </button>
      </div>

      {/* Class Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setSelectedClass('all')}
          className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
            selectedClass === 'all'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
          }`}
        >
          All Classes
        </button>
        {['Nursery', 'Class 3', 'Class 8', 'Class 10'].map((cls) => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedClass === cls
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            {cls}
          </button>
        ))}
      </div>

      {/* Lesson Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between">
                <span className="px-2.5 py-1 bg-rose-50 text-rose-700 font-bold rounded-lg text-xs">
                  {plan.class}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                  plan.status === 'Completed'
                    ? 'bg-emerald-100 text-emerald-700'
                    : plan.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {plan.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mt-3">{plan.title}</h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5">{plan.chapter}</p>

              <div className="flex items-center gap-4 text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {plan.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {plan.duration}
                </span>
              </div>

              {/* Objectives */}
              <div className="mt-4">
                <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Learning Objectives
                </h4>
                <ul className="space-y-1.5">
                  {plan.objectives?.map((obj, i) => (
                    <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teaching Aids */}
              <div className="mt-4 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                <span className="font-bold text-slate-700 block text-[11px] uppercase mb-1">
                  Teaching Aids & Tools
                </span>
                <p className="text-slate-600 text-[11px]">{plan.teachingAids}</p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500">
              <strong className="text-slate-700">Homework:</strong> {plan.homework}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
