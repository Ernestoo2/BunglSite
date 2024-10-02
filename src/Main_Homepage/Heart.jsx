import PropTypes from "prop-types";
import React from "react";
import statusfalse from "./Assets/Heart.svg";
export const Heart = ({ status, className, statusFalse = { statusfalse } }) => {
    return <img className={`absolute w-8 h-8 top-0 left-0 ${className}`} alt="Status false" src={statusfalse} />;
};

Heart.propTypes = {
    status: PropTypes.bool,
    statusFalse: PropTypes.string,
};