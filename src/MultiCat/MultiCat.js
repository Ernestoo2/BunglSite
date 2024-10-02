import React from "react";
import { Banner } from "./Banner/Banner";
import { InputField } from "./InputField/InputField";
import { BestSellers } from "./BestSellers/BestSellers";

export const MultiCat = () => {
  return (
    <div className="inline-flex items-start gap-[20px] p-[20px] relative bg-gray-00 border border-solid border-[#e4e7e9] w-full min-w-[868px] min-h-[436px] shadow-dropdown-shadow">
      <InputField />
      <BestSellers />
      <Banner />
    </div>
  );
};