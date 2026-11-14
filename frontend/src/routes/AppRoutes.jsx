import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

// Shared & Public Components
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Home from "@/Page/Home";
import Login from "@/Page/Login";
import Register from "@/Page/Register";
import Setting from "@/Page/Setting";

// Manager Modules
import DashboardLayout from "../components/layout/Dashboardlayout";
import ManagerDashboard from "@/modules/manager/pages/Dashboard";
import ManagerProjectDetails from "@/modules/manager/pages/ProjectDetails";
import ManagerInbox from "@/modules/manager/pages/Inbox";

// Employee Modules
import EmployeeLayout from "@/modules/employee/EmployeeLayout";
import EmployeeDashboard from "@/modules/employee/pages/Dashboard";
import EmployeeProjects from "@/modules/employee/pages/Projects";
import EmployeeProjectDetails from "@/modules/employee/pages/ProjectDetails";
import EmployeeInbox from "@/modules/employee/pages/EmployeeInbox";
import EmployeeSettings from "@/modules/employee/pages/EmployeeSettings";

// --------------------------------------
// Public Website Layout
// --------------------------------------

function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// --------------------------------------
// Main App Routes (Merged)
// --------------------------------------

export default function AppRoutes() {
  return (
    <Routes>
      {/* ============================== */}
      {/* Public Website Routes */}
      {/* ============================== */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* ============================== */}
      {/* Authentication Routes */}
      {/* ============================== */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ============================== */}
      {/* Manager Dashboard Routes */}
      {/* ============================== */}
      <Route element={<DashboardLayout />}>
        <Route path="/managerdashboard" element={<ManagerDashboard />} />
        <Route
          path="/managerdashboard/projects"
          element={<ManagerProjectDetails />}
        />
        <Route path="/managerdashboard/inbox" element={<ManagerInbox />} />
        <Route path="/profile" element={<Setting />} />
      </Route>

      {/* ============================== */}
      {/* Employee Dashboard Routes */}
      {/* ============================== */}
      <Route path="/employee" element={<EmployeeLayout />}>
        <Route index element={<EmployeeDashboard />} />
        <Route path="dashboard" element={<EmployeeDashboard />} />
        <Route path="projects" element={<EmployeeProjects />} />
        <Route path="details" element={<EmployeeProjectDetails />} />
        <Route path="inbox" element={<EmployeeInbox />} />
        <Route path="settings" element={<EmployeeSettings />} />

        {/* Temporary placeholders until pages are created */}
        <Route path="home" element={<div>Employee Home</div>} />
        <Route path="reports" element={<div>Employee Reports</div>} />
      </Route>

      {/* ============================== */}
      {/* Old URL Redirects */}
      {/* ============================== */}
      <Route
        path="/employeedashboard"
        element={<Navigate to="/employee/dashboard" replace />}
      />
      <Route
        path="/employeeproject"
        element={<Navigate to="/employee/projects" replace />}
      />

      {/* ============================== */}
      {/* 404 Page */}
      {/* ============================== */}
      <Route
        path="*"
        element={
          <div className="w-full min-h-screen flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-700">
              404 - Page Not Found
            </h1>
          </div>
        }
      />
    </Routes>
  );
}
