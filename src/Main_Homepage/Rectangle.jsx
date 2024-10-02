import React from "react";
import { MenSh } from "./MenSh";

export const Rectangle = ({ className, MENShPropertyDefaultClassName }) => {
  return (
    <div className={`w-full max-w-[456px] h-[594px] bg-white shadow-md ${className}`}>
      <MenSh className={MENShPropertyDefaultClassName} property1="default" />
    </div>
  );
};