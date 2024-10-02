import React from "react";
import MagnifyingGlass from "../../../assets/regular-magnifyingglass.svg";
import Bounq from "../../../assets/bunq-white-1.png";
import { Icons } from "./Icons";
function MiddleNav() {
  return (
    <div className="inline-flex items-center gap-[211px] relative px-[152px] py-[1px]  top-0 left-0">
      <div className="relative w-[232px] h-[101px]">
        <img
          className="absolute w-[342px] h-[64px] top-[19px] left-[-27px] object-cover"
          alt="Bunq WHITE"
          src={Bounq}
        />
      </div>
      <div className="inline-flex items-start gap-[8px] px-[20px] py-[14px] relative flex-[0_0_auto] bg-gray-00 rounded-[2px] shadow-[0px_8px_32px_#00000014]">
        <input className="relative w-[578px] mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-[#00a218] text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]" />
        <img src={MagnifyingGlass} className="!relative !w-[20px] !h-[20px]" />
      </div>
      <Icons />
    </div>
  );
}

export default MiddleNav;
