import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  GraduationCap,
  Users,
  Calendar,
  Award,
  CheckSquare,
  ArrowRight,
  Sparkles,
  Search,
  BookOpen,
  Filter
} from 'lucide-react';
import { myClassesData, CLASS_CATEGORIES } from '../data/mockData';

export const MyClassesPage = () => {
  const { openModal, setCurrentPage } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClasses = myClassesData.filter((cls) => {
    const matchesSearch =
      cls.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.division.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.room.toLowerCase().includes(searchQuery.toLowerCase());

    const activeCat = CLASS_CATEGORIES.find(c => c.id === selectedCategory);
    const matchesCat = selectedCategory === 'all' || (activeCat && activeCat.classes?.includes(cls.class));

    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">My Classes & Divisions</h2>
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-black rounded-full">
              Nursery to 10th Class ({myClassesData.length} Batches)
            </span>
          </div>
          <p className="text-sm text-slate-500 font-medium mt-0.5">
            Comprehensive multi-grade curriculum management, student rosters, and classroom operations.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openModal('markAttendance')}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Mark Attendance</span>
          </button>
          <button
            onClick={() => openModal('createAssignment')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Assign Homework</span>
          </button>
        </div>
      </div>

      {/* Class Teacher Primary Highlight Card */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 rounded-3xl p-6 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            Primary Class Teacher Designation
          </div>
          <h3 className="text-2xl font-black">Class 8 - Division A (Lead Faculty Roster)</h3>
          <p className="text-blue-100 text-xs mt-1 max-w-xl">
            Designated Class Teacher for Class 8-A, coordinating daily biometric attendance, student mentoring, parent communications, term progress reports, and exam moderation across wings.
          </p>
          <div className="flex items-center gap-6 mt-4 text-xs font-medium text-blue-100">
            <span>Enrolled Students: <strong className="text-white">32</strong></span>
            <span>Avg Attendance: <strong className="text-white">94.5%</strong></span>
            <span>Room: <strong className="text-white">Room 204</strong></span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 w-full md:w-auto relative z-10">
          <button
            onClick={() => setCurrentPage('students')}
            className="px-5 py-2.5 bg-white text-blue-700 hover:bg-blue-50 rounded-xl text-xs font-bold shadow-md transition-colors text-center"
          >
            View Student Roster →
          </button>
          <button
            onClick={() => openModal('enterMarks')}
            className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl text-xs font-bold transition-colors text-center"
          >
            Enter Unit Test Marks
          </button>
        </div>
      </div>

      {/* Grade Level Stage Selector Pills & Search */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {CLASS_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="relative w-full max-w-xs">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search class, subject, or room..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* All Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredClasses.map((cls) => (
          <div
            key={cls.id}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                      {cls.class} - {cls.division}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {cls.stage}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mt-2">{cls.subject}</h4>
                </div>
                {cls.isClassTeacher && (
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-700 font-extrabold text-[10px] rounded-md">
                    Class Teacher
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Schedule</span>
                  <span className="font-semibold text-slate-800">{cls.schedule}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Classroom</span>
                  <span className="font-semibold text-slate-800">{cls.room}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-400">Students</span>
                  <span className="font-bold text-slate-800">{cls.students} Students</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Attendance Rate</span>
                  <span className="font-bold text-emerald-600">{cls.attendanceRate}</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => setCurrentPage('students')}
                className="flex-1 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold transition-colors"
              >
                Students
              </button>
              <button
                onClick={() => openModal('markAttendance')}
                className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Attendance
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
