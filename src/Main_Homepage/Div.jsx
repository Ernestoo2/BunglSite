import React from "react";
import image6 from "./Assets/image 6.png";
import { Badge } from "./Badge";

export const Div = () => {
    return (
        <div className="relative bg-orange-700 w-full max-w-[250px] border border-solid border-[#e4e7e9] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                    className="object-cover w-full h-full"
                    alt="Bose Sport Earbuds"
                    src={image6}
                />
                <div className="absolute top-2 left-2">
                    <Badge badgeContent="Sold Out" invisible={false} showZero={false} />
                </div>
            </div>
            <div className="p-4">
                <p className="text-sm text-gray-900 font-normal mb-2 line-clamp-2">
                    Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">
                        $2,300
                    </span>
                </div>
            </div>
        </div>
    );
};