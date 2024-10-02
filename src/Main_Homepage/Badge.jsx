import PropTypes from "prop-types";
import React from "react";

const getBadgeStyle = (type) => {
  switch(type) {
    case 'hot':
      return 'bg-red-500';
    default:
      return 'bg-[#ffffff1f]';
  }
};

export const Badge = ({ type, className, HOTClassName, text = "SUMMER SALES" }) => {
  return (
    <div className={`inline-flex items-start gap-2.5 px-3 py-1.5 relative ${getBadgeStyle(type)} rounded-sm ${className}`}>
      <div
        className={`relative w-fit  font-body-small-600 font-[number:var(--body-small-600-font-weight)] text-gray-00 text-[length:var(--body-small-600-font-size)] tracking-[var(--body-small-600-letter-spacing)] leading-[var(--body-small-600-line-height)] whitespace-nowrap [font-style:var(--body-small-600-font-style)] ${HOTClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

Badge.propTypes = {
  type: PropTypes.oneOf(["hot", "new", "sale", "out-of-stock"]),
  text: PropTypes.string,
};