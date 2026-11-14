import React from "react";

const workData = [
  { label: "Assigned", value: 5 },
  { label: "In Process", value: 3 },
  { label: "Completed", value: 1 },
];

export default function TotalWorkChart() {
  const maxValue = 5;

  const chart = {
    top: 25,
    bottom: 250,
    left: 55,
    right: 385,
  };

  const chartHeight = chart.bottom - chart.top;
  const barWidth = 76;
  const positions = [72, 182, 292];

  return (
    <div className="w-full rounded-sm border border-gray-100 bg-white p-4">
      <h3 className="mb-3 text-base font-semibold text-gray-900">Total Work</h3>

      <div className="w-full">
        <svg
          viewBox="0 0 420 310"
          className="h-auto w-full"
          role="img"
          aria-label="Total Work chart: Assigned 5, In Process 3, Completed 1"
        >
          {/* Grid lines and Y-axis labels */}
          {Array.from({ length: 6 }, (_, i) => {
            const y = chart.bottom - (i / maxValue) * chartHeight;

            return (
              <g key={i}>
                <line
                  x1={chart.left}
                  y1={y}
                  x2={chart.right}
                  y2={y}
                  stroke="#D9DDE4"
                  strokeWidth="1"
                />

                <text
                  x="42"
                  y={y + 4}
                  textAnchor="end"
                  fontSize="11"
                  fill="#666"
                >
                  {i}
                </text>
              </g>
            );
          })}

          {/* Bars */}
          {workData.map((item, index) => {
            const x = positions[index];
            const barHeight = (item.value / maxValue) * chartHeight;

            return (
              <g key={item.label}>
                {/* Background bar */}
                <rect
                  x={x}
                  y={chart.top}
                  width={barWidth}
                  height={chartHeight}
                  fill="#F0F0F0"
                />

                {/* Actual work bar */}
                <rect
                  x={x}
                  y={chart.bottom - barHeight}
                  width={barWidth}
                  height={barHeight}
                  fill="#2860E8"
                />

                {/* X-axis label */}
                <text
                  x={x + barWidth / 2}
                  y="268"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#555"
                >
                  {item.label}
                </text>
              </g>
            );
          })}

          {/* X-axis */}
          <line
            x1={chart.left}
            y1={chart.bottom}
            x2={chart.right}
            y2={chart.bottom}
            stroke="#777"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
}
