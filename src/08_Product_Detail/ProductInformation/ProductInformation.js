import React from "react";
import  CreditCard  from "../assets/regular-creditcard.svg";
import  Handshake  from "../assets/regular-handshake.svg";
import  Headphones from "../assets/regular-headphones.svg";
import  Line18  from "../assets/line-18.svg";
import  Line19 from "../assets/line-19.svg";
import  Medal from "../assets/regular-medal.svg";
import  Truck from "../assets/regular-truck.svg";

export const  ProductInformationScreen = () => {
  return (
    <div className="inline-flex flex-col items-center justify-center gap-[40px] pt-0 pb-[40px] px-0 relative bg-gray-00 rounded-[4px] overflow-hidden border border-solid border-[#e4e7e9]">
      <div className="relative w-[1320px] h-[56px]">
        <div className="relative h-[56px]">
          <div className="absolute w-[1320px] h-[56px] top-0 left-0">
            <img src={Line18} className="!absolute !w-[1320px] !h-px !top-[55px] !left-0 !object-cover" />
            <div className="px-[20px] py-[18px] top-0 left-[341px] bg-gray-00 shadow-[inset_0px_-3px_0px_#f98131,inset_0px_1px_0px_#e4e7e9] inline-flex items-start gap-[10px] absolute">
              <div className="w-fit font-label-03 font-[number:var(--label-03-font-weight)] text-[length:var(--label-03-font-size)] leading-[var(--label-03-line-height)] whitespace-nowrap relative mt-[-1.00px] text-gray-900 tracking-[var(--label-03-letter-spacing)] [font-style:var(--label-03-font-style)]">
                DESCRIPTION
              </div>
            </div>
          </div>
          <div className="px-[20px] py-[10px] top-[8px] left-[487px] rounded-[2px] inline-flex items-start gap-[10px] absolute">
            <div className="relative w-fit mt-[-1.00px] font-label-03 font-[number:var(--label-03-font-weight)] text-gray-600 text-[length:var(--label-03-font-size)] tracking-[var(--label-03-letter-spacing)] leading-[var(--label-03-line-height)] whitespace-nowrap [font-style:var(--label-03-font-style)]">
              ADDITIONAL INFORMATION
            </div>
          </div>
          <div className="px-[20px] py-[10px] top-[8px] left-[726px] rounded-[2px] inline-flex items-start gap-[10px] absolute">
            <div className="relative w-fit mt-[-1.00px] font-label-03 font-[number:var(--label-03-font-weight)] text-gray-600 text-[length:var(--label-03-font-size)] tracking-[var(--label-03-letter-spacing)] leading-[var(--label-03-line-height)] whitespace-nowrap [font-style:var(--label-03-font-style)]">
              SPECIFICATION
            </div>
          </div>
          <div className="px-[20px] py-[10px] top-[8px] left-[884px] rounded-[2px] inline-flex items-start gap-[10px] absolute">
            <div className="relative w-fit mt-[-1.00px] font-label-03 font-[number:var(--label-03-font-weight)] text-gray-600 text-[length:var(--label-03-font-size)] tracking-[var(--label-03-letter-spacing)] leading-[var(--label-03-line-height)] whitespace-nowrap [font-style:var(--label-03-font-style)]">
              REVIEW
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex items-start gap-[24px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
          <div className="w-[616px] font-body-medium-600 font-[number:var(--body-medium-600-font-weight)] text-[length:var(--body-medium-600-font-size)] leading-[var(--body-medium-600-line-height)] relative mt-[-1.00px] text-gray-900 tracking-[var(--body-medium-600-letter-spacing)] [font-style:var(--body-medium-600-font-style)]">
            Description
          </div>
          <p className="relative w-[576px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
            The most powerful MacBook Pro ever is here. With the blazing-fast M1
            Pro or M1 Max chip — the first Apple silicon designed for pros — you
            get groundbreaking performance and amazing battery life. Add to that
            a stunning Liquid Retina XDR display, the best camera and audio ever
            in a Mac notebook, and all the ports you need. The first notebook of
            its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional
            performance of the M1 architecture to a whole new level for pro
            users.
          </p>
          <p className="relative w-[576px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
            Even the most ambitious projects are easily handled with up to 10
            CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and
            dedicated encode and decode media engines that support H.264, HEVC,
            and ProRes codecs.
          </p>
        </div>
        <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
          <div className="relative w-[280px] mt-[-1.00px] font-body-medium-600 font-[number:var(--body-medium-600-font-weight)] text-gray-900 text-[length:var(--body-medium-600-font-size)] tracking-[var(--body-medium-600-letter-spacing)] leading-[var(--body-medium-600-line-height)] [font-style:var(--body-medium-600-font-style)]">
            Feature
          </div>
          <div className="inline-flex flex-col items-start gap-[12px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
              <img src={Medal}  className="!relative !w-[24px] !h-[24px]" />
              <div className="relative w-[248px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
                Free 1 Year Warranty
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
              <img src={Truck} className="!relative !w-[24px] !h-[24px]" />
              <p className="relative w-[248px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
                Free Shipping &amp; Fasted Delivery
              </p>
            </div>
            <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
              <img src={Handshake} className="!relative !w-[24px] !h-[24px]" />
              <div className="relative w-[248px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
                100% Money-back guarantee
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
              <img src={Headphones} className="!relative !w-[24px] !h-[24px]" />
              <div className="relative w-[248px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
                24/7 Customer support
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
              <img src={CreditCard}  className="!relative !w-[24px] !h-[24px]" />
              <div className="relative w-[248px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-900 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] [font-style:var(--body-small-400-font-style)]">
                Secure payment method
              </div>
            </div>
          </div>
        </div>
        <img src={Line19} className="!relative !w-px !h-[228px] !object-cover" />
        <div className="inline-flex flex-col items-start gap-[20px] relative flex-[0_0_auto]">
          <div className="relative w-[272px] mt-[-1.00px] font-body-medium-600 font-[number:var(--body-medium-600-font-weight)] text-gray-900 text-[length:var(--body-medium-600-font-size)] tracking-[var(--body-medium-600-letter-spacing)] leading-[var(--body-medium-600-line-height)] [font-style:var(--body-medium-600-font-style)]">
            Shipping Information
          </div>
          <div className="flex-col gap-[12px] inline-flex items-start relative flex-[0_0_auto]">
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-gray-900 text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
                Courier:
              </div>
              <p className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                {" "}
                2 - 4 days, free shipping
              </p>
            </div>
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-gray-900 text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
                Local Shipping:
              </div>
              <p className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                {" "}
                up to one week, $19.00
              </p>
            </div>
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-gray-900 text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
                UPS Ground Shipping:
              </div>
              <p className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                {" "}
                4 - 6 days, $29.00
              </p>
            </div>
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-small-500 font-[number:var(--body-small-500-font-weight)] text-gray-900 text-[length:var(--body-small-500-font-size)] tracking-[var(--body-small-500-letter-spacing)] leading-[var(--body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-500-font-style)]">
                Unishop Global Export:
              </div>
              <p className="relative w-fit mt-[-1.00px] font-body-small-400 font-[number:var(--body-small-400-font-weight)] text-gray-600 text-[length:var(--body-small-400-font-size)] tracking-[var(--body-small-400-letter-spacing)] leading-[var(--body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-400-font-style)]">
                {" "}
                3 - 4 days, $39.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
