import React from 'react';
import { useApp } from '../context/AppContext';
import {
  BarChart2,
  FileSpreadsheet,
  Download,
  Calendar,
  Users,
  Award,
  CheckCircle2
} from 'lucide-react';

export const ReportsPage = () => {
  const { addToast } = useApp();

  const reports = [
    {
      title: 'Class 8 - A Monthly Attendance Register (Aug-Sep 2025)',
      description: 'Comprehensive student-wise day-by-day attendance sheet with percentage and defaulter list.',
      format: 'XLSX / PDF',
      generated: '15 Sep 2025',
      tag: 'Middle School'
    },
    {
      title: 'Pre-Primary & Nursery Developmental Milestone Report',
      description: 'Phonics, fine motor skills, and social behavior progress tracker for Nursery, LKG, and UKG.',
      format: 'PDF / XLSX',
      generated: '14 Sep 2025',
      tag: 'Pre-Primary'
    },
    {
      title: 'Primary Classes (1-5) Foundational Numeracy & EVS Ledger',
      description: 'Continuous assessment marks, times table proficiency, and reading levels report.',
      format: 'XLSX',
      generated: '13 Sep 2025',
      tag: 'Primary'
    },
    {
      title: 'Class 10 CBSE Board Pre-Board Marks & Moderation Analysis',
      description: 'Tabulated marks ledger with mean, median, standard deviation and grade brackets.',
      format: 'PDF / CSV',
      generated: '14 Sep 2025',
      tag: 'Secondary'
    },
    {
      title: 'K-10 Student 360 Consolidated Report Cards (Term 1 Preview)',
      description: 'Printable report cards with teacher remarks, behavioral traits, and attendance across all grades.',
      format: 'PDF Bundle',
      generated: '12 Sep 2025',
      tag: 'All Wings'
    },
    {
      title: 'Syllabus Coverage & Lesson Delivery Compliance Audit (Nursery - 10th)',
      description: 'Academic coordinator audit report for Nursery to 10th Class curriculum progress.',
      format: 'PDF',
      generated: '10 Sep 2025',
      tag: 'Academic Lead'
    }
  ];

  const handleExport = (title) => {
    addToast(`Exporting "${title}" to your downloads folder...`, 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Academic MIS & Reports</h2>
          <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-black rounded-full">
            Nursery to 10th Class
          </span>
        </div>
        <p className="text-sm text-slate-500 font-medium mt-0.5">
          Generate, preview and export official institutional reports across all grade wings (BRD §43).
        </p>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {reports.map((rep, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-md">
                    {rep.tag}
                  </span>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded-md uppercase">
                    {rep.format}
                  </span>
                </div>
              </div>

              <h3 className="text-sm font-bold text-slate-900 mt-3">{rep.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{rep.description}</p>
              <div className="text-[11px] text-slate-400 mt-3 font-medium">
                Last Generated: {rep.generated}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => handleExport(rep.title)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
