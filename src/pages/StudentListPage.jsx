import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Users,
  Search,
  Filter,
  UserCheck,
  Eye,
  Phone,
  Mail,
  Award,
  Download,
  Plus,
  Layers,
  GraduationCap
} from 'lucide-react';
import { CLASS_SECTIONS, CLASS_CATEGORIES } from '../data/mockData';

export const StudentListPage = () => {
  const { students, openModal, globalSearch, setGlobalSearch } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [divisionFilter, setDivisionFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Filter students based on search, category, division, and attendance status
  const filteredStudents = students.filter((stu) => {
    const matchesSearch =
      stu.name.toLowerCase().includes(globalSearch.toLowerCase()) ||
      stu.rollNo.toString().includes(globalSearch) ||
      stu.class.toLowerCase().includes(globalSearch.toLowerCase()) ||
      stu.fatherName.toLowerCase().includes(globalSearch.toLowerCase());

    const activeCat = CLASS_CATEGORIES.find(c => c.id === selectedCategory);
    const matchesCategory =
      selectedCategory === 'all' || (activeCat && activeCat.classes?.includes(stu.class));

    const matchesDivision =
      divisionFilter === 'all' || `${stu.class} - ${stu.division}` === divisionFilter;

    const matchesStatus =
      statusFilter === 'all' || stu.attendanceStatus === statusFilter;

    return matchesSearch && matchesCategory && matchesDivision && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Student Roster</h2>
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 text-xs font-black rounded-full">
              Nursery to 10th Class
            </span>
          </div>
          <p className="text-sm text-slate-500 font-medium mt-0.5">
            Central Institutional Student Database & 360° Profiles across all grade wings (BRD §11).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openModal('markAttendance')}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Mark Class Attendance</span>
          </button>
        </div>
      </div>

      {/* Grade Level Stage Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {CLASS_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              setDivisionFilter('all');
            }}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-[240px]">
          <div className="relative w-full max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search student, roll, or parent..."
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <select
            value={divisionFilter}
            onChange={(e) => setDivisionFilter(e.target.value)}
            className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Specific Divisions</option>
            {CLASS_SECTIONS.map((sec) => (
              <option key={sec} value={sec}>
                {sec} {sec === 'Class 8 - A' ? '(Primary Roster)' : ''}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Attendance</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Late">Late</option>
          </select>
        </div>

        <div className="text-xs font-bold text-slate-500">
          Showing <span className="text-slate-900">{filteredStudents.length}</span> students
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 uppercase text-[11px] font-bold tracking-wider">
                <th className="py-3.5 px-4">Roll</th>
                <th className="py-3.5 px-4">Student</th>
                <th className="py-3.5 px-4">Class & Division</th>
                <th className="py-3.5 px-4">Today's Status</th>
                <th className="py-3.5 px-4">Attendance %</th>
                <th className="py-3.5 px-4">Overall Grade</th>
                <th className="py-3.5 px-4">Parent Contact</th>
                <th className="py-3.5 px-4">Fee Status</th>
                <th className="py-3.5 px-4 text-right">Student 360</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((stu) => (
                  <tr key={stu.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-extrabold text-slate-700">#{stu.rollNo}</td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={stu.photo}
                          alt={stu.name}
                          className="w-9 h-9 rounded-full object-cover border border-slate-200"
                        />
                        <div>
                          <div className="font-bold text-slate-900 text-xs hover:text-blue-600 cursor-pointer" onClick={() => openModal('studentProfile', stu)}>
                            {stu.name}
                          </div>
                          <div className="text-[11px] text-slate-400">ID: {stu.id} • {stu.gender}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-bold rounded-lg text-xs">
                        {stu.class} - {stu.division}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        stu.attendanceStatus === 'Present'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : stu.attendanceStatus === 'Late'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        {stu.attendanceStatus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">{stu.attendance}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-700 font-extrabold rounded-md text-xs">
                        {stu.overallGrade}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="text-slate-800 font-medium">{stu.fatherName}</div>
                      <div className="text-[11px] text-slate-400">{stu.parentContact}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                        stu.feeStatus === 'Paid'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {stu.feeStatus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => openModal('studentProfile', stu)}
                        className="p-1.5 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-lg transition-colors inline-flex items-center gap-1 text-xs font-bold"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View 360</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-400 text-xs">
                    No students found matching the selected grade level or filter.
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
