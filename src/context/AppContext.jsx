import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  teacherProfile,
  dashboardKPIs,
  todayTimetableData,
  upcomingExamsData,
  recentAnnouncementsData,
  syllabusProgressData,
  assignmentStatusData,
  myClassesData,
  recentActivityData,
  initialStudents,
  fullWeeklyTimetable,
  initialAssignments,
  initialLessonPlans,
  initialStudyMaterials,
  teacherLeaveData,
  initialExamMarks,
  initialMessages
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Navigation
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [globalSearch, setGlobalSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState('Monday, 15 Sep 2025');

  // Core Data
  const [profile, setProfile] = useState(teacherProfile);
  const [kpis, setKpis] = useState(dashboardKPIs);
  const [students, setStudents] = useState(initialStudents);
  const [timetable, setTimetable] = useState(todayTimetableData);
  const [weeklyTimetable, setWeeklyTimetable] = useState(fullWeeklyTimetable);
  const [assignments, setAssignments] = useState(initialAssignments);
  const [lessonPlans, setLessonPlans] = useState(initialLessonPlans);
  const [studyMaterials, setStudyMaterials] = useState(initialStudyMaterials);
  const [announcements, setAnnouncements] = useState(recentAnnouncementsData);
  const [messages, setMessages] = useState(initialMessages);
  const [leaveData, setLeaveData] = useState(teacherLeaveData);
  const [examMarksData, setExamMarksData] = useState(initialExamMarks);
  const [activities, setActivities] = useState(recentActivityData);

  // Geo-tag Attendance state
  const [geoAttendance, setGeoAttendance] = useState({
    isCheckedIn: true,
    checkInTime: "08:15 AM",
    checkOutTime: null,
    location: "Inside Campus (28.6139° N, 77.2090° E)",
    distance: "18 meters from main gate",
    isGeofenceValid: true,
    selfieVerified: true,
  });

  // Modal & Drawer visibility states
  const [modalState, setModalState] = useState({
    markAttendance: false,
    enterMarks: false,
    createAssignment: false,
    addLessonPlan: false,
    applyLeave: false,
    studentProfile: null,
    notificationDropdown: false,
    selectedClassForModal: 'Class 8 - A',
  });

  // Toast System
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3800);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Actions
  const openModal = (name, payload = null) => {
    setModalState(prev => ({
      ...prev,
      [name]: payload !== null ? payload : true
    }));
  };

  const closeModal = (name) => {
    setModalState(prev => ({
      ...prev,
      [name]: false
    }));
  };

  // Attendance update for class
  const updateStudentAttendance = (studentId, status) => {
    setStudents(prev =>
      prev.map(s => s.id === studentId ? { ...s, attendanceStatus: status } : s)
    );
  };

  const markAllAttendance = (className, status) => {
    setStudents(prev =>
      prev.map(s => (
        className === 'all' ||
        s.class === className ||
        `${s.class} - ${s.division}` === className ||
        className.startsWith(s.class)
      ) ? { ...s, attendanceStatus: status } : s)
    );
    addToast(`Marked all students as ${status} for ${className}`, 'info');
  };

  const submitClassAttendance = (className, date = '15 Sep 2025') => {
    const targetStudents = students.filter(s =>
      className === 'all' ||
      s.class === className ||
      `${s.class} - ${s.division}` === className ||
      className.startsWith(s.class)
    );
    const presentCount = targetStudents.filter(s => s.attendanceStatus === 'Present').length;
    const total = targetStudents.length || students.length;
    
    // Add to activities
    const newActivity = {
      id: Date.now(),
      title: `Attendance marked for ${className} (${presentCount}/${total} Present)`,
      time: 'Just now',
      icon: 'FileCheck',
      color: 'bg-teal-50 text-teal-600 border-teal-200'
    };
    setActivities(prev => [newActivity, ...prev]);

    addToast(`Attendance for ${className} submitted successfully! SMS/WhatsApp notifications sent to parents of absent students.`, 'success');
    closeModal('markAttendance');
  };

  // Geo-tag check-in / check-out
  const handleGeoCheckIn = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setGeoAttendance(prev => ({
      ...prev,
      isCheckedIn: true,
      checkInTime: timeString,
      checkOutTime: null
    }));
    addToast(`Geo-attendance check-in confirmed at ${timeString} inside campus geofence!`, 'success');
  };

  const handleGeoCheckOut = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setGeoAttendance(prev => ({
      ...prev,
      isCheckedIn: false,
      checkOutTime: timeString
    }));
    addToast(`Checked out successfully at ${timeString}. Total working hours calculated and synced with HR.`, 'info');
  };

  // Create Assignment
  const createNewAssignment = (newAsn) => {
    const assignment = {
      id: `ASN-${Date.now().toString().slice(-4)}`,
      assignedDate: '15 Sep 2025',
      submittedCount: 0,
      pendingCount: newAsn.totalStudents || 32,
      status: 'Active',
      ...newAsn
    };
    setAssignments(prev => [assignment, ...prev]);
    setKpis(prev => ({ ...prev, pendingAssignments: prev.pendingAssignments + 1 }));
    
    const newAct = {
      id: Date.now(),
      title: `New assignment published: "${assignment.title}"`,
      time: 'Just now',
      icon: 'FileText',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    };
    setActivities(prev => [newAct, ...prev]);

    addToast(`Assignment "${assignment.title}" created & dispatched to ${assignment.class} students!`, 'success');
    closeModal('createAssignment');
  };

  // Add Lesson Plan
  const addNewLessonPlan = (newPlan) => {
    const plan = {
      id: `LP-${Date.now().toString().slice(-4)}`,
      date: '15 Sep 2025',
      status: 'Planned',
      ...newPlan
    };
    setLessonPlans(prev => [plan, ...prev]);

    const newAct = {
      id: Date.now(),
      title: `Lesson plan added for ${plan.class} - ${plan.chapter}`,
      time: 'Just now',
      icon: 'BookOpen',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    };
    setActivities(prev => [newAct, ...prev]);

    addToast(`Lesson plan "${plan.title}" saved successfully!`, 'success');
    closeModal('addLessonPlan');
  };

  // Save / Submit Exam Marks
  const saveExamMarks = (examKey, entries, status = 'Submitted') => {
    setExamMarksData(prev => ({
      ...prev,
      [examKey]: {
        ...prev[examKey],
        entries,
        status
      }
    }));

    if (status === 'Submitted') {
      setKpis(prev => ({ ...prev, pendingMarks: Math.max(0, prev.pendingMarks - 1) }));
      addToast(`Marks for ${examMarksData[examKey]?.examName || 'Exam'} submitted to HOD & Principal for review!`, 'success');
    } else {
      addToast(`Marks draft saved locally.`, 'info');
    }
    closeModal('enterMarks');
  };

  // Apply Leave
  const applyForLeave = (leaveReq) => {
    const req = {
      id: `LV-2025-${Date.now().toString().slice(-3)}`,
      appliedOn: '15 Sep 2025',
      status: 'Pending HOD Approval',
      approver: 'Mr. Ramanathan (HOD Math)',
      ...leaveReq
    };
    setLeaveData(prev => ({
      ...prev,
      requests: [req, ...prev.requests]
    }));
    addToast(`Leave application submitted for ${req.fromDate} to ${req.toDate} (${req.days} days).`, 'success');
    closeModal('applyLeave');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        globalSearch,
        setGlobalSearch,
        selectedDate,
        setSelectedDate,
        profile,
        setProfile,
        kpis,
        students,
        timetable,
        weeklyTimetable,
        assignments,
        lessonPlans,
        studyMaterials,
        announcements,
        messages,
        leaveData,
        examMarksData,
        activities,
        geoAttendance,
        modalState,
        toasts,
        addToast,
        removeToast,
        openModal,
        closeModal,
        updateStudentAttendance,
        markAllAttendance,
        submitClassAttendance,
        handleGeoCheckIn,
        handleGeoCheckOut,
        createNewAssignment,
        addNewLessonPlan,
        saveExamMarks,
        applyForLeave,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
