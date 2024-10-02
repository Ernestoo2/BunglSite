import React from "react";
import X from "../../assets/duotone-x.svg";
import ArrowRight from "../../assets/regular-caretright-1.svg";

const CloseButton = ({ className }) => (
  <div className={`flex items-start gap-2 p-1 bg-gray-200 rounded-md ${className}`}>
    <img src={X} className="w-4 h-4" alt="Close" />
  </div>
);

export const WidgetProduct = () => {
  return (
    <div className="relative w-full py-4 text-white bg-black sm:py-6 md:py-8 lg:py-10">
      <div className="flex flex-col items-center justify-center px-4 md:flex-row md:justify-between sm:px-8 md:px-16">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="text-xs sm:text-sm md:text-base">Up to</span>
          <span className="text-2xl text-green-500 sm:text-3xl md:text-4xl">59%</span>
          <span className="text-lg sm:text-xl md:text-2xl">OFF</span>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 rounded-md md">
          <span className="text-sm text-black sm:text-base md:text-lg">SHOP NOW</span>
          <img src={ArrowRight} className="w-4 h-4" alt="Arrow Right" />
        </button>
        <CloseButton className="absolute top-2 right-2 md:static" />
      </div>
    </div>
  );
};

