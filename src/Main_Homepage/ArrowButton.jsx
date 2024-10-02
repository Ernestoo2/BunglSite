import PropTypes from "prop-types";
import React from "react";
import { Heart } from "./Heart";

export const ArrowButton = ({ status, reverse, circle, type, color, className, heartStatusFalse = {Heart} }) => {
  return (
    <div className={`inline-flex items-start gap-2.5 p-3 relative bg-gray-300 rounded-sm ${className}`}>
      <Heart className="!h-6 !relative !left-[unset] !w-6 !top-[unset]" status={false} statusFalse={heartStatusFalse} />
    </div>
  );
};

ArrowButton.propTypes = {
  status: PropTypes.bool,
  reverse: PropTypes.bool,
  circle: PropTypes.bool,
  type: PropTypes.oneOf(["tertiary"]),
  color: PropTypes.oneOf(["primary"]),
  heartStatusFalse: PropTypes.string,
};