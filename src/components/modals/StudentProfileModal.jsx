import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Bus,
  Home,
  CheckCircle,
  AlertTriangle,
  FileText
} from 'lucide-react';

export const StudentProfileModal = () => {
  const { modalState, closeModal, openModal } = useApp();
  const student = modalState.studentProfile;

  if (!student) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden animate-fade-in flex flex-col max-h-[90vh]">
        {/* Header with Student Bio banner */}
        <div className="p-4 sm:p-6 bg-slate-900 text-white relative">
          <button
            onClick={() => closeModal('studentProfile')}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pr-8 sm:pr-0">
            <img
              src={student.photo}
              alt={student.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-white/20 shadow-md ring-4 ring-white/10 flex-shrink-0"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-lg sm:text-xl leading-tight">{student.name}</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-500 text-white flex-shrink-0">
                  Roll #{student.rollNo}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {student.class} - {student.division} • Student ID: {student.id}
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] text-slate-400 mt-1">
                <span>DOB: {student.dob}</span>
                <span className="hidden sm:inline">•</span>
                <span>Blood: {student.bloodGroup}</span>
                <span className="hidden sm:inline">•</span>
                <span>Gender: {student.gender}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs / 360 Sections */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-5">
          {/* Key Metrics Row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
            <div className="p-2.5 sm:p-3 bg-emerald-50 border border-emerald-100 rounded-2xl">
              <span className="text-[10px] font-bold uppercase text-emerald-600">Attendance</span>
              <span className="block font-black text-base sm:text-lg text-emerald-700 mt-0.5">{student.attendance}</span>
            </div>
            <div className="p-2.5 sm:p-3 bg-blue-50 border border-blue-100 rounded-2xl">
              <span className="text-[10px] font-bold uppercase text-blue-600">Overall Grade</span>
              <span className="block font-black text-base sm:text-lg text-blue-700 mt-0.5">{student.overallGrade}</span>
            </div>
            <div className={`p-2.5 sm:p-3 rounded-2xl border ${
              student.feeStatus === 'Paid'
                ? 'bg-purple-50 border-purple-100 text-purple-700'
                : 'bg-amber-50 border-amber-100 text-amber-700'
            }`}>
              <span className="text-[10px] font-bold uppercase block">Fee Status</span>
              <span className="block font-black text-base sm:text-lg mt-0.5">{student.feeStatus}</span>
            </div>
          </div>

          {/* Academic Performance Breakdown */}
          <div className="bg-slate-50 rounded-2xl p-3.5 sm:p-4 border border-slate-200/80">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-blue-600" />
              Subject Performance Scores
            </h4>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Mathematics</span>
                <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">{student.mathScore}%</div>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Science</span>
                <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">{student.scienceScore}%</div>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">English</span>
                <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">{student.englishScore}%</div>
              </div>
            </div>
          </div>

          {/* Parent & Guardian Contact Information */}
          <div className="bg-slate-50 rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 space-y-2 text-xs">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2 mb-2">
              <User className="w-4 h-4 text-blue-600" />
              Parent & Guardian Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <div>
                <span className="text-slate-400 block text-[11px]">Father / Guardian</span>
                <span className="font-semibold text-slate-800">{student.fatherName}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Mother</span>
                <span className="font-semibold text-slate-800">{student.motherName}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <Phone className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span className="truncate">{student.parentContact}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700 min-w-0">
                <Mail className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span className="truncate">{student.parentEmail}</span>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-200 flex items-start gap-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
              <span className="text-[11px] sm:text-xs">{student.address}</span>
            </div>
          </div>

          {/* Operational Transport & Remarks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-1">
                <Bus className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span>Transport</span>
              </div>
              <p className="text-slate-600 text-[11px]">{student.busRoute}</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-1">
                <FileText className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                <span>Teacher's Note</span>
              </div>
              <p className="text-slate-600 text-[11px]">{student.behavior}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button
            onClick={() => closeModal('studentProfile')}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
