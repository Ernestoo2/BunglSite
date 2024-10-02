import React from "react";
import PropTypes from "prop-types";
import { Badge } from "@mui/material";
import Star from "./Assets/Regular_Star.svg";

export const PropertyBadgeWrapper = ({
  image,
  property1,
  text,
  text1,
  text2,
  img,
  regularStar,
  text3,
  regularStar1,
}) => {
  const isDefault = property1 === "default";
  const hasBadge = property1 === "badge";

  return (
    <div className="w-[234px] h-80 bg-gray-00 rounded-[3px] overflow-hidden border border-solid border-[#e4e7e9]">
      <div className="relative p-3">
        <img
          className="w-full h-44 object-cover"
          alt={text1}
          src={image || img}
        />
        {hasBadge && (
          <Badge
            className="!px-2.5 !py-[5px] !absolute !left-3 !top-3 !bg-warning-400 !text-gray-900"
            text="SALE"
          />
        )}
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <img key={i} className="w-4 h-4" alt="Star rating" src={regularStar || Star} />
          ))}
          <span className="text-xs text-gray-500">({text || text3})</span>
        </div>
        <p className="text-sm text-gray-900 line-clamp-2">{text1}</p>
        {isDefault && (
          <div className="text-sm font-semibold text-gray-900">{text2}</div>
        )}
      </div>
    </div>
  );
};

PropertyBadgeWrapper.propTypes = {
  image: PropTypes.string,
  property1: PropTypes.oneOf(["default", "badge"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  img: PropTypes.string,
  regularStar: PropTypes.string,
  text3: PropTypes.string,
  regularStar1: PropTypes.string,
};

PropertyBadgeWrapper.defaultProps = {
  property1: "default",
  regularStar: Star,
};