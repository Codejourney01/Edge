import React from "react";

function Title({ text1, text2 }) {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:py-12">
      
      <p className="w-full max-w-[520px] text-center text-[28px] leading-tight font-bold bg-gradient-to-r from-black via-zinc-800 to-zinc-400 bg-clip-text text-transparent sm:max-w-[450px] sm:text-[36px] md:max-w-[600px] md:text-[44px] lg:max-w-[750px] lg:text-[48px] xl:max-w-[900px] xl:text-[54px]">
        {text1}
      </p>

      <p className="mt-2 w-full max-w-[520px] text-center text-[13px] leading-relaxed font-normal text-[#888888] sm:max-w-[500px] sm:text-[15px] md:max-w-[700px] md:text-[18px] lg:max-w-[850px] lg:text-[20px] xl:max-w-[1000px] xl:text-[22px]">
        {text2}
      </p>

    </div>
  );
}

export default Title;