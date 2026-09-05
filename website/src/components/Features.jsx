import { features } from "@/assets/assets";
import React from "react";
import Item from "./Item";

function Features() {
  return (
    <div className="relative ">
      <div
  className="
    absolute inset-0 z-40 pointer-events-none
    bg-[linear-gradient(to_right,white_10%,transparent_15%,transparent_85%,white_100%),linear-gradient(to_bottom,white_0%,transparent_15%,transparent_85%,white_100%)]
    sm:bg-[linear-gradient(to_right,white_0%,transparent_18%,transparent_82%,white_100%),linear-gradient(to_bottom,white_0%,transparent_18%,transparent_82%,white_100%)]
    md:bg-[linear-gradient(to_right,white_0%,transparent_20%,transparent_80%,white_100%),linear-gradient(to_bottom,white_0%,transparent_20%,transparent_80%,white_100%)]
    lg:bg-[linear-gradient(to_right,white_0%,transparent_25%,transparent_75%,white_100%),linear-gradient(to_bottom,white_0%,transparent_25%,transparent_75%,white_100%)]
  "
/>
      <div className="grid grid-cols-10 auto-rows-[85px] w-[850px] sm:auto-rows-[90px] sm:w-[900px] md:auto-rows-[100px] md:w-[1000px] md:auto-rows-[124px] md:w-[1224px] gap-[2px]">
        {features.map((f) => (
          <Item key={f.name} f={f} />
        ))}
      </div>
    </div>
  );
}

export default Features;
