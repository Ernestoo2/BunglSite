import React from "react";
import { Breadcrumb } from "./Breadcrumb/Breadcumb";
import { FooterScreen } from "./FooterWrapper/Footer";
import { ProductsScreen } from "./Products/Products";
import { ProductInformationScreen } from "./ProductInformation/ProductInformation";
import { NavigationScreen } from "./NavigationWrapper/NavigationWrapper";
import { ProductDetailScreen } from "./ProductDetailWrapper/ProductDetail";

const ElementProductDetail = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavigationScreen />
      <div className="max-w-screen-xl px-4 mx-auto sm:px-8 md:px-16">
        <Breadcrumb />
        <ProductDetailScreen />
        <ProductInformationScreen />
        <ProductsScreen />
      </div>
      <FooterScreen />
    </div>
  );
};

export default ElementProductDetail;