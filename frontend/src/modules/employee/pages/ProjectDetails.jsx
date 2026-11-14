import React, { useMemo, useState } from "react";
import {
  Users,
  Search,
  ChevronRight,
  Flag,
  CheckCircle2,
  MoreHorizontal,
  Mail,
  Phone,
  Copy,
  X,
  Clock3,
  Target,
  BriefcaseBusiness,
  FileText,
  Activity,
} from "lucide-react";

const initialProjects = [
  {
    id: 1,
    name: "Employee Management System",
    manager: "Bob Wilson",
    startDate: "11/02/2026",
    dueDate: "21/02/2026",
    priority: "High",
    status: "In Progress",
    progress: 65,
    description:
      "A centralized employee management platform designed to simplify employee records, attendance, payroll and performance management.",
    objectives: [
      "Manage employee profiles and records",
      "Track attendance and leave requests",
      "Generate employee performance reports",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    members: [
      {
        id: 1,
        name: "Vishwesh Sitapara",
        role: "Full Stack Developer",
        email: "vishwesh2007@gmail.com",
        phone: "9999999999",
      },
      {
        id: 2,
        name: "Krish Prajapati",
        role: "Full Stack Developer",
        email: "krish2007@gmail.com",
        phone: "8888888888",
      },
      {
        id: 3,
        name: "Kasim",
        role: "UI/UX Designer",
        email: "kasim2007@gmail.com",
        phone: "8989898989",
      },
    ],
    activity: [
      { text: "Project proposal approved", time: "Today", type: "success" },
      {
        text: "Krish updated project milestones",
        time: "Yesterday",
        type: "info",
      },
      { text: "Mentor feedback received", time: "2 days ago", type: "info" },
    ],
  },
  {
    id: 2,
    name: "E-Commerce Website",
    manager: "John Smith",
    startDate: "15/02/2026",
    dueDate: "15/03/2026",
    priority: "Normal",
    status: "In Progress",
    progress: 40,
    description:
      "An online shopping platform with product management, shopping cart, secure checkout and order tracking.",
    objectives: [
      "Create product catalog",
      "Implement shopping cart",
      "Build order management",
    ],
    technologies: ["React", "Express", "MongoDB"],
    members: [
      {
        id: 4,
        name: "Alex",
        role: "Frontend Developer",
        email: "alex@example.com",
        phone: "9876543210",
      },
    ],
    activity: [
      { text: "Frontend development started", time: "Today", type: "info" },
    ],
  },
  {
    id: 3,
    name: "College Management System",
    manager: "David",
    startDate: "01/02/2026",
    dueDate: "28/02/2026",
    priority: "High",
    status: "Completed",
    progress: 100,
    description:
      "A college management solution for managing students, faculty, courses and academic records.",
    objectives: [
      "Manage student records",
      "Manage faculty information",
      "Track academic activities",
    ],
    technologies: ["React", "Node.js", "MySQL"],
    members: [],
    activity: [{ text: "Project completed", time: "Today", type: "success" }],
  },
  {
    id: 4,
    name: "Portfolio Website",
    manager: "Robert",
    startDate: "10/02/2026",
    dueDate: "25/02/2026",
    priority: "Low",
    status: "To Do",
    progress: 0,
    description:
      "A professional portfolio website showcasing projects and skills.",
    objectives: ["Create portfolio pages", "Add project gallery"],
    technologies: ["React", "Tailwind CSS"],
    members: [],
    activity: [],
  },
];

const priorityStyles = {
  High: "bg-red-50 text-red-600",
  Normal: "bg-orange-50 text-orange-600",
  Low: "bg-gray-100 text-gray-600",
};

const statusStyles = {
  "To Do": "bg-gray-100 text-gray-600",
  "In Progress": "bg-blue-50 text-blue-600",
  Completed: "bg-green-50 text-green-600",
};

export default function ProjectDetails() {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedId, setSelectedId] = useState(1);
  const [activeTab, setActiveTab] = useState("All Projects");
  const [search, setSearch] = useState("");
  const [showActivity, setShowActivity] = useState(false);

  const selectedProject = projects.find((p) => p.id === selectedId);

  const visibleProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesTab =
        activeTab === "All Projects" ||
        (activeTab === "On Priority" && project.priority === "High") ||
        (activeTab === "On Status" && project.status === "In Progress");

      return matchesSearch && matchesTab;
    });
  }, [projects, search, activeTab]);

  const updateProjectStatus = (newStatus) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === selectedId ? { ...project, status: newStatus } : project,
      ),
    );
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      window.prompt("Copy this text:", text);
    }
  };

  if (!selectedProject) return null;

  return (
    <div className="flex h-full w-full items-start border border-t-0 bg-[#f8f9fc] text-gray-800 overflow-hidden">
      {/* LEFT PROJECT SIDEBAR */}
      <aside className="hidden w-[230px] h-full shrink-0 flex-col border-gray-200 bg-white md:flex lg:w-[240px] overflow-hidden">
        <div className="border-b border-gray-100 p-4 shrink-0">
          <h2 className="text-sm font-semibold">Projects</h2>
          <p className="mt-1 text-xs text-gray-400">
            {projects.length} total projects
          </p>
        </div>

        <div className="p-3 flex-1 min-h-0 flex flex-col overflow-hidden">
          <div className="relative mb-3 shrink-0">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-sm border border-gray-200 py-2 pl-8 pr-2 text-xs outline-none focus:border-blue-400"
            />
          </div>

          <div className="mb-3 flex flex-wrap gap-1 shrink-0">
            {["All Projects", "On Priority", "On Status"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-md px-2 py-1.5 text-[10px] font-medium transition cursor-pointer ${
                  activeTab === tab
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-1 flex-1 overflow-y-auto pr-1">
            {visibleProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className={`w-full rounded-sm p-3 text-left transition cursor-pointer ${
                  selectedId === project.id ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-xs font-medium ${
                      selectedId === project.id
                        ? "text-blue-700"
                        : "text-gray-700"
                    }`}
                  >
                    {project.name}
                  </span>
                  <ChevronRight size={14} className="shrink-0 text-gray-400" />
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-gray-400">
                  <span>{project.progress}% complete</span>
                  <span>{project.members.length} members</span>
                </div>

                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </button>
            ))}

            {visibleProjects.length === 0 && (
              <p className="py-8 text-center text-xs text-gray-400">
                No projects found
              </p>
            )}
          </div>
        </div>

        <div className="mt-auto border-t border-gray-100 p-4 shrink-0">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <BriefcaseBusiness size={15} />
            </div>
            <div>
              <p className="text-xs font-medium">Workspace</p>
              <p className="text-[10px] text-gray-400">Employee portal</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="min-w-0 flex-1 h-full flex flex-col border-l border-gray-200 bg-white overflow-hidden">
        {/* HEADER */}
        <div className="border-b border-gray-100 px-3 sm:px-6 py-4 shrink-0">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="mb-1 flex items-center gap-2 text-xs text-gray-400">
                <span>Projects</span>
                <ChevronRight size={13} />
                <span className="text-blue-600">Details</span>
              </div>
              <h1 className="text-base sm:text-lg font-semibold text-gray-800">
                Project Details
              </h1>
              <p className="mt-1 text-xs text-gray-400">
                View project information and team details.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowActivity(!showActivity)}
                className="flex items-center gap-2 rounded-sm border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                <Activity size={14} />
                <span className="hidden sm:inline">Activity</span>
              </button>
            </div>
          </div>

          {/* MOBILE PROJECT SELECTOR */}
          <div className="mt-4 md:hidden">
            <select
              value={selectedId}
              onChange={(e) => setSelectedId(Number(e.target.value))}
              className="w-full rounded-sm border border-gray-200 bg-white p-2.5 text-xs outline-none cursor-pointer"
            >
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* SCROLLABLE CONTENT AREA */}
        <div className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-5 space-y-4">
          {/* PROJECT TITLE + STATUS */}
          <section className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                {selectedProject.name}
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Managed by {selectedProject.manager}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                statusStyles[selectedProject.status]
              }`}
            >
              {selectedProject.status}
            </span>
          </section>

          {/* STATS */}
          <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="rounded-sm border border-gray-100 p-3 sm:p-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Target size={16} />
                <span className="text-xs">Progress</span>
              </div>
              <p className="mt-2 text-xl sm:text-2xl font-semibold">
                {selectedProject.progress}%
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{ width: `${selectedProject.progress}%` }}
                />
              </div>
            </div>

            <div className="rounded-sm border border-gray-100 p-3 sm:p-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Users size={16} />
                <span className="text-xs">Team Members</span>
              </div>
              <p className="mt-2 text-xl sm:text-2xl font-semibold">
                {selectedProject.members.length}
              </p>
              <p className="mt-1 text-[10px] text-gray-400">Assigned members</p>
            </div>

            <div className="rounded-sm border border-gray-100 p-3 sm:p-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Flag size={16} />
                <span className="text-xs">Priority</span>
              </div>
              <p className="mt-2 text-base sm:text-lg font-semibold">
                {selectedProject.priority}
              </p>
              <p className="mt-1 text-[10px] text-gray-400">Project priority</p>
            </div>

            <div className="rounded-sm border border-gray-100 p-3 sm:p-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Clock3 size={16} />
                <span className="text-xs">Due Date</span>
              </div>
              <p className="mt-2 text-base sm:text-lg font-semibold">
                {selectedProject.dueDate}
              </p>
              <p className="mt-1 text-[10px] text-gray-400">
                Target completion
              </p>
            </div>
          </section>

          {/* PROJECT DETAILS + DESCRIPTION */}
          <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* DETAILS CARD */}
            <div className="rounded-sm border border-gray-200 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold">Project Information</h3>
              </div>

              <div className="space-y-3">
                {[
                  ["Project Name", selectedProject.name],
                  ["Manager Name", selectedProject.manager],
                  ["Start Date", selectedProject.startDate],
                  ["Due Date", selectedProject.dueDate],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-start justify-between gap-3 text-xs"
                  >
                    <span className="text-gray-500">{label}</span>
                    <span className="max-w-[65%] break-words text-right font-medium text-gray-700">
                      {value}
                    </span>
                  </div>
                ))}

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Priority</span>
                  <span
                    className={`rounded-md px-2 py-1 font-medium ${
                      priorityStyles[selectedProject.priority]
                    }`}
                  >
                    <Flag size={11} className="mr-1 inline" />
                    {selectedProject.priority}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Status</span>
                  <select
                    value={selectedProject.status}
                    onChange={(e) => updateProjectStatus(e.target.value)}
                    className="rounded-md border border-gray-100 bg-white px-2 py-1 text-xs outline-none focus:border-blue-400 cursor-pointer"
                  >
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Team Size</span>
                  <span className="font-medium">
                    {selectedProject.members.length} Members
                  </span>
                </div>
              </div>
            </div>

            {/* DESCRIPTION CARD */}
            <div className="rounded-sm border border-gray-200 p-4">
              <div className="mb-4 flex items-center gap-2">
                <FileText size={16} className="text-blue-600" />
                <h3 className="text-sm font-semibold">Project Description</h3>
              </div>

              <p className="text-xs leading-6 text-gray-500">
                {selectedProject.description}
              </p>

              <div className="mt-5">
                <h4 className="mb-3 text-xs font-semibold text-gray-700">
                  Project Objectives
                </h4>

                <div className="space-y-2">
                  {selectedProject.objectives.map((objective, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-xs text-gray-500"
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0 text-green-500"
                      />
                      {objective}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <h4 className="mb-2 text-xs font-semibold text-gray-700">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-blue-50 px-2.5 py-1.5 text-[10px] font-medium text-blue-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* MEMBERS TABLE */}
          <section className="overflow-hidden rounded-sm border border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 p-4">
              <div>
                <h3 className="text-sm font-semibold">Team Members</h3>
                <p className="mt-1 text-xs text-gray-400">
                  People working on this project
                </p>
              </div>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead className="bg-gray-50">
                  <tr className="text-[11px] font-medium text-gray-500">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Job Title</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Contact</th>
                  </tr>
                </thead>

                <tbody>
                  {selectedProject.members.map((member) => (
                    <tr
                      key={member.id}
                      className="border-t border-gray-100 text-xs hover:bg-gray-50/70"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-600">
                            {member.name.charAt(0).toUpperCase()}
                          </div>
                          <span className="font-medium text-gray-700">
                            {member.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-gray-500">
                        {member.role || "Not specified"}
                      </td>

                      <td className="px-4 py-3">
                        <button
                          onClick={() => copyText(member.email)}
                          className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 cursor-pointer"
                        >
                          <Mail size={13} />
                          {member.email}
                          <Copy size={11} className="text-gray-400" />
                        </button>
                      </td>

                      <td className="px-4 py-3 text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Phone size={12} />
                          {member.phone || "—"}
                        </span>
                      </td>
                    </tr>
                  ))}

                  {selectedProject.members.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-4 py-12 text-center">
                        <Users
                          size={25}
                          className="mx-auto mb-2 text-gray-300"
                        />
                        <p className="text-xs font-medium text-gray-500">
                          No team members yet
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* ACTIVITY PANEL */}
          {showActivity && (
            <section className="rounded-sm border border-gray-200 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-blue-600" />
                  <h3 className="text-sm font-semibold">Recent Activity</h3>
                </div>
                <button
                  onClick={() => setShowActivity(false)}
                  className="rounded-md p-1 text-gray-400 hover:bg-gray-100 cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {selectedProject.activity.length > 0 ? (
                <div className="space-y-4">
                  {selectedProject.activity.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div
                        className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                          item.type === "success"
                            ? "bg-green-500"
                            : "bg-blue-500"
                        }`}
                      />
                      <div>
                        <p className="text-xs font-medium text-gray-700">
                          {item.text}
                        </p>
                        <p className="mt-1 text-[10px] text-gray-400">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="py-4 text-xs text-gray-400">
                  No recent activity available.
                </p>
              )}
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
