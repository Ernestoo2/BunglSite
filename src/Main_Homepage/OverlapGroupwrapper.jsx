import React from "react";
import Rectangle78 from "./Assets/Rectangle-78.png";
import Rectangle60 from "./Assets/Rectangle-60.png";
import Rectangle66 from "./Assets/Rectangle-66.png";
import Rectangle63 from "./Assets/Rectangle-63.png";
import Line48 from "./Assets/Line39.svg";

export const OverlapGroupWrapper = () => {
  return (
    <div className="relative w-full max-w-[456px] p-6 bg-[#fcfffd] rounded-r-[50px] shadow-lg shadow-primary-green/20">
      <h2 className="text-primary-green text-2xl md:text-3xl font-normal mb-4">
        UPGRADE YOUR HOME
      </h2>
      <img className="w-full h-1 mb-6" alt="Decorative line" src={Line48} />
      <div className="grid grid-cols-2 gap-4">
        {[
          { src: Rectangle78, alt: "Home upgrade item 1" },
          { src: Rectangle60, alt: "Home upgrade item 2" },
          { src: Rectangle63, alt: "Home upgrade item 3" },
          { src: Rectangle66, alt: "Home upgrade item 4" },
        ].map((img, index) => (
          <img
            key={index}
            className="w-full h-auto object-cover rounded"
            alt={img.alt}
            src={img.src}
          />
        ))}
      </div>
    </div>
  );
};