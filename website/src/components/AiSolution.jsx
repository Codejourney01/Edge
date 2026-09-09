import React, { useState } from "react";
import CenteredTitle from "./ui/CenteredTitle";
import Categorycapsule from "./ui/Categorycapsule";

export default function AiSolution() {
  const [activeCategory, setActiveCategory] = useState("Projects");

  const categories = [
    { cname: "Projects" },
    { cname: "Marketing" },
    { cname: "Designing" },
    { cname: "Leadership" },
    { cname: "HR" },
    { cname: "See all teams" },
  ];

  return (
    <div className="md:pt-5 md:pb-90">
      <CenteredTitle
        title1="AI solutions for every team"
        subhead="Your key workflows, powered by Edge Agents"
      />

      {/* Categories */}
      <div className="w-full  pt-7">
        <div className="flex flex-wrap items-center justify-center gap-4  w-[95%] md:w-full">
          {categories.map((category) => (
            <Categorycapsule
              key={category.cname}
              category_name={category.cname}
              active={activeCategory === category.cname}
              onClick={() => setActiveCategory(category.cname)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}