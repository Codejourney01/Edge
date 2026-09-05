import { features } from "@/assets/assets";
import React from "react";
import Item from "./Item";

function Features() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,white_90%)]" />
      <div className="grid grid-cols-10 auto-rows-[120px] w-330 gap-[1px]">
        {features.map((f) => (
          <Item key={f.name} f={f} />
        ))}
      </div>
    </div>
  );
}

export default Features;
