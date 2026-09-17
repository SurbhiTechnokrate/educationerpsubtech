import React from 'react';
import { useApp } from '../../context/AppContext';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { DashboardPage } from '../../pages/DashboardPage';
import { MyClassesPage } from '../../pages/MyClassesPage';
import { MySubjectsPage } from '../../pages/MySubjectsPage';
import { TimetablePage } from '../../pages/TimetablePage';
import { StudentListPage } from '../../pages/StudentListPage';
import { StudentPerformancePage } from '../../pages/StudentPerformancePage';
import { LessonPlansPage } from '../../pages/LessonPlansPage';
import { SyllabusPage } from '../../pages/SyllabusPage';
import { StudyMaterialsPage } from '../../pages/StudyMaterialsPage';
import { AssignmentsPage } from '../../pages/AssignmentsPage';
import { AttendancePage } from '../../pages/AttendancePage';
import { ExamsPage } from '../../pages/ExamsPage';
import { MarksEntryPage } from '../../pages/MarksEntryPage';
import { AnnouncementsPage } from '../../pages/AnnouncementsPage';
import { MessagesPage } from '../../pages/MessagesPage';
import { LeaveManagementPage } from '../../pages/LeaveManagementPage';
import { ReportsPage } from '../../pages/ReportsPage';
import { ProfileSettingsPage } from '../../pages/ProfileSettingsPage';

// Modals
import { MarkAttendanceModal } from '../modals/MarkAttendanceModal';
import { EnterMarksModal } from '../modals/EnterMarksModal';
import { CreateAssignmentModal } from '../modals/CreateAssignmentModal';
import { AddLessonPlanModal } from '../modals/AddLessonPlanModal';
import { StudentProfileModal } from '../modals/StudentProfileModal';
import { ApplyLeaveModal } from '../modals/ApplyLeaveModal';
import { ToastContainer } from '../shared/ToastContainer';

export const Layout = () => {
  const { currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'classes':
        return <MyClassesPage />;
      case 'subjects':
        return <MySubjectsPage />;
      case 'timetable':
        return <TimetablePage />;
      case 'students':
        return <StudentListPage />;
      case 'performance':
        return <StudentPerformancePage />;
      case 'lesson-plans':
        return <LessonPlansPage />;
      case 'syllabus':
        return <SyllabusPage />;
      case 'study-materials':
        return <StudyMaterialsPage />;
      case 'assignments':
        return <AssignmentsPage />;
      case 'attendance':
        return <AttendancePage />;
      case 'exams':
        return <ExamsPage />;
      case 'marks':
        return <MarksEntryPage />;
      case 'announcements':
        return <AnnouncementsPage />;
      case 'messages':
        return <MessagesPage />;
      case 'leave':
        return <LeaveManagementPage />;
      case 'reports':
        return <ReportsPage />;
      case 'profile':
        return <ProfileSettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f4f6fa] font-sans antialiased text-slate-800 relative w-full overflow-x-hidden">
      {/* Sidebar (Fixed on Desktop, Drawer on Mobile/Tablet) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <Header />
        <main className="flex-1 p-3.5 sm:p-5 md:p-8 overflow-y-auto max-w-7xl w-full mx-auto">
          {renderCurrentPage()}
        </main>
      </div>

      {/* Action Modals */}
      <MarkAttendanceModal />
      <EnterMarksModal />
      <CreateAssignmentModal />
      <AddLessonPlanModal />
      <StudentProfileModal />
      <ApplyLeaveModal />

      {/* Toast Feedback */}
      <ToastContainer />
    </div>
  );
};
