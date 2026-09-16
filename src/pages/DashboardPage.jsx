import React from 'react';
import { useApp } from '../context/AppContext';
import { MetricCards } from '../components/dashboard/MetricCards';
import { TimetableCard } from '../components/dashboard/TimetableCard';
import { UpcomingExamsCard } from '../components/dashboard/UpcomingExamsCard';
import { AnnouncementsCard } from '../components/dashboard/AnnouncementsCard';
import { SyllabusProgressCard } from '../components/dashboard/SyllabusProgressCard';
import { AssignmentStatusCard } from '../components/dashboard/AssignmentStatusCard';
import { QuickActionsCard } from '../components/dashboard/QuickActionsCard';
import { MyClassesTable } from '../components/dashboard/MyClassesTable';
import { RecentActivityCard } from '../components/dashboard/RecentActivityCard';

export const DashboardPage = () => {
  const { profile } = useApp();

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Greeting Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
          <span>Good Morning, {profile.name.split(' ')[0]}!</span>
          <span className="text-xl">☀️</span>
        </h2>
        <p className="text-sm text-slate-500 font-medium mt-1">
          Here's what's happening with your classes today.
        </p>
      </div>

      {/* 6 Top Metric KPI Cards */}
      <MetricCards />

      {/* Row 1: Today's Timetable, Upcoming Exams, Recent Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <TimetableCard />
        <UpcomingExamsCard />
        <AnnouncementsCard />
      </div>

      {/* Row 2: Syllabus Progress, Assignment Status, Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <SyllabusProgressCard />
        <AssignmentStatusCard />
        <QuickActionsCard />
      </div>

      {/* Row 3: My Classes & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8">
          <MyClassesTable />
        </div>
        <div className="lg:col-span-4">
          <RecentActivityCard />
        </div>
      </div>
    </div>
  );
};
