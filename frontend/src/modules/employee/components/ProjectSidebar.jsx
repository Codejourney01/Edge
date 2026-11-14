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

function EmployeeSidebar({ isOpen, onClose }) {
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
      const isActive =
        location.pathname === item.path ||
        location.pathname.startsWith(item.path + "/");

      return (
        <button
          key={item.name}
          type="button"
          title={item.name}
          aria-label={item.name}
          aria-current={isActive ? "page" : undefined}
          onClick={() => {
            navigate(item.path);
            if (onClose) onClose(); // Close drawer on mobile when item clicked
          }}
          className="flex flex-col items-center justify-center gap-0.5 w-full h-[76px] shrink-0 cursor-pointer"
        >
          <div
            className={`w-[48px] h-[48px] flex items-center justify-center rounded-lg transition-all duration-200 ${
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
    <>
      {/* Backdrop for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 w-[60px] rounded-sm h-full bg-[#2862E8] text-white flex flex-col items-center py-2 px-1 overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col items-center w-full">
          {renderItems(navItems)}
        </div>

        <div className="flex flex-col items-center w-full mt-auto">
          {renderItems(bottomItems)}
        </div>
      </aside>
    </>
  );
}

export default EmployeeSidebar;
