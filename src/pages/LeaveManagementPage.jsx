import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Clock,
  Plus,
  CheckCircle2,
  Calendar,
  AlertCircle,
  FileText
} from 'lucide-react';

export const LeaveManagementPage = () => {
  const { leaveData, openModal } = useApp();

  return (
    <div className="space-y-5 sm:space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Faculty Leave Management</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Leave balances, substitute teacher allocations, and approval workflow (BRD §32 & §53).
          </p>
        </div>

        <button
          onClick={() => openModal('applyLeave')}
          className="self-start sm:self-auto px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow-md shadow-amber-600/30 transition-all flex items-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Apply for Leave</span>
        </button>
      </div>

      {/* Balances Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm">
          <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">Casual Leave (CL)</span>
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-slate-900">{leaveData.balances.casualLeave.remaining}</span>
            <span className="text-xs text-slate-400">/ {leaveData.balances.casualLeave.total} Days</span>
          </div>
          <span className="text-[10px] sm:text-[11px] text-slate-400 mt-1 block">Used: {leaveData.balances.casualLeave.used} days</span>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm">
          <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">Sick Leave (SL)</span>
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-slate-900">{leaveData.balances.sickLeave.remaining}</span>
            <span className="text-xs text-slate-400">/ {leaveData.balances.sickLeave.total} Days</span>
          </div>
          <span className="text-[10px] sm:text-[11px] text-slate-400 mt-1 block">Used: {leaveData.balances.sickLeave.used} days</span>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm">
          <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">Earned Leave (EL)</span>
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-slate-900">{leaveData.balances.earnedLeave.remaining}</span>
            <span className="text-xs text-slate-400">/ {leaveData.balances.earnedLeave.total} Days</span>
          </div>
          <span className="text-[10px] sm:text-[11px] text-slate-400 mt-1 block">Used: {leaveData.balances.earnedLeave.used} days</span>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm">
          <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">Restricted Holiday</span>
          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-slate-900">{leaveData.balances.restrictedHoliday.remaining}</span>
            <span className="text-xs text-slate-400">/ {leaveData.balances.restrictedHoliday.total} Days</span>
          </div>
          <span className="text-[10px] sm:text-[11px] text-slate-400 mt-1 block">Used: {leaveData.balances.restrictedHoliday.used} days</span>
        </div>
      </div>

      {/* Leave Application History Table */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h3 className="font-bold text-base text-slate-900">Leave Requests & Multi-Level Status</h3>
          <span className="text-xs text-slate-400">Teacher → HOD → Principal Workflow</span>
        </div>

        <div className="overflow-x-auto touch-scroll">
          <table className="w-full min-w-[640px] text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase text-[11px] font-bold">
                <th className="py-3 px-4">Leave ID</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Dates & Duration</th>
                <th className="py-3 px-4">Reason</th>
                <th className="py-3 px-4">Substitute Teacher</th>
                <th className="py-3 px-4">Status & Approver</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leaveData.requests.map((req) => (
                <tr key={req.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-extrabold text-slate-400">{req.id}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-800">{req.leaveType}</td>
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-800">{req.fromDate} to {req.toDate}</div>
                    <div className="text-[10px] text-slate-400">{req.days} Day(s)</div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 max-w-xs">{req.reason}</td>
                  <td className="py-3.5 px-4 text-slate-600 font-medium">{req.substituteTeacher}</td>
                  <td className="py-3.5 px-4">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                      req.status === 'Approved'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {req.status}
                    </span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">{req.approver}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
