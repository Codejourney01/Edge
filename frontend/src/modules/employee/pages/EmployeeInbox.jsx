import React, { useState, useMemo } from "react";
import {
  Inbox as InboxIcon,
  Trash2,
  MoreVertical,
  CheckCircle2,
  FolderKanban,
  Eye,
  X,
  Calendar,
  User,
  Clock,
  AlertCircle,
} from "lucide-react";

const initialInboxItems = [
  {
    id: 1,
    type: "Task",
    title: "Update employee attendance module",
    sender: "Bob Wilson",
    date: "14 Feb 2026",
    priority: "High",
    status: "Pending",
    description:
      "Review and fix the biometric attendance syncing issues reported by the branch office.",
  },
  {
    id: 2,
    type: "Project",
    title: "Employee Management System V2",
    sender: "John Smith",
    date: "15 Feb 2026",
    priority: "Normal",
    status: "In Progress",
    description:
      "Core architecture upgrade for handling multi-role dashboard permissions and payroll automation.",
  },
  {
    id: 3,
    type: "Task",
    title: "Prepare monthly performance report",
    sender: "David Miller",
    date: "16 Feb 2026",
    priority: "Low",
    status: "Pending",
    description:
      "Compile department-wise productivity metrics and export PDF summaries for the review meeting.",
  },
  {
    id: 4,
    type: "Project",
    title: "E-Commerce Mobile App Integration",
    sender: "Alex Turner",
    date: "18 Feb 2026",
    priority: "High",
    status: "In Progress",
    description:
      "Connect REST endpoints with React Native frontend components for cart and checkout flows.",
  },
  {
    id: 5,
    type: "Task",
    title: "Security audit log review",
    sender: "Security Team",
    date: "20 Feb 2026",
    priority: "High",
    status: "Completed",
    description:
      "Analyze failed login attempts and packet capture logs from the recent internal assessment.",
  },
  {
    id: 6,
    type: "Project",
    title: "College Portal Database Migration",
    sender: "Vishwesh Sitapara",
    date: "22 Feb 2026",
    priority: "Normal",
    status: "Pending",
    description:
      "Migrate student academic records from legacy MySQL database instances to MongoDB clusters.",
  },
];

export default function EmployeeInbox() {
  const [items, setItems] = useState(initialInboxItems);
  const [activeTab, setActiveTab] = useState("All");
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  // Filter items based on active tab
  const filteredItems = useMemo(() => {
    if (activeTab === "New Task") {
      return items.filter((item) => item.type === "Task");
    }
    if (activeTab === "New Project") {
      return items.filter((item) => item.type === "Project");
    }
    return items;
  }, [items, activeTab]);

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setOpenDropdownId(null);
  };

  const handleDeleteAll = () => {
    if (window.confirm("Kya aap saare items delete karna chahte hain?")) {
      setItems([]);
    }
  };

  return (
    <div className="w-full h-full min-h-0 flex flex-col border border-t-0 bg-gray-50/50 p-2 sm:p-4 overflow-y-auto">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-sm">
            <InboxIcon size={20} />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-semibold text-gray-800">
              Inbox
            </h1>
            <p className="text-xs text-gray-400">
              Manage your incoming tasks and project notifications
            </p>
          </div>
        </div>

        {items.length > 0 && (
          <button
            onClick={handleDeleteAll}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-sm text-xs font-medium transition cursor-pointer"
          >
            <Trash2 size={14} />
            Delete All
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 my-4">
        {["All", "New Task", "New Project"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
              activeTab === tab
                ? "bg-[#2862E8] text-white shadow-sm"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Inbox List Container */}
      <div className="bg-white rounded-sm border border-gray-200 overflow-y-scroll">
        {filteredItems.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between px-4 py-3.5 hover:bg-gray-50/80 transition relative"
              >
                {/* Left: Icon + Type & Title */}
                <div className="flex items-center gap-3 min-w-0 pr-4">
                  <div
                    className={`p-2 rounded-sm shrink-0 ${
                      item.type === "Task"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {item.type === "Task" ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      <FolderKanban size={18} />
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-800">
                        {item.type === "Task" ? "New Task" : "New Project"}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full font-medium">
                        {item.priority}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 truncate mt-0.5">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Right: Sender & Action Menu */}
                <div className="flex items-center gap-4 shrink-0">
                  <span className="hidden sm:inline text-xs text-gray-400">
                    By {item.sender}
                  </span>

                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdownId(
                          openDropdownId === item.id ? null : item.id,
                        )
                      }
                      className="p-1.5 hover:bg-gray-200/60 rounded-sm text-gray-500 transition cursor-pointer"
                    >
                      <MoreVertical size={16} />
                    </button>

                    {/* Popover Menu (Jaise image me hai) */}
                    {openDropdownId === item.id && (
                      <div className="absolute right-0 mt-1 w-32 bg-white rounded-sm shadow-lg border border-gray-100 py-1 z-20">
                        <button
                          onClick={() => {
                            setSelectedDetail(item);
                            setOpenDropdownId(null);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 text-left cursor-pointer"
                        >
                          <Eye size={14} className="text-gray-400" />
                          Detail
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-600 hover:bg-red-50 text-left cursor-pointer"
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <InboxIcon size={36} className="mx-auto text-gray-300 mb-2" />
            <p className="text-xs font-medium text-gray-500">
              No messages or notifications found
            </p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span
                  className={`p-2 rounded-sm ${
                    selectedDetail.type === "Task"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {selectedDetail.type === "Task" ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <FolderKanban size={18} />
                  )}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-gray-800">
                    {selectedDetail.type} Details
                  </h3>
                  <p className="text-[10px] text-gray-400">
                    Detailed view of the selected notification
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedDetail(null)}
                className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-sm transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="py-4 space-y-3">
              <div>
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  Title
                </span>
                <h4 className="text-sm font-semibold text-gray-800 mt-0.5">
                  {selectedDetail.title}
                </h4>
              </div>

              <div>
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                  Description
                </span>
                <p className="text-xs text-gray-600 mt-1 bg-gray-50 p-3 rounded-sm border border-gray-100 leading-relaxed">
                  {selectedDetail.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2.5 rounded-sm">
                  <User size={14} className="text-gray-400" />
                  <div>
                    <span className="block text-[10px] text-gray-400">
                      Sender
                    </span>
                    <span className="font-medium">
                      By {selectedDetail.sender}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2.5 rounded-sm">
                  <Calendar size={14} className="text-gray-400" />
                  <div>
                    <span className="block text-[10px] text-gray-400">
                      Date
                    </span>
                    <span className="font-medium">{selectedDetail.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2.5 rounded-sm">
                  <AlertCircle size={14} className="text-gray-400" />
                  <div>
                    <span className="block text-[10px] text-gray-400">
                      Priority
                    </span>
                    <span className="font-medium">
                      {selectedDetail.priority}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2.5 rounded-sm">
                  <Clock size={14} className="text-gray-400" />
                  <div>
                    <span className="block text-[10px] token text-gray-400">
                      Status
                    </span>
                    <span className="font-medium">{selectedDetail.status}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-gray-100">
              <button
                onClick={() => setSelectedDetail(null)}
                className="px-4 py-2 bg-[#2862E8] hover:bg-blue-700 text-white rounded-sm text-xs font-medium transition cursor-pointer shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
