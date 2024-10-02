import React from "react";
// import { Buttons } from "./Buttons";
import { Content } from "./Content/Content";
import Devider from "../../assets/devider-1.svg";
// import { ElementGuaranteeSafe } from "./ElementGuaranteeSafe";
 import { Form } from "./Form/Form";
import { Prices } from "./Prices/Prices";
import { ProductContent } from "./ProductContent/ProductContent";

export const ProductDetail = () => {
  return (
    <div className="inline-flex flex-col items-start gap-[24px] relative">
      <ProductContent />
      <Prices />
      <img src={Devider} className="!relative !w-[648px] !h-px !object-cover" />
      <Form />
      {/* <Buttons /> */}
      <Content />
      {/* <ElementGuaranteeSafe /> */}
    </div>
  );
};