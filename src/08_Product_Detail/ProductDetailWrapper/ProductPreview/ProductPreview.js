import React from "react";
import MainImage from "../../assets/main-image.png";
// import { Four } from "./Four";
import image1 from "../../assets/01.png";
import image2 from "../../assets/05.png";
import image3 from "../../assets/03.png"
import image4 from "../../assets/02.png";
import image5 from "../../assets/06.png";
import image6 from "../../assets/04.svg";
import ArrowLeft from "../../assets/regular-arrowright-1.svg";
import ArrowRight from "../../assets/regular-arrowleft.svg";

export const ProductPreview = () => {
  return (
    <div className="inline-flex flex-col items-start gap-[24px] relative">
      <img className="relative w-[616px] h-[464px]" alt="Main image" src={MainImage} />
      <div className="relative w-[616px] h-[96px]">
      <div className="relative w-[664px] h-[96px] left-[-24px]">
          <div className="inline-flex items-start gap-[8px] absolute top-0 left-[24px]">
            <img className="relative w-[96px] h-[96px]" alt="Element" src={image1} />
            <img className="relative w-[96px] h-[96px] object-contain" alt="Element" src={image2} />
            <img className="relative w-[96px] h-[96px] object-contain" alt="Element" src={image3} />
            {/* <Four className="!relative !w-[96px] !h-[96px]" /> */}
            <img className="relative w-[96px] h-[96px] object-contain" alt="Element" src={image4} />
            <img className="relative w-[96px] h-[96px]" alt="Element" src={image5} />
            <img className="relative w-[96px] h-[96px]" alt="Element" src={image6} />
          </div>
          <div className="inline-flex items-start gap-[568px] absolute top-[24px] left-0">
            <div className="inline-flex items-start gap-[10px] p-[12px] relative flex-[0_0_auto] bg-[#00a218] rounded-[100px] border-2 border-solid border-white">
              <img src={ArrowLeft} className="!relative !w-[24px] !h-[24px] " />
            </div>
            <div className="inline-flex items-start gap-[10px] p-[12px] relative flex-[0_0_auto] bg-[#00a218] rounded-[100px] border-2 border-solid border-white">
              <img src={ArrowRight} className="!relative !w-[24px] !h-[24px]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};