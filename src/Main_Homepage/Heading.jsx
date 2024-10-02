import React from "react";
import { Button } from "@mui/material";

export const Heading = () => {
  return (
    <div className="flex w-[1392px] h-[38px] items-center justify-between absolute top-[2760px] left-28">
      <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
        <div className="text-gray-900 text-[length:var(--heading-03-font-size)] leading-[var(--heading-03-line-height)] relative w-fit mt-[-1.00px] font-heading-03 font-[number:var(--heading-03-font-weight)] tracking-[var(--heading-03-letter-spacing)] whitespace-nowrap [font-style:var(--heading-03-font-style)]">
          Best Deals
        </div>
        <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
          <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-black text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
            Deals ends in
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 relative flex-[0_0_auto] bg-primary-green rounded-sm">
            <div className="relative w-fit mt-[-1.00px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-white text-[length:var(--body-medium-400-font-size)] tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] whitespace-nowrap [font-style:var(--body-medium-400-font-style)]">
              16d
            </div>
            <div className="relative w-fit mt-[-1.00px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-white text-[length:var(--body-medium-400-font-size)] text-center tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] whitespace-nowrap [font-style:var(--body-medium-400-font-style)]">
              :
            </div>
            <div className="relative w-fit mt-[-1.00px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-white text-[length:var(--body-medium-400-font-size)] tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] whitespace-nowrap [font-style:var(--body-medium-400-font-style)]">
              21h
            </div>
            <div className="relative w-fit mt-[-1.00px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-white text-[length:var(--body-medium-400-font-size)] text-center tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] whitespace-nowrap [font-style:var(--body-medium-400-font-style)]">
              :
            </div>
            <div className="relative w-fit mt-[-1.00px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-white text-[length:var(--body-medium-400-font-size)] tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] whitespace-nowrap [font-style:var(--body-medium-400-font-style)]">
              57m
            </div>
            <div className="relative w-fit mt-[-1.00px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-white text-[length:var(--body-medium-400-font-size)] text-center tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] whitespace-nowrap [font-style:var(--body-medium-400-font-style)]">
              :
            </div>
            <div className="relative w-fit mt-[-1.00px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-white text-[length:var(--body-medium-400-font-size)] tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] whitespace-nowrap [font-style:var(--body-medium-400-font-style)]">
              23s
            </div>
          </div>
        </div>
      </div>
      <Button color="secondary" size="large" variant="text">
        Browse All Product
      </Button>
    </div>
  );
};