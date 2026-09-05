import React from "react";

function Item({ f }) {
  let patch = "";
  let text = "";
  if (f.name == "Projects") {
    patch =
      "col-start-4 row-start-2 col-span-2 row-span-2 rounded-br-[15px] z-20 border-none !relative";
    text = "text-[20px] bottom-3 !font-bold !text-[#555555] absolute";
  }
  if (f.name == "Analysis") {
    patch =
      "col-start-6 row-start-2 col-span-2 row-span-2 rounded-bl-[15px] border-none !relative";
    text = "text-[20px] bottom-3 !font-bold !text-[#555555] absolute";
  }
  if (f.name == "Flux Ai") {
    patch =
      "col-start-4 row-start-4 col-span-2 row-span-2 rounded-tr-[15px] border-none !relative";
    text = "text-[20px] bottom-3 !font-bold !text-[#555555] absolute";
  }
  if (f.name == "Updates") {
    patch =
      "col-start-6 row-start-4 col-span-2 row-span-2 rounded-tl-[15px] border-none !relative";
    text = "text-[20px] bottom-3 !font-bold !text-[#555555] absolute";
  }
  let Icon = f.icon;
  return (
    <div
      className={`${patch} cursor-pointer select-none flex gap-3 items-center flex-col justify-center bg-white hover:border-black hover:border duration-100 hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:translate-x-[1px]`}
    >
      <p className="w-fit">
        {f.img ? (
          <img src={f.img} alt="" />
        ) : (
          <p>{<Icon size={25} color={"#888888"} />}</p>
        )}
      </p>
      <p
        className={`text-center text-[13px] font-medium text-[#888888] ${text}`}
      >
        {f.name}
      </p>
    </div>
  );
}

export default Item;
