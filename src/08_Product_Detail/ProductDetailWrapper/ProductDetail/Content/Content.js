import React from "react";
import  ArrowsClockwise  from "../../../assets/duotone-arrowsclockwise.svg";
import  Copy from "../../../assets/regular-copy.svg";
import Facebook  from "../../../assets/facebook.svg";
import Heart  from "../../../assets/heart.svg";
import  Pinterest from "../../../assets/pinterest.svg";
import  Twitter  from "../../../assets/twitter.svg";

export const Content = () => {
  return (
    <div className="flex w-[648px] items-center justify-between pt-0 pb-[8px] px-0 relative">
      <div className="inline-flex items-start gap-[24px] relative flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-[6px] relative flex-[0_0_auto]">
          <img src={Heart}  className="!relative !w-[24px] !h-[24px]" />
          <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
            Add to Wishlist
          </div>
        </div>
        <div className="inline-flex items-center justify-center gap-[6px] relative flex-[0_0_auto]">
          <img src={ArrowsClockwise}  className="!relative !w-[24px] !h-[24px]" />
          <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
            Add to Compare
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-center gap-[12px] relative flex-[0_0_auto]">
        <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-700 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
          Share product:
        </div>
        <div className="inline-flex items-center justify-center gap-[12px] relative flex-[0_0_auto]">
          <img src={Copy} className="!relative !w-[24px] !h-[24px]" />
          <img src={Facebook} className="!relative !w-[16px] !h-[16px]" />
          <img src={Twitter}  className="!relative !w-[16px] !h-[16px]" />
          <img src={Pinterest}  className="!relative !w-[16px] !h-[16px]" />
        </div>
      </div>
    </div>
  );
};