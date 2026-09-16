import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  FileCheck,
  Plus,
  GraduationCap
} from 'lucide-react';
import { upcomingExamsData, CLASS_CATEGORIES } from '../data/mockData';

export const ExamsPage = () => {
  const { openModal, setCurrentPage } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredExams = upcomingExamsData.filter((exam) => {
    if (selectedCategory === 'all') return true;
    const cat = CLASS_CATEGORIES.find(c => c.id === selectedCategory);
    if (!cat || !cat.classes) return true;
    return cat.classes.some(c => exam.class.includes(c));
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Examinations & Assessments</h2>
            <span className="px-2.5 py-0.5 bg-purple-100 text-purple-700 text-xs font-black rounded-full">
              Nursery to 10th Class
            </span>
          </div>
          <p className="text-sm text-slate-500 font-medium mt-0.5">
            Exam schedules, room allocations, student eligibility & marks processing (BRD §22, §52, §86).
          </p>
        </div>

        <button
          onClick={() => openModal('enterMarks')}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-600/30 transition-all flex items-center gap-1.5"
        >
          <Award className="w-3.5 h-3.5" />
          <span>Enter Unit Test Marks</span>
        </button>
      </div>

      {/* Stage Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {CLASS_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              selectedCategory === cat.id
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Exams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredExams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between">
                <span className="px-2.5 py-1 bg-purple-50 text-purple-700 font-bold text-xs rounded-lg">
                  {exam.class}
                </span>
                <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-extrabold">
                  {exam.type}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mt-3">{exam.subject}</h3>

              <div className="mt-4 space-y-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Exam Date:</span>
                  <span className="font-bold text-slate-800 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    {exam.date}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Timing:</span>
                  <span className="font-semibold text-slate-700 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {exam.time}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Seating Hall:</span>
                  <span className="font-semibold text-slate-700 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exam.room}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Maximum Marks:</span>
                  <span className="font-bold text-slate-900">{exam.totalMarks} Marks</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setCurrentPage('marks')}
                className="px-4 py-2 bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-700 rounded-xl text-xs font-bold transition-all"
              >
                Go to Marks Grid →
              </button>
              <button
                onClick={() => openModal('enterMarks')}
                className="text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                Quick Enter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
