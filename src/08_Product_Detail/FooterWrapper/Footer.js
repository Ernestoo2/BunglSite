import React from "react";
import { Footer } from "./Footer/Footer";
import { Copyright } from "./Copyright/Copyright";
import "./Footer.css"
export const FooterScreen = () => {
  return (
    <div className="relative w-[1920px] h-[472px]">

      <Footer />
      <Copyright />

    </div>
  );
};