import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { assets } from "@/assets/assets";

function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[linear-gradient(180deg,_rgba(219,228,255,0.6)_0%,_rgba(255,255,255,1)_50%)] px-4 py-8 sm:px-6 sm:py-12">
      <div className="w-full max-w-md flex justify-start">
        <Link to={"/"} className="inline-block p-1">
          <ChevronLeft className="hover:text-black text-[#888888]" size={20} />
        </Link>
      </div>

      <div className="w-full max-w-sm sm:max-w-md flex flex-col justify-center items-center gap-8 my-auto">
        <div className="w-full flex justify-center items-center gap-2 flex-col text-center">
          <img src={assets.only_logo} alt="Logo" className="h-10 w-auto" />
          <p className="text-[16px] font-semibold">Sign Up to Edge</p>
          <p className="text-[14px]">
            Already have an account?{" "}
            <Link className="text-blue-600 hover:underline" to={"/login"}>
              Sign In
            </Link>
          </p>
        </div>

        <form method="post" className="flex flex-col gap-3 w-full">
          <input
            placeholder="Name"
            className="text-[12px] w-full p-2.5 rounded-[8px] border border-[#E5E5E5] outline-none focus:border-[#888888] focus:shadow bg-white"
            type="text"
          />
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
          <select
            defaultValue="Employee"
            className="text-[12px] w-full p-2.5 rounded-[8px] border border-[#E5E5E5] outline-none focus:border-[#888888] focus:shadow bg-white"
            name=""
            id=""
          >
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
            <option value="Admin">Admin</option>
          </select>
          <button className="hover:shadow w-full mt-4 bg-[#2563EB] text-white rounded-[8px] text-[12px] py-2.5 font-medium transition-all">
            Sign Up With Email
          </button>
        </form>
      </div>

      {/* Footer Terms */}
      <div className="w-full text-center py-4 text-[12px]">
        By continuing, you agree to our{" "}
        <Link to="#" className="px-1 underline">
          Terms of Service & Privacy Policy.
        </Link>
      </div>
    </div>
  );
}

export default Register;
