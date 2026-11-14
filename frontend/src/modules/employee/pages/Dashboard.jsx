import React from "react";
import { CalendarDays, RefreshCw } from "lucide-react";

import TotalWorkChart from "../components/TotalWorkChart";
import ProjectCompleted from "../components/ProjectCompleted";
import TotalProjectStatus from "../components/TotalProjectStatus";
import AiExecutiveSummary from "../components/AiExecutiveSummary";

export default function EmployeeDashboard() {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const statistics = [
    {
      title: "Assigned",
      count: 5,
    },
    {
      title: "In Progress",
      count: 3,
    },
    {
      title: "Completed",
      count: 1,
    },
  ];

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="w-full h-full min-h-0 flex flex-col overflow-hidden bg-gray-50/30 border border-t-0">
      {/* Dashboard Header */}
      <div className="shrink-0 w-full px-3 sm:px-4 py-3 bg-white border-b border-gray-100 z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-2">
          <span>Workspace</span>
          <span>/</span>
          <span>Employee</span>
          <span>/</span>
          <span className="text-gray-700 font-medium">Dashboard</span>
        </div>

        {/* Header Content */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <p className="text-lg font-semibold text-gray-800">Dashboard</p>
            <p className="text-xs text-gray-400">
              Welcome back! Here's your work overview.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Date */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
              <CalendarDays size={14} />
              <span>{today}</span>
            </div>

            {/* Refresh */}
            <button
              type="button"
              onClick={handleRefresh}
              className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-xs text-gray-600 hover:bg-gray-50 transition cursor-pointer"
            >
              <RefreshCw size={13} />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Dashboard Content */}
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-2 sm:p-3">
        <div className="flex flex-col gap-3 w-full">
          {/* ================= MAIN SECTION ================= */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.5fr)_minmax(300px,1fr)] gap-3 items-stretch">
            {/* LEFT SECTION */}
            <div className="min-w-0 flex flex-col gap-3">
              {/* Project Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {statistics.map((item) => (
                  <div
                    key={item.title}
                    className="w-full p-3 sm:p-4 rounded-sm border border-gray-100 flex justify-center items-center flex-col gap-2 bg-white shadow-xs"
                  >
                    <p className="text-xs sm:text-sm text-gray-500 font-medium text-center">
                      {item.title}
                    </p>

                    <div className="flex justify-center items-center flex-col">
                      <p className="text-xl sm:text-2xl font-semibold text-gray-800">
                        {item.count}
                      </p>

                      <p className="text-[10px] sm:text-xs text-gray-500">
                        Projects
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Overall Performance */}
              <div className="border border-gray-100 rounded-sm w-full p-4 bg-white flex flex-col gap-4 flex-1 min-h-[220px] shadow-xs">
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-gray-800">
                    Overall Performance
                  </h4>

                  <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-green-50 text-green-600 whitespace-nowrap">
                    Good Performance
                  </span>
                </div>

                {/* Performance Score */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <p className="text-3xl font-semibold text-gray-800">
                      86
                      <span className="text-sm text-gray-400">/100</span>
                    </p>

                    <p className="text-xs text-gray-500">
                      Overall Performance Score
                    </p>

                    <p className="text-[11px] text-green-600 font-medium">
                      Above expected performance
                    </p>
                  </div>

                  {/* Circular Progress */}
                  <div className="relative w-[76px] h-[76px] shrink-0">
                    <svg
                      className="w-full h-full -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#F3F4F6"
                        strokeWidth="9"
                        fill="none"
                      />

                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#16A34A"
                        strokeWidth="9"
                        fill="none"
                        strokeDasharray="251.2"
                        strokeDashoffset="35.17"
                        strokeLinecap="round"
                      />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-base font-semibold text-gray-800">
                        86%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION - AI EXECUTIVE SUMMARY */}
            <div className="min-w-0 min-h-[380px] xl:min-h-0">
              <AiExecutiveSummary />
            </div>
          </div>

          {/* ================= BOTTOM SECTION ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 w-full items-stretch pb-4 md:pb-0">
            {/* Total Project Status */}
            <div className="min-w-0 min-h-[300px]">
              <TotalProjectStatus />
            </div>

            {/* Total Work */}
            <div className="min-w-0 min-h-[300px]">
              <TotalWorkChart />
            </div>

            {/* Project Completed */}
            <div className="min-w-0 min-h-[300px]">
              <ProjectCompleted />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
