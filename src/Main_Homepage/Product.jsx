import React from "react";
import { ArrowButton } from "./ArrowButton";
import { Badge } from "./Badge";
import Star from "./Assets/Regular_StarG.svg";
import ShoppingCartSimple from "./Assets/ShoppingCartSimple.svg";
import Image3 from "./Assets/Image21.png";
import {EyeButton} from "./EyeButton";
export const Product = () => {
  return (
    <div className=" w-full max-w-[328px] bg-gray-00 border border-solid border-[#e4e7e9] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4">
      <div className="relative mb-4 aspect-[280/268] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          alt="Xbox Series S"
          src={Image3}
        />
        <div className="absolute top-2 left-2 flex flex-col items-start gap-2">
          <Badge
            className="bg-warning-400 text-gray-900 px-2.5 py-1 text-xs"
            text="32% OFF"
          />
          <Badge
            className="bg-gray-400 text-white px-2.5 py-1 text-xs"
            text="HOT"
          />
        </div>
      </div>

      <div className=" flex items-center gap-0.5 mb-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <img key={i} className="w-4 h-4 sm:w-5 sm:h-5" alt="Star rating" src={Star} />
        ))}
        <span className="text-gray-500 text-xs sm:text-sm ml-1">(52,677)</span>
      </div>

      <h3 className="text-gray-900 text-sm sm:text-base mb-2 line-clamp-2 h-12">
        Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version
      </h3>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-gray-300 line-through text-sm sm:text-base">$865.99</span>
        <span className="text-gray-900 font-semibold text-base sm:text-lg">$442.12</span>
      </div>

      <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3 h-12">
        Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.
      </p>

      <div className="flex items-center justify-between">
        <ArrowButton
          circle={false}
          color="primary"
          reverse={false}
          status={false}
          type="tertiary"
        />
        <button className="flex items-center gap-2 bg-primary-green text-white px-3 py-2 rounded-sm text-xs sm:text-sm hover:bg-primary-green-dark transition-colors duration-300">
          <img className="w-4 h-4 sm:w-5 sm:h-5" alt="Shopping cart" src={ShoppingCartSimple} />
          <span className="font-semibold">ADD TO CART</span>
        </button>
        <EyeButton
          circle={false}
          color="primary"
          reverse={false}
          status={false}
          type="tertiary"
        />
      </div>
    </div>
  );
};