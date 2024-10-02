import PropTypes from "prop-types";
import React from "react";
import image18 from "./Assets/Image18.png"
export const Category = ({
    property1,
    className,
    imageClassName,
    image = image18,
    text = "Computer &amp; Laptop",
}) => {
    return (
        <div
            className={`inline-flex flex-col items-center justify-center gap-4 px-3 py-6 relative bg-gray-00 rounded border border-solid border-[#e4e7e9] ${className}`}
        >
            <img className={`relative w-[148px] h-[148px] object-cover ${imageClassName}`} alt="Image" src={image} />
            <div className="relative w-[181px] font-body-medium-500 font-[number:var(--body-medium-500-font-weight)] text-gray-900 text-[length:var(--body-medium-500-font-size)] text-center tracking-[var(--body-medium-500-letter-spacing)] leading-[var(--body-medium-500-line-height)] [font-style:var(--body-medium-500-font-style)]">
                {text}
            </div>
        </div>
    );
};

Category.propTypes = {
    property1: PropTypes.oneOf(["default"]),
    image: PropTypes.string,
    text: PropTypes.string,
};