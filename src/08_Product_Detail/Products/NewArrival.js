import React from "react";
import image1 from "../assets/image-6.png";
import image2 from "../assets/image-7.png";
import image3 from "../assets/image-8.png";
export const NewArrival = () => {
  return (
    <div className="inline-flex flex-col items-start gap-[16px] relative">
      <div className="relative w-[312px] mt-[-1.00px] font-body-medium-600 font-[number:var(--body-medium-600-font-weight)] text-gray-900 text-[length:var(--body-medium-600-font-size)] tracking-[var(--body-medium-600-letter-spacing)] leading-[var(--body-medium-600-line-height)] [font-style:var(--body-medium-600-font-style)]">
        APPLE PRODUCT
      </div>
      <div className="inline-flex items-center justify-center gap-[12px] p-[12px] relative flex-[0_0_auto] bg-gray-00 rounded-[3px] border border-solid border-[#e4e7e9]">
        <img className="relative w-[80px] h-[80px] object-cover" alt="Image" src={image1} />
        <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
          <p className="relative w-[196px] mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
            TOZO T6 True Wireless Earbuds Bluetooth Headpho...
          </p>
          <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-black text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
              $1,500
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-center gap-[12px] p-[12px] relative flex-[0_0_auto] bg-gray-00 rounded-[3px] border border-solid border-[#e4e7e9]">
        <img className="relative w-[80px] h-[80px] object-cover" alt="Image" src={image2} />
        <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
          <p className="relative w-[196px] mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
            JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...
          </p>
          <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-black text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
              $1,500
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-center gap-[12px] p-[12px] relative flex-[0_0_auto] bg-gray-00 rounded-[3px] border border-solid border-[#e4e7e9]">
        <img className="relative w-[80px] h-[80px] object-cover" alt="Image"src={image3} />
        <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
          <p className="relative w-[196px] mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
            Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...
          </p>
          <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-black text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
              $1,500
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};