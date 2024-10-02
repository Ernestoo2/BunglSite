import React from "react";
import { StyleGuideFalseWrapper } from "./StyleGuideFalseWrapper";
import statusfalse from "./Assets/Status=False.svg";
export const ProductInstanceWrapper = () => {
    return (
        <StyleGuideFalseWrapper
            badge={false}
            className="!mr-[-1.00px] !mt-[-1.00px]"
            heartStatusFalse={statusfalse}
            styleGuide
        />
    );
};