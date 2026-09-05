import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { assets } from "@/assets/assets";

function Footer() {
  return (
    <div className="bg-[#fafafa] flex flex-col justify-center items-start p-4">
      <div className="min-[769px]:flex hidden">footer</div>
      
      <Accordion className="max-w-lg hidden max-[769px]:flex">
        <AccordionItem value="" className={""}>
          <AccordionTrigger className={"text-[15px]"}>Product</AccordionTrigger>
          <AccordionContent
            className={
              "flex text-[12px] gap-2 flex-col justify-center items-start"
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
        <AccordionItem value="ai" className={""}>
          <AccordionTrigger className={"text-[15px]"}>AI</AccordionTrigger>
          <AccordionContent
            className={
              "flex text-[12px] gap-2 flex-col justify-center items-start"
            }
          >
            <button>AI Predictions</button>
            <button>Risk Analysis</button>
            <button>Business Insights</button>
            <button>AI Recommendations</button>
            <button>Performance Intelligence</button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="solutions" className={""}>
          <AccordionTrigger className={"text-[15px]"}>
            SOLUTIONS
          </AccordionTrigger>
          <AccordionContent
            className={
              "flex text-[12px] gap-2 flex-col justify-center items-start"
            }
          >
            <button>Admin</button>
            <button>Manager</button>
            <button>Employee</button>
            <button>Role-Based Access</button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="company" className={""}>
          <AccordionTrigger className={"text-[15px]"}>COMPANY</AccordionTrigger>
          <AccordionContent
            className={
              "flex text-[12px] gap-2 flex-col justify-center items-start"
            }
          >
            <button>About EDGE</button>
            <button>Contact Us</button>
            <button>Careers</button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="resources" className={""}>
          <AccordionTrigger className={"text-[15px]"}>
            RESOURCES
          </AccordionTrigger>
          <AccordionContent
            className={
              "flex text-[12px] gap-2 flex-col justify-center items-start"
            }
          >
            <button>How It Works</button>
            <button>Features</button>
            <button>Documentation</button>
            <button>FAQs</button>
            <button>Project Showcase</button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Footer;
