import React from "react";
import  Star  from "../../../assets/regular-star.svg";

export const ProductContent = () => {
  return (
    <div className="inline-flex flex-col items-start gap-[16px] relative">
      <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
        <div className="inline-flex items-start gap-[6px] relative flex-[0_0_auto]">
          <div className="inline-flex items-start gap-[2px] relative flex-[0_0_auto]">
            <img src={Star} className="!relative !w-[20px] !h-[20px]" />
            <img src={Star} className="!relative !w-[20px] !h-[20px]" />
            <img src={Star} className="!relative !w-[20px] !h-[20px]" />
            <img src={Star} className="!relative !w-[20px] !h-[20px]" />
            <img src={Star} className="!relative !w-[20px] !h-[20px]" />
          </div>
          <div className="relative w-fit mt-[-1.00px] font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-gray-900 text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)]">
            4.7 Star Rating
          </div>
          <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
            (21,671 User feedback)
          </div>
        </div>
        <p className="relative w-[648px] font-body-XL-400 font-[number:var(--body-XL-400-font-weight)] text-gray-900 text-[length:var(--body-XL-400-font-size)] tracking-[var(--body-XL-400-letter-spacing)] leading-[var(--body-XL-400-line-height)] [font-style:var(--body-XL-400-font-style)]">
          2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray
        </p>
      </div>
      <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
        <div className="inline-flex items-start gap-[24px] relative flex-[0_0_auto]">
          <p className="relative w-[312px] mt-[-1.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[14px]">
            <span className="text-[#5f6c72] leading-[var(--body-small-400-line-height)] font-body-small-400 [font-style:var(--body-small-400-font-style)] font-[number:var(--body-small-400-font-weight)] tracking-[var(--body-small-400-letter-spacing)] text-[length:var(--body-small-400-font-size)]">
              Sku:{" "}
            </span>
            <span className="font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-[#191c1e] leading-[var(--body-small-600-line-height)] [font-style:var(--body-small-600-font-style)] tracking-[var(--body-small-600-letter-spacing)] text-[length:var(--body-small-600-font-size)]">
              A264671
            </span>
          </p>
          <p className="relative w-[312px] mt-[-1.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[14px]">
            <span className="text-[#5f6c72] leading-[var(--body-small-400-line-height)] font-body-small-400 [font-style:var(--body-small-400-font-style)] font-[number:var(--body-small-400-font-weight)] tracking-[var(--body-small-400-letter-spacing)] text-[length:var(--body-small-400-font-size)]">
              Availability:{" "}
            </span>
            <span className="font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-[#124261] leading-[var(--body-small-600-line-height)] [font-style:var(--body-small-600-font-style)] tracking-[var(--body-small-600-letter-spacing)] text-[length:var(--body-small-600-font-size)]">
              In Stock
            </span>
          </p>
        </div>
        <div className="inline-flex items-start gap-[24px] relative flex-[0_0_auto]">
          <p className="relative w-[312px] mt-[-1.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[14px]">
            <span className="text-[#5f6c72] leading-[var(--body-small-400-line-height)] font-body-small-400 [font-style:var(--body-small-400-font-style)] font-[number:var(--body-small-400-font-weight)] tracking-[var(--body-small-400-letter-spacing)] text-[length:var(--body-small-400-font-size)]">
              Brand:{" "}
            </span>
            <span className="font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-[#191c1e] leading-[var(--body-small-600-line-height)] [font-style:var(--body-small-600-font-style)] tracking-[var(--body-small-600-letter-spacing)] text-[length:var(--body-small-600-font-size)]">
              Apple
            </span>
          </p>
          <p className="relative w-[312px] mt-[-1.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[14px]">
            <span className="text-[#5f6c72] leading-[var(--body-small-400-line-height)] font-body-small-400 [font-style:var(--body-small-400-font-style)] font-[number:var(--body-small-400-font-weight)] tracking-[var(--body-small-400-letter-spacing)] text-[length:var(--body-small-400-font-size)]">
              Category:{" "}
            </span>
            <span className="font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-[#191c1e] leading-[var(--body-small-600-line-height)] [font-style:var(--body-small-600-font-style)] tracking-[var(--body-small-600-letter-spacing)] text-[length:var(--body-small-600-font-size)]">
              Electronics Devices
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};