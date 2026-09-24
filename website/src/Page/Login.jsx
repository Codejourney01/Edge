import { assets } from "@/assets/assets";
import { ChevronLeft } from "lucide-react";
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex-col flex items-center justify-center bg-[linear-gradient(180deg,_rgba(219,228,255,0.6)_0%,_rgba(255,255,255,1)_50%)] px-4">
      <div className="flex flex-col justify-center items-center gap-10 absolute">
        <Link to={"/"} className="absolute -top-20 left-0">
          <ChevronLeft className="hover:text-black text-[#888888]" size={20} />
        </Link>
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <img src={assets.only_logo} alt="" />
          <p className="text-[16px] font-semibold">Welcome back!</p>
          <p className="text-[14px] ">
            Don’t have an account?
            <Link className="text-blue-600 hover:underline" to={"/register"}>
               Sign Up
            </Link>
          </p>
        </div>
        <form method="post" className="flex flex-col gap-2 w-100">
          <input
            placeholder="Email"
            className="text-[12px] w-full p-2 rounded-[8px] border-1 border-[#E5E5E5] outline-none focus:border-[#888888] focus:shadow"
            type="email"
          />
          <input
            placeholder="Password"
            className="text-[12px] w-full p-2 rounded-[8px] border-1 border-[#E5E5E5] outline-none focus:border-[#888888] focus:shadow"
            type="password"
          />
          <Link className="text-blue-600 text-[10px] text-right hover:underline">
            Forgot your password?
          </Link>
          <button className="w-full hover:shadow bg-[#2563EB] text-white rounded-[8px] text-[12px] py-2">
            Log In
          </button>
        </form>
      </div>
      <Link className="absolute bottom-10 underline text-[12px]">
        Need help?
      </Link>
    </div>
  );
}
