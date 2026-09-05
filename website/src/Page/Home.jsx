import ContextSection from "@/components/ContextSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import React from "react";

function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />

      <HeroSection />

      <ContextSection />


      <div className="md:flex flex-col justify-center items-center mt-20 overflow-hidden">
        <Title text1={"All apps, Ai Agents and humans in Edge"} text2={"30+ Products to replace fragmented tools & maximize human productivity"}/>
        <div className="bg-[#eaeaea] flex flex-col justify-center items-center">
          <Features />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
