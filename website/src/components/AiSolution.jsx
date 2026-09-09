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

  const categoryData = {
    Projects: {
      heading: "Deliver Projects On Time",
      paragraph: "Get your team, department, and company running smoothly with the industry's best project management solution.",
      replacements: ["/whatsapp.png", "/trello.png", "/excel.png"],
      data: [
        {
          imageurl: "/agent-001.avif",
          heading: "Edge standardizes project kickoff",
        },
        {
          imageurl: "/agent-002.avif",
          heading: "Edge determines task owners",
        },
        {
          imageurl: "/agent-003.avif",
          heading: "Edge tracks deliverables + timelines",
        },
        {
          imageurl: "/agent-004.avif",
          heading: "Live Answers keeps everyone informed",
        },
      ],
    },

    Marketing: {
      heading: "Grow Your Marketing Faster",
      paragraph:
        "Automate your marketing workflows and keep every campaign organized, aligned, and on track.",
      replacements: ["/whatsapp.png", "/trello.png", "/excel.png"],
      data: [
        {
          imageurl: "/agent-004.avif",
          heading: "Edge creates campaign briefs",
        },
        {
          imageurl: "/agent-003.avif",
          heading: "Edge assigns marketing tasks",
        },
        {
          imageurl: "/agent-002.avif",
          heading: "Edge tracks campaign performance",
        },
        {
          imageurl: "/agent-001.avif",
          heading: "Live Answers keeps campaigns aligned",
        },
      ],
    },

    Designing: {
      heading: "Design Better, Together",
      paragraph:
        "Bring your design team together with streamlined workflows, clear ownership, and faster approvals.",
      replacements: ["/whatsapp.png", "/trello.png", "/excel.png"],
      data: [
        {
          imageurl: "/agent-001.avif",
          heading: "Edge organizes design requests",
        },
        {
          imageurl: "/agent-003.avif",
          heading: "Edge assigns design owners",
        },
        {
          imageurl: "/agent-004.avif",
          heading: "Edge tracks design deadlines",
        },
        {
          imageurl: "/agent-002.avif",
          heading: "Live Answers shares design updates",
        },
      ],
    },

    Leadership: {
      heading: "Lead With Better Insights",
      paragraph:
        "Give leaders the visibility they need to make faster decisions and keep teams moving forward.",
      replacements: ["/whatsapp.png", "/trello.png", "/excel.png"],
      data: [
        {
          imageurl: "/agent-001.avif",
          heading: "Edge summarizes team performance",
        },
        {
          imageurl: "/agent-004.avif",
          heading: "Edge identifies project risks",
        },
        {
          imageurl: "/agent-003.avif",
          heading: "Edge tracks business priorities",
        },
        {
          imageurl: "/agent-002.avif",
          heading: "Live Answers keeps leaders informed",
        },
      ],
    },

    HR: {
      heading: "Make HR Work Smarter",
      paragraph:
        "Simplify employee workflows, improve collaboration, and give your HR team more time to focus on people.",
      replacements: ["/whatsapp.png", "/trello.png", "/excel.png"],
      data: [
        {
          imageurl: "/agent-002.avif",
          heading: "Edge organizes employee onboarding",
        },
        {
          imageurl: "/agent-001.avif",
          heading: "Edge assigns HR tasks",
        },
        {
          imageurl: "/agent-005.avif",
          heading: "Edge tracks employee workflows",
        },
        {
          imageurl: "/agent-004.avif",
          heading: "Live Answers keeps everyone updated",
        },
      ],
    },

    "See all teams": {
      heading: "One Platform For Every Team",
      paragraph:
        "Connect every department with intelligent workflows that help your entire organization work better.",
      replacements: ["/whatsapp.png", "/trello.png", "/excel.png"],
      data: [
        {
          imageurl: "/agent-001.avif",
          heading: "Edge automates repetitive workflows",
        },
        {
          imageurl: "/agent-004.avif",
          heading: "Edge connects teams and projects",
        },
        {
          imageurl: "/agent-003.avif",
          heading: "Edge tracks company-wide progress",
        },
        {
          imageurl: "/agent-002.avif",
          heading: "Live Answers keeps everyone connected",
        },
      ],
    },
  };

  const currentData = categoryData[activeCategory];

  return (
    <div className="md:pt-5">
      <CenteredTitle
        title1="AI solutions for every team"
        subhead="Your key workflows, powered by Edge Agents"
      />

      {/* Categories */}
      <div className="w-full pt-7">
        <div className="flex flex-wrap items-center justify-center gap-4 w-[95%] md:w-full">
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

     
      <div className="w-full flex items-center justify-center pt-12">
        <div className="bg-[#FAFAFA] w-[95%] md:w-245.75 h-118.25 rounded-[15px] flex md:flex-row flex-col gap-3 md:gap-0 md:justify-between px-3 md:px-7 pt-7 md:pt-12">

        
          <div className="w-full md:w-98.5">

            <div className="md:w-72.5 flex flex-col md:block">
              <h1 className="text-primary font-semibold text-xl md:text-4xl md:leading-14">
                {currentData.heading}
              </h1>

              <p className="text-[#888888] font-semibold hidden md:block md:text-4xl md:pt-2">
                every time
              </p>
            </div>

            <div className="md:w-98.5 md:pt-8 pt-2">
              <p className="md:text-[15px] text-[9px] w-70">
                {currentData.paragraph}
              </p>
            </div>

          
            <div className="hidden md:flex items-center mt-7">
              <h4 className="uppercase text-[#646464]">
                Replaces
              </h4>

              <div className="flex items-center gap-3 pl-5">
                {currentData.replacements.map((image, index) => (
                  <img
                    key={index}
                    className="w-4"
                    src={image}
                    alt=""
                  />
                ))}
              </div>
            </div>

          </div>

         
          <div className="md:pr-15 flex flex-col gap-5 md:gap-8 pt-4 md:pt-2">

            {currentData.data.map((card, index) => (
              <div
                key={index}
                className="w-[98%] md:w-93 h-12.5 bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] rounded-[9px] flex items-center px-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={card.imageurl}
                    className="w-9 h-9"
                    alt=""
                  />

                  <h3 className="text-primary font-medium text-[10px] md:text-[15px]">
                    {card.heading}
                  </h3>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-center md:items-start md:justify-normal">
              <button className="bg-[#1E1E1E] w-[95%] md:w-30 h-9 rounded-[6px] mt-4 text-white flex items-center justify-center text-[12px]">
                Explore more
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}