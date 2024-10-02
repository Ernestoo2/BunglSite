import React from "react";


import { RegularCaretright1 } from "./Caretright";
import Divider from "./Divider";


export const TopCategory = () => {
  return (
    <div className="inline-flex flex-col items-start gap-[12px] relative text-white" >
      <div className="relative w-[200px] mt-[-1.00px] font-label-02 font-[number:var(--label-02-font-weight)] text-gray-00 text-[length:var(--label-02-font-size)] tracking-[var(--label-02-letter-spacing)] leading-[var(--label-02-line-height)] [font-style:var(--label-02-font-style)]">
        TOP CATEGORY
      </div>
      <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[8px] px-0 py-[6px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-gray-400 text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
            Computer &amp; Laptop
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] px-0 py-[6px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-gray-400 text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
            SmartPhone
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] px-0 py-[6px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-gray-400 text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
            Headphone
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] px-0 py-[6px] relative flex-[0_0_auto]">
           <Divider className="!relative !w-[24px] !h-[2px]" />
          <div className="relative w-fit mt-[-1.00px] font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-gray-00 text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
            Accessories
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] px-0 py-[6px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-gray-400 text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
            Camera &amp; Photo
          </div>
        </div>
        <div className="inline-flex items-center gap-[8px] px-0 py-[6px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-gray-400 text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
            TV &amp; Homes
          </div>
        </div>
        <button className="all-[unset] box-border inline-flex items-center gap-[8px] px-0 py-[6px] relative flex-[0_0_auto] bg-black">
          <div className="relative w-fit mt-[-1.00px] font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-[#00a218] text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
            Browse All Product
          </div>
          <RegularCaretright1 className="!relative !w-[20px] !h-[20px]" />
        </button>
      </div>
    </div>
  );
};