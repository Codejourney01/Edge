import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronDown,
  ChevronRight,
  FolderKanban,
  ListFilter,
  Flag,
  CalendarDays,
  Circle,
  CheckCircle2,
  Clock3,
  Search,
  Plus,
  SlidersHorizontal,
  CircleDot,
  X,
} from "lucide-react";

// --------------------------------------------------
// SAMPLE PROJECT DATA
// --------------------------------------------------

const initialProjects = [
  {
    id: 1,
    name: "Employee Management System",
    tasks: [
      {
        id: 1,
        name: "Create Dashboard UI",
        startDate: "01/02/2026",
        dueDate: "20/02/2026",
        priority: "High",
        status: "Completed",
      },
      {
        id: 2,
        name: "Authentication System",
        startDate: "03/02/2026",
        dueDate: "22/02/2026",
        priority: "High",
        status: "Completed",
      },
      {
        id: 3,
        name: "Employee Profile Module",
        startDate: "05/02/2026",
        dueDate: "25/02/2026",
        priority: "Normal",
        status: "Completed",
      },
      {
        id: 4,
        name: "Backend API Integration",
        startDate: "08/02/2026",
        dueDate: "28/02/2026",
        priority: "Normal",
        status: "Completed",
      },
      {
        id: 5,
        name: "Testing and Deployment",
        startDate: "10/02/2026",
        dueDate: "05/03/2026",
        priority: "Low",
        status: "In Progress",
      },
    ],
  },
  {
    id: 2,
    name: "E-Commerce Website",
    tasks: [
      {
        id: 6,
        name: "Design Homepage",
        startDate: "01/03/2026",
        dueDate: "10/03/2026",
        priority: "High",
        status: "Completed",
      },
      {
        id: 7,
        name: "Product Listing",
        startDate: "05/03/2026",
        dueDate: "15/03/2026",
        priority: "Normal",
        status: "In Progress",
      },
      {
        id: 8,
        name: "Shopping Cart",
        startDate: "08/03/2026",
        dueDate: "20/03/2026",
        priority: "High",
        status: "To Do",
      },
    ],
  },
  {
    id: 3,
    name: "College Management",
    tasks: [
      {
        id: 9,
        name: "Student Registration",
        startDate: "01/04/2026",
        dueDate: "10/04/2026",
        priority: "High",
        status: "To Do",
      },
      {
        id: 10,
        name: "Attendance Module",
        startDate: "03/04/2026",
        dueDate: "15/04/2026",
        priority: "Normal",
        status: "To Do",
      },
    ],
  },
  {
    id: 4,
    name: "Portfolio Website",
    tasks: [
      {
        id: 11,
        name: "Create Portfolio Layout",
        startDate: "01/05/2026",
        dueDate: "10/05/2026",
        priority: "Normal",
        status: "Completed",
      },
      {
        id: 12,
        name: "Responsive Design",
        startDate: "05/05/2026",
        dueDate: "15/05/2026",
        priority: "Low",
        status: "In Progress",
      },
    ],
  },
  {
    id: 5,
    name: "Task Management App",
    tasks: [
      {
        id: 13,
        name: "Task Creation",
        startDate: "01/06/2026",
        dueDate: "10/06/2026",
        priority: "High",
        status: "To Do",
      },
      {
        id: 14,
        name: "Task Assignment",
        startDate: "05/06/2026",
        dueDate: "15/06/2026",
        priority: "Normal",
        status: "To Do",
      },
    ],
  },
];

// --------------------------------------------------
// CONFIGURATION
// --------------------------------------------------

const STATUS_OPTIONS = [
  {
    value: "To Do",
    color: "#525252",
    group: "Status",
  },
  {
    value: "In Progress",
    color: "#2462ed",
    group: "Status",
  },
  {
    value: "Completed",
    color: "#25c85b",
    group: "Closed",
  },
];

const PRIORITY_STYLES = {
  High: "text-red-600",
  Normal: "text-orange-500",
  Low: "text-gray-500",
};

// --------------------------------------------------
// STATUS ICON
// --------------------------------------------------

function StatusIcon({ status, size = 14 }) {
  const option = STATUS_OPTIONS.find((item) => item.value === status);

  return (
    <span
      aria-hidden="true"
      className="inline-block shrink-0 rounded-full border-[1.5px]"
      style={{
        width: size,
        height: size,
        borderColor: option?.color || "#525252",
        borderTopColor: "transparent",
      }}
    />
  );
}

// --------------------------------------------------
// CUSTOM STATUS DROPDOWN
// --------------------------------------------------

function StatusDropdown({
  value,
  onChange,
  includeAll = false,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selected = STATUS_OPTIONS.find((item) => item.value === value);

  const selectValue = (newValue) => {
    onChange(newValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const renderOption = (option) => (
    <button
      key={option.value}
      type="button"
      role="menuitem"
      onClick={() => selectValue(option.value)}
      className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] transition-colors ${
        value === option.value ? "bg-[#f2f2f2]" : "hover:bg-[#f8f8f8]"
      }`}
    >
      <StatusIcon status={option.value} />

      <span className="min-w-0 flex-1 text-[#525252]">{option.value}</span>
    </button>
  );

  return (
    <div ref={dropdownRef} className={`relative min-w-0 ${className}`}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={`Status: ${value === "All" ? "All Status" : value}`}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-9 w-full min-w-0 items-center gap-2 rounded-sm border border-transparent px-2 text-left text-[13px] font-medium text-[#525252] transition-colors hover:border-[#e5e5e5] hover:bg-[#f8f8f8] focus-visible:outline-2 focus-visible:outline-[#245de7]"
      >
        <StatusIcon status={value} />

        <span className="min-w-0 flex-1 truncate whitespace-nowrap">
          {value === "All" ? "All Status" : value}
        </span>

        <ChevronDown
          size={13}
          className={`shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-[42px] z-[100] w-[165px] rounded-sm border border-[#e5e5e5] bg-white p-2 shadow-[0_8px_25px_rgba(0,0,0,0.10)]"
        >
          {includeAll && (
            <>
              <p className="px-2 py-1.5 text-[10px] font-medium text-[#737373]">
                Filter
              </p>

              <button
                type="button"
                role="menuitem"
                onClick={() => selectValue("All")}
                className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] ${
                  value === "All" ? "bg-[#f2f2f2]" : "hover:bg-[#f8f8f8]"
                }`}
              >
                <Circle size={13} className="text-gray-500" />

                <span className="text-[#525252]">All Status</span>
              </button>

              <div className="my-2 border-t border-[#eeeeee]" />
            </>
          )}

          <p className="px-2 py-1.5 text-[10px] font-medium text-[#737373]">
            Status
          </p>

          {STATUS_OPTIONS.filter((item) => item.group === "Status").map(
            renderOption,
          )}

          <div className="my-2 border-t border-[#eeeeee]" />

          <p className="px-2 py-1.5 text-[10px] font-medium text-[#737373]">
            Closed
          </p>

          {STATUS_OPTIONS.filter((item) => item.group === "Closed").map(
            renderOption,
          )}
        </div>
      )}
    </div>
  );
}

// --------------------------------------------------
// PROJECT PROGRESS
// --------------------------------------------------

function getProgress(tasks = []) {
  if (!tasks.length) return 0;

  const completed = tasks.filter((task) => task.status === "Completed").length;

  return Math.round((completed / tasks.length) * 100);
}

function ProjectProgress({ percentage }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-[#2862E8] transition-all duration-300"
          style={{
            width: `${Math.min(100, Math.max(0, percentage))}%`,
          }}
        />
      </div>

      <span className="text-xs tabular-nums text-gray-500">{percentage}%</span>
    </div>
  );
}

// --------------------------------------------------
// MAIN PROJECTS COMPONENT
// --------------------------------------------------

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);

  const [selectedProjectId, setSelectedProjectId] = useState(1);

  const [activeTab, setActiveTab] = useState("all");

  const [statusFilter, setStatusFilter] = useState("All");

  const [searchQuery, setSearchQuery] = useState("");

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId,
  );

  // ----------------------------------------------
  // UPDATE TASK STATUS
  // ----------------------------------------------

  const updateTaskStatus = (taskId, newStatus) => {
    setProjects((previous) =>
      previous.map((project) => ({
        ...project,
        tasks: project.tasks.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task,
        ),
      })),
    );
  };

  // ----------------------------------------------
  // FILTER TASKS
  // ----------------------------------------------

  const filteredTasks = useMemo(() => {
    if (!selectedProject) return [];

    let tasks = [...selectedProject.tasks];

    if (activeTab === "priority") {
      tasks = tasks.filter((task) => task.priority === "High");
    }

    if (activeTab === "status" && statusFilter !== "All") {
      tasks = tasks.filter((task) => task.status === statusFilter);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();

      tasks = tasks.filter((task) => task.name.toLowerCase().includes(query));
    }

    return tasks;
  }, [selectedProject, activeTab, statusFilter, searchQuery]);

  if (!selectedProject) {
    return (
      <div className="flex h-full items-center justify-center bg-white">
        <p className="text-sm text-gray-500">Project not found.</p>
      </div>
    );
  }

  // ----------------------------------------------
  // PROJECT STATISTICS
  // ----------------------------------------------

  const progress = getProgress(selectedProject.tasks);

  const completedCount = selectedProject.tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  const inProgressCount = selectedProject.tasks.filter(
    (task) => task.status === "In Progress",
  ).length;

  const pendingCount = selectedProject.tasks.filter(
    (task) => task.status === "To Do",
  ).length;

  // ----------------------------------------------
  // SELECT PROJECT
  // ----------------------------------------------

  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
    setActiveTab("all");
    setStatusFilter("All");
    setSearchQuery("");
  };

  // ----------------------------------------------
  // UI
  // ----------------------------------------------

  return (
    <div className="flex h-full min-h-0 w-full overflow-hidden border border-gray-100 bg-white">
      {/* ------------------------------------------ */}
      {/* DESKTOP PROJECT SIDEBAR */}
      {/* ------------------------------------------ */}

      <aside className="hidden w-[220px] shrink-0 flex-col border-r border-gray-100 bg-[#fafafa] md:flex lg:w-[240px]">
        <div className="flex h-[58px] shrink-0 items-center justify-between border-b border-gray-100 px-4">
          <h3 className="text-sm font-semibold text-gray-800">All Projects</h3>

          <button
            type="button"
            aria-label="Add project"
            className="rounded-md p-1.5 text-gray-500 transition hover:bg-gray-200 cursor-pointer"
          >
            <Plus size={15} />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-1 overflow-y-auto p-2">
          {projects.map((project) => {
            const percentage = getProgress(project.tasks);

            const isActive = selectedProjectId === project.id;

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => handleProjectSelect(project.id)}
                className={`flex w-full items-center justify-between gap-2 rounded-md px-2.5 py-2.5 text-left transition-colors cursor-pointer ${
                  isActive
                    ? "bg-blue-50 text-[#2862E8]"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="flex min-w-0 items-center gap-2">
                  <FolderKanban size={15} className="shrink-0" />

                  <span className="truncate text-xs font-medium">
                    {project.name}
                  </span>
                </span>

                <span className="shrink-0 text-[11px] tabular-nums">
                  {percentage}%
                </span>
              </button>
            );
          })}
        </div>

        <div className="shrink-0 border-t border-gray-100 p-3">
          <p className="text-[10px] text-gray-400">Total Projects</p>

          <p className="text-sm font-semibold text-gray-700">
            {projects.length} Projects
          </p>
        </div>
      </aside>

      {/* ------------------------------------------ */}
      {/* MAIN CONTENT */}
      {/* ------------------------------------------ */}

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        {/* HEADER */}

        <header className="flex min-h-[58px] shrink-0 flex-wrap items-center justify-between gap-2 border-b border-gray-100 px-3 py-2 sm:px-5">
          <div className="flex min-w-0 items-center gap-2">
            <FolderKanban size={16} className="shrink-0 text-[#2862E8]" />

            <span className="text-xs text-gray-500">Projects</span>

            <ChevronRight size={13} className="shrink-0 text-gray-400" />

            <span className="truncate text-xs font-semibold text-gray-700">
              {selectedProject.name}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <label className="relative">
              <Search
                size={14}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search tasks"
                className="h-8 w-[115px] rounded-md border border-gray-200 bg-white pl-8 pr-2 text-xs outline-none transition focus:border-[#2862E8] sm:w-[155px]"
              />
            </label>

            <button
              type="button"
              aria-label="Filter options"
              className="rounded-md p-2 text-gray-500 transition hover:bg-gray-100 cursor-pointer"
            >
              <SlidersHorizontal size={15} />
            </button>
          </div>
        </header>

        {/* ---------------------------------------- */}
        {/* MOBILE PROJECT SELECTOR */}
        {/* ---------------------------------------- */}

        <div className="border-b border-gray-100 bg-[#fafafa] p-3 md:hidden">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-700">
              All Projects
            </span>

            <span className="text-[10px] text-gray-400">
              {projects.length} Projects
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {projects.map((project) => {
              const isActive = selectedProjectId === project.id;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => handleProjectSelect(project.id)}
                  className={`min-w-[155px] max-w-[190px] shrink-0 rounded-sm border p-2.5 text-left transition cursor-pointer ${
                    isActive
                      ? "border-blue-200 bg-blue-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <span
                    className={`block truncate text-[11px] font-semibold ${
                      isActive ? "text-[#2862E8]" : "text-gray-700"
                    }`}
                  >
                    {project.name}
                  </span>

                  <div className="mt-2">
                    <ProjectProgress percentage={getProgress(project.tasks)} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ---------------------------------------- */}
        {/* PROJECT TABS */}
        {/* ---------------------------------------- */}

        <div className="flex min-h-[48px] shrink-0 flex-wrap items-center gap-2 border-b border-gray-100 px-3 sm:flex-nowrap sm:gap-5 sm:px-5">
          <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-5">
            {[
              { id: "all", label: "All Task" },
              { id: "priority", label: "On Priority" },
              { id: "status", label: "On Status" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  setStatusFilter("All");
                }}
                className={`relative flex h-[48px] shrink-0 items-center text-xs transition cursor-pointer ${
                  activeTab === tab.id
                    ? "font-semibold text-gray-800"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.label}

                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#2862E8]" />
                )}
              </button>
            ))}
          </div>

          {activeTab === "status" && (
            <div className="w-[135px] shrink-0 sm:w-[145px]">
              <StatusDropdown
                value={statusFilter}
                onChange={setStatusFilter}
                includeAll
              />
            </div>
          )}
        </div>

        {/* ---------------------------------------- */}
        {/* SCROLLABLE PROJECT CONTENT */}
        {/* ---------------------------------------- */}

        <div className="min-h-0 flex-1 overflow-y-auto">
          {/* PROJECT OVERVIEW */}

          <section className="flex flex-wrap items-center justify-between gap-3 px-3 py-4 sm:px-5">
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-sm font-semibold text-gray-800 sm:text-base">
                {selectedProject.name}
              </h2>

              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="text-[11px] text-gray-400">
                  {selectedProject.tasks.length} Total Tasks
                </span>

                <span className="flex items-center gap-1 text-[11px] text-green-600">
                  <CheckCircle2 size={12} />
                  {completedCount} Completed
                </span>

                <span className="flex items-center gap-1 text-[11px] text-blue-600">
                  <Clock3 size={12} />
                  {inProgressCount} In Progress
                </span>

                <span className="flex items-center gap-1 text-[11px] text-gray-500">
                  <Circle size={12} />
                  {pendingCount} To Do
                </span>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <div className="hidden h-1.5 w-20 overflow-hidden rounded-full bg-gray-100 sm:block sm:w-24">
                <div
                  className="h-full rounded-full bg-[#2862E8] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <span className="rounded-sm bg-gray-100 px-3 py-1.5 text-sm font-semibold tabular-nums text-gray-700">
                {progress}%
              </span>
            </div>
          </section>

          {/* -------------------------------------- */}
          {/* TASK TABLE */}
          {/* -------------------------------------- */}

          <section className="px-3 pb-5 sm:px-5">
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <ListFilter size={14} className="text-gray-500" />

                <span className="text-xs font-medium text-gray-700">Tasks</span>

                <span className="text-xs text-gray-400">
                  {filteredTasks.length}
                </span>
              </div>

              <button
                type="button"
                className="flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1.5 text-xs text-gray-500 transition hover:bg-gray-50 hover:text-[#2862E8] cursor-pointer"
              >
                <Plus size={14} />
                Add Task
              </button>
            </div>

            <div className="w-full min-h-[520px] rounded-sm border border-gray-100 overflow-x-auto">
              <div className="w-full rounded-sm min-w-[690px]">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b rounded-sm border-gray-100 bg-[#fafafa]">
                      <th className="px-3 py-3 text-[11px] font-medium text-gray-500">
                        Task Name
                      </th>
                      <th className="px-3 py-3 text-[11px] font-medium text-gray-500">
                        Start Date
                      </th>
                      <th className="px-3 py-3 text-[11px] font-medium text-gray-500">
                        Due Date
                      </th>
                      <th className="px-3 py-3 text-[11px] font-medium text-gray-500">
                        Priority
                      </th>
                      <th className="w-[155px] px-3 py-3 text-[11px] font-medium text-gray-500">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredTasks.map((task) => (
                      <tr
                        key={task.id}
                        className="border-b border-gray-100 transition-colors last:border-0 hover:bg-gray-50/70"
                      >
                        <td className="max-w-[260px] px-3 py-3">
                          <div className="flex min-w-0 items-center gap-2">
                            {task.status === "Completed" ? (
                              <CheckCircle2
                                size={15}
                                className="shrink-0 text-green-500"
                              />
                            ) : task.status === "In Progress" ? (
                              <CircleDot
                                size={15}
                                className="shrink-0 text-blue-500"
                              />
                            ) : (
                              <Circle
                                size={15}
                                className="shrink-0 text-gray-400"
                              />
                            )}

                            <span className="truncate text-xs font-medium text-gray-700">
                              {task.name}
                            </span>
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-3 py-3 text-xs text-gray-500">
                          {task.startDate || "—"}
                        </td>

                        <td className="whitespace-nowrap px-3 py-3">
                          <div className="flex items-center gap-1.5 whitespace-nowrap text-xs text-gray-500">
                            <CalendarDays size={12} className="text-gray-400" />
                            {task.dueDate || "—"}
                          </div>
                        </td>

                        <td className="px-3 py-3">
                          <div
                            className={`flex items-center gap-1.5 whitespace-nowrap text-xs font-medium ${
                              PRIORITY_STYLES[task.priority] || "text-gray-500"
                            }`}
                          >
                            <Flag size={13} fill="currentColor" />
                            {task.priority}
                          </div>
                        </td>

                        <td className="relative px-2 py-2">
                          <StatusDropdown
                            value={task.status}
                            onChange={(newStatus) =>
                              updateTaskStatus(task.id, newStatus)
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredTasks.length === 0 && (
                  <div className="flex min-h-[180px] flex-col items-center justify-center gap-2">
                    <Circle size={25} className="text-gray-300" />
                    <p className="text-sm font-medium text-gray-500">
                      No tasks found
                    </p>
                    <p className="text-xs text-gray-400">
                      Try changing your search or filters.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
