import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  FilePlus,
  Upload,
  Calendar,
  Layers,
  Send
} from 'lucide-react';
import { CLASS_SECTIONS } from '../../data/mockData';

export const CreateAssignmentModal = () => {
  const { modalState, closeModal, createNewAssignment } = useApp();

  const [formData, setFormData] = useState({
    title: '',
    class: 'Class 8 - A',
    subject: 'Mathematics',
    dueDate: '20 Sep 2025',
    maxMarks: 25,
    description: '',
    fileName: 'Practice_Worksheet_Module.pdf'
  });

  if (!modalState.createAssignment) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    createNewAssignment({
      ...formData,
      totalStudents: formData.class.includes('8 - A') ? 32 : 30
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden animate-fade-in flex flex-col">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <FilePlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Create New Assignment</h3>
              <p className="text-xs text-slate-400 mt-0.5">Publish tasks & track submissions (Nursery to 10th)</p>
            </div>
          </div>
          <button
            onClick={() => closeModal('createAssignment')}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Assignment Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Color Matching Worksheet / Quadratic Equations Practice"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Target Class & Section
              </label>
              <select
                value={formData.class}
                onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                Subject
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Mathematics">Mathematics</option>
                <option value="Early Phonics">Early Phonics</option>
                <option value="Early Foundations">Early Foundations</option>
                <option value="Science & EVS">Science & EVS</option>
                <option value="English Language">English Language</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Due Date
              </label>
              <input
                type="text"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Max Marks
              </label>
              <input
                type="number"
                min="5"
                max="100"
                value={formData.maxMarks}
                onChange={(e) => setFormData({ ...formData, maxMarks: Number(e.target.value) })}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Instructions & Problem Statement
            </label>
            <textarea
              rows={3}
              placeholder="Describe assignment instructions, questions, or workbook exercise numbers..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none"
            />
          </div>

          {/* Attachment Preview Box */}
          <div className="p-3.5 bg-slate-50 border border-dashed border-slate-300 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Upload className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-slate-700">{formData.fileName}</span>
            </div>
            <span className="text-[10px] text-slate-400 font-semibold uppercase">PDF Attached</span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => closeModal('createAssignment')}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-600/30 transition-all flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Publish Assignment</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
