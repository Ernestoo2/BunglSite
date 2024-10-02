import React from "react";
import { HouseIcon } from "./House";
import { RegularCaretright1 } from "./Caretright";

export const Breadcrumb = () => {
    return (
        <div className="bg-gray-200 py-4">
            <div className="flex items-center justify-center gap-2 px-4 sm:px-0">
                <HouseIcon className="w-4 h-4" />
                <span className="text-sm text-gray-600">Home</span>
                <RegularCaretright1 className="w-3 h-3" />
                <span className="text-sm text-gray-600">Shop</span>
                <RegularCaretright1 className="w-3 h-3" />
                <span className="text-sm text-gray-600">Shop Grid</span>
                <RegularCaretright1 className="w-3 h-3" />
                <span className="text-sm text-gray-600">Electronics Devices</span>
                <RegularCaretright1 className="w-3 h-3" />
                <span className="text-sm text-green-600">Macbook Pro</span>
            </div>
        </div>
    );
};