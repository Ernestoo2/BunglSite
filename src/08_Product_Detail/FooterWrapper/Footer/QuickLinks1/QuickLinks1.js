import React from "react";
import AppleStoreicon from "./IconsAppleStore";
import GoogleIcon from "./IconsGooglePlay";
export const QuickLinks1 = () => {
  return (
    <div className="gap-[18px] inline-flex flex-col items-start relative text-white">
      <div className="relative w-[200px] mt-[-1.00px] font-label-02 font-[number:var(--label-02-font-weight)] text-gray-00 text-[length:var(--label-02-font-size)] tracking-[var(--label-02-letter-spacing)] leading-[var(--label-02-line-height)] [font-style:var(--label-02-font-style)]">
        DOWNLOAD APP
      </div>
      <div className="gap-[12px] flex-[0_0_auto] inline-flex flex-col items-start relative">
        <div className="inline-flex items-center justify-center gap-[16px] px-[20px] py-[16px] relative flex-[0_0_auto] bg-black rounded-[3px]">
          <GoogleIcon className="!relative !w-[32px] !h-[32px]" />
          <div className="gap-[4px] flex-[0_0_auto] inline-flex flex-col items-start relative">
            <div className="relative w-[88px] mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[13px]">
              Get it now
            </div>
            <div className="relative w-[88px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[20px]">
              Google Play
            </div>
          </div>
        </div>
        <div className="inline-flex items-center justify-center gap-[16px] px-[20px] py-[16px] relative flex-[0_0_auto] bg-black rounded-[3px]">
          <AppleStoreicon className="!relative !w-[32px] !h-[32px]" />
          <div className="gap-[4px] flex-[0_0_auto] inline-flex flex-col items-start relative">
            <div className="relative w-[88px] mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[11px] tracking-[0] leading-[13px]">
              Get it now
            </div>
            <div className="relative w-[88px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[20px]">
              App Store
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};