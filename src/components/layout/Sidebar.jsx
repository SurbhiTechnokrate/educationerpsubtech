import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Home,
  GraduationCap,
  Users,
  UserCheck,
  BarChart3,
  BookOpen,
  Calendar,
  FileText,
  BookMarked,
  FolderOpen,
  FileSpreadsheet,
  CalendarCheck,
  Award,
  CheckSquare,
  MessageSquare,
  Megaphone,
  Mail,
  BarChart2,
  Settings,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Clock,
  X
} from 'lucide-react';

export const Sidebar = () => {
  const { currentPage, setCurrentPage, geoAttendance, sidebarOpen, closeSidebar } = useApp();

  // State to manage collapsible dropdown groups in sidebar
  const [openGroups, setOpenGroups] = useState({
    academic: true,
    students: true,
    teaching: true,
    exams: true,
    communication: true
  });

  const toggleGroup = (group) => {
    setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };

  const isNavActive = (pageId) => currentPage === pageId;

  const handleNav = (pageId) => {
    setCurrentPage(pageId);
    closeSidebar();
  };

  const navItemClass = (active) =>
    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer ${
      active
        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
        : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
    }`;

  const subNavItemClass = (active) =>
    `flex items-center gap-3 pl-9 pr-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
      active
        ? 'bg-blue-600/30 text-blue-300 font-semibold border-l-2 border-blue-500'
        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
    }`;

  return (
    <>
      {/* Mobile & Tablet Backdrop Overlay */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#0f172a] text-slate-300 min-h-screen flex flex-col flex-shrink-0 border-r border-slate-800/80 select-none transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-white text-base leading-tight tracking-tight">Education Department</h1>
              <p className="text-[11px] text-slate-400 font-medium mt-0.5 tracking-wider uppercase">Learn • Grow • Excel</p>
            </div>
          </div>

          {/* Close button on mobile/tablet */}
          <button
            onClick={closeSidebar}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 scrollbar-thin">
          {/* Dashboard */}
          <button
            onClick={() => handleNav('dashboard')}
            className={`w-full ${navItemClass(isNavActive('dashboard'))}`}
          >
            <Home className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Dashboard</span>
          </button>

          {/* Academic Group */}
          <div>
            <button
              onClick={() => toggleGroup('academic')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="w-4 h-4 flex-shrink-0 text-slate-400" />
                <span>Academic</span>
              </div>
              {openGroups.academic ? (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {openGroups.academic && (
              <div className="mt-1 space-y-0.5 pl-1">
                <button
                  onClick={() => handleNav('classes')}
                  className={`w-full ${subNavItemClass(isNavActive('classes'))}`}
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>My Classes</span>
                </button>
                <button
                  onClick={() => handleNav('subjects')}
                  className={`w-full ${subNavItemClass(isNavActive('subjects'))}`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>My Subjects</span>
                </button>
                <button
                  onClick={() => handleNav('timetable')}
                  className={`w-full ${subNavItemClass(isNavActive('timetable'))}`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Timetable</span>
                </button>
              </div>
            )}
          </div>

          {/* Students Group */}
          <div>
            <button
              onClick={() => toggleGroup('students')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 flex-shrink-0 text-slate-400" />
                <span>Students</span>
              </div>
              {openGroups.students ? (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {openGroups.students && (
              <div className="mt-1 space-y-0.5 pl-1">
                <button
                  onClick={() => handleNav('students')}
                  className={`w-full ${subNavItemClass(isNavActive('students'))}`}
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Student List</span>
                </button>
                <button
                  onClick={() => handleNav('performance')}
                  className={`w-full ${subNavItemClass(isNavActive('performance'))}`}
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Student Performance</span>
                </button>
              </div>
            )}
          </div>

          {/* Teaching Group */}
          <div>
            <button
              onClick={() => toggleGroup('teaching')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 flex-shrink-0 text-slate-400" />
                <span>Teaching</span>
              </div>
              {openGroups.teaching ? (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {openGroups.teaching && (
              <div className="mt-1 space-y-0.5 pl-1">
                <button
                  onClick={() => handleNav('lesson-plans')}
                  className={`w-full ${subNavItemClass(isNavActive('lesson-plans'))}`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Lesson Plans</span>
                </button>
                <button
                  onClick={() => handleNav('syllabus')}
                  className={`w-full ${subNavItemClass(isNavActive('syllabus'))}`}
                >
                  <BookMarked className="w-3.5 h-3.5" />
                  <span>Syllabus</span>
                </button>
                <button
                  onClick={() => handleNav('study-materials')}
                  className={`w-full ${subNavItemClass(isNavActive('study-materials'))}`}
                >
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span>Study Materials</span>
                </button>
                <button
                  onClick={() => handleNav('assignments')}
                  className={`w-full ${subNavItemClass(isNavActive('assignments'))}`}
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>Assignments</span>
                </button>
              </div>
            )}
          </div>

          {/* Attendance */}
          <button
            onClick={() => handleNav('attendance')}
            className={`w-full ${navItemClass(isNavActive('attendance'))}`}
          >
            <CalendarCheck className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Attendance</span>
          </button>

          {/* Exams */}
          <button
            onClick={() => handleNav('exams')}
            className={`w-full ${navItemClass(isNavActive('exams'))}`}
          >
            <Award className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Exams</span>
          </button>

          {/* Marks */}
          <button
            onClick={() => handleNav('marks')}
            className={`w-full ${navItemClass(isNavActive('marks'))}`}
          >
            <CheckSquare className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Marks</span>
          </button>

          {/* Communication Group */}
          <div>
            <button
              onClick={() => toggleGroup('communication')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 flex-shrink-0 text-slate-400" />
                <span>Communication</span>
              </div>
              {openGroups.communication ? (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {openGroups.communication && (
              <div className="mt-1 space-y-0.5 pl-1">
                <button
                  onClick={() => handleNav('announcements')}
                  className={`w-full ${subNavItemClass(isNavActive('announcements'))}`}
                >
                  <Megaphone className="w-3.5 h-3.5" />
                  <span>Announcements</span>
                </button>
                <button
                  onClick={() => handleNav('messages')}
                  className={`w-full ${subNavItemClass(isNavActive('messages'))}`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Messages</span>
                </button>
              </div>
            )}
          </div>

          {/* Leave Management */}
          <button
            onClick={() => handleNav('leave')}
            className={`w-full ${navItemClass(isNavActive('leave'))}`}
          >
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Leave Management</span>
          </button>

          {/* Reports */}
          <button
            onClick={() => handleNav('reports')}
            className={`w-full ${navItemClass(isNavActive('reports'))}`}
          >
            <BarChart2 className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Reports</span>
          </button>

          {/* Profile & Settings */}
          <button
            onClick={() => handleNav('profile')}
            className={`w-full ${navItemClass(isNavActive('profile'))}`}
          >
            <Settings className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Profile & Settings</span>
          </button>
        </div>

        {/* Teacher Geo-tag status banner at bottom of sidebar */}
        <div className="p-3 m-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Geo-Attendance
            </span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/20 text-emerald-400">
              Active
            </span>
          </div>
          <p className="text-slate-400 text-[11px] leading-tight">
            {geoAttendance.isCheckedIn ? (
              <span className="text-emerald-300 font-medium">● Checked In ({geoAttendance.checkInTime})</span>
            ) : (
              <span className="text-amber-300">● Checked Out</span>
            )}
          </p>
          <p className="text-[10px] text-slate-500 truncate mt-0.5">{geoAttendance.distance}</p>
        </div>
      </aside>
    </>
  );
};
