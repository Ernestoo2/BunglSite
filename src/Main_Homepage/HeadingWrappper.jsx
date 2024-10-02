import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <React.Fragment key={interval}>
        <div className="text-white text-base font-medium">
          {timeLeft[interval].toString().padStart(2, "0")}
          {interval[0]}
        </div>
        {interval !== "seconds" && <div className="text-white text-base font-medium">:</div>}
      </React.Fragment>
    );
  });

  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-green rounded-sm">
      {timeComponents}
    </div>
  );
};

export const HeadingWrapper = () => {
  // Set the target date to 16 days, 21 hours, 57 minutes, and 23 seconds from now
  const targetDate = new Date(new Date().getTime() + (16 * 24 * 60 * 60 * 1000) + (21 * 60 * 60 * 1000) + (57 * 60 * 1000) + (23 * 1000));

  return (
    <div className="flex w-full max-w-[1392px] h-[38px] items-center justify-between mx-auto my-8">
      <div className="flex items-center gap-6">
        <h2 className="text-gray-900 text-2xl font-bold">Best Deals</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-black">Deals ends in</span>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
      <Button color="secondary" variant="contained">
        View All Products
      </Button>
    </div>
  );
};