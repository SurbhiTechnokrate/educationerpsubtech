import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  User,
  Settings,
  Shield,
  Bell,
  Mail,
  Phone,
  Building,
  MapPin,
  Save,
  CheckCircle2,
  Key
} from 'lucide-react';

export const ProfileSettingsPage = () => {
  const { profile, setProfile, addToast } = useApp();

  const [formData, setFormData] = useState({ ...profile });

  const handleSave = (e) => {
    e.preventDefault();
    setProfile(formData);
    addToast('Profile & preferences updated successfully!', 'success');
  };

  return (
    <div className="space-y-5 sm:space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Faculty Profile & Settings</h2>
        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
          Manage your personal credentials, contact details, and ERP preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Left: Bio card */}
        <div className="lg:col-span-4 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm text-center">
          <img
            src={formData.avatar}
            alt={formData.name}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mx-auto border-4 border-slate-100 shadow-lg ring-4 ring-blue-500/20"
          />
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4">{formData.name}</h3>
          <p className="text-xs text-blue-600 font-bold">{formData.role}</p>
          <p className="text-xs text-slate-400 mt-0.5">Employee ID: {formData.id}</p>

          <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-100 space-y-3 text-left text-xs text-slate-600">
            <div className="flex items-center gap-2.5">
              <Building className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span className="truncate">{formData.institution}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className="truncate">{formData.campus}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-purple-600 flex-shrink-0" />
              <span className="truncate">{formData.email}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>{formData.phone}</span>
            </div>
          </div>
        </div>

        {/* Right: Settings Form */}
        <div className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm">
          <h3 className="font-bold text-base text-slate-900 pb-3 sm:pb-4 border-b border-slate-100 mb-4 sm:mb-5">
            Personal & Operational Information
          </h3>

          <form onSubmit={handleSave} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Designation / Role Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mobile Contact
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Primary Assigned Class (Class Teacher)
                </label>
                <input
                  type="text"
                  value={formData.assignedClass}
                  onChange={(e) => setFormData({ ...formData, assignedClass: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Campus Geofence Perimeter Radius
                </label>
                <input
                  type="text"
                  value={formData.geofenceRadius}
                  onChange={(e) => setFormData({ ...formData, geofenceRadius: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
