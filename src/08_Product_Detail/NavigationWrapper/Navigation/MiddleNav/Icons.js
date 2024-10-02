import React from "react";
import Heart from "../../../assets/heart.svg";
import User from "../../../assets/regular-user.svg";
import shoppingCat from "../../../assets/vector-2.svg";
import Vector1 from "../../../assets/vector-1.svg";

export const Icons = () => {
  return (
    <div className=" inline-flex items-center gap-[24px] relative">  {/* Set background color and position */}
      <div className=" w-[32px] h-[32px]  bg-[100%_100%] ">
        <img src={shoppingCat} className=" " />
        <div className="flex  gap-2">
        <img src={Vector1} className=" pl-[8px] " />
        <img src={Vector1} className=" " />
        </div>
        <div className="absolute w-[38px] h-[28px] top-[-6px] left-0">
          {/* <IconComponentNode className="!absolute !w-[29px] !h-[20px] !top-[8px] !left-0" /> */}
          <div className="inline-flex flex-col items-start gap-[10px] px-0 py-[2px] absolute top-0 left-[14px] bg-white rounded-[100px] border-[1.5px] border-solid border-[#00a218]">
            <div className="relative w-[20px] h-[20px] font-body-tiny-600 font-[number:var(--body-tiny-600-font-weight)] text-[#00a218] text-[length:var(--body-tiny-600-font-size)] text-center tracking-[var(--body-tiny-600-letter-spacing)] leading-[var(--body-tiny-600-line-height)] [font-style:var(--body-tiny-600-font-style)]">
              2
            </div>
          </div>
        </div>
      </div>
      <img src={Heart} className=" flex w-[32px] h-[32px" />
      <img src={User} className="flex w-[32px] h-[32p] " />
    </div>
  );
};
