import { assets } from "@/assets/assets";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="h-[100dvh] w-full flex flex-col items-center justify-between bg-[linear-gradient(180deg,_rgba(219,228,255,0.6)_0%,_rgba(255,255,255,1)_50%)] px-4 py-4 sm:px-6 sm:py-8 overflow-hidden">
      {/* Top Back Button */}
      <div className="w-full max-w-md flex justify-start shrink-0">
        <Link to={"/"} className="inline-block p-1">
          <ChevronLeft className="hover:text-black text-[#888888]" size={20} />
        </Link>
      </div>

      {/* Main Login Box */}
      <div className="w-full max-w-sm sm:max-w-md flex flex-col justify-center items-center gap-6 sm:gap-8 my-auto shrink-0">
        <div className="w-full flex justify-center items-center flex-col gap-2 text-center">
          <img src={assets.only_logo} alt="Logo" className="h-10 w-auto" />
          <p className="text-[16px] font-semibold">Welcome back!</p>
          <p className="text-[14px]">
            Don’t have an account?{" "}
            <Link className="text-blue-600 hover:underline" to={"/register"}>
              Sign Up
            </Link>
          </p>
        </div>

        <form method="post" className="flex flex-col gap-3 w-full">
          <input
            placeholder="Email"
            className="text-[12px] w-full p-2.5 rounded-[8px] border border-[#E5E5E5] outline-none focus:border-[#888888] focus:shadow bg-white"
            type="email"
          />
          <input
            placeholder="Password"
            className="text-[12px] w-full p-2.5 rounded-[8px] border border-[#E5E5E5] outline-none focus:border-[#888888] focus:shadow bg-white"
            type="password"
          />
          <Link
            to="#"
            className="text-blue-600 text-[10px] text-right hover:underline"
          >
            Forgot your password?
          </Link>
          <button className="w-full hover:shadow bg-[#2563EB] text-white rounded-[8px] text-[12px] py-2.5 font-medium transition-all mt-1">
            Log In
          </button>
        </form>
      </div>

      {/* Footer Link */}
      <div className="w-full text-center py-2 text-[12px] shrink-0">
        <Link to="#" className="underline">
          Need help?
        </Link>
      </div>
    </div>
  );
}
