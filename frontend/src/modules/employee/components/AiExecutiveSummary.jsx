import React from "react";

const insights = [
  "3 tasks are due within the next 3 days",
  "2 high-priority tasks are still pending",
  "Team productivity increased by 8% this week",
  "Project Alpha is progressing as expected",
  "Resource allocation is currently operating at 85% capacity",
  "Client feedback for milestone 2 has been overwhelmingly positive",
];

const recommendedActions = [
  "Review the 2 pending high-priority tasks immediately",
  "Consider reallocating work to available team members before Friday",
  "Schedule a brief sync with the design lead regarding upcoming deliverables",
  "Verify staging server deployment logs for the latest patch release",
];

export default function AiExecutiveSummary() {
  return (
    <div className="flex-1 min-w-0 min-h-0 h-full rounded-sm bg-white border-gray-100 border flex flex-col overflow-hidden">
      {/* Fixed Header */}
      <h4 className="text-sm font-semibold border-b border-gray-100 p-3 text-gray-800 shrink-0 bg-white">
        AI Executive Summary
      </h4>

      {/* Scrollable Body */}
      <div className="flex-1 min-h-0 overflow-y-auto p-3 flex flex-col gap-4 custom-scrollbar">
        {/* Overall Summary */}
        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-600 leading-6">
            Overall project activity is stable, but 3 tasks are approaching
            their deadlines. Project Alpha is currently 72% complete and has
            strong progress this week. Team collaboration has also shown
            positive momentum across multiple cross-functional sub-tasks.
          </p>
        </div>

        {/* Key Insights */}
        <div className="flex justify-center items-start text-xs flex-col gap-2">
          <h4 className="text-sm font-semibold text-gray-800">Key Insights</h4>

          {insights.map((insight, index) => (
            <p key={index} className="text-gray-600">
              {insight}
            </p>
          ))}
        </div>

        {/* Recommended Actions */}
        <div className="flex justify-center items-start text-xs flex-col gap-2">
          <h4 className="text-sm font-semibold text-gray-800">
            Recommended Actions
          </h4>

          {recommendedActions.map((action, index) => (
            <p key={index} className="text-gray-600">
              {action}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
