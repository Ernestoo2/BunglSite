import PropTypes from "prop-types";
import React from "react";
import statusfalse from "./Assets/Regular_Eye.svg";
export const Eye = ({ status, className, statusFalse = { statusfalse } }) => {
    return <img className={`absolute w-8 h-8 top-0 left-0 ${className}`} alt="Status false" src={statusfalse} />;
};

Eye.propTypes = {
    status: PropTypes.bool,
    statusFalse: PropTypes.string,
};