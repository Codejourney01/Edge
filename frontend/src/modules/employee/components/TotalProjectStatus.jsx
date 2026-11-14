import React from "react";

const tempProjects = [
  { id: 1, name: "Analytics Infrastructure", status: "Assigned" },
  { id: 2, name: "Employee Management", status: "Assigned" },
  { id: 3, name: "Customer Dashboard", status: "Assigned" },
  { id: 4, name: "Inventory Management", status: "Assigned" },
  { id: 5, name: "Sales Analytics", status: "Completed" },
];

export default function TotalProjectStatus({ projects = tempProjects }) {
  const assigned = projects.filter(
    (p) => p.status?.toLowerCase() === "assigned",
  ).length;

  const completed = projects.filter(
    (p) => p.status?.toLowerCase() === "completed",
  ).length;

  const total = assigned + completed;

  const completedPercent = total ? (completed / total) * 100 : 0;
  const angle = (completedPercent / 100) * 360;

  const polar = (degrees) => {
    const radians = (degrees * Math.PI) / 180;
    return {
      x: 160 + 125 * Math.cos(radians),
      y: 155 + 125 * Math.sin(radians),
    };
  };

  const start = polar(-90);
  const end = polar(-90 + angle);

  const completedPath =
    total === 0
      ? ""
      : completedPercent >= 100
        ? "M 160 155 m -125 0 a 125 125 0 1 0 250 0 a 125 125 0 1 0 -250 0"
        : `M 160 155 L ${start.x} ${start.y} A 125 125 0 ${angle > 180 ? 1 : 0} 1 ${end.x} ${end.y} Z`;

  return (
    <div className="w-full rounded-sm border-gray-100 border bg-white p-4">
      <h3 className="text-base font-semibold text-gray-900">
        Total Project Status
      </h3>

      <div className="mt-4 flex justify-center">
        <svg
          viewBox="0 0 340 310"
          className="w-full max-w-[380px]"
          role="img"
          aria-label={`Assigned ${assigned}, Completed ${completed}`}
        >
          {/* Assigned background */}
          <circle
            cx="160"
            cy="155"
            r="125"
            fill={total ? "#E5E5E5" : "#F3F4F6"}
          />

          {/* Completed slice */}
          {completed > 0 && <path d={completedPath} fill="#2860E8" />}

          {/* Completed label */}
          {completed > 0 && (
            <g>
              <path
                d="M 278 77 L 298 58 L 326 58"
                stroke="#2860E8"
                fill="none"
                strokeWidth="1"
              />
              <text x="301" y="53" fontSize="10" fill="#777">
                Completed
              </text>
            </g>
          )}

          {/* Assigned label */}
          {assigned > 0 && (
            <g>
              <path
                d="M 63 224 L 43 243 L 10 243"
                stroke="#D1D5DB"
                fill="none"
                strokeWidth="1"
              />
              <text x="10" y="255" fontSize="10" fill="#777">
                Assigned
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}
