import { features } from "@/assets/assets";
import React from "react";
import Item from "./Item";

function Features() {
  return (
    <div className="relative">
      <div className="absolute w-full h-full z-40 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,white_90%)]" />
      <div className="grid grid-cols-10 auto-rows-[75px] w-[750px] sm:auto-rows-[90px] sm:w-[900px] md:auto-rows-[100px] md:w-[1000px] md:auto-rows-[124px] md:w-[1224px] gap-[1px]">
        {features.map((f) => (
          <Item key={f.name} f={f} />
        ))}
      </div>
    </div>
  );
}

export default Features;
