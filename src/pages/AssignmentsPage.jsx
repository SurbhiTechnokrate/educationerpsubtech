import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FileSpreadsheet,
  Plus,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  Eye,
  Check,
  GraduationCap
} from 'lucide-react';
import { CLASS_SECTIONS, CLASS_CATEGORIES } from '../data/mockData';

export const AssignmentsPage = () => {
  const { assignments, openModal, addToast } = useApp();
  const [classFilter, setClassFilter] = useState('all');

  const filteredAssignments = assignments.filter((asn) => {
    if (classFilter === 'all') return true;
    return asn.class.includes(classFilter) || classFilter.includes(asn.class);
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Assignments & Homework</h2>
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-black rounded-full">
              Nursery to 10th Class
            </span>
          </div>
          <p className="text-sm text-slate-500 font-medium mt-0.5">
            Create tasks, track submission status, and enter homework marks across all grades (BRD §23).
          </p>
        </div>

        <button
          onClick={() => openModal('createAssignment')}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/30 transition-all flex items-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Create Assignment</span>
        </button>
      </div>

      {/* Class Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setClassFilter('all')}
          className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
            classFilter === 'all'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
          }`}
        >
          All Classes
        </button>
        {['Nursery', 'Class 3', 'Class 5', 'Class 8', 'Class 9', 'Class 10'].map((cls) => (
          <button
            key={cls}
            onClick={() => setClassFilter(cls)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
              classFilter === cls
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            {cls}
          </button>
        ))}
      </div>

      {/* Grid of assignments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredAssignments.map((asn) => {
          const submissionPct = Math.round((asn.submittedCount / (asn.totalStudents || 1)) * 100);
          return (
            <div
              key={asn.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg">
                    {asn.class} • {asn.subject}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    asn.status === 'Completed'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {asn.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mt-3">{asn.title}</h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{asn.description}</p>

                {/* Progress bar */}
                <div className="mt-4 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Submissions</span>
                    <span className="text-blue-600">{submissionPct}% ({asn.submittedCount}/{asn.totalStudents})</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${submissionPct}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 font-medium mt-3">
                  <span>Assigned: {asn.assignedDate}</span>
                  <span className="text-rose-600 font-semibold">Due: {asn.dueDate}</span>
                  <span>Max Marks: {asn.maxMarks}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => addToast(`Reviewing submissions for ${asn.title}`, 'info')}
                  className="px-4 py-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 rounded-xl text-xs font-bold transition-colors"
                >
                  Review Submissions ({asn.submittedCount})
                </button>
                <button
                  onClick={() => addToast(`Sent reminder notification to ${asn.pendingCount} pending students`, 'success')}
                  className="px-3 py-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
                >
                  Send Reminder 🔔
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
