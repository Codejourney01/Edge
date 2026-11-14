import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Phone,
  Shield,
  Bell,
  Palette,
  Sun,
  Moon,
  LogOut,
  Save,
  CheckCircle2,
} from "lucide-react";

export default function EmployeeSettings() {
  const [profile, setProfile] = useState({
    name: "Vishwesh",
    email: "vishwesh2007@gmail.com",
    password: "",
    phone: "9999999999",
    role: "Full Stack Developer",
  });

  const [themeColor, setThemeColor] = useState("blue");
  const [appearance, setAppearance] = useState("light");
  const [notifications, setNotifications] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const colors = [
    { id: "blue", bg: "bg-blue-600" },
    { id: "indigo", bg: "bg-indigo-600" },
    { id: "emerald", bg: "bg-emerald-600" },
    { id: "purple", bg: "bg-purple-600" },
  ];

  return (
    <div className="w-full h-full min-h-0 flex flex-col bg-gray-50/50 p-3 sm:p-5 border border-t-0 overflow-y-auto">
      {/* Success Toast Notification */}
      {showSuccess && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-sm shadow-lg animate-in fade-in slide-in-from-top-5">
          <CheckCircle2 size={18} />
          <span className="text-xs font-medium">
            Changes saved successfully!
          </span>
        </div>
      )}

      {/* Header */}
      <div className="pb-4 border-b border-gray-200 mb-5">
        <h1 className="text-base sm:text-lg font-semibold text-gray-800">
          My Profile
        </h1>
        <p className="text-xs text-gray-400">
          Your personal information and account security settings.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-5 max-w-4xl pb-16">
        {/* Avatar & Basic Info Section */}
        <div className="bg-white rounded-sm border border-gray-200 p-4 sm:p-5 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black text-white flex items-center justify-center text-lg sm:text-xl font-bold shrink-0">
              {profile.name ? profile.name.charAt(0).toUpperCase() : "V"}
            </div>
            <div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                Avatar
              </span>
              <h3 className="text-sm font-semibold text-gray-800">
                {profile.name}
              </h3>
              <p className="text-xs text-gray-400">{profile.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-gray-100">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Name
              </label>
              <div className="relative">
                <User
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-gray-200 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-blue-500 bg-gray-50/50"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-gray-200 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-blue-500 bg-gray-50/50"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  name="password"
                  value={profile.password}
                  onChange={handleChange}
                  placeholder="Update Password"
                  className="w-full rounded-sm border border-gray-200 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-blue-500 bg-gray-50/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full rounded-sm border border-gray-200 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-blue-500 bg-gray-50/50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Preferences Section (Theme & Appearance) */}
        <div className="bg-white rounded-sm border border-gray-200 p-4 sm:p-5 space-y-5">
          {/* Theme Color */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4 className="text-xs font-semibold text-gray-800">
                Theme color
              </h4>
              <p className="text-[11px] text-gray-400">
                Choose a preferred theme for the app.
              </p>
            </div>
            <div className="flex items-center gap-2">
              {colors.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setThemeColor(c.id)}
                  className={`w-7 h-7 rounded-full ${c.bg} transition-transform cursor-pointer ${
                    themeColor === c.id
                      ? "ring-2 ring-offset-2 ring-blue-500 scale-110"
                      : "opacity-70 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Appearance (Light / Dark) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-semibold text-gray-800">
                Appearance
              </h4>
              <p className="text-[11px] text-gray-400 max-w-xs">
                Choose light or dark mode, or switch your mode automatically
                based on your system settings.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Light Mode Card */}
              <div
                onClick={() => setAppearance("light")}
                className={`flex-1 sm:w-28 p-3 rounded-sm border-2 cursor-pointer transition text-center ${
                  appearance === "light"
                    ? "border-blue-600 bg-blue-50/20"
                    : "border-gray-200 bg-white"
                }`}
              >
                <Sun size={18} className="mx-auto mb-1 text-amber-500" />
                <span className="text-xs font-medium text-gray-700">Light</span>
              </div>

              {/* Dark Mode Card */}
              <div
                onClick={() => setAppearance("dark")}
                className={`flex-1 sm:w-28 p-3 rounded-sm border-2 cursor-pointer transition text-center ${
                  appearance === "dark"
                    ? "border-blue-600 bg-slate-900 text-white"
                    : "border-gray-200 bg-gray-900 text-white"
                }`}
              >
                <Moon size={18} className="mx-auto mb-1 text-blue-400" />
                <span className="text-xs font-medium">Dark</span>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Extra Toggle: Notifications */}
          <div className="flex items-center justify-between gap-2">
            <div>
              <h4 className="text-xs font-semibold text-gray-800">
                Email Notifications
              </h4>
              <p className="text-[11px] text-gray-400">
                Receive alerts regarding new projects and updates.
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        {/* Log out section */}
        <div className="bg-white rounded-sm border border-gray-200 p-4 sm:p-5 flex items-center justify-between gap-3">
          <div>
            <h4 className="text-xs font-semibold text-gray-800">Log out</h4>
            <p className="text-[11px] text-gray-400">
              Sign out from your active session on this device.
            </p>
          </div>
          <button
            type="button"
            onClick={() => alert("Logged out successfully!")}
            className="px-3 sm:px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-sm text-xs font-medium transition cursor-pointer flex items-center gap-1.5 shrink-0"
          >
            <LogOut size={14} />
            Log Out
          </button>
        </div>

        {/* Save Changes Button Bar */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 bg-[#2862E8] hover:bg-blue-700 text-white rounded-sm text-xs font-medium transition cursor-pointer"
          >
            <Save size={15} />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
