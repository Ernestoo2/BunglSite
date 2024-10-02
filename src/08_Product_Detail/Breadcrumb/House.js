import React from "react";
import House from "../assets/regular-house.svg"

export const HouseIcon = () => {
  return (
    <div  className="w-[20px] h-[20px]">
     <img
     className=" w-[20px] h-[20px] top-0 left-0"
     src={House} alt="" />
    </div>
  );
};
