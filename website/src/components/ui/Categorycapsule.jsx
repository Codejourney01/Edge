import React from "react";

export default function Categorycapsule({
  category_name,
  active,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`w-25 h-7.75 rounded-[54px] flex items-center justify-center font-semibold text-[12px] cursor-pointer md:transition-all md:duration-200 ${
        active
          ? "border border-[#0091FF] text-[#0E97FF]"
          : "border-[#D9D9D9] text-[#8A8A8A] border-dotted border-2"
      }`}
    >
      {category_name}
    </div>
  );
}