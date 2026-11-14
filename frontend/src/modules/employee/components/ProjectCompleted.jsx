import React from "react";

const tempProjects = [
  {
    id: 1,
    projectCode: "P101",
    projectName: "Analytics Infrastructure",
    status: "Completed",
  },
  {
    id: 2,
    projectCode: "P102",
    projectName: "Employee Management System",
    status: "Completed",
  },
  {
    id: 3,
    projectCode: "P103",
    projectName: "Customer Dashboard",
    status: "Completed",
  },
  {
    id: 4,
    projectCode: "P104",
    projectName: "Inventory Management",
    status: "Completed",
  },
];

export default function ProjectCompleted({ projects = tempProjects }) {
  const completedProjects = projects.filter(
    (project) => project.status?.toLowerCase() === "completed",
  );

  return (
    <div className="w-full h-full rounded-sm border-gray-100 border bg-white ">
      <div className="flex items-center justify-between p-4">
        <h3 className="text-base font-semibold text-gray-900">
          Project Completed
        </h3>

        <button className="text-xl font-bold text-gray-800">...</button>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-3 py-4 text-sm font-semibold">No</th>
              <th className="px-3 py-4 text-sm font-semibold">Project Name</th>
            </tr>
          </thead>

          <tbody>
            {completedProjects.map((project) => (
              <tr
                key={project.id || project._id}
                className="border-b border-gray-100 last:border-0"
              >
                <td className="px-3 py-4 text-sm text-gray-800">
                  {project.projectCode}
                </td>

                <td className="px-3 py-4 text-sm text-gray-800">
                  {project.projectName}
                </td>
              </tr>
            ))}

            {completedProjects.length === 0 && (
              <tr>
                <td
                  colSpan="2"
                  className="px-3 py-6 text-center text-sm text-gray-400"
                >
                  No completed projects
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
