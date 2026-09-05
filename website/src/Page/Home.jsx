import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import React from "react";

function Home() {
  return (
    <div className="w-full h-full ">
      <Navbar />
      <HeroSection />
      <div className="flex justify-center items-center mt-20">
        <div className="bg-[#eaeaea] w-fit flex flex-col justify-center items-center">
          <Features />
        </div>
      </div>
    </div>
  );
}

export default Home;
