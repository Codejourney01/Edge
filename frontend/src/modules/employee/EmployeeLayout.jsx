import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import EmployeeNavbar from "./components/EmployeeNavbar";
import EmployeeSidebar from "./components/EmployeeSidebar";

export default function EmployeeLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col bg-gray-50/50">
      <header className="w-full shrink-0 z-50 md:h-[60px]">
        <EmployeeNavbar onToggleSidebar={() => setIsSidebarOpen(true)} />
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 min-h-0 overflow-hidden relative">
        {/* Sidebar Component (Desktop par fixed, Mobile/Tablet par drawer) */}
        <div className="shrink-0 h-full m-1 mr-0">
          <EmployeeSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0 min-h-0 overflow-hidden px-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
