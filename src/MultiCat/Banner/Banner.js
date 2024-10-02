import React from "react";
import ArrowRight from "../assets/regular-arrowright.svg";
import image from "../assets/image-3.png";

export const Banner = () => {
    return (
        <div className="inline-flex flex-col h-[430px] items-center justify-center gap-[24px] p-[32px] bg-[#F7E99E] relative bg-warning-200 rounded-[4px]">
            <div className="gap-[12px] inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
                <img className="relative h-[96px]" alt="Image" src={image} />
                <div className="gap-[16px] inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-center justify-center gap-[8px] relative flex-[0_0_auto]">
                        <div className="relative w-[248px] mt-[-1.00px] font-heading-02 font-[number:var(--heading-02-font-weight)] text-[#00a218] text-[length:var(--heading-02-font-size)] text-center tracking-[var(--heading-02-letter-spacing)] leading-[var(--heading-02-line-height)] [font-style:var(--heading-02-font-style)]">
                            21% Discount
                        </div>
                        <p className="relative w-[248px] font-body-medium-400 font-[number:var(--body-medium-400-font-weight)] text-gray-700 text-[length:var(--body-medium-400-font-size)] text-center tracking-[var(--body-medium-400-letter-spacing)] leading-[var(--body-medium-400-line-height)] [font-style:var(--body-medium-400-font-style)]">
                            Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
                        </p>
                    </div>
                    <div className="items-center justify-center gap-[8px] inline-flex relative flex-[0_0_auto]">
                        <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                            Starting price:
                        </div>
                        <div className="items-start bg-[white] gap-[10px] px-[12px] py-[6px] bg-gray-00 rounded-[3px] inline-flex relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-2.00px] font-body-medium-600 font-[number:var(--body-medium-600-font-weight)] text-[#00a218] text-[length:var(--body-medium-600-font-size)] text-center tracking-[var(--body-medium-600-letter-spacing)] leading-[var(--body-medium-600-line-height)] whitespace-nowrap [font-style:var(--body-medium-600-font-style)]">
                                $99 USD
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-[248px] h-[48px] text-white items-center justify-center gap-[8px] px-[24px] py-0 relative flex-[0_0_auto] bg-[#00a218] rounded-[2px]">
                <div className="relative w-fit  font-heading-07 font-[number:var(--heading-07-font-weight)] text-gray-00 text-[length:var(--heading-07-font-size)] tracking-[var(--heading-07-letter-spacing)] leading-[var(--heading-07-line-height)] whitespace-nowrap [font-style:var(--heading-07-font-style)]">
                    SHOP NOW
                </div>
                <img src={ArrowRight} className="!relative !w-[20px] !h-[20px]" />
            </div>
        </div>
    );
};