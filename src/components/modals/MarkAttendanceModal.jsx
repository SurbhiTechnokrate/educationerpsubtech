import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  CheckCircle2,
  XCircle,
  Clock,
  Send,
  Users,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { CLASS_SECTIONS } from '../../data/mockData';

export const MarkAttendanceModal = () => {
  const { modalState, closeModal, students, updateStudentAttendance, markAllAttendance, submitClassAttendance, selectedDate } = useApp();
  const [selectedClass, setSelectedClass] = useState('Class 8 - A');

  if (!modalState.markAttendance) return null;

  const [cls, div] = selectedClass.includes(' - ') ? selectedClass.split(' - ') : [selectedClass, ''];
  const classStudents = students.filter(s => div ? (s.class === cls && s.division === div) : s.class === cls);

  const presentCount = classStudents.filter(s => s.attendanceStatus === 'Present').length;
  const absentCount = classStudents.filter(s => s.attendanceStatus === 'Absent').length;
  const lateCount = classStudents.filter(s => s.attendanceStatus === 'Late').length;
  const attendanceRate = Math.round((presentCount / (classStudents.length || 1)) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden animate-fade-in flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Mark Student Attendance</h3>
              <p className="text-xs text-slate-400 mt-0.5">{selectedDate} • {selectedClass}</p>
            </div>
          </div>
          <button
            onClick={() => closeModal('markAttendance')}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls & Quick Actions */}
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {CLASS_SECTIONS.map((sec) => (
                <option key={sec} value={sec}>
                  {sec}
                </option>
              ))}
            </select>
          </div>

          {/* Quick Mark Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => markAllAttendance(selectedClass, 'Present')}
              className="px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Mark All Present</span>
            </button>
            <button
              onClick={() => markAllAttendance(selectedClass, 'Absent')}
              className="px-3 py-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <XCircle className="w-3.5 h-3.5" />
              <span>Mark All Absent</span>
            </button>
          </div>
        </div>

        {/* Summary Metric Pills */}
        <div className="grid grid-cols-4 gap-3 px-6 py-3 bg-white border-b border-slate-100 text-center text-xs">
          <div className="p-2 bg-slate-50 rounded-xl">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Total</span>
            <span className="font-bold text-slate-800 text-sm">{classStudents.length}</span>
          </div>
          <div className="p-2 bg-emerald-50 rounded-xl text-emerald-700">
            <span className="block text-[10px] uppercase font-semibold">Present</span>
            <span className="font-bold text-sm">{presentCount}</span>
          </div>
          <div className="p-2 bg-rose-50 rounded-xl text-rose-700">
            <span className="block text-[10px] uppercase font-semibold">Absent</span>
            <span className="font-bold text-sm">{absentCount}</span>
          </div>
          <div className="p-2 bg-amber-50 rounded-xl text-amber-700">
            <span className="block text-[10px] uppercase font-semibold">Attendance Rate</span>
            <span className="font-bold text-sm">{attendanceRate}%</span>
          </div>
        </div>

        {/* Student Roster List */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-slate-100">
          {classStudents.length > 0 ? (
            classStudents.map((stu) => (
              <div key={stu.id} className="py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-6 text-xs font-bold text-slate-400 text-center">
                    #{stu.rollNo}
                  </span>
                  <img
                    src={stu.photo}
                    alt={stu.name}
                    className="w-9 h-9 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{stu.name}</h4>
                    <p className="text-[11px] text-slate-400">Parent: {stu.fatherName} ({stu.parentContact})</p>
                  </div>
                </div>

                {/* Status Selector Pills */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => updateStudentAttendance(stu.id, 'Present')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                      stu.attendanceStatus === 'Present'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                    }`}
                  >
                    P
                  </button>
                  <button
                    onClick={() => updateStudentAttendance(stu.id, 'Absent')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                      stu.attendanceStatus === 'Absent'
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-700'
                    }`}
                  >
                    A
                  </button>
                  <button
                    onClick={() => updateStudentAttendance(stu.id, 'Late')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                      stu.attendanceStatus === 'Late'
                        ? 'bg-amber-500 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-700'
                    }`}
                  >
                    L
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-slate-400 text-xs">
              No students enrolled in {selectedClass} currently.
            </div>
          )}
        </div>

        {/* Footer & Submit */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <AlertCircle className="w-4 h-4 text-blue-600" />
            <span>Parents of absent students will receive automated SMS alert.</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => closeModal('markAttendance')}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/60 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => submitClassAttendance(selectedClass)}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit & Notify Parents</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
