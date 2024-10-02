import React from "react";
import { Navigation } from "./Navigation/Navigation";
import { WidgetProduct } from "./Widget/WidgetProduct";
import { Icons } from "./Navigation/MiddleNav/Icons";

export const NavigationScreen = () => {
  return (
    <div className="grid">

      <WidgetProduct />
      <Navigation />

    </div>
  );
};
