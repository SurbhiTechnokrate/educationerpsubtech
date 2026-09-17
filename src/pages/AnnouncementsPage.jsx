import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Megaphone,
  Bell,
  Calendar,
  AlertCircle,
  Plus,
  Send,
  CheckCircle2,
  Tag
} from 'lucide-react';

export const AnnouncementsPage = () => {
  const { announcements, addToast } = useApp();
  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-5 sm:space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Announcements & Circulars</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Institutional broadcasts, department notifications & exam circulars (BRD §25).
          </p>
        </div>

        <button
          onClick={() => addToast('Announcement broadcast dispatch ready.', 'info')}
          className="self-start sm:self-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/30 transition-all flex items-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>New Class Broadcast</span>
        </button>
      </div>

      {/* Announcements List */}
      <div className="space-y-3.5 sm:space-y-4">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <span className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full ${item.dotColor} mt-1.5 flex-shrink-0`} />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold uppercase">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1">{item.description}</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-slate-400 mt-2 font-medium">
                  <span>Issued: {item.date}</span>
                  <span>•</span>
                  <span>Target: Faculty, Students & Parents</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto flex-shrink-0">
              <button
                onClick={() => addToast(`Re-broadcasted "${item.title}" to Class 8-A parents.`, 'success')}
                className="px-3.5 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 rounded-xl text-xs font-bold transition-colors"
              >
                Forward to Parents 📲
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
