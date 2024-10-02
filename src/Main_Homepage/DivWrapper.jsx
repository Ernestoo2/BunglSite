import React from "react";
import Rectangle25 from "./Assets/Rectangle-60.png";
import Rectangle82 from "./Assets/Rectangle-82.png";
import Rectangle88 from "./Assets/Rectangle-88.png";
import Rectangle94 from "./Assets/Rectangle-94.png";
import Line38 from "./Assets/Line39.svg";

const ImageItem = ({ src, alt, label }) => (
  <div className="relative">
    <img
      className="w-[178px] h-[166px] object-cover"
      alt={alt}
      src={src}
    />
    <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-primary-green text-2xl font-normal">
      {label}
    </span>
  </div>
);

export const DivWrapper = () => {
  const images = [
    { src: Rectangle25, alt: "Men's fashion", label: "MEN" },
    { src: Rectangle82, alt: "Women's fashion", label: "WOMEN" },
    { src: Rectangle88, alt: "Girls' fashion", label: "GIRLS" },
    { src: Rectangle94, alt: "Boys' fashion", label: "BOYS" },
  ];

  return (
    <div className="relative w-[456px] h-[594px] bg-[#fcfffd] rounded-[0px_50px_50px_0px] shadow-[0px_4px_10px_#00a218] p-6">
      <h2 className="text-primary-green text-[32px] font-normal mb-4">
        FASHION TRENDS
      </h2>
      <img className="w-[392px] h-[5px] mb-6" alt="Decorative line" src={Line38} />
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <ImageItem key={index} {...image} />
        ))}
      </div>
    </div>
  );
};