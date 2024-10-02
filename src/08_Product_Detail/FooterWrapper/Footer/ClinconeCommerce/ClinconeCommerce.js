import React from "react";
import { Logo } from "./Logo/Logo";

export const CliconEcommerce = () => {
  return (
   <div className="inline-flex flex-col items-start gap-[24px] relative text-white">

      <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
          <div className="relative w-[312px] mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-500 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
            Customer Supports:
          </div>
          <div className="relative w-[312px] font-body-large-500 font-[number:var(--body-large-500-font-weight)] text-gray-00 text-[length:var(--body-large-500-font-size)] tracking-[var(--body-large-500-letter-spacing)] leading-[var(--body-large-500-line-height)] [font-style:var(--body-large-500-font-style)]">
            (629) 555-0129
          </div>
        </div>
        <p className="relative w-[248px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-gray-300 text-[length:var(--body-medium-400-font-size)] tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] [font-style:var(--body-medium-400-font-style)]">
          4517 Washington Ave. Manchester, Kentucky 39495
        </p>
        <div className="relative w-[312px] font-body-medium-500 font-[number:var(--body-medium-500-font-weight)] text-gray-00 text-[length:var(--body-medium-500-font-size)] tracking-[var(--body-medium-500-letter-spacing)] leading-[var(--body-medium-500-line-height)] [font-style:var(--body-medium-500-font-style)]">
          info@kinbo.com
        </div>
      </div>
    </div>
  );
};