import React from "react";

export const Logo = () => {
  return (
    <div className="inline-flex items-center justify-center gap-[8px] relative">
      <div className="w-[48px] h-[48px]">
      <img className="fixed w-[48px] h-[48px] top-0 left-0" alt="Icon" />

    </div>
      <div className="relative w-fit [font-family:'Public_Sans-Bold',Helvetica] font-bold text-gray-00 text-[32px] tracking-[-0.64px] leading-[40px] whitespace-nowrap">
        CLICON
      </div>
    </div>
  );
};