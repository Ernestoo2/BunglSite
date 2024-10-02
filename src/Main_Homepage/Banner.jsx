import React from "react";
import { Badge, Button } from "@mui/material";
import Image6 from "./Assets/image 6.png";

export const Banner = ({ className }) => {
  return (
    <div className={`relative w-full max-w-[385px] bg-warning-300 rounded-[3px] overflow-hidden ${className}`}>
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-semibold text-danger-600 uppercase">
            COMPUTER &amp; ACCESSORIES
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            32% Discount
          </h2>
          <p className="text-base text-gray-700">
            For all electronics products
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <p className="text-sm font-medium text-gray-900">
            Offers ends in:
          </p>
          <Badge
            badgeContent="ENDS OF CHRISTMAS"
            color="default"
            sx={{
              "& .MuiBadge-badge": {
                color: "var(--gray-900)",
                backgroundColor: "var(--gray-00)",
                fontSize: "0.75rem",
                fontWeight: "bold",
              }
            }}
          />
        </div>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className="mt-6"
        >
          Shop Now
        </Button>
      </div>
      <img 
        className="w-full h-auto object-cover mt-4" 
        alt="Promotional Product" 
        src={Image6}
      />
    </div>
  );
};