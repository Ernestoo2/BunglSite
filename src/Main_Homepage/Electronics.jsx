import React, { useState } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "./Product";
import { Div } from "./Div";
import { SmartPhone } from "./SmartPhone";
import { Laptop } from "./Laptop";

import { TV } from "./TV";
import { HeadPhone } from "./HeadPhone";
import { AllProducts } from "./AllProducts";

export const Electronics = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabLabels = [
    { label: "All Product", component: Product },
    { label: "Smart Phone", component: SmartPhone },
    { label: "Laptop", component: Laptop },
    { label: "Headphone", component: HeadPhone },
    { label: "TV", component: TV },
    { label: "Browse All Products", component: AllProducts }
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const SelectedComponent = tabLabels[selectedTab].component;

  return (
    <div className="flex flex-col w-full max-w-[1217px] mx-auto my-8 gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            aria-label="product categories"
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabLabels.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>

        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          <SelectedComponent key={index} />
        ))}
      </div>
    </div>
  );
};