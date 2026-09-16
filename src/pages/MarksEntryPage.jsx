import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  CheckSquare,
  Award,
  Save,
  CheckCircle,
  FileSpreadsheet,
  Calculator,
  Send,
  Download,
  GraduationCap
} from 'lucide-react';

export const MarksEntryPage = () => {
  const { examMarksData, saveExamMarks, students, addToast } = useApp();
  const [selectedExamKey, setSelectedExamKey] = useState('EXAM-UT2-8A');

  const examOptions = [
    { key: 'EXAM-NUR-A', label: 'Nursery - A • Continuous Assessment 1' },
    { key: 'EXAM-UT2-3A', label: 'Class 3 - A • Unit Test 2 (Mathematics)' },
    { key: 'EXAM-UT2-8A', label: 'Class 8 - A • Unit Test 2 (Mathematics)' },
    { key: 'EXAM-PREBOARD-10A', label: 'Class 10 - A • Pre-Board Mathematics' }
  ];

  const currentExam = examMarksData[selectedExamKey] || {
    examName: "Unit Test - 2 (Mathematics)",
    class: "Class 8 - A",
    maxMarks: 50,
    passingMarks: 18,
    status: "Draft",
    entries: students.filter(s => s.class === 'Class 8' && s.division === 'A').map(s => ({
      studentId: s.id,
      rollNo: s.rollNo,
      name: s.name,
      marks: s.mathScore ? Math.round((s.mathScore / 100) * 50) : 42,
      grade: 'A',
      remarks: 'Good performance'
    }))
  };

  const [entries, setEntries] = useState(currentExam.entries || []);

  useEffect(() => {
    if (examMarksData[selectedExamKey]?.entries) {
      setEntries(examMarksData[selectedExamKey].entries);
    } else {
      const [cls, div] = (currentExam.class || 'Class 8 - A').split(' - ');
      const matchedStudents = students.filter(s => div ? (s.class === cls && s.division === div) : s.class === cls);
      const newEntries = matchedStudents.length > 0
        ? matchedStudents.map(s => ({
            studentId: s.id,
            rollNo: s.rollNo,
            name: s.name,
            marks: s.mathScore ? Math.round((s.mathScore / 100) * (currentExam.maxMarks || 50)) : 40,
            grade: 'A',
            remarks: 'Consistent performance'
          }))
        : [];
      setEntries(newEntries);
    }
  }, [selectedExamKey, examMarksData, students]);

  const calculateGrade = (marks, maxMarks = 50) => {
    const percentage = (marks / maxMarks) * 100;
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    if (percentage >= 35) return 'D';
    return 'F';
  };

  const handleMarkChange = (index, val) => {
    const max = currentExam.maxMarks || 50;
    const num = Math.min(max, Math.max(0, Number(val) || 0));
    setEntries(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        marks: num,
        grade: calculateGrade(num, max)
      };
      return updated;
    });
  };

  const handleRemarkChange = (index, text) => {
    setEntries(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        remarks: text
      };
      return updated;
    });
  };

  const avgMarks = entries.length > 0
    ? Math.round(entries.reduce((acc, curr) => acc + (Number(curr.marks) || 0), 0) / entries.length)
    : 0;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Marks Entry & Evaluation</h2>
            <span className="px-2.5 py-0.5 bg-purple-100 text-purple-700 text-xs font-black rounded-full">
              Nursery to 10th Class
            </span>
          </div>
          <p className="text-sm text-slate-500 font-medium mt-0.5">
            Bulk marks recording, grade moderation, and HOD approval submission (BRD §22, §52).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => saveExamMarks(selectedExamKey, entries, 'Draft')}
            className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Draft</span>
          </button>
          <button
            onClick={() => saveExamMarks(selectedExamKey, entries, 'Submitted')}
            className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-600/30 transition-all flex items-center gap-1.5"
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Submit to HOD</span>
          </button>
        </div>
      </div>

      {/* Control Banner */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <div>
            <label className="text-slate-400 block font-semibold text-[10px] uppercase mb-1">Select Exam & Class</label>
            <select
              value={selectedExamKey}
              onChange={(e) => setSelectedExamKey(e.target.value)}
              className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {examOptions.map((opt) => (
                <option key={opt.key} value={opt.key}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden md:block" />
          <div>
            <span className="text-slate-400 block font-semibold text-[10px] uppercase">Class & Division</span>
            <span className="font-bold text-slate-800 text-sm">{currentExam.class}</span>
          </div>
          <div className="h-8 w-px bg-slate-200 hidden md:block" />
          <div>
            <span className="text-slate-400 block font-semibold text-[10px] uppercase">Maximum Marks</span>
            <span className="font-bold text-slate-800 text-sm">{currentExam.maxMarks} (Pass: {currentExam.passingMarks})</span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-2xl border border-purple-100 font-bold text-xs">
          <Calculator className="w-4 h-4" />
          <span>Class Mean: {avgMarks} / {currentExam.maxMarks}</span>
        </div>
      </div>

      {/* Spreadsheet Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase text-[11px] font-bold tracking-wider">
                <th className="py-3 px-4 w-16">Roll</th>
                <th className="py-3 px-4">Student Name</th>
                <th className="py-3 px-4 w-32">Marks (/{currentExam.maxMarks})</th>
                <th className="py-3 px-4 w-24 text-center">Grade</th>
                <th className="py-3 px-4">Evaluator Remarks & Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {entries.length > 0 ? (
                entries.map((entry, idx) => (
                  <tr key={entry.studentId || idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-400">#{entry.rollNo}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">{entry.name}</td>
                    <td className="py-3 px-4">
                      <input
                        type="number"
                        min="0"
                        max={currentExam.maxMarks}
                        value={entry.marks}
                        onChange={(e) => handleMarkChange(idx, e.target.value)}
                        className="w-20 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-black text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white"
                      />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-0.5 rounded font-extrabold text-xs ${
                        entry.grade === 'A+' || entry.grade === 'A'
                          ? 'bg-emerald-100 text-emerald-800'
                          : entry.grade === 'B+' || entry.grade === 'B'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {entry.grade}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <input
                        type="text"
                        value={entry.remarks}
                        onChange={(e) => handleRemarkChange(idx, e.target.value)}
                        className="w-full px-2.5 py-1 bg-transparent border-b border-transparent focus:border-purple-300 rounded text-xs text-slate-700 focus:outline-none focus:bg-slate-50"
                        placeholder="Add constructive feedback..."
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400">
                    No student entries recorded for this assessment yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
