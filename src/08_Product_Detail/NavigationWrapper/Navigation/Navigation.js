import React from "react";
import TopNav from "./TopNav/TopNav";
import MiddleNav from "./MiddleNav/MiddleNav";
import BottomNav from "./BottomNav/BottomNav";
export const Navigation = () => {
  return (
    <div className="relative w-[1920px]  h-[220px]">
      <TopNav />
      <MiddleNav />
      <BottomNav />
    </div>
  );
};
