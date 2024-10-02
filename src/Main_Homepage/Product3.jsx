import React from "react";
import { Badge } from "@mui/material";
import image16 from "./Assets/Image16.png";
export const Product3 = () => {
  return (
    <div className="relative w-[250px] h-[298px] mr-[-1.00px] bg-gray-00 border border-solid border-[#e4e7e9]">
      <div className="absolute w-[220px] h-48 top-3 left-3">
        <img className="absolute w-[216px] h-[188px] top-1 left-1 object-cover" alt="Image" src={image16} />
        <Badge
          badgeContent="32% OFF"
          color="default"
          invisible={false}
          overlap="rectangle"
          showZero={false}
          variant="standard"
        />
      </div>
      <div className="inline-flex flex-col items-start gap-2 absolute top-[212px] left-4">
        <p className="relative w-[216px] mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
          JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black
        </p>
        <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-gray-400 text-sm tracking-[0] leading-5 line-through whitespace-nowrap">
            $360
          </div>
          <div className="relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-gray-900 text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
            $250
          </div>
        </div>
      </div>
    </div>
  );
};