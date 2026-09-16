import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  BarChart3,
  TrendingUp,
  Award,
  AlertTriangle,
  Users,
  CheckCircle,
  Eye,
  GraduationCap
} from 'lucide-react';
import { CLASS_SECTIONS } from '../data/mockData';

export const StudentPerformancePage = () => {
  const { students, openModal } = useApp();
  const [selectedClass, setSelectedClass] = useState('all');

  const filteredStudents = selectedClass === 'all'
    ? students
    : students.filter(s => `${s.class} - ${s.division}` === selectedClass || s.class === selectedClass);

  const toppers = [...filteredStudents]
    .sort((a, b) => (b.mathScore || 0) - (a.mathScore || 0))
    .slice(0, 3);

  const atRisk = filteredStudents.filter(
    s => parseFloat(s.attendance) < 80 || (s.mathScore && s.mathScore < 70)
  );

  const avgScore = filteredStudents.length > 0
    ? Math.round(filteredStudents.reduce((acc, s) => acc + (s.mathScore || 0), 0) / filteredStudents.length)
    : 0;

  const distinctionCount = filteredStudents.filter(s => (s.mathScore || 0) >= 85).length;
  const distinctionPct = filteredStudents.length > 0
    ? Math.round((distinctionCount / filteredStudents.length) * 100)
    : 0;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Academic Performance Analytics</h2>
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-black rounded-full">
              Nursery to 10th Class
            </span>
          </div>
          <p className="text-sm text-slate-500 font-medium mt-0.5">
            Subject Performance, Grade Trends & Early Intervention Alerts across all classes (BRD §44).
          </p>
        </div>

        {/* Class Filter Selector */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
          <GraduationCap className="w-4 h-4 text-blue-600 ml-1" />
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Classes (Institution Wide)</option>
            {CLASS_SECTIONS.map((sec) => (
              <option key={sec} value={sec}>
                {sec}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Top Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-semibold text-slate-400 block uppercase">Class Average Score</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-extrabold text-slate-900">{avgScore}%</span>
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
              <TrendingUp className="w-3.5 h-3.5" /> +3.4%
            </span>
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">Based on recent evaluations</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-semibold text-slate-400 block uppercase">Pass Percentage</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-extrabold text-emerald-600">100%</span>
            <span className="text-xs font-semibold text-slate-500">{filteredStudents.length}/{filteredStudents.length} Students</span>
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">Passing criteria: ≥ 35%</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-semibold text-slate-400 block uppercase">Distinction (A+ / A)</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-extrabold text-blue-600">{distinctionPct}%</span>
            <span className="text-xs font-semibold text-slate-500">{distinctionCount} Students</span>
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">Score ≥ 85%</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-semibold text-slate-400 block uppercase">Students Under Radar</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-extrabold text-amber-500">{atRisk.length}</span>
            <span className="text-xs font-semibold text-amber-600">Needs Focus</span>
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">Attendance or Score risk</span>
        </div>
      </div>

      {/* 2-Column Section: Top Performers & At-Risk Intervention */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Class Toppers Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-4">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-base text-slate-900">
              {selectedClass === 'all' ? 'Institutional' : selectedClass} Top Performers
            </h3>
          </div>

          <div className="space-y-3">
            {toppers.length > 0 ? (
              toppers.map((stu, rank) => (
                <div
                  key={stu.id}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between hover:bg-blue-50/50 transition-colors cursor-pointer"
                  onClick={() => openModal('studentProfile', stu)}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs ${
                      rank === 0
                        ? 'bg-amber-100 text-amber-700'
                        : rank === 1
                        ? 'bg-slate-200 text-slate-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      #{rank + 1}
                    </span>
                    <img
                      src={stu.photo}
                      alt={stu.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">{stu.name}</h4>
                      <span className="text-[11px] text-slate-400">
                        {stu.class} - {stu.division} • Roll #{stu.rollNo} • Attendance: {stu.attendance}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-black text-emerald-600">{stu.mathScore}%</span>
                    <span className="block text-[10px] font-bold text-slate-400">Subject Aggregate</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-400 py-4 text-center">No student records in this selection.</p>
            )}
          </div>
        </div>

        {/* Predictive Risk & Academic Mentoring (BRD §44) */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-500" />
              <h3 className="font-bold text-base text-slate-900">Students Requiring Academic Attention</h3>
            </div>
            <span className="px-2 py-0.5 bg-rose-50 text-rose-700 rounded-md text-[10px] font-bold">
              AI Risk Alert
            </span>
          </div>

          <div className="space-y-3">
            {atRisk.length > 0 ? (
              atRisk.map((stu) => (
                <div
                  key={stu.id}
                  className="p-3.5 rounded-2xl bg-rose-50/40 border border-rose-100 flex items-center justify-between cursor-pointer"
                  onClick={() => openModal('studentProfile', stu)}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={stu.photo}
                      alt={stu.name}
                      className="w-10 h-10 rounded-full object-cover border border-rose-200"
                    />
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">{stu.name}</h4>
                      <span className="text-[11px] text-slate-400">
                        {stu.class} - {stu.division} • Attendance: <strong className="text-rose-600">{stu.attendance}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-black text-rose-600">{stu.mathScore}%</span>
                    <span className="block text-[10px] font-semibold text-rose-600">Needs Remedial</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-xs text-emerald-600 bg-emerald-50/50 rounded-2xl border border-emerald-100 font-bold">
                ✅ All students in {selectedClass === 'all' ? 'the school' : selectedClass} are in healthy performance standing!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
