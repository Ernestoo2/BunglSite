import React from "react";
import line12 from "./Assets/Line12.svg";
import logo from "./Assets/Logo.svg";

export const Newsletter = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 py-16 bg-primary-green">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-00 mb-3">
                    Subscribe to our newsletter
                </h2>
                <p className="text-lg text-gray-00 opacity-70 max-w-xl mx-auto">
                    Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna.
                    Quisque vitae porta ipsum.
                </p>
            </div>
            <div className="w-full max-w-md">
                <input
                    type="search"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
            </div>
            <div className="flex flex-col items-center">
                <img className="w-96 h-px mb-4" alt="Line" src={line12} />
                <img className="h-8" alt="Logo" src={logo} />
            </div>
        </div>
    );
};