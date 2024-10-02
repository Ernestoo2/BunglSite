import React from 'react'
import CaretDown from "../../../assets/regular-caretdown-1.svg";
import Line1 from "../../../assets/line-1.svg";
import SocialIcon from "../../../assets/social-icon.svg";

function TopNav() {
    return (
        <div className="flex w-[1920px] items-center justify-around gap-[607px] px-[300px] py-[12px] relative bg-white">
            <div className="inline-flex items-center justify-center gap-[24px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-[12px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-white text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                        Follow us:
                    </div>
                    <img src={SocialIcon} className="!relative !flex-[0_0_auto]" />
                </div>
                <img src={Line1} className="!relative !w-px !h-[28px] !object-cover" />
                <div className="relative w-[44px] h-[20px]">
                    <div className="text-lime-500 inline-flex items-center justify-center gap-[6px] relative">
                        <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)]  text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                            Eng
                        </div>
                        <img src={CaretDown} className="!relative !w-[12px] !h-[12px]" />
                    </div>
                </div>
                <div className="relative w-[47px] h-[20px]">
                    <div className="left-[-2px] inline-flex items-center justify-center gap-[6px] relative">
                        <div className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-[#00a218] text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                            NGN
                        </div>
                        <img src={CaretDown} className="!relative !w-[12px] !h-[12px]" />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default TopNav
