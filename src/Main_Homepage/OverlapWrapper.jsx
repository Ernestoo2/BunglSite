import React from "react";
import Rectangle78 from "./Assets/Rectangle-78.png";
import Rectangle60 from "./Assets/Rectangle-60.png";
import Rectangle66 from "./Assets/Rectangle-66.png";
import Line48 from "./Assets/Line36.svg"

export const OverlapWrapper = () => {
  return (
    <div className="relative w-full max-w-[456px] p-6 bg-[#1fc757] rounded-r-[50px] shadow-lg shadow-[#00a218]/20">
      <h2 className=" text-primary-green text-2xl md:text-3xl font-normal mb-4">
        UPGRADE YOUR HOME
      </h2>
      <img className="w-full h-1 mb-6" alt="Decorative line" src={Line48} />
      <div className="grid grid-cols-2 gap-4">
        {[Rectangle78, Rectangle60, Rectangle66, Rectangle66].map((src, index) => (
          <img
            key={index}
            className="w-full h-auto object-cover rounded"
            alt={`Home upgrade item ${index + 1}`}
            src={src}
          />
        ))}
      </div>
    </div>
  );
};