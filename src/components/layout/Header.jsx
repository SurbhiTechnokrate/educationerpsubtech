import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Menu,
  Search,
  Bell,
  Calendar,
  ChevronDown,
  User,
  LogOut,
  Shield,
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

export const Header = () => {
  const {
    profile,
    globalSearch,
    setGlobalSearch,
    selectedDate,
    setSelectedDate,
    setCurrentPage,
    announcements,
    geoAttendance,
    handleGeoCheckIn,
    handleGeoCheckOut,
    toggleSidebar
  } = useApp();

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);
  const dateRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setIsDatePickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dates = [
    'Monday, 15 Sep 2025',
    'Tuesday, 16 Sep 2025',
    'Wednesday, 17 Sep 2025',
    'Thursday, 18 Sep 2025',
    'Friday, 19 Sep 2025',
    'Saturday, 20 Sep 2025'
  ];

  // Short version of selected date for tablet & mobile
  const shortDate = selectedDate.replace(/^[A-Za-z]+,\s*/, '');

  return (
    <header className="bg-white border-b border-slate-200/90 sticky top-0 z-30 px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-sm gap-2 sm:gap-4">
      {/* Left Area: Mobile/Tablet Hamburger + Global Search */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        {/* Hamburger Menu button on Tablet & Mobile */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors flex-shrink-0 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search Bar */}
        <div className="flex-1 max-w-[160px] sm:max-w-xs md:max-w-md">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="Search anything..."
              className="w-full pl-9 sm:pl-10 pr-3 py-1.5 sm:py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
            />
            {globalSearch && (
              <button
                onClick={() => setGlobalSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs text-slate-400 hover:text-slate-600 bg-slate-200/60 px-1.5 py-0.5 rounded"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right Area: Date Selector, Notifications, Profile */}
      <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
        {/* Date Selector Pill */}
        <div className="relative" ref={dateRef}>
          <button
            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
            <span className="hidden md:inline">{selectedDate}</span>
            <span className="inline md:hidden">{shortDate}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {isDatePickerOpen && (
            <div className="absolute right-0 mt-2 w-52 max-w-[calc(100vw-1.5rem)] bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-fade-in">
              <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Select Academic Date
              </div>
              {dates.map((d) => (
                <button
                  key={d}
                  onClick={() => {
                    setSelectedDate(d);
                    setIsDatePickerOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-1.5 text-xs font-medium hover:bg-blue-50 hover:text-blue-600 flex items-center justify-between ${
                    selectedDate === d ? 'text-blue-600 font-semibold bg-blue-50/60' : 'text-slate-700'
                  }`}
                >
                  <span>{d}</span>
                  {selectedDate === d && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notifications Icon with Red Badge */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="relative p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white animate-pulse">
              3
            </span>
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-72 sm:w-80 max-w-[calc(100vw-1.5rem)] bg-white rounded-2xl shadow-xl border border-slate-200 py-3 z-50 animate-fade-in">
              <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                <span className="font-bold text-sm text-slate-900">Notifications</span>
                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                  3 New
                </span>
              </div>
              <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                <div className="p-3 hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => { setCurrentPage('announcements'); setIsNotifOpen(false); }}>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-800">Unit Test - Mathematics scheduled</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Test scheduled for 18 Sep 2025.</p>
                      <span className="text-[10px] text-slate-400 mt-1 block">15 Sep 2025, 10:00 AM</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => { setCurrentPage('assignments'); setIsNotifOpen(false); }}>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-800">Assignment submission</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Rohan Patil submitted Algebra Worksheet 3.</p>
                      <span className="text-[10px] text-slate-400 mt-1 block">Today, 09:45 AM</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => { setCurrentPage('messages'); setIsNotifOpen(false); }}>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-800">New Message from HOD</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Mid-term Question Paper blueprint review.</p>
                      <span className="text-[10px] text-slate-400 mt-1 block">Yesterday, 02:10 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-2 px-4 border-t border-slate-100 text-center">
                <button
                  onClick={() => {
                    setCurrentPage('announcements');
                    setIsNotifOpen(false);
                  }}
                  className="text-xs font-medium text-blue-600 hover:text-blue-700"
                >
                  View All Notifications →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Pill & Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 p-1 pl-1.5 sm:pl-2 hover:bg-slate-100 rounded-2xl transition-colors focus:outline-none"
          >
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-slate-800 leading-tight">{profile.name}</div>
              <div className="text-[11px] text-slate-500 font-medium">{profile.title}</div>
            </div>
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow-sm ring-2 ring-slate-100 flex-shrink-0"
            />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-60 sm:w-64 max-w-[calc(100vw-1.5rem)] bg-white rounded-2xl shadow-xl border border-slate-200 py-3 z-50 animate-fade-in">
              <div className="px-4 pb-3 border-b border-slate-100">
                <div className="font-bold text-sm text-slate-900">{profile.name}</div>
                <div className="text-xs text-slate-500 font-medium">{profile.role}</div>
                <div className="text-[11px] text-slate-400 mt-1 truncate">{profile.email}</div>
              </div>

              <div className="py-2">
                <button
                  onClick={() => {
                    setCurrentPage('profile');
                    setIsProfileOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2.5"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  <span>My Profile & Settings</span>
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('attendance');
                    setIsProfileOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2.5"
                >
                  <Shield className="w-4 h-4 text-slate-400" />
                  <span>Geo-Tag Attendance</span>
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('leave');
                    setIsProfileOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2.5"
                >
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Leave Requests</span>
                </button>
              </div>

              <div className="pt-2 px-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    if (geoAttendance.isCheckedIn) {
                      handleGeoCheckOut();
                    } else {
                      handleGeoCheckIn();
                    }
                    setIsProfileOpen(false);
                  }}
                  className={`w-full py-1.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 ${
                    geoAttendance.isCheckedIn
                      ? 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                      : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                  }`}
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>{geoAttendance.isCheckedIn ? 'Geo-Punch Out' : 'Geo-Punch In'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
