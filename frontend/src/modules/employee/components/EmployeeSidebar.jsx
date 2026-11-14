import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Home,
  LayoutDashboard,
  FolderKanban,
  Users,
  FileText,
  Inbox,
  Settings,
} from "lucide-react";

export default function EmployeeSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/employee/home", icon: Home },
    { name: "Dashboard", path: "/employee/dashboard", icon: LayoutDashboard },
    { name: "Project", path: "/employee/projects", icon: FolderKanban },
    { name: "Details", path: "/employee/details", icon: Users },
  ];

  const bottomItems = [
    { name: "Report", path: "/employee/reports", icon: FileText },
    { name: "Inbox", path: "/employee/inbox", icon: Inbox },
    { name: "Setting", path: "/employee/settings", icon: Settings },
  ];

  const renderItems = (items) =>
    items.map((item) => {
      const Icon = item.icon;
      const isActive = location.pathname === item.path;

      return (
        <button
          key={item.name}
          type="button"
          onClick={() => navigate(item.path)}
          className="flex flex-col items-center justify-center gap-0.5 w-full h-[64px] shrink-0 cursor-pointer"
        >
          <div
            className={`w-[44px] h-[44px] flex items-center justify-center rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-white text-blue-600 shadow-sm"
                : "bg-transparent text-white hover:bg-blue-700/40"
            }`}
          >
            <Icon size={20} strokeWidth={isActive ? 2.6 : 2} />
          </div>

          <span className="text-[10px] text-white whitespace-nowrap">
            {item.name}
          </span>
        </button>
      );
    });

  return (
    /* hidden md:flex lagane se yeh tablet/mobile par hidden ho jayega aur desktop par dikhega */
    <aside className="hidden md:flex w-[60px] rounded-sm h-full bg-[#2862E8] text-white flex-col items-center py-2 px-1 gap-1">
      {/* Top Navigation Items */}
      <div className="flex flex-col items-center w-full gap-1">
        {renderItems(navItems)}
      </div>

      {/* Divider */}
      <div className="w-8 h-[1px] bg-white/20 my-2" />

      {/* Bottom Navigation Items */}
      <div className="flex flex-col items-center w-full gap-1">
        {renderItems(bottomItems)}
      </div>
    </aside>
  );
}
