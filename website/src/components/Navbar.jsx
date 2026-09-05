import { assets } from "@/assets/assets"
import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <div className="font-medium">
      <div className="w-full hidden  bg-accent text-[14px] cursor-pointer md:flex justify-center items-center py-1.75">
        <p className="text-[#2563EB] ">New : Flux Ai —</p>
        <p className="hover:text-[#666666] text-[#222222]">The best AI is your AI , The world’s first company Brain </p>
      </div>
      <div className="flex justify-between items-center px-8 md:px-25 bg-white w-full h-15 pt-12 md:pt-0">
      <div className="flex items-center gap-2 ">
        <img src={assets.logo} alt="Logo" className="h-8" />
        <Button className="hover:bg-gray-100  text-[#666666] hidden md:flex  px-4 cursor-pointer " size="lg" variant="ghost">Flux Ai</Button>
        <Button className="hover:bg-gray-100 text-[#666666] hidden md:flex px-4 cursor-pointer " size="lg" variant="ghost">Features</Button>
        <Button className="hover:bg-gray-100 text-[#666666]  hidden md:flex px-4 cursor-pointer " size="lg" variant="ghost">Solutions</Button>
        <Button className="hover:bg-gray-100 text-[#666666] hidden md:flex px-4 cursor-pointer " size="lg" variant="ghost">Learn</Button>
        <Button className="hover:bg-gray-100 text-[#666666] hidden md:flex px-4 cursor-pointer " size="lg" variant="ghost">Enterprise</Button>
      </div>
      <div className="flex items-center gap-3">
        <Button size="lg" variant="secondary" className="cursor-pointer px-4 hidden md:flex">Login</Button>
        <Button size="lg" className="cursor-pointer px-4">Sign Up</Button>
      </div>
    </div>
    </div>
  )
}

export default Navbar