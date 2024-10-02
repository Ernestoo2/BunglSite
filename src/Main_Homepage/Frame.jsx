import React from "react";
import { Heart } from "./Heart";


import BUNQWHITE1 from "./Assets/BUNQ-WHITE-1.png";
import typcnthmenu from "./Assets/typcn_th-menu.svg";
import magnifyingglass from "./Assets/Regular_MagnifyingGlass.svg";
import user from "./Assets/Regular_User.svg";
import Heart1 from "./Assets/Heart.svg";
import mappinline from "./Assets/Regular_MapPinLine.svg";
import arrowscounterclockwise from "./Assets/Duotone_ArrowsCounterClockwise.svg";
import headphones from "./Assets/Regular_Headphones.svg";
import Info from "./Assets/Regular_Info.svg";
import phonecall from "./Assets/Regular_PhoneCall.svg";
import { ShoppingCartSimple } from "./ShoppingCardSimple";

export const Frame = () => {
    return (
        <div>
            {/* Header */}
            <header header className="w-full bg-white" >
                <div className="flex flex-wrap items-center justify-between p-4">
                    <img className="w-10 h-8" alt="Typcn th menu" src={typcnthmenu} />
                    <div className="w-[228px] h-[101px] order-1 sm:order-none">
                        <img className="w-[336px] h-16 object-cover" alt="Bunq WHITE" src={BUNQWHITE1} />
                    </div>
                    <div className="flex items-center bg-gray-00 rounded-sm shadow-[0px_8px_32px_#00000014] p-3 w-full sm:w-auto order-3 sm:order-none mt-4 sm:mt-0">
                        <input
                            type="text"
                            placeholder="Search for anything..."
                            className="w-full sm:w-[578px] text-primary-green bg-transparent outline-none"
                        />
                        <img className="w-5 h-5 ml-2" alt="Regular" src={magnifyingglass} />
                    </div>
                    <div className="flex items-center gap-6 order-2 sm:order-none">
                        <ShoppingCartSimple className="relative" property1="no" />
                        <Heart className="relative" status={false} statusFalse={Heart1} />
                        <img className="w-8 h-8" alt="Regular user" src={user} />
                    </div>
                </div>
            </header >

            {/* Sub-header */}
            < div className="w-full flex flex-wrap items-center justify-between px-4 sm:px-[300px] py-4 bg-gray-00 shadow-[inset_0px_-1px_0px_#e4e7e9]" >
                <div className="w-full sm:w-auto flex flex-wrap justify-between sm:justify-start items-center gap-4 mb-4 sm:mb-0">
                    {['Track Order', 'Compare', 'Customer Support', 'Need Help'].map((text, index) => (
                        <div key={index} className="flex items-center gap-1.5">
                            <img className="w-6 h-6" alt={text} src={[mappinline, arrowscounterclockwise, headphones, Info][index]} />
                            <div className="text-black whitespace-nowrap">{text}</div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
                    <img className="w-7 h-7" alt="Regular phonecall" src={phonecall} />
                    <div className="text-[#191c1e] whitespace-nowrap">+1-202-555-0104</div>
                </div>
            </div>
            </div>
            );
};