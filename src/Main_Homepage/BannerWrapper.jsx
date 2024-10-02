import React from "react";
import { Badge, Button } from "@mui/material";
import Image6 from "./Assets/image 6.png";

export const BannerWrapper = () => {
  return (
    <div className="flex bg-red-900 flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-6 md:p-11 bg-gray-50 w-full max-w-[802px] rounded shadow-lg mx-auto my-8">
      <div className="flex flex-col items-start gap-5 max-w-[280px]">
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col items-start gap-2">
            <Badge
              badgeContent="INTRODUCING"
              color="primary"
              sx={{ "& .MuiBadge-badge": { fontSize: "0.75rem", fontWeight: "bold" } }}
            />
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              New Apple
              <br />
              Homepod Mini
            </h2>
          </div>
          <p className="text-base text-gray-700">
            Jam-packed with innovation, HomePod mini delivers unexpectedly.
          </p>
        </div>
        <Button
          color="primary"
          size="large"
          variant="contained"
          className="mt-2"
        >
          Shop now
        </Button>
      </div>
      <img
        className="w-60 h-60 object-contain"
        alt="Apple Homepod Mini"
        src={Image6}
      />
    </div>
  );
};