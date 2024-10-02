import PropTypes from "prop-types";
import React from "react";
import arrowright from "./Assets/Regular_ArrowRight.svg";
import shoppingcartsimple from "./Assets/ShoppingCartSimple.svg";

export const LargeSizeTrueWrapper = ({
  largeSize,
  status,
  type,
  color,
  icons,
  className,
  labelClassName,
  children,
}) => {
  const baseClasses = "inline-flex items-center justify-center";
  const sizeClasses = largeSize
    ? "gap-3 px-8 py-3 rounded-[3px] text-lg"
    : "gap-2 px-6 py-2 rounded-sm text-base";
  const colorClasses =
    color === "primary"
      ? "bg-primary-green text-gray-00"
      : "bg-warning-400 text-black";
  const hoverClasses =
    color === "primary"
      ? "hover:bg-primary-green-dark"
      : "hover:bg-warning-500";

  const iconSize = largeSize ? "w-6 h-6" : "w-5 h-5";

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${colorClasses} ${hoverClasses} transition-colors duration-300 ${className}`}
    >
      {icons === "before" && (
        <img
          className={`${iconSize} ${labelClassName}`}
          alt="Shopping cart"
          src={shoppingcartsimple}
        />
      )}
      <span
        className={`font-semibold whitespace-nowrap ${labelClassName}`}
      >
        {children || (color === "primary" ? "SHOP NOW" : "SELL NOW")}
      </span>
      {icons === "after" && (
        <img
          className={iconSize}
          alt="Arrow right"
          src={arrowright}
        />
      )}
    </button>
  );
};

LargeSizeTrueWrapper.propTypes = {
  largeSize: PropTypes.bool,
  status: PropTypes.oneOf(["normal"]),
  type: PropTypes.oneOf(["primary"]),
  color: PropTypes.oneOf(["primary", "warning"]),
  icons: PropTypes.oneOf(["before", "after"]),
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  children: PropTypes.node,
};

LargeSizeTrueWrapper.defaultProps = {
  largeSize: false,
  status: "normal",
  type: "primary",
  color: "primary",
  icons: null,
};