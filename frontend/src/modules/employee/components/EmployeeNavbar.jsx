import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Inbox,
  Search,
  Sun,
  Menu,
  X,
  Home,
  LayoutDashboard,
  FolderKanban,
  Users,
  FileText,
  Settings,
  Pencil,
  Bell,
  LogOut,
} from "lucide-react";

function EmployeeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/employee/home", icon: Home },
    { name: "Dashboard", path: "/employee/dashboard", icon: LayoutDashboard },
    { name: "Project", path: "/employee/projects", icon: FolderKanban },
    { name: "Details", path: "/employee/details", icon: Users },
    { name: "Report", path: "/employee/reports", icon: FileText },
    { name: "Inbox", path: "/employee/inbox", icon: Inbox },
    { name: "Setting", path: "/employee/settings", icon: Settings },
  ];

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="w-full h-full bg-white border-b border-gray-200 px-3 sm:px-6 py-2 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
        {/* Top Row: Hamburger, Logo & Actions */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center space-x-2 shrink-0">
            {/* Hamburger Menu - Sirf Tablet aur Mobile (md:hidden) par hi dikhega */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-1.5 hover:bg-gray-100 rounded-lg text-gray-700 transition cursor-pointer"
              aria-label="Open Menu"
            >
              <Menu size={20} />
            </button>

            <img
              src="/logo.svg"
              alt="Edge Logo"
              className="h-7 sm:h-9 w-auto object-contain"
            />
          </div>

          {/* Search Bar for Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 min-w-0">
            <div className="relative flex items-center w-full">
              <Search className="absolute left-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Projects, Tasks"
                className="w-full pl-10 pr-4 py-2 bg-gray-50/50 border border-gray-200 rounded-lg text-sm shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500 transition-all text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Actions & Profile */}
          <div className="flex items-center space-x-1 sm:space-x-2 shrink-0">
            <div className="relative cursor-pointer p-1.5 sm:p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Inbox className="w-4 h-4 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-blue-600 rounded-full ring-2 ring-white"></span>
            </div>

            <div className="cursor-pointer p-1.5 sm:p-2 hover:bg-gray-100 rounded-xl transition-colors">
              <Sun className="w-4 h-4 text-gray-600" />
            </div>

            {/* Profile Dropdown Container */}
            <div className="relative" ref={profileRef}>
              <div
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 cursor-pointer pl-2 border-l border-gray-200 select-none"
              >
                <div className="relative">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-black text-white font-semibold rounded-full flex items-center justify-center shadow-sm text-sm">
                    V
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-white"></span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-50 bg-white border border-gray-200 rounded-sm py-2 z-50 text-gray-700 animate-in fade-in slide-in-from-top-2">
                  {/* User Info Header */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                    <div className="relative shrink-0">
                      <div className="w-10 h-10 bg-black text-white font-semibold rounded-full flex items-center justify-center text-base shadow-sm">
                        V
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-white"></span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">
                        Vishwesh
                      </p>
                      <p className="text-xs text-gray-400">Online</p>
                    </div>
                  </div>

                  {/* Menu Options */}
                  <div className="p-1.5 space-y-0.5 border-b border-gray-100">
                    <button
                      onClick={() => {
                        navigate("/employee/settings");
                        setIsProfileOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 rounded-xl transition cursor-pointer"
                    >
                      <Pencil size={16} className="text-gray-500" />
                      Edit Profile
                    </button>

                    <button
                      onClick={() => {
                        navigate("/employee/inbox");
                        setIsProfileOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 rounded-xl transition cursor-pointer"
                    >
                      <Bell size={16} className="text-gray-500" />
                      Notification
                    </button>
                  </div>

                  {/* Logout Option */}
                  <div className="p-1.5 pt-1">
                    <button
                      onClick={() => {
                        alert("Logged out successfully!");
                        setIsProfileOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-xl transition cursor-pointer"
                    >
                      <LogOut size={16} className="text-red-500" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search Bar for Tablet & Mobile (Niche shift ho jayega) */}
        <div className="w-full md:hidden pb-1">
          <div className="relative flex items-center w-full">
            <Search className="absolute left-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Projects, Tasks"
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-lg text-xs shadow-xs focus:outline-none focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500 text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
      </header>

      {/* MOBILE/TABLET SIDEBAR DRAWER (Sirf choti screens par active hoga) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-[#2862E8] text-white flex flex-col py-4 px-3 shadow-2xl transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/20 px-1">
          <span className="text-xs font-semibold tracking-wider uppercase text-white/85">
            Navigation Menu
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1 hover:bg-blue-700 rounded-lg text-white transition cursor-pointer"
            aria-label="Close Menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Links / Options */}
        <div className="flex flex-col gap-1.5 w-full overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              location.pathname === item.path ||
              location.pathname.startsWith(item.path + "/");

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-blue-600 shadow-sm font-semibold"
                    : "text-white hover:bg-blue-700/40"
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.6 : 2} />
                <span className="text-xs sm:text-sm whitespace-nowrap">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default EmployeeNavbar;
