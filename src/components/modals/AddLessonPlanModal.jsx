import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  BookOpen,
  Plus,
  Save,
  Clock,
  Layers
} from 'lucide-react';
import { CLASS_SECTIONS } from '../../data/mockData';

export const AddLessonPlanModal = () => {
  const { modalState, closeModal, addNewLessonPlan } = useApp();

  const [planData, setPlanData] = useState({
    title: '',
    class: 'Class 8 - A',
    subject: 'Mathematics',
    chapter: 'Chapter 5: Squares & Square Roots',
    duration: '45 mins',
    objectivesText: 'Understand square numbers properties\nCalculate square roots using prime factorization\nApply estimation methods',
    teachingAids: 'Graph Board, Algebra Manipulatives, Digital Simulation',
    homework: 'Exercise 5.1 Questions 1 to 8'
  });

  if (!modalState.addLessonPlan) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!planData.title.trim()) return;
    addNewLessonPlan({
      ...planData,
      objectives: planData.objectivesText.split('\n').filter(Boolean)
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden animate-fade-in flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center text-white flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">Add Lesson Plan</h3>
              <p className="text-xs text-slate-400 mt-0.5">Curriculum & Pedagogical Preparation (Nursery to 10th)</p>
            </div>
          </div>
          <button
            onClick={() => closeModal('addLessonPlan')}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 flex-1 overflow-y-auto">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Lesson / Topic Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Color Sorting Tactile Play / Finding Square Roots"
              value={planData.title}
              onChange={(e) => setPlanData({ ...planData, title: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Target Class & Section
              </label>
              <select
                value={planData.class}
                onChange={(e) => setPlanData({ ...planData, class: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                {CLASS_SECTIONS.map((sec) => (
                  <option key={sec} value={sec}>
                    {sec}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Duration
              </label>
              <input
                type="text"
                value={planData.duration}
                onChange={(e) => setPlanData({ ...planData, duration: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Chapter / Module Reference
            </label>
            <input
              type="text"
              value={planData.chapter}
              onChange={(e) => setPlanData({ ...planData, chapter: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Key Learning Objectives (One per line)
            </label>
            <textarea
              rows={3}
              value={planData.objectivesText}
              onChange={(e) => setPlanData({ ...planData, objectivesText: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Teaching Aids / Tools
              </label>
              <input
                type="text"
                value={planData.teachingAids}
                onChange={(e) => setPlanData({ ...planData, teachingAids: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Homework Task
              </label>
              <input
                type="text"
                value={planData.homework}
                onChange={(e) => setPlanData({ ...planData, homework: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => closeModal('addLessonPlan')}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-md shadow-rose-600/30 transition-all flex items-center gap-2"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Lesson Plan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
