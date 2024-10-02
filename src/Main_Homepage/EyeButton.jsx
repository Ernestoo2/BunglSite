import PropTypes from "prop-types";
import React from "react";

import { Eye } from "./Eye";

export const EyeButton = ({ status, reverse, circle, type, color, className, heartStatusFalse = { Eye } }) => {
    return (
        <div className={`inline-flex items-start gap-2.5 p-3 relative bg-gray-300 rounded-sm ${className}`}>
            <Eye className="!h-6 !relative !left-[unset] !w-6 !top-[unset]" status={false} statusFalse={heartStatusFalse} />
        </div>
    );
};

EyeButton.propTypes = {
    status: PropTypes.bool,
    reverse: PropTypes.bool,
    circle: PropTypes.bool,
    type: PropTypes.oneOf(["tertiary"]),
    color: PropTypes.oneOf(["primary"]),
    StatusFalse: PropTypes.string,
};