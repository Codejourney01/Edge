import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
function Navbar() {
  return (
    <div className="flex justify-between items-center max-[769px]:px-6 max-[1024px]:px-6 px-25 bg-white/95 top-0 sticky z-50">
      <div className="flex justify-center items-center gap-5 max-[769px]:py-4 py-3">
        <img src={assets.logo} alt="Logo" className="h-8 max-[769px]:w-25" />
        <div className="flex justify-center items-center gap-1 hidden min-[769px]:flex">
          <NavigationMenu className="hidden min-[769px]:flex">
            <NavigationMenuList className="gap-1">
              {/* PRODUCT */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 text-[#666666]">
                  Product
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[450px] grid-cols-2 gap-2 p-3">
                    <ListItem
                      title="Project Management"
                      description="Plan, organize and manage projects in one place."
                    />

                    <ListItem
                      title="Task Management"
                      description="Create, assign and track tasks efficiently."
                    />

                    <ListItem
                      title="Team Management"
                      description="Manage teams, members and responsibilities."
                    />

                    <ListItem
                      title="Analytics"
                      description="Track project and business performance."
                    />

                    <ListItem
                      title="Reports"
                      description="Generate smart reports and insights."
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 text-[#666666]">
                  AI Intelligence
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[450px] grid-cols-2 gap-2 p-3">
                    <ListItem
                      title="AI Predictions"
                      description="Predict project delays and possible risks."
                    />

                    <ListItem
                      title="Risk Analysis"
                      description="Identify potential project risks early."
                    />

                    <ListItem
                      title="Business Health"
                      description="Monitor the overall health of your business."
                    />

                    <ListItem
                      title="Smart Insights"
                      description="Turn business data into useful insights."
                    />

                    <ListItem
                      title="AI Recommendations"
                      description="Get intelligent suggestions for better decisions."
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

             
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 text-[#666666]">
                  Solutions
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[400px] grid-cols-2 gap-2 p-3">
                    <ListItem
                      title="For Admin"
                      description="Manage users, roles and system operations."
                    />

                    <ListItem
                      title="For Manager"
                      description="Manage projects, teams and performance."
                    />

                    <ListItem
                      title="For Employee"
                      description="Track assigned tasks and daily work."
                    />

                    <ListItem
                      title="Team Collaboration"
                      description="Keep your entire team connected."
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

             
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 text-[#666666]">
                  Resources
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[400px] grid-cols-2 gap-2 p-3">
                    <ListItem
                      title="Documentation"
                      description="Learn how to use EDGE."
                    />

                    <ListItem
                      title="How EDGE Works"
                      description="Understand the complete platform workflow."
                    />

                    <ListItem
                      title="Features"
                      description="Explore everything EDGE can do."
                    />

                    <ListItem
                      title="FAQs"
                      description="Find answers to common questions."
                    />

                    <ListItem
                      title="Project Showcase"
                      description="Explore the EDGE project and system."
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              
              <NavigationMenuItem className={"max-[860px]:hidden flex"}>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 text-[#666666]">
                  About
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[400px] grid-cols-2 gap-2 p-3">
                    <ListItem
                      title="About EDGE"
                      description="Learn about our platform and purpose."
                    />

                    <ListItem
                      title="Our Vision"
                      description="Building smarter ways to manage business."
                    />

                    <ListItem
                      title="Technology"
                      description="Explore the technologies behind EDGE."
                    />

                    <ListItem
                      title="Contact"
                      description="Get in touch with the EDGE team."
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          size="lg"
          variant="secondary"
          className=" hidden min-[769px]:flex cursor-pointer justify-center items-center px-3"
        >
          Login
        </Button>
        <Button
          size="lg"
          className="cursor-pointer px-3 flex justify-center items-center max-[769px]:h-8"
        >
          Sign Up
        </Button>
        <Drawer swipeDirection="right">
          <DrawerTrigger
            className="hidden max-[769px]:flex"
            render={<Button variant="ghost" />}
          >
            <Menu />
          </DrawerTrigger>

          <DrawerContent className="!rounded-none">
            <DrawerHeader className="px-4 pt-6 pb-4">
              <DrawerTitle className="text-lg font-semibold">
                Explore EDGE
              </DrawerTitle>

              <DrawerDescription className="text-sm">
                AI-powered business intelligence and project management.
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="product" className="border-none">
                  <AccordionTrigger className="text-[12px] uppercase">
                    PRODUCT
                  </AccordionTrigger>

                  <AccordionContent className="flex text-xs gap-2 flex-col justify-center items-start text-[#222222]/80">
                    <button>Project Management</button>
                    <button>Task Management</button>
                    <button>Team Management</button>
                    <button>Analytics</button>
                    <button>Reports</button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ai-intelligence" className="border-none">
                  <AccordionTrigger className="text-[12px] uppercase">
                    AI INTELLIGENCE
                  </AccordionTrigger>

                  <AccordionContent className="flex text-xs gap-2 flex-col justify-center items-start text-[#222222]/80">
                    <button>AI Predictions</button>
                    <button>Risk Analysis</button>
                    <button>Business Health</button>
                    <button>Smart Insights</button>
                    <button>AI Recommendations</button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="solutions" className="border-none">
                  <AccordionTrigger className="text-[12px] uppercase">
                    SOLUTIONS
                  </AccordionTrigger>

                  <AccordionContent className="flex text-xs gap-2 flex-col justify-center items-start text-[#222222]/80">
                    <button>For Admin</button>
                    <button>For Manager</button>
                    <button>For Employee</button>
                    <button>Team Collaboration</button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="resources" className="border-none">
                  <AccordionTrigger className="text-[12px] uppercase">
                    RESOURCES
                  </AccordionTrigger>

                  <AccordionContent className=" flex text-xs gap-2 flex-col justify-center items-start text-[#222222]/80">
                    <button>Documentation</button>
                    <button>How EDGE Works</button>
                    <button>Features</button>
                    <button>FAQs</button>
                    <button>Project Showcase</button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="about" className="border-none">
                  <AccordionTrigger className="text-[12px] uppercase">
                    ABOUT
                  </AccordionTrigger>

                  <AccordionContent className="flex text-xs gap-2 flex-col justify-center items-start text-[#222222]/80">
                    <button>About EDGE</button>
                    <button>Our Vision</button>
                    <button>Technology</button>
                    <button>Contact</button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <DrawerFooter className="pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="w-full cursor-pointer"
              >
                Login
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;

function ListItem({ title, description }) {
  return (
    <li className="w-full">
      <NavigationMenuLink
        render={
          <button
            className="
              flex w-full cursor-pointer flex-col
              items-start justify-start
              gap-1 rounded-md p-3
              text-left transition-colors
              hover:bg-gray-100
            "
          >
            <p className="w-full text-left text-sm font-medium text-[#222222]">
              {title}
            </p>

            <p className="w-full text-left text-xs text-[#888888]">
              {description}
            </p>
          </button>
        }
      />
    </li>
  );
}