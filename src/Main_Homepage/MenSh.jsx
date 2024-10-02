import PropTypes from "prop-types";
import React from "react";
import Rectangle78 from "./Assets/Rectangle-76.png";

export const MenSh = ({ property1, className }) => {
    return (
        <div
            className={`w-full h-0 pt-[93.26%] bg-cover bg-center ${className}`}
            style={{ backgroundImage: `url(${Rectangle78})` }}
        />
    );
};

MenSh.propTypes = {
    property1: PropTypes.oneOf(["default"]),
};