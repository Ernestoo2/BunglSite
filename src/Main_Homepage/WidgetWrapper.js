import React from "react";
import PropTypes from 'prop-types';
import { LargeSizeTrueWrapper } from "./LargeSizeTrueWrapper";
import Image from "./Assets/image24.png"
export const WidgetWrapper = ({
  override,
  productName = "New Google Pixel 6 Pro",
  discountPercentage = 29,
  imageSrc = Image,
  backgroundColor = "bg-gray-900",
  divColor ="bg-#EFD33D",
  summerSalesText = "SUMMER SALES",
}) => {
  return (
    <div className={`relative w-[424px] h-[248px] ${backgroundColor} rounded-md overflow-hidden`}>
      <div className="relative w-96 h-56 top-6 left-10">
        <img
          className="absolute w-[236px] h-[201px] top-[23px] left-[148px] object-cover"
          src={imageSrc}
          alt={productName}
        />
        {discountPercentage && (
          <div className={`flex  w-[102px] ${divColor} h-10 items-start gap-2.5 px-4 py-2 absolute top-0 left-[258px] bg-warning-400 rounded-sm`}>
            <div className="relative w-fit mt-[-1.00px] font-body-medium-600 font-[number:var(--body-medium-600-font-weight)]  text-[#141414] text-[length:var(--body-medium-600-font-size)] tracking-[var(--body-medium-600-letter-spacing)] leading-[var(--body-medium-600-line-height)] whitespace-nowrap [font-style:var(--body-medium-600-font-style)]">
              {discountPercentage}% OFF
            </div>
          </div>
        )}
        <div className="inline-flex flex-col items-start gap-[18px] absolute top-[22px] left-0">
          <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
            <div className="relative w-40 mt-[-1.00px] font-label-03 font-[number:var(--label-03-font-weight)] text-primary-green text-[length:var(--label-03-font-size)] tracking-[var(--label-03-letter-spacing)] leading-[var(--label-03-line-height)] [font-style:var(--label-03-font-style)]">
              {summerSalesText}
            </div>
            <h2 className="relative w-40 font-heading-03 font-[number:var(--heading-03-font-weight)] text-gray-00 text-[length:var(--heading-03-font-size)] tracking-[var(--heading-03-letter-spacing)] leading-[var(--heading-03-line-height)] [font-style:var(--heading-03-font-style)]">
              {productName}
            </h2>
          </div>

          {override || (
            <LargeSizeTrueWrapper
              className="!flex-[0_0_auto]"
              color="primary"
              icons="after"
              largeSize={false}
              status="normal"
              type="primary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

WidgetWrapper.propTypes = {
  override: PropTypes.node,
  productName: PropTypes.string,
  discountPercentage: PropTypes.number,
  imageSrc: PropTypes.string,
  backgroundColor: PropTypes.string,
  summerSalesText: PropTypes.string,
};