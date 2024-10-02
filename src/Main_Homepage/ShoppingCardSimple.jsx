import PropTypes from "prop-types";
import React from "react";
import Vector from "./Assets/Vector.svg";
import Image from "./Assets/VectorShop.svg";

export const ShoppingCartSimple = ({ property1, className }) => {
    return (
        <div className={`relative inline-flex items-center justify-center w-8 h-8 ${className}`}>
            <div className="relative w-full h-full">
                <img className="w-[29px] green h-5 mx-auto" alt="Cart" src={Image} />
                <img className="absolute w-1 h-1 bottom-0 left-2" alt="Wheel" src={Vector} />
                <img className="absolute w-1 h-1 bottom-0 right-2" alt="Wheel" src={Vector} />
                <div className="absolute -top-1 -right-1 bg-white rounded-full border-[1.5px] border-solid border-primary-green px-1 py-0.5 min-w-[18px] h-[18px] flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-primary-green leading-none">2</span>
                </div>
            </div>
        </div>
    );
};

ShoppingCartSimple.propTypes = {
    property1: PropTypes.oneOf(["no"]),
    className: PropTypes.string,
};