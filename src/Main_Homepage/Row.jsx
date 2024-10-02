import React from "react";
import { Badge } from "@mui/material";
import { PropertyBadgeWrapper } from "./PropertyBadgeWrapper";
import Star from "./Assets/Regular_Star.svg";
import Image4 from "./Assets/Image4.png";
import Image7 from "./Assets/Image7.png";
import Image11 from "./Assets/Image11.png";
import Image13 from "./Assets/Image13.png";

const ProductCard = ({ image, badgeText, rating, reviewCount, title, price }) => (
  <div className="w-[234px] h-80 bg-gray-00 rounded-[3px] overflow-hidden border border-solid border-[#e4e7e9]">
    <div className="relative p-3">
      <img className="w-full h-44 object-cover" alt={title} src={image} />
      {badgeText && (
        <Badge
          className="!px-2.5 !py-[5px] !absolute !left-3 !top-3 !bg-gray-400"
          text={badgeText}
        />
      )}
    </div>
    <div className="p-4 space-y-2">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <img key={i} className="w-4 h-4" alt="Star rating" src={Star} />
        ))}
        <span className="text-xs text-gray-500">({reviewCount})</span>
      </div>
      <p className="text-sm text-gray-900 line-clamp-2">{title}</p>
      <div className="text-sm font-semibold text-gray-900">${price}</div>
    </div>
  </div>
);

export const Row = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <ProductCard
        image={Image4}
        badgeText="HOT"
        rating={5}
        reviewCount={738}
        title="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
        price={70}
      />
      <PropertyBadgeWrapper
        image={Image7}
        property1="default"
        text="536)"
        text1="Samsung Electronics Samsung Galexy S21 5G"
        text2="$2,300"
      />
      <PropertyBadgeWrapper
        img={Image13}
        property1="badge"
        regularStar={Star}
        text3="423)"
      />
      <PropertyBadgeWrapper
        image={Image11}
        property1="default"
        regularStar1={Star}
        text="816)"
        text1="Portable Wshing Machine, 11lbs capacity Model 18NMF..."
        text2="$80"
      />
    </div>
  );
};