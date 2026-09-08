import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { assets } from "@/assets/assets";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import { ArrowBigUp, ArrowRight, ArrowUp, Send } from "lucide-react";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#0D1117] text-[#ffffff] to-[#151d2f] flex flex-col justify-center items-start p-4">
      <div className="min-[426px]:flex  w-full flex-col px-10 hidden  mt-10">
        <div className="flex gap-1 w-full max-[769px]:flex-col max-[769px]:gap-5 flex-row">
          <div className="flex flex-col justify-start items-start bg gap-5">
            <img src={assets.wlogo} alt="logo" className="w-25" />
            <p className="w-90 max-[769px]:text-[12px] max-[1025px]:w-50 text-[#F1F5F9]/70 text-[14px]">
              Powering smarter decisions with Al-driven insights, project
              management and business intelligence.
            </p>
            <div className="flex justify-start items-center gap-5">
              <a href="" className="border-1 border-[#1E293B] hover:scale-120 duration-100 p-2 rounded-full bg-[#151e31]">
                <LiaLinkedinIn color="white" />
              </a>
              <a href="" className="border-1 border-[#1E293B] hover:scale-120 duration-100 p-2 rounded-full bg-[#151e31]">
                <BsInstagram color="white" />
              </a>
              <a href="" className="border-1 border-[#1E293B] hover:scale-120 duration-100 p-2 rounded-full bg-[#151e31]">
                <BsGithub color="white" />
              </a>
            </div>
          </div>
          <div className="flex flex-row w-full max-[769px]:justify-start max-[769px]:gap-5  justify-evenly ">
            <div className="flex text-[13px] max-[769px]:text-[10px] footer-a flex-col">
              <h1 className="text-[16px] font-bold mb-4 border-b-3 max-[769px]:text-[14px] border-[#4666F5] w-fit">
                PRODUCT
              </h1>
              <a href="#">Projects</a>
              <a href="#">Tasks</a>
              <a href="#">Team Management</a>
              <a href="#">Dashboards</a>
              <a href="#">Analytics</a>
              <a href="#">Reports</a>
            </div>
            <div className="flex text-[13px] max-[769px]:text-[10px] footer-a flex-col">
              <h1 className="text-[16px] font-bold mb-4 border-b-3 max-[769px]:text-[14px] border-[#4666F5] w-fit">
                COMPANY
              </h1>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Press</a>
              <a href="#">Contact</a>
            </div>
            <div className="flex text-[13px] max-[769px]:text-[10px] footer-a flex-col">
              <h1 className="text-[16px] font-bold mb-4 border-b-3 max-[769px]:text-[14px] border-[#4666F5] w-fit">
                RESOURCES
              </h1>
              <a href="#">Documentation</a>
              <a href="#">Help Center</a>
              <a href="#">Guides</a>
              <a href="#">Community</a>
              <a href="#">Status</a>
            </div>

            <div className="flex text-[13px] max-[769px]:text-[10px] footer-a flex-col">
              <h1 className="text-[16px] font-bold mb-4 border-b-3 max-[769px]:text-[14px] border-[#4666F5] w-fit">
                LEGAL
              </h1>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Security</a>
              <a href="#">GDPR</a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 max-[769px]:flex-col max-[769px]:items-start max-[769px]:gap-5">
          <div className="flex justify-center items-center gap-5 ">
            <Send />
            <div className="flex flex-col max-[1025px]:w-70 ">
              <h1 className="font-bold text-[16px]">Stay Updated</h1>
              <p className="text-[#F1F5F9]/70 text-[14px] max-[769px]:text-[12px]">
                Get the latest updates, features and insights delivered to your
                inbox.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center flex-row border-1 gap-3 bg-[#151e31] border-[#1E293B] max-[769px]:w-full min-[1025px]:w-130 h-fit">
            <BiEnvelope size={25} className="ml-4" />
            <input
              type="email"
              className="outline-0 text-[14px] w-full"
              placeholder="Enter your email address "
            />
            <button className="cursor-pointer p-3 text-[14px] gap-2 w-fit h-full flex justify-center items-center bg-gradient-to-r from-[#2563EB] to-[#405EFF]">
              Subscribe <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <hr className="border-[#1E293B] border-1 mt-5 mb-5" />
        <div className="flex max-[769px]:flex-col max-[769px]:items-start justify-between items-center text-[#F1F5F9]/70 text-[12px]">
          <p>2026 EDGE. All rights reserved.</p>
          <div className="flex justify-between items-center gap-5">
            <a className="hover:text-white" href="">Terms</a>
            <a className="hover:text-white" href="">Privacy</a>
            <a className="hover:text-white" href="">Cookies</a>
            <a className="hover:text-white" href="">Contact</a>
            <button className="cursor-pointer border-1 border-[#1E293B] p-2 rounded-full bg-[#151e31]">
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>

      <Accordion className="max-w-lg hidden max-[426px]:flex w-full mt-5">
        <div className="flex-col flex gap-2.5">
          <img src={assets.wlogo} alt="logo" className="w-20" />
            <p className=" text-[#F1F5F9]/70 text-[12px]">
              Powering smarter decisions with Al-driven insights, project
              management and business intelligence.
            </p>
            <div className="flex justify-start items-center gap-5">
              <a href="" className="border-1 border-[#1E293B] hover:scale-120 duration-100 p-2 rounded-full bg-[#151e31]">
                <LiaLinkedinIn color="white" />
              </a>
              <a href="" className="border-1 border-[#1E293B] hover:scale-120 duration-100 p-2 rounded-full bg-[#151e31]">
                <BsInstagram color="white" />
              </a>
              <a href="" className="border-1 border-[#1E293B] hover:scale-120 duration-100 p-2 rounded-full bg-[#151e31]">
                <BsGithub color="white" />
              </a>
            </div>
        </div>
        <div className="flex mb-5 justify-between items-center mt-10 max-[426px]:flex-col max-[426px]:items-start max-[426px]:gap-5">
          <div className="flex justify-center items-center gap-5 ">
            <Send />
            <div className="flex flex-col ">
              <h1 className="font-bold text-[16px]">Stay Updated</h1>
              <p className="text-[#F1F5F9]/70 text-[12px] max-[426px]:text-[10px]">
                Get the latest updates, features and insights delivered to your
                inbox.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center flex-row border-1 gap-3 bg-[#151e31] border-[#1E293B] max-[769px]:w-full min-[1025px]:w-130 h-fit">
            <BiEnvelope size={25} className="ml-4" />
            <input
              type="email"
              className="outline-0 text-[14px] w-full  max-[426px]:text-[12px]"
              placeholder="Enter your email address "
            />
            <button className=" max-[426px]:text-[12px] cursor-pointer p-3 text-[14px] gap-2 w-fit h-full flex justify-center items-center bg-gradient-to-r from-[#2563EB] to-[#405EFF]">
              Subscribe <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <AccordionItem value="" className={"border-none"}>
          <AccordionTrigger className={"text-[12px] uppercase"}>Product</AccordionTrigger>
          <AccordionContent
            className={
              "flex text-xs gap-2 flex-col justify-center items-start text-[#fafafa]/80"
            }
          >
            <button>Projects</button>
            <button>Tasks</button>
            <button>Team Management</button>
            <button>Dashboards</button>
            <button>Analytics</button>
            <button>Reports</button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="ai" className={"border-none"}>
          <AccordionTrigger className={"text-[12px] uppercase"}>AI</AccordionTrigger>
          <AccordionContent
            className={
              "flex text-xs gap-2 flex-col justify-center items-start text-[#fafafa]/80"
            }
          >
            <button>AI Predictions</button>
            <button>Risk Analysis</button>
            <button>Business Insights</button>
            <button>AI Recommendations</button>
            <button>Performance Intelligence</button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="solutions" className={"border-none"}>
          <AccordionTrigger className={"text-[12px] uppercase"}>
            SOLUTIONS
          </AccordionTrigger>
          <AccordionContent
            className={
              "flex text-xs gap-2 flex-col justify-center items-start text-[#fafafa]/80"
            }
          >
            <button>Admin</button>
            <button>Manager</button>
            <button>Employee</button>
            <button>Role-Based Access</button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="company" className={"border-none"}>
          <AccordionTrigger className={"text-[12px] uppercase"}>COMPANY</AccordionTrigger>
          <AccordionContent
            className={
              "flex text-xs gap-2 flex-col justify-center items-start text-[#fafafa]/80"
            }
          >
            <button>About EDGE</button>
            <button>Contact Us</button>
            <button>Careers</button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="resources" className={"border-none"}>
          <AccordionTrigger className={"text-[12px] uppercase"}>
            RESOURCES
          </AccordionTrigger>
          <AccordionContent
            className={
              "flex text-xs gap-2 flex-col justify-center items-start text-[#fafafa]/80"
            }
          >
            <button>How It Works</button>
            <button>Features</button>
            <button>Documentation</button>
            <button>FAQs</button>
            <button>Project Showcase</button>
          </AccordionContent>
        </AccordionItem>
        
         <hr className="border-[#1E293B] border-1 mt-5 mb-5" />
         <div className="flex flex-col justify-start items-start text-[#F1F5F9]/70 text-[12px]">
          <p>2026 EDGE. All rights reserved.</p>
          <div className="flex justify-between items-center w-full">
            <a className="hover:text-white" href="">Terms</a>
            <a className="hover:text-white" href="">Privacy</a>
            <a className="hover:text-white" href="">Cookies</a>
            <a className="hover:text-white" href="">Contact</a>
            <button className="cursor-pointer border-1 border-[#1E293B] p-2 rounded-full bg-[#151e31]">
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </Accordion>
    </div>
  );
}

export default Footer;
