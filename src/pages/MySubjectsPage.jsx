import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  BookOpen,
  CheckCircle,
  FileText,
  Clock,
  Layers,
  ArrowRight,
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import { syllabusProgressData, CLASS_CATEGORIES } from '../data/mockData';

export const MySubjectsPage = () => {
  const { setCurrentPage, openModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const subjects = [
    {
      id: 'NUR-PHONICS',
      name: 'Early Foundations & Phonics Fun',
      class: 'Nursery & LKG',
      stage: 'Pre-Primary',
      chaptersCount: 8,
      completedChapters: 7,
      progress: 88,
      syllabusColor: 'bg-pink-500',
      badge: 'Early Years',
      topics: ['Phonics Sounds (A to Z)', 'Primary Color Recognition', 'Sensory Clay & Fine Motor Skills', 'Number Rhymes (1 to 10)']
    },
    {
      id: 'PRIM-MATH',
      name: 'Foundational Mathematics & EVS',
      class: 'Class 1 to 5',
      stage: 'Primary',
      chaptersCount: 12,
      completedChapters: 9,
      progress: 75,
      syllabusColor: 'bg-amber-500',
      badge: 'Core Primary',
      topics: ['Place Value & 3-Digit Numbers', 'Multiplication Tables & Arrays', 'Basic Fractions & Money Math', 'Shapes, Time & Measurements']
    },
    {
      id: 'MATH-8',
      name: 'Secondary Mathematics',
      class: 'Class 6 to 8',
      stage: 'Middle',
      chaptersCount: 10,
      completedChapters: 8,
      progress: 80,
      syllabusColor: 'bg-emerald-500',
      badge: 'Core Middle',
      topics: ['Rational Numbers & Integers', 'Linear Equations in One Variable', 'Algebraic Identities & Factorization', 'Mensuration (Area & Volumes)']
    },
    {
      id: 'MATH-10',
      name: 'Advanced Mathematics (Board Prep)',
      class: 'Class 9 & 10',
      stage: 'Secondary',
      chaptersCount: 15,
      completedChapters: 11,
      progress: 73,
      syllabusColor: 'bg-blue-600',
      badge: 'CBSE Board',
      topics: ['Quadratic Equations', 'Introduction to Trigonometry', 'Coordinate Geometry', 'Triangles & Similarity Proofs']
    }
  ];

  const filteredSubjects = subjects.filter(s => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'pre-primary') return s.stage === 'Pre-Primary';
    if (selectedCategory === 'primary') return s.stage === 'Primary';
    if (selectedCategory === 'middle') return s.stage === 'Middle';
    if (selectedCategory === 'secondary') return s.stage === 'Secondary';
    return true;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Assigned Subjects & Curriculum</h2>
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-black rounded-full">
              Nursery to 10th Class
            </span>
          </div>
          <p className="text-sm text-slate-500 font-medium mt-0.5">
            Subject syllabus tracking, curriculum blueprint, and learning resources across all wings.
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('syllabus')}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Full Syllabus Tracker →</span>
        </button>
      </div>

      {/* Stage Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1.5 touch-scroll no-scrollbar max-w-full">
        {CLASS_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 flex-shrink-0 ${
              selectedCategory === cat.id
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Subjects Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {filteredSubjects.map((sub) => (
          <div
            key={sub.id}
            className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">
                      {sub.class}
                    </span>
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-md">
                      {sub.stage}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-2">{sub.name}</h3>
                </div>
                <span className="px-2.5 py-1 bg-purple-50 text-purple-700 font-bold text-xs rounded-lg">
                  {sub.badge}
                </span>
              </div>

              {/* Progress bar */}
              <div className="mt-5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1.5">
                  <span>Curriculum Completion</span>
                  <span className="font-bold text-slate-900">{sub.progress}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${sub.syllabusColor} rounded-full`}
                    style={{ width: `${sub.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2 font-medium">
                  <span>{sub.completedChapters} of {sub.chaptersCount} Chapters Covered</span>
                  <span>{sub.chaptersCount - sub.completedChapters} Chapters Remaining</span>
                </div>
              </div>

              {/* Topics preview */}
              <div className="mt-4">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Active Units & Modules
                </h4>
                <div className="space-y-1.5">
                  {sub.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span className="truncate">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => openModal('addLessonPlan')}
                className="text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                + Plan Next Lesson
              </button>
              <button
                onClick={() => setCurrentPage('study-materials')}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Study Materials →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
