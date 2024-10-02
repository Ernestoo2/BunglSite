import React from "react";
import PropTypes from 'prop-types';
import { LargeSizeTrueWrapper } from "./LargeSizeTrueWrapper";
import Image from "./Assets/Image.png";

export const Widget = ({
    override,
    title = "Xbox Consoles",
    subtitle = "THE BEST PLACE TO PLAY",
    description = "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
    price = "$299",
    backgroundColor = "bg-grey-300"
}) => {
    return (
        <>
            <div className="w-[312px] h-[528px] left-[39px] top-[272px] bg-black">

            </div>


            <div className={`w-[872px] h-[520px] ${backgroundColor} rounded-md overflow-hidden p-6 grid grid-cols-1 lg:grid-cols-2 gap-6`}>
                <div className="flex flex-col justify-between h-full">
                    <div className="flex w-[356px] h-[224px] top-[140px] left-[56px] flex-col gap-6">
                        <div className="flex flex-col gap-[24px]">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-0.5 bg-primary-green"></div>
                                    <p className="font-body-small-600 text-primary-green whitespace-nowrap">
                                        {subtitle}
                                    </p>
                                </div>
                                <h1 className="font-display-03 text-gray-900 leading-tight">
                                    {title}
                                </h1>
                            </div>
                            <p className="font-body-large-400 text-gray-700">
                                {description}
                            </p>
                        </div>
                        {override}
                    </div>
                    <div className="flex bg-white gap-2 mt-6">
                        <div className="w-2.5 h-2.5 bg-gray-900 rounded-[5px]" />
                        <div className="w-2.5 h-2.5 bg-gray-300 rounded-[5px]" />
                        <div className="w-2.5 h-2.5 bg-gray-300 rounded-[5px]" />
                    </div>
                </div>
                <div className="relative flex justify-center items-center">
                    <img className="w-[368px] h-[408px] object-contain" alt="Xbox Console" src={Image} />
                    <div className="absolute top-0 right-0 bg-gray-900 rounded-full border-4 border-solid border-white px-6 py-2">
                        <div className="font-semibold text-gray-00 text-2xl whitespace-nowrap">
                            {price}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Widget.propTypes = {
    override: PropTypes.node,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    backgroundColor: PropTypes.string
};