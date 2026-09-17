import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  CalendarCheck,
  ShieldCheck,
  MapPin,
  Camera,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Send,
  UserCheck,
  Smartphone,
  Navigation,
  GraduationCap
} from 'lucide-react';
import { CLASS_SECTIONS } from '../data/mockData';

export const AttendancePage = () => {
  const {
    students,
    updateStudentAttendance,
    markAllAttendance,
    submitClassAttendance,
    selectedDate,
    geoAttendance,
    handleGeoCheckIn,
    handleGeoCheckOut,
  } = useApp();

  const [activeTab, setActiveTab] = useState('student'); // 'student' | 'geotag'
  const [selectedClass, setSelectedClass] = useState('Class 8 - A');

  const [targetClass, targetDivision] = selectedClass.includes(' - ')
    ? selectedClass.split(' - ')
    : [selectedClass, ''];

  const classStudents = students.filter(s => {
    if (targetDivision) {
      return s.class === targetClass && s.division === targetDivision;
    }
    return s.class === targetClass;
  });

  const presentCount = classStudents.filter(s => s.attendanceStatus === 'Present').length;
  const absentCount = classStudents.filter(s => s.attendanceStatus === 'Absent').length;
  const lateCount = classStudents.filter(s => s.attendanceStatus === 'Late').length;
  const attendanceRate = Math.round((presentCount / (classStudents.length || 1)) * 100);

  return (
    <div className="space-y-5 sm:space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Attendance System</h2>
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-black rounded-full">
              Nursery to 10th Class
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Student daily attendance marking & Faculty Geo-tag biometric check-in (BRD §15, §16, §83).
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1 bg-slate-200/80 rounded-2xl self-start sm:self-auto w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('student')}
            className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all text-center ${
              activeTab === 'student'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Student Attendance
          </button>
          <button
            onClick={() => setActiveTab('geotag')}
            className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'geotag'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Teacher Geo-Attendance</span>
          </button>
        </div>
      </div>

      {activeTab === 'student' ? (
        /* Tab 1: Student Attendance Sheet */
        <div className="space-y-5">
          {/* Controls Bar */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {CLASS_SECTIONS.map((sec) => (
                  <option key={sec} value={sec}>
                    {sec} {sec === 'Class 8 - A' ? '(Primary Roster)' : ''}
                  </option>
                ))}
              </select>

              <span className="text-xs font-semibold text-slate-500">
                Date: <strong className="text-slate-800">{selectedDate}</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => markAllAttendance(selectedClass, 'Present')}
                className="flex-1 sm:flex-none px-3.5 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Mark All Present</span>
              </button>
              <button
                onClick={() => markAllAttendance(selectedClass, 'Absent')}
                className="flex-1 sm:flex-none px-3.5 py-2 bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <XCircle className="w-3.5 h-3.5" />
                <span>Mark All Absent</span>
              </button>
            </div>
          </div>

          {/* KPI Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 text-center">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase">Total Enrolled</span>
              <p className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">{classStudents.length}</p>
            </div>
            <div className="bg-emerald-50 p-3.5 sm:p-4 rounded-2xl border border-emerald-100 text-center">
              <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 uppercase">Present Today</span>
              <p className="text-xl sm:text-2xl font-black text-emerald-700 mt-0.5">{presentCount}</p>
            </div>
            <div className="bg-rose-50 p-3.5 sm:p-4 rounded-2xl border border-rose-100 text-center">
              <span className="text-[10px] sm:text-[11px] font-bold text-rose-600 uppercase">Absent Today</span>
              <p className="text-xl sm:text-2xl font-black text-rose-700 mt-0.5">{absentCount}</p>
            </div>
            <div className="bg-blue-50 p-3.5 sm:p-4 rounded-2xl border border-blue-100 text-center">
              <span className="text-[10px] sm:text-[11px] font-bold text-blue-600 uppercase">Attendance Rate</span>
              <p className="text-xl sm:text-2xl font-black text-blue-700 mt-0.5">{attendanceRate}%</p>
            </div>
          </div>

          {/* Roster Table */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="font-bold text-sm text-slate-900">{selectedClass} Daily Attendance Register</h3>
              <span className="text-xs text-slate-400">P = Present, A = Absent, L = Late</span>
            </div>

            <div className="overflow-x-auto touch-scroll">
              <table className="w-full min-w-[640px] text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase text-[11px] font-semibold">
                    <th className="py-3 px-4 w-16">Roll</th>
                    <th className="py-3 px-4">Student</th>
                    <th className="py-3 px-4">Cumulative Attendance</th>
                    <th className="py-3 px-4">Parent Phone</th>
                    <th className="py-3 px-4 text-center w-48">Mark Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {classStudents.length > 0 ? (
                    classStudents.map((stu) => (
                      <tr key={stu.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-400">#{stu.rollNo}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img src={stu.photo} alt={stu.name} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                            <div>
                              <div className="font-bold text-slate-900">{stu.name}</div>
                              <div className="text-[10px] text-slate-400">{stu.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-semibold text-slate-700">
                          {stu.attendance}
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          {stu.parentContact}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <div className="inline-flex items-center gap-1.5">
                            <button
                              onClick={() => updateStudentAttendance(stu.id, 'Present')}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                stu.attendanceStatus === 'Present'
                                  ? 'bg-emerald-600 text-white shadow-sm'
                                  : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                              }`}
                            >
                              Present
                            </button>
                            <button
                              onClick={() => updateStudentAttendance(stu.id, 'Absent')}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                stu.attendanceStatus === 'Absent'
                                  ? 'bg-rose-600 text-white shadow-sm'
                                  : 'bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-700'
                              }`}
                            >
                              Absent
                            </button>
                            <button
                              onClick={() => updateStudentAttendance(stu.id, 'Late')}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                stu.attendanceStatus === 'Late'
                                  ? 'bg-amber-500 text-white shadow-sm'
                                  : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-700'
                              }`}
                            >
                              Late
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-slate-400">
                        No students enrolled in {selectedClass} currently.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Submit Bar */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Parents of absent students will automatically receive notification alerts via SMS & WhatsApp.</span>
              </div>
              <button
                onClick={() => submitClassAttendance(selectedClass)}
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Notify Parents</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Tab 2: Teacher Geo-Tag Attendance (BRD §16 & §83) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Punch Card Left */}
          <div className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">Geo-Tag Check-In / Check-Out</h3>
                  <p className="text-xs text-slate-400">GPS & Geofence Verification (BRD §16)</p>
                </div>
              </div>

              <span className={`px-2.5 py-1 rounded-full text-xs font-extrabold ${
                geoAttendance.isCheckedIn
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-amber-100 text-amber-700'
              }`}>
                {geoAttendance.isCheckedIn ? '● Checked In' : '● Checked Out'}
              </span>
            </div>

            {/* GPS Diagnostics */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  Live GPS Coordinates
                </span>
                <span className="font-bold text-slate-800">28.6139° N, 77.2090° E</span>
              </div>

              <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between text-emerald-800">
                <span className="font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  Campus Geofence Status
                </span>
                <span className="font-bold">Inside Campus (Within 150m)</span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  <Camera className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  Selfie / Face Verification
                </span>
                <span className="font-bold text-emerald-600">Verified & Matched ✅</span>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  Check-in Time Today
                </span>
                <span className="font-bold text-slate-800">{geoAttendance.checkInTime || 'Not checked in'}</span>
              </div>
            </div>

            {/* Action Punch In/Out button */}
            <div className="pt-3">
              {geoAttendance.isCheckedIn ? (
                <button
                  onClick={handleGeoCheckOut}
                  className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-lg shadow-rose-600/30 transition-all text-xs flex items-center justify-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  <span>Punch Out (End Working Day)</span>
                </button>
              ) : (
                <button
                  onClick={handleGeoCheckIn}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/30 transition-all text-xs flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify GPS & Check In Now</span>
                </button>
              )}
            </div>
          </div>

          {/* Past Geo Logs Right */}
          <div className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-base text-slate-900 pb-3 border-b border-slate-100">
              Recent Attendance History (Faculty HR Log)
            </h3>

            <div className="space-y-2.5 text-xs">
              {[
                { date: '15 Sep 2025', in: '08:15 AM', out: '— (Active)', hours: '7h 15m', status: 'Present', geofence: 'Valid' },
                { date: '14 Sep 2025', in: '08:10 AM', out: '04:15 PM', hours: '8h 05m', status: 'Present', geofence: 'Valid' },
                { date: '13 Sep 2025', in: '08:25 AM', out: '01:30 PM', hours: '5h 05m', status: 'Present (Half Day)', geofence: 'Valid' },
                { date: '12 Sep 2025', in: '08:08 AM', out: '04:20 PM', hours: '8h 12m', status: 'Present', geofence: 'Valid' },
                { date: '11 Sep 2025', in: '08:14 AM', out: '04:10 PM', hours: '7h 56m', status: 'Present', geofence: 'Valid' },
              ].map((log, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-800">{log.date}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">In: {log.in} • Out: {log.out}</div>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                      {log.status}
                    </span>
                    <span className="block text-[11px] text-slate-500 mt-0.5 font-medium">{log.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
