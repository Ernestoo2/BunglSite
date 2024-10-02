import React from "react";
import { ProductDetail } from "./ProductDetail/ProductDetail";
import { ProductPreview } from "./ProductPreview/ProductPreview";

export const ProductDetailScreen = () => {
  return (
    <div className="inline-flex items-start gap-[56px] pt-[32px] pb-[72px] px-0 relative">
      <ProductPreview />
      <ProductDetail />
    </div>
  );
};