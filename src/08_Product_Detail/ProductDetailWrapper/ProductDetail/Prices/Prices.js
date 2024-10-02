import React from "react";

export const Prices = () => {
  return (
    <div className="inline-flex items-center justify-center gap-[12px] relative">
      <div className="inline-flex items-center gap-[4px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-heading-03 font-[number:var(--heading-03-font-weight)] text-black text-[length:var(--heading-03-font-size)] tracking-[var(--heading-03-letter-spacing)] leading-[var(--heading-03-line-height)] whitespace-nowrap [font-style:var(--heading-03-font-style)]">
          $1699
        </div>
        <div className="relative w-fit [font-family:'Public_Sans-Regular',Helvetica] font-normal text-gray-500 text-[18px] tracking-[0] leading-[24px] line-through whitespace-nowrap">
          $1999.00
        </div>
      </div>
      <div className="inline-flex items-start gap-[10px] px-[10px] py-[5px] relative flex-[0_0_auto] bg-warning-400 rounded-[2px]">
        <div className="relative bg-[#f7e336] w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-gray-900 text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
          21% OFF
        </div>
      </div>
    </div>
  );
};