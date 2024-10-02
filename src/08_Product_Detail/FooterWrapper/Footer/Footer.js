import React from "react";
import { CliconEcommerce } from "./ClinconeCommerce/ClinconeCommerce";
import { PopularTag } from "./PopularTag/PopularTag";
import { QuickLinks } from "./QuickLinks/QuickLinks.js";
import { TopCategory } from "./TopCategory/TopCategory";
import { QuickLinks1 } from "./QuickLinks1/QuickLinks1";

export const Footer = () => {
  return (
    <div className="inline-flex items-start gap-[24px] px-[300px] py-[72px] relative bg-black">
      <CliconEcommerce />
      <TopCategory />
      <QuickLinks />
      <QuickLinks1 />
      <PopularTag />
    </div>
  );
};