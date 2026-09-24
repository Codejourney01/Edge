<<<<<<< Updated upstream
import { Link } from "react-router-dom";
import { ChevronLeft } from 'lucide-react';
import { assets } from "@/assets/assets";

function Register() {
  return (
    <div className="min-h-screen flex-col flex items-center justify-center bg-[linear-gradient(180deg,_rgba(219,228,255,0.6)_0%,_rgba(255,255,255,1)_50%)] px-4">
      <div className="flex flex-col justify-center items-center gap-10 relative">
        <Link to={"/"} className="absolute -top-20 left-0">
          <ChevronLeft className="hover:text-black text-[#888888]" size={20} />
        </Link>
        <div className="w-full flex justify-center items-center gap-2 flex-col">
          <img src={assets.only_logo} alt="" />
          <p className="text-[16px] font-semibold">Sign Up to Edge</p>
          <p className="text-[14px] ">
            Already have an account?
            <Link className="text-blue-600 hover:underline" to={"/login"}>
               Sign In
            </Link>
          </p>
        </div>
        <form method="post" className="flex flex-col gap-2 w-100">
          <input
            placeholder="Name"
            className="text-[12px] w-full p-2 rounded-[8px] border-1 border-[#E5E5E5] outline-none focus:border-[#888888] focus:shadow"
            type="text"
          />
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
          <select
            defaultValue="Employee"
            className="text-[12px] w-full p-2 rounded-[8px] border-1 border-[#E5E5E5] outline-none focus:border-[#888888] focus:shadow"
            name=""
            id=""
          >
            <option value="">Employee</option>
            <option value="">Manager</option>
            <option value="">Admin</option>
          </select>
          <button className="hover:shadow w-full mt-8 bg-[#2563EB] text-white rounded-[8px] text-[12px] py-2">
            Sign Up With Email
          </button>
        </form>
      </div>
      <p className="absolute bottom-10 text-[12px]">
        By continuing, you agree to our 
        <Link className="px-1 underline">
          Terms of Service & Privacy Policy. 
        </Link>
      </p>
    </div>
  );
}

export default Register;
=======
import React from 'react'

function Register() {
  return (
    <div>
      reg
    </div>
  )
}

export default Register
>>>>>>> Stashed changes
