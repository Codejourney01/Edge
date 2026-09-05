import React from "react";
import CenteredTitle from "./ui/CenteredTitle";

export default function ContextSection() {
  return (
    <div className="pt-4 md:pt-42 pb-5">
      
      <CenteredTitle
        title1={"60% of work is lost in context"}
        title2={"– and AI is lost without it"}
        subhead={"Work Sprawl is killing context and destroying productivity."}
      />

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-center pt-9">
        <img
          src="/contextimage.svg"
          className="w-[90%]"
          alt=""
        />
      </div>

  
      <div className="md:hidden pt-9 overflow-x-auto scroll-smooth">
        <div className="w-max">
          <img
            src="/contextsection.png"
            className="h-auto w-212.5 max-w-none"
            alt=""
          />
        </div>
      </div>

    </div>
  );
}