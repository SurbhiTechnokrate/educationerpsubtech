import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Clock,
  Calendar,
  Send,
  UserCheck,
  AlertCircle
} from 'lucide-react';

export const ApplyLeaveModal = () => {
  const { modalState, closeModal, applyForLeave, leaveData } = useApp();

  const [formData, setFormData] = useState({
    leaveType: 'Casual Leave',
    fromDate: '22 Sep 2025',
    toDate: '23 Sep 2025',
    days: 2,
    reason: '',
    substituteTeacher: 'Mr. Alok Verma (Math Dept)'
  });

  if (!modalState.applyLeave) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.reason.trim()) return;
    applyForLeave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden animate-fade-in flex flex-col">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Apply for Leave</h3>
              <p className="text-xs text-slate-400 mt-0.5">Faculty Leave Workflow (BRD §32)</p>
            </div>
          </div>
          <button
            onClick={() => closeModal('applyLeave')}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Leave Balances Quick Bar */}
        <div className="grid grid-cols-3 gap-2 p-4 bg-slate-50 border-b border-slate-200 text-center text-xs">
          <div className="p-2 bg-white rounded-xl border border-slate-200">
            <span className="text-[10px] text-slate-400 font-semibold block">Casual Leave</span>
            <span className="font-bold text-slate-800">{leaveData.balances.casualLeave.remaining} Left</span>
          </div>
          <div className="p-2 bg-white rounded-xl border border-slate-200">
            <span className="text-[10px] text-slate-400 font-semibold block">Sick Leave</span>
            <span className="font-bold text-slate-800">{leaveData.balances.sickLeave.remaining} Left</span>
          </div>
          <div className="p-2 bg-white rounded-xl border border-slate-200">
            <span className="text-[10px] text-slate-400 font-semibold block">Earned Leave</span>
            <span className="font-bold text-slate-800">{leaveData.balances.earnedLeave.remaining} Left</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Leave Type
            </label>
            <select
              value={formData.leaveType}
              onChange={(e) => setFormData({ ...formData, leaveType: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="Casual Leave">Casual Leave (CL)</option>
              <option value="Sick Leave">Sick Leave (SL)</option>
              <option value="Earned Leave">Earned Leave (EL)</option>
              <option value="Restricted Holiday">Restricted Holiday (RH)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                From Date
              </label>
              <input
                type="text"
                value={formData.fromDate}
                onChange={(e) => setFormData({ ...formData, fromDate: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                To Date
              </label>
              <input
                type="text"
                value={formData.toDate}
                onChange={(e) => setFormData({ ...formData, toDate: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Substitute Teacher for Assigned Classes
            </label>
            <select
              value={formData.substituteTeacher}
              onChange={(e) => setFormData({ ...formData, substituteTeacher: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="Mr. Alok Verma (Math Dept)">Mr. Alok Verma (Math Dept)</option>
              <option value="Ms. Rita Sen (Science Dept)">Ms. Rita Sen (Science Dept)</option>
              <option value="Mr. Deepak Chopra (Math Faculty)">Mr. Deepak Chopra (Math Faculty)</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Reason for Leave *
            </label>
            <textarea
              rows={3}
              required
              placeholder="State the reason clearly for HOD & Principal review..."
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-[11px] bg-amber-50/50 p-2.5 rounded-xl border border-amber-200/60">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>Application will route to HOD first, then Principal for approval.</span>
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => closeModal('applyLeave')}
              className="px-4 py-2 font-semibold text-slate-600 hover:text-slate-800 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md shadow-amber-600/30 transition-all flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Leave Request</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
