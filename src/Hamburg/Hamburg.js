import React from "react";
//import { OverlapGroup } from "./OverlapGroup";
import { Frame } from "./Frame";

export const Hamburg = () => {
  return (
    <div className="bg-[#00a218] flex flex-row justify-center w-full">
      <div className="bg-[#00a218] w-[1056px] h-[9092px] relative">
        <div className="absolute top-[39px] left-[36px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0.48px] leading-[48px] whitespace-nowrap">
          SHOP BY DEPARTMENT
        </div>
        <Frame/>
        {/* <OverlapGroup /> */}
      </div>
    </div>
  );
};