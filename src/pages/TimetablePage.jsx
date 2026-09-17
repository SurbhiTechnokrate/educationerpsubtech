import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Printer,
  Download,
  Filter,
  GraduationCap
} from 'lucide-react';
import { ALL_CLASSES } from '../data/mockData';

export const TimetablePage = () => {
  const { weeklyTimetable } = useApp();
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedClassFilter, setSelectedClassFilter] = useState('all');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const daySchedule = weeklyTimetable[selectedDay] || [];
  const filteredSchedule = daySchedule.filter(slot => {
    if (selectedClassFilter === 'all') return true;
    if (slot.subject === 'Break' || slot.class.includes('Staff')) return true;
    return slot.class.includes(selectedClassFilter);
  });

  return (
    <div className="space-y-5 sm:space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Faculty Timetable</h2>
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-black rounded-full">
              Nursery to 10th Class
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Weekly multi-grade teaching schedule, period allocations, and room assignments.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="hidden sm:inline">0 Conflicts • Approved</span>
            <span className="inline sm:hidden">Approved</span>
          </div>
          <button
            onClick={() => window.print()}
            className="px-3.5 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* Day Selector Tabs & Class Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2 overflow-x-auto touch-scroll no-scrollbar pb-1 -mx-1 px-1">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                selectedDay === day
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-2xl border border-slate-200 self-start sm:self-auto shadow-sm">
          <GraduationCap className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <select
            value={selectedClassFilter}
            onChange={(e) => setSelectedClassFilter(e.target.value)}
            className="text-xs font-bold text-slate-700 bg-transparent focus:outline-none"
          >
            <option value="all">All Class Periods</option>
            {ALL_CLASSES.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Day Schedule View */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-1">
          <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>{selectedDay}'s Class Schedule</span>
          </h3>
          <span className="text-xs text-slate-500 font-medium">
            Total Teaching Periods: {filteredSchedule.filter(p => p.subject !== 'Break' && !p.class.includes('Free')).length} Sessions
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {filteredSchedule.map((slot, idx) => {
            const isBreak = slot.subject === 'Break';
            const isFree = slot.class.includes('Free');
            
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition-all ${
                  isBreak
                    ? 'bg-amber-50/60 border-amber-200/80 text-amber-800'
                    : isFree
                    ? 'bg-slate-50 border-slate-200 text-slate-500'
                    : 'bg-white border-blue-200/90 shadow-sm hover:shadow-md hover:border-blue-400'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <span className={isBreak ? 'text-amber-700' : isFree ? 'text-slate-400' : 'text-blue-600'}>
                    {slot.period}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {slot.time}
                  </span>
                </div>

                <h4 className={`text-sm font-bold ${isBreak ? 'text-amber-900' : isFree ? 'text-slate-600' : 'text-slate-900'}`}>
                  {slot.class}
                </h4>
                <p className={`text-xs mt-0.5 ${isBreak ? 'text-amber-700' : isFree ? 'text-slate-400' : 'text-slate-600'}`}>
                  {slot.subject}
                </p>

                <div className="mt-3 pt-2.5 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {slot.room}
                  </span>
                  {!isBreak && !isFree && (
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                      Confirmed
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
