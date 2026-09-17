import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  BookMarked,
  CheckCircle2,
  Circle,
  Calendar,
  Layers,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { ALL_CLASSES } from '../data/mockData';

const syllabusDataByClass = {
  'Nursery': [
    { id: 1, name: 'Theme 1: Myself, Family & My Home', status: 'Completed', periods: 12, examMarks: 10, targetDate: '15 Jul 2025' },
    { id: 2, name: 'Theme 2: Primary Colors (Red, Blue, Yellow)', status: 'Completed', periods: 10, examMarks: 10, targetDate: '05 Aug 2025' },
    { id: 3, name: 'Theme 3: Alphabet Sounds & Phonics (A to H)', status: 'In Progress', periods: 15, examMarks: 15, targetDate: '20 Sep 2025' },
    { id: 4, name: 'Theme 4: Counting with Objects (1 to 10)', status: 'Planned', periods: 14, examMarks: 15, targetDate: '15 Oct 2025' },
    { id: 5, name: 'Theme 5: Basic Shapes (Circle, Square, Triangle)', status: 'Planned', periods: 10, examMarks: 10, targetDate: '10 Nov 2025' }
  ],
  'LKG': [
    { id: 1, name: 'Module 1: Pre-Writing Strokes & Line Tracing', status: 'Completed', periods: 12, examMarks: 10, targetDate: '20 Jul 2025' },
    { id: 2, name: 'Module 2: Capital Letters (A to Z) & Phonics', status: 'Completed', periods: 18, examMarks: 15, targetDate: '25 Aug 2025' },
    { id: 3, name: 'Module 3: Number Writing & Quantity Match (1 to 20)', status: 'In Progress', periods: 16, examMarks: 15, targetDate: '22 Sep 2025' },
    { id: 4, name: 'Module 4: Environmental Awareness (Animals & Birds)', status: 'Planned', periods: 12, examMarks: 10, targetDate: '15 Oct 2025' }
  ],
  'UKG': [
    { id: 1, name: 'Unit 1: Two & Three Letter Sight Words (CVC Words)', status: 'Completed', periods: 15, examMarks: 15, targetDate: '30 Jul 2025' },
    { id: 2, name: 'Unit 2: Forward & Backward Counting (1 to 50)', status: 'Completed', periods: 14, examMarks: 15, targetDate: '20 Aug 2025' },
    { id: 3, name: 'Unit 3: Basic Addition with Picture Objects', status: 'In Progress', periods: 16, examMarks: 15, targetDate: '25 Sep 2025' },
    { id: 4, name: 'Unit 4: Seasons, Fruits & Vegetables', status: 'Planned', periods: 12, examMarks: 10, targetDate: '20 Oct 2025' }
  ],
  'Class 3': [
    { id: 1, name: 'Chapter 1: Where to Look From (Spatial Perspective)', status: 'Completed', periods: 8, examMarks: 6, targetDate: '15 Jul 2025' },
    { id: 2, name: 'Chapter 2: Fun with Numbers (3-Digit Place Values)', status: 'Completed', periods: 12, examMarks: 10, targetDate: '05 Aug 2025' },
    { id: 3, name: 'Chapter 3: Give and Take (2-Digit Addition & Subtraction)', status: 'Completed', periods: 14, examMarks: 12, targetDate: '25 Aug 2025' },
    { id: 4, name: 'Chapter 4: Shapes and Designs', status: 'In Progress', periods: 10, examMarks: 8, targetDate: '20 Sep 2025' },
    { id: 5, name: 'Chapter 5: How Many Times? (Multiplication Tables)', status: 'Planned', periods: 16, examMarks: 14, targetDate: '15 Oct 2025' },
    { id: 6, name: 'Chapter 6: Time Goes On (Clock Reading & Calendars)', status: 'Planned', periods: 10, examMarks: 8, targetDate: '10 Nov 2025' }
  ],
  'Class 8': [
    { id: 1, name: 'Chapter 1: Rational Numbers', status: 'Completed', periods: 8, examMarks: 6, targetDate: '20 Jul 2025' },
    { id: 2, name: 'Chapter 2: Linear Equations in One Variable', status: 'Completed', periods: 12, examMarks: 10, targetDate: '10 Aug 2025' },
    { id: 3, name: 'Chapter 3: Understanding Quadrilaterals', status: 'Completed', periods: 10, examMarks: 8, targetDate: '25 Aug 2025' },
    { id: 4, name: 'Chapter 4: Algebraic Expressions & Identities', status: 'In Progress', periods: 14, examMarks: 12, targetDate: '20 Sep 2025' },
    { id: 5, name: 'Chapter 5: Squares and Square Roots', status: 'Planned', periods: 10, examMarks: 8, targetDate: '10 Oct 2025' },
    { id: 6, name: 'Chapter 6: Cubes and Cube Roots', status: 'Planned', periods: 8, examMarks: 6, targetDate: '25 Oct 2025' },
    { id: 7, name: 'Chapter 7: Comparing Quantities (Percentage, CI)', status: 'Planned', periods: 14, examMarks: 12, targetDate: '15 Nov 2025' },
    { id: 8, name: 'Chapter 8: Mensuration (Surface Area & Volumes)', status: 'Planned', periods: 12, examMarks: 10, targetDate: '10 Dec 2025' }
  ],
  'Class 10': [
    { id: 1, name: 'Chapter 1: Real Numbers (Fundamental Theorem of Arithmetic)', status: 'Completed', periods: 8, examMarks: 6, targetDate: '15 Jul 2025' },
    { id: 2, name: 'Chapter 2: Polynomials & Zeroes', status: 'Completed', periods: 10, examMarks: 6, targetDate: '05 Aug 2025' },
    { id: 3, name: 'Chapter 3: Pair of Linear Equations in Two Variables', status: 'Completed', periods: 12, examMarks: 8, targetDate: '20 Aug 2025' },
    { id: 4, name: 'Chapter 4: Quadratic Equations & Word Problems', status: 'In Progress', periods: 14, examMarks: 10, targetDate: '15 Sep 2025' },
    { id: 5, name: 'Chapter 5: Arithmetic Progressions (AP)', status: 'Planned', periods: 10, examMarks: 8, targetDate: '05 Oct 2025' },
    { id: 6, name: 'Chapter 6: Triangles (Similarity & BPT Theorem)', status: 'Planned', periods: 16, examMarks: 12, targetDate: '25 Oct 2025' },
    { id: 7, name: 'Chapter 7: Introduction to Trigonometry & Identities', status: 'Planned', periods: 16, examMarks: 12, targetDate: '15 Nov 2025' },
    { id: 8, name: 'Chapter 8: Statistics & Probability (Board Exemplar)', status: 'Planned', periods: 12, examMarks: 10, targetDate: '05 Dec 2025' }
  ]
};

export const SyllabusPage = () => {
  const { addToast } = useApp();
  const [selectedClass, setSelectedClass] = useState('Class 8');

  const [curriculumState, setCurriculumState] = useState(syllabusDataByClass);

  const activeChapters = curriculumState[selectedClass] || [
    { id: 1, name: `${selectedClass} - Unit 1: Foundations & Core Concepts`, status: 'Completed', periods: 10, examMarks: 10, targetDate: '20 Jul 2025' },
    { id: 2, name: `${selectedClass} - Unit 2: Intermediate Problem Solving`, status: 'In Progress', periods: 14, examMarks: 15, targetDate: '20 Sep 2025' },
    { id: 3, name: `${selectedClass} - Unit 3: Advanced Applications & Projects`, status: 'Planned', periods: 12, examMarks: 15, targetDate: '20 Oct 2025' }
  ];

  const toggleChapterStatus = (id) => {
    setCurriculumState(prev => {
      const currentList = prev[selectedClass] || activeChapters;
      const updatedList = currentList.map(ch => {
        if (ch.id === id) {
          const nextStatus = ch.status === 'Completed' ? 'In Progress' : ch.status === 'In Progress' ? 'Planned' : 'Completed';
          addToast(`Updated ${ch.name} status to ${nextStatus}`, 'info');
          return { ...ch, status: nextStatus };
        }
        return ch;
      });
      return { ...prev, [selectedClass]: updatedList };
    });
  };

  const completedCount = activeChapters.filter(c => c.status === 'Completed').length;
  const progressPct = Math.round((completedCount / (activeChapters.length || 1)) * 100);

  return (
    <div className="space-y-5 sm:space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Syllabus Tracker</h2>
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-black rounded-full">
              Nursery to 10th Class
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Academic Year 2025-26 Curriculum Progress & Chapter Deliverables across grade wings.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="px-3.5 sm:px-4 py-2 bg-emerald-50 text-emerald-700 font-extrabold rounded-2xl text-xs border border-emerald-200">
            {selectedClass} Progress: {progressPct}% ({completedCount}/{activeChapters.length} Units)
          </div>
        </div>
      </div>

      {/* Class Selector Bar */}
      <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2 overflow-x-auto touch-scroll no-scrollbar pb-1 -mx-1 px-1">
          {ALL_CLASSES.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                selectedClass === cls
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {cls}
            </button>
          ))}
        </div>

        <div className="text-xs font-bold text-slate-500 self-end md:self-auto">
          Viewing <strong className="text-slate-900">{selectedClass}</strong> Syllabus
        </div>
      </div>

      {/* Progress Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <span>{selectedClass} Term 1 & Term 2 Syllabus Completion</span>
          <span className="text-emerald-600 font-black">{progressPct}%</span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <p className="text-[11px] sm:text-xs text-slate-400">
          Click on any topic status badge or icon to cycle between Completed, In Progress, and Planned.
        </p>
      </div>

      {/* Chapter List */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
        {activeChapters.map((ch) => (
          <div
            key={ch.id}
            onClick={() => toggleChapterStatus(ch.id)}
            className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 hover:bg-slate-50/80 cursor-pointer transition-colors"
          >
            <div className="flex items-start sm:items-center gap-3 sm:gap-3.5">
              {ch.status === 'Completed' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 sm:mt-0" />
              ) : ch.status === 'In Progress' ? (
                <span className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                </span>
              ) : (
                <Circle className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5 sm:mt-0" />
              )}

              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">{ch.name}</h4>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-400 mt-0.5">
                  <span>Periods: {ch.periods}</span>
                  <span>•</span>
                  <span>Weightage: {ch.examMarks} Marks</span>
                  <span>•</span>
                  <span>Target: {ch.targetDate}</span>
                </div>
              </div>
            </div>

            <span className={`self-start sm:self-auto px-3 py-1 rounded-xl text-xs font-bold ${
              ch.status === 'Completed'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : ch.status === 'In Progress'
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-slate-100 text-slate-600'
            }`}>
              {ch.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
