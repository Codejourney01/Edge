import React from "react";
import { assets } from "@/assets/assets";

export default function AiWork() {
  return (
    <div className="w-full bg-[#000C22] p-10 flex flex-col justify-center items-center gap-0">
      <div className="text-white font-bold text-[35px] flex items-center justify-center">
        <img src={assets.ailogo} alt="" className="w-20" />
        <p>Flux Ai</p>
      </div>
      <div className="flex flex-col justify-center items-center pb-10 pt-10">
        <h1 className="text-center font-semibold w-150 bg-[linear-gradient(90deg,#ffffff_0%,#868686_100%)] bg-clip-text text-transparent text-[30px] md:text-[50px]">
          The AI that understands your work
        </h1>
        <h3 className="text-[#ffffff]/40 hidden md:flex  text-[14px] font-normal">
          Already connected to your projects, tasks, teams, and business data.
        </h3>
      </div>
      <div className="flex">
        <ContextCard />
        <InteligenceCard />
        <Recom />
      </div>
      <div className="flex flex-col justify-center items-center pb-10 pt-10">
        <h1 className="text-center font-semibold w-200 bg-[linear-gradient(90deg,#ffffff_0%,#868686_100%)] bg-clip-text text-transparent text-[30px] md:text-[50px]">
          The AI that truly understands your projects
        </h1>
        <button className="font-bold text-black bg-white px-10 py-4 rounded-md mt-10">Get Started with Flux AI</button>
      <a href="" className="text-white text-[12px] mt-5">Learn More</a>
      </div>
    </div>
  );
}

function ContextCard() {
  return (
    <div className="bg-[#00091a] relative border border-[#00027A] flex justify-start items-start w-[380px] h-[380px] flex-col overflow-hidden">
      <div className="w-fit text-white text-[10px] p-10">
        <h1 className="uppercase font-bold text-[12px] mb-2">Context</h1>
        <p className="w-60 text-[10px] text-[#ffffff]/70">
          EDGE AI understands the complete context of your work by analyzing
          projects, tasks, team members, deadlines, project progress, and
          financial data in real time.
        </p>
      </div>
      <div className="absolute border-[#00027A] border top-40 left-[-60px] bg-[#000F2B] flex items-center justify-end rounded-full w-25 h-10">
        <img
          src={assets.ailogo}
          alt=""
          className="w-8 mr-1 rotation hover:opacity-100 duration-200 opacity-60 rounded-full"
        />
      </div>
      <div className="absolute hover:bg-[#fafafa]/30 rounded bottom-[-100px] right-[-30px] z-40 hover:translate-y-[-5px] duration-200">
        <EmptyCardBlock />
      </div>
      <div className="absolute hover:bg-[#fafafa]/30 rounded bottom-[-61px] right-[-70px] z-30 hover:translate-y-[-5px] duration-200">
        <EmptyCardBlock />
      </div>
      <div className="absolute hover:bg-[#fafafa]/30 rounded bottom-[-23px] right-[-110px] z-20 hover:translate-y-[-5px] duration-200">
        <EmptyCardBlock />
      </div>
    </div>
  );
}

function InteligenceCard() {
  return (
    <div className="bg-[#00091a] relative border border-[#00027A] border-l-0 border-r-0 flex justify-start items-start w-[380px] h-[380px] overflow-hidden flex-col">
      <div className="w-fit text-white text-[10px] p-10">
        <h1 className="uppercase font-bold text-[12px] mb-2">INTELLIGENCE</h1>
        <p className="w-60 text-[10px] text-[#ffffff]/70">
          EDGE AI analyzes your data to provide project risk prediction, delay
          prediction, completion probability, team productivity, resource
          utilization, and revenue & expense insights.
        </p>
      </div>
      <div className="absolute left-8 rounded-[8px] top-39 w-80 h-60 z-20 gradient-border-card border border-transparent overflow-hidden">
        <p className="pl-5 p-4 text-[#ffffff]/50 hover:bg-[#ffffff]/5 cursor-pointer text-[10px] hover:text-[#ffffff] hover:scale-105 duration-200">
          Project Risk Prediction
        </p>
        <p className="pl-5 p-4 text-[#ffffff]/50 hover:bg-[#ffffff]/5 cursor-pointer text-[10px] hover:text-[#ffffff] hover:scale-105 duration-200">
          Delay Prediction
        </p>
        <p className="pl-5 p-4 text-[#ffffff]/50 hover:bg-[#ffffff]/5 cursor-pointer text-[10px] hover:text-[#ffffff] hover:scale-105 duration-200">
          Completion Probability
        </p>
        <p className="pl-5 p-4 text-[#ffffff]/50 hover:bg-[#ffffff]/5 cursor-pointer text-[10px] hover:text-[#ffffff] hover:scale-105 duration-200">
          Team Productivity
        </p>
      </div>
    </div>
  );
}

function Recom() {
  return (
    <div className="bg-[#00091a] relative border border-[#00027A] flex justify-start items-start w-[380px] h-[380px] overflow-hidden flex-col">
      <div className="w-fit text-white text-[10px] p-10">
        <h1 className="uppercase font-bold text-[12px] mb-2">
          RECOMMENDATIONS
        </h1>
        <p className="w-60 text-[10px] text-[#ffffff]/70">
          EDGE AI identifies high-risk projects, upcoming delays, overloaded
          employees, pending high-priority tasks, budget risks, and recommends
          the right actions to take.
        </p>
      </div>
      <div className="absolute left-8 rounded-[8px] flex flex-col items-center top-39 w-80 h-60 z-20 gradient-border-card border border-transparent overflow-hidden">
        <p className="pl-5 hover:scale-110 ease-in-out duration-200 p-3.5 text-center w-50 text-[#ffffff]/50 cursor-pointer text-[10px] rounded-[10px] hover:text-[#ffffff]">
          High-risk projects
        </p>
        <p className="pl-5 hover:scale-110 ease-in-out duration-200 p-3.5 text-center w-50 text-[#ffffff]/50 cursor-pointer text-[10px] rounded-[10px] hover:text-[#ffffff]">
          Upcoming delays
        </p>
        <p className="pl-5 hover:scale-110 ease-in-out duration-200 p-3.5 text-center w-50 text-[#ffffff]/50 cursor-pointer text-[10px] rounded-[10px] hover:text-[#ffffff]">
          Overloaded employees
        </p>
        <p className="pl-5 hover:scale-110 ease-in-out duration-200 p-3.5 text-center w-50 text-[#ffffff]/50 cursor-pointer text-[10px] rounded-[10px] hover:text-[#ffffff]">
          Pending high-priority tasks
        </p>
        <p className="pl-5 hover:scale-110 ease-in-out duration-200 p-3.5 text-center w-50 text-[#ffffff]/50 cursor-pointer text-[10px] rounded-[10px] hover:text-[#ffffff]">
          Budget risks
        </p>
      </div>
    </div>
  );
}

function EmptyCardBlock() {
  return (
    <div className="bg-[#000F2B] w-90 h-60 flex flex-col gradient-border-card border border-transparent rounded overflow-hidden">
      <div className="w-full h-12 flex justify-start items-center gradient-border-card border-b border-transparent">
        <p className="w-2.5 h-2.5 bg-[#001845] rounded-full ml-2"></p>
        <p className="w-2.5 h-2.5 bg-[#001845] rounded-full ml-2"></p>
        <p className="w-2.5 h-2.5 bg-[#001845] rounded-full ml-2"></p>
      </div>
      <div className="bg-[#000F2B] flex justify-center w-full h-full">
        <div className="w-20 gradient-border-card border-r border-transparent"></div>
        <div className="w-full"></div>
      </div>
    </div>
  );
}
