import React from "react";
import Rectangle25 from "./Assets/Rectangle-60.png";
import Rectangle82 from "./Assets/Rectangle-82.png";
import Rectangle88 from "./Assets/Rectangle-88.png";
import Rectangle94 from "./Assets/Rectangle-94.png";
export const SectionComponentNode = () => {
    return (
        <div className="absolute w-[456px] h-[594px] top-[3934px] left-[83px] bg-primary-green rounded-[0px_50px_50px_0px]">
            <div className="absolute top-[37px] left-4 [font-family:'Public_Sans-Regular',Helvetica] font-normal text-white text-4xl tracking-[0] leading-5 whitespace-nowrap">
                APPAREL UNDER 8K
            </div>
            <div className="absolute top-[303px] left-[89px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-5 whitespace-nowrap">
                MEN
            </div>
            <div className="absolute top-[302px] left-[284px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-5 whitespace-nowrap">
                WOMEN
            </div>
            <div className="absolute top-[527px] left-[69px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-5 whitespace-nowrap">
                GIRLS
            </div>
            <div className="absolute top-[526px] left-[296px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-5 whitespace-nowrap">
                BOYS
            </div>
            <img className="absolute w-[392px] h-[5px] top-[83px] left-[29px]" alt="Line" src="line-48.svg" />
            <img
                className="absolute w-[178px] h-[166px] top-[126px] left-[27px] object-cover"
                alt="Rectangle"
                src={Rectangle25}
            />
            <img
                className="absolute w-[178px] h-[166px] top-[126px] left-[243px] object-cover"
                alt="Rectangle"
                src={Rectangle82}
            />
            <img
                className="absolute w-[178px] h-[166px] top-[350px] left-[27px] object-cover"
                alt="Rectangle"
                src={Rectangle88}
            />
            <img
                className="absolute w-[178px] h-[166px] top-[350px] left-[243px] object-cover"
                alt="Rectangle"
                src={Rectangle94}
            />
        </div>
    );
};