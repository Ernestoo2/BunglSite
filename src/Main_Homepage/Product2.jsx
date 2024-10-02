import React from "react";
import { Badge } from "@mui/material";
import image12 from "./Assets/Image12.png"
export const Product2 = () => {
    return (
        <div className="relative w-[250px] h-[298px] bg-gray-00 border border-solid border-[#e4e7e9]">
            <div className="absolute w-[220px] h-48 top-3 left-3">
                <img className="absolute w-[216px] h-[188px] top-1 left-1 object-cover" alt="Image" src={image12} />
                <Badge badgeContent="Hot" invisible={false} showZero={false} />
            </div>
            <div className="inline-flex flex-col items-start gap-2 absolute top-[212px] left-4">
                <p className="relative w-[216px] mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
                    2-Barrel Carburetor Carb 2100 Engine Increase Horsepower
                </p>
                <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-gray-900 text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
                        $160
                    </div>
                </div>
            </div>
        </div>
    );
};