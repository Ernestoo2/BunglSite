import React from "react";
import Rectangle78 from "./Assets/Rectangle-76.png";
import Rectangle60 from "./Assets/Rectangle-82.png";
import Rectangle66 from "./Assets/Rectangle-88.png";
import Rectangle63 from "./Assets/Rectangle-94.png";
import Line48 from "./Assets/Line36.svg";

export const OverlapGroup = () => {
  return (
    <div className="relative w-[456px] h-[594px] bg-[#fcfffd] rounded-[0px_50px_50px_0px] shadow-[0px_4px_10px_#00a218] p-6">
      <h2 className="text-primary-green text-[32px] font-normal mb-4">
        APPAREL UNDER 20K
      </h2>
      <img className="w-[392px] h-[5px] mb-6" alt="Decorative line" src={Line48} />
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <img
            className="w-[178px] h-[166px] object-cover"
            alt="Men's apparel"
            src={Rectangle78}
          />
          <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-primary-green text-2xl font-normal">
            MEN
          </span>
        </div>
        <div className="relative">
          <img
            className="w-[178px] h-[166px] object-cover"
            alt="Women's apparel"
            src={Rectangle60}
          />
          <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-primary-green text-2xl font-normal">
            WOMEN
          </span>
        </div>
        <div className="relative">
          <img
            className="w-[178px] h-[166px] object-cover"
            alt="Girls' apparel"
            src={Rectangle63}
          />
          <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-primary-green text-2xl font-normal">
            GIRLS
          </span>
        </div>
        <div className="relative">
          <img
            className="w-[178px] h-[166px] object-cover"
            alt="Boys' apparel"
            src={Rectangle66}
          />
          <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-primary-green text-2xl font-normal">
            BOYS
          </span>
        </div>
      </div>
    </div>
  );
};