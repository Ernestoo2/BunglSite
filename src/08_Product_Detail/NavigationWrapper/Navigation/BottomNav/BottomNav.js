import React from 'react'
import  ArrowsCounterClockwise  from "../../../assets/duotone-arrowscounterclockwise.svg";
import  Headphones from "../../../assets/regular-headphones.svg";
// import { IconComponentNode } from "./IconComponentNode";
import Info  from "../../../assets/regular-info.svg";
import  MapPinLine  from "../../../assets/regular-mappinline.svg";
//import { NamecandidateNameCaretDownScore101 } from "./NamecandidateNameCaretDownScore101";
import  PhoneCall  from "../../../assets/regular-phonecall.svg";

function BottomNav() {
  return (
    <div className="flex w-[1920px] items-center justify-between px-[300px] py-[50px] absolute top-[88px] left-0 bg-gray-00 shadow-[inset_0px_-1px_0px_#e4e7e9]">
          <div className="justify-center gap-[24px] inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-[154px] h-[48px]">
              <button className="all-[unset] box-border inline-flex items-center justify-center gap-[8px] px-[24px] py-[14px] relative bg-gray-50 rounded-[2px]">
                <div className="relative w-fit mt-[-1.00px] font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-gray-900 text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
                  All Category
                </div>
                {/* <NamecandidateNameCaretDownScore101 className="!relative !w-[16px] !h-[16px]" /> */}
              </button>
            </div>
            <div className="gap-[6px] inline-flex items-center relative flex-[0_0_auto]">
              <img src={MapPinLine} className="!relative !w-[24px] !h-[24px]" />
              <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                Track Order
              </div>
            </div>
            <div className="gap-[6px] inline-flex items-center relative flex-[0_0_auto]">
              <img src={ArrowsCounterClockwise} className="!relative !w-[24px] !h-[24px]" />
              <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                Compare
              </div>
            </div>
            <div className="gap-[6px] inline-flex items-center relative flex-[0_0_auto]">
              <img src={Headphones} className="!relative !w-[24px] !h-[24px]" />
              <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                Customer Support
              </div>
            </div>
            <div className="gap-[6px] inline-flex items-center relative flex-[0_0_auto]">
              <img src={Info} className="!relative !w-[24px] !h-[24px]" />
              <div className="relative w-fit font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                Need Help
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
            <img src={PhoneCall} className="!relative !w-[28px] !h-[28px]" />
            <div className="relative w-fit font-body-large-400 font-[number:var(--body-large-400-font-weight)] text-gray-900 text-[length:var(--body-large-400-font-size)] tracking-[var(--body-large-400-letter-spacing)] leading-[var(--body-large-400-line-height)] whitespace-nowrap [font-style:var(--body-large-400-font-style)]">
              +1-202-555-0104
            </div>
          </div>
        </div>
  )
}

export default BottomNav
