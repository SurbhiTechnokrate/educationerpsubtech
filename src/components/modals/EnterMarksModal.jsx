import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Award,
  Save,
  CheckCircle,
  FileCheck,
  Calculator
} from 'lucide-react';

export const EnterMarksModal = () => {
  const { modalState, closeModal, examMarksData, saveExamMarks, students } = useApp();
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
      remarks: 'Good comprehension'
    }))
  };

  const [entries, setEntries] = useState(currentExam.entries || []);

  useEffect(() => {
    if (examMarksData[selectedExamKey]?.entries) {
      setEntries(examMarksData[selectedExamKey].entries);
    } else {
      const [cls, div] = (currentExam.class || 'Class 8 - A').split(' - ');
      const matched = students.filter(s => div ? (s.class === cls && s.division === div) : s.class === cls);
      const newEntries = matched.length > 0
        ? matched.map(s => ({
            studentId: s.id,
            rollNo: s.rollNo,
            name: s.name,
            marks: s.mathScore ? Math.round((s.mathScore / 100) * (currentExam.maxMarks || 50)) : 40,
            grade: 'A',
            remarks: 'Good effort'
          }))
        : [];
      setEntries(newEntries);
    }
  }, [selectedExamKey, examMarksData, students]);

  if (!modalState.enterMarks) return null;

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

  const handleMarkChange = (index, value) => {
    const max = currentExam.maxMarks || 50;
    const numericVal = Math.min(max, Math.max(0, Number(value) || 0));
    setEntries(prev => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        marks: numericVal,
        grade: calculateGrade(numericVal, max)
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full border border-slate-200 overflow-hidden animate-fade-in flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Exam Marks Entry</h3>
              <p className="text-xs text-slate-400 mt-0.5">{currentExam.examName} • {currentExam.class}</p>
            </div>
          </div>
          <button
            onClick={() => closeModal('enterMarks')}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <div>
              <span className="text-slate-500 font-semibold block text-[10px] uppercase mb-0.5">Select Class Assessment</span>
              <select
                value={selectedExamKey}
                onChange={(e) => setSelectedExamKey(e.target.value)}
                className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {examOptions.map(opt => (
                  <option key={opt.key} value={opt.key}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div className="h-6 w-px bg-slate-300 hidden sm:block" />
            <div>
              <span className="text-slate-500 font-semibold block text-[10px] uppercase">Max Marks</span>
              <span className="font-bold text-slate-800">{currentExam.maxMarks} (Pass: {currentExam.passingMarks})</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-xl border border-purple-200 font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Class Average: {avgMarks} / {currentExam.maxMarks}</span>
          </div>
        </div>

        {/* Spreadsheet Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                <th className="py-2.5 px-3">Roll</th>
                <th className="py-2.5 px-3">Student Name</th>
                <th className="py-2.5 px-3 w-28">Marks (/{currentExam.maxMarks})</th>
                <th className="py-2.5 px-3 w-20 text-center">Grade</th>
                <th className="py-2.5 px-3">Teacher Feedback / Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {entries.length > 0 ? (
                entries.map((item, idx) => (
                  <tr key={item.studentId || idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5 px-3 font-bold text-slate-400">#{item.rollNo}</td>
                    <td className="py-2.5 px-3 font-bold text-slate-800">{item.name}</td>
                    <td className="py-2.5 px-3">
                      <input
                        type="number"
                        min="0"
                        max={currentExam.maxMarks}
                        value={item.marks}
                        onChange={(e) => handleMarkChange(idx, e.target.value)}
                        className="w-20 px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
                      />
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-lg text-xs font-extrabold ${
                          item.grade.startsWith('A')
                            ? 'bg-emerald-100 text-emerald-700'
                            : item.grade.startsWith('B')
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {item.grade}
                      </span>
                    </td>
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        value={item.remarks}
                        onChange={(e) => handleRemarkChange(idx, e.target.value)}
                        placeholder="Add individual remarks..."
                        className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400">
                    No student entries recorded for this assessment.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Status: <strong className="text-slate-800">{currentExam.status}</strong>
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => saveExamMarks(selectedExamKey, entries, 'Draft')}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Draft</span>
            </button>
            <button
              onClick={() => saveExamMarks(selectedExamKey, entries, 'Submitted')}
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-md shadow-purple-600/30 transition-all flex items-center gap-2"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Submit for HOD Approval</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
