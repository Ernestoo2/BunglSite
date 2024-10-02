import React from "react";
import { BestSellers } from "./BestSellers";
import { NewArrival } from "./NewArrival";
import { FlashSaleToday } from "./FlashSaleToday";

import { TopRated } from "./TopRated";

export const ProductsScreen = () => {
  return (
    <div className="inline-flex items-center justify-center gap-[24px] px-[300px] py-[72px] relative">
      <FlashSaleToday />
      <BestSellers  name = "PRODUCT ACCESSORIES" />
      <NewArrival />
      <TopRated />
    </div>
  );
};