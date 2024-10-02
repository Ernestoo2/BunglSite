import React from "react";

import { HouseIcon } from "./House";
import { RegularCaretright1 } from "./Caretright";

export const CardBreadcrumb = () => {
    return (
        <div className="relative w-[1920px] h-[72px] bg-gray-200">
            <div className="inline-flex items-center justify-center gap-[8px] relative top-[26px] left-[300px]">
                <HouseIcon className="!relative !w-[20px] !h-[20px]" />
                <div className="relative w-fit  font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                    Home
                </div>
                <RegularCaretright1 className="!relative !w-[12px] !h-[12px]" />
                <div className="relative w-fit  font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                    Shopping Card
                </div>

            </div>
        </div>
    );
};