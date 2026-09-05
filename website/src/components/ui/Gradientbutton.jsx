import React from "react";

export default function Gradientbutton() {
  return (
    <div>
      <div className="rainbow-button-wrapper">

        {/* Fixed grey border */}
        <svg
          className="button-border"
          viewBox="0 0 192 32"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M176 1
              A15 15 0 0 1 191 16
              A15 15 0 0 1 176 31
              H16
              A15 15 0 0 1 1 16
              A15 15 0 0 1 16 1
              H176
            "
          />
        </svg>

        {/* Animated blue → purple border */}
        <svg
          className="button-border button-border-animated"
          viewBox="0 0 192 32"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>

            {/* Gradient */}
            <linearGradient
              id="edgeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>

            {/* Glow */}
            <filter id="edgeGlow">
              <feGaussianBlur stdDeviation="2.5" />
            </filter>

          </defs>

          {/* Soft glow */}
          <path
            className="button-glow"
            d="
              M176 1
              A15 15 0 0 1 191 16
              A15 15 0 0 1 176 31
              H16
              A15 15 0 0 1 1 16
              A15 15 0 0 1 16 1
              H176
            "
            pathLength="100"
          />

          {/* Moving highlight */}
          <path
            className="button-highlight"
            d="
              M176 1
              A15 15 0 0 1 191 16
              A15 15 0 0 1 176 31
              H16
              A15 15 0 0 1 1 16
              A15 15 0 0 1 16 1
              H176
            "
            pathLength="100"
          />

        </svg>

        {/* Main button */}
        <a
          id="actionButton"
          className="rainbow-button"
          href="#"
          aria-label="The Best AI is Flux AI"
        >
          <span className="button-label">
            The Best AI is
          </span>

          <div className="flex items-center justify-center">
            <img
              src="/logo.png"
              className="button-image"
              alt="Flux AI"
            />

            <span className="text-sm text-[#2563EB]">
              FluxAI
            </span>
          </div>
        </a>

      </div>
    </div>
  );
}