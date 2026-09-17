import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FolderOpen,
  FileText,
  Video,
  Download,
  Upload,
  Plus,
  Search,
  Filter,
  Eye,
  GraduationCap
} from 'lucide-react';
import { ALL_CLASSES } from '../data/mockData';

export const StudyMaterialsPage = () => {
  const { studyMaterials, addToast } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedClassFilter, setSelectedClassFilter] = useState('all');

  const filteredMaterials = studyMaterials.filter(m => {
    const matchesCategory = selectedCategory === 'all' || m.category === selectedCategory;
    const matchesClass = selectedClassFilter === 'all' || m.class === selectedClassFilter;
    return matchesCategory && matchesClass;
  });

  const handleDownload = (title) => {
    addToast(`Downloading "${title}"...`, 'success');
  };

  return (
    <div className="space-y-5 sm:space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Study Materials & LMS</h2>
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-black rounded-full">
              Nursery to 10th Class
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Digital learning resources, lecture notes, formula sheets, and question banks (BRD §24).
          </p>
        </div>

        <button
          onClick={() => addToast('File upload dialog opened. Select local file.', 'info')}
          className="self-start sm:self-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/30 transition-all flex items-center gap-1.5"
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Upload Material</span>
        </button>
      </div>

      {/* Filter Tabs Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto touch-scroll no-scrollbar pb-1 -mx-1 px-1">
          {['all', 'Formula Sheets', 'Class Slides', 'Question Bank', 'Video Lectures'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 sm:px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Resources' : cat}
            </button>
          ))}
        </div>

        {/* Class Filter */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-2xl border border-slate-200 shadow-sm self-start md:self-auto">
          <GraduationCap className="w-4 h-4 text-blue-600 flex-shrink-0" />
          <select
            value={selectedClassFilter}
            onChange={(e) => setSelectedClassFilter(e.target.value)}
            className="text-xs font-bold text-slate-700 bg-transparent focus:outline-none"
          >
            <option value="all">All Grades (Nursery - 10th)</option>
            {ALL_CLASSES.map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {filteredMaterials.map((mat) => (
          <div
            key={mat.id}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    {mat.type.includes('Video') ? (
                      <Video className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md uppercase">
                      {mat.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mt-1 truncate">{mat.title}</h3>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-slate-400 font-medium pt-3 border-t border-slate-100">
                <span className="font-bold text-blue-600">{mat.class} • {mat.subject}</span>
                <span>•</span>
                <span>Size: {mat.size}</span>
                <span>•</span>
                <span>{mat.uploadedDate}</span>
              </div>
            </div>

            <div className="mt-4 sm:mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                📥 {mat.downloads} downloads
              </span>
              <button
                onClick={() => handleDownload(mat.title)}
                className="px-4 py-2 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-600 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
