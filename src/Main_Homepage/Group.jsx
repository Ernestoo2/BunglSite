import React from "react";
import { Category } from "./Category";
import image10 from "./Assets/Image10.png";
import image2 from "./Assets/Image2.png";
import image19 from "./Assets/Image19.png";
import image8 from "./Assets/Image8.png";
import image15 from "./Assets/Image15.png";
import image20 from "./Assets/Image20.png"
export const Group = () => {
    return (
        <div className="w-full max-w-[1593px] mx-auto my-8 px-4">
            <h2 className="text-4xl text-primary-green font-normal leading-10 mb-8">
                BEST SELLERS IN ELECTRONICS
            </h2>
            <div className="bg-orange-700 w-[1591px]  flex  md:grid-cols-4 sm:grid-cols-2   gap-[18px]  justify-start  overflow-x-auto pb-4">
                <Category
                    className="flex-shrink-0"
                    property1="default"
                />
                <Category
                    className="flex-shrink-0"
                    image={image10}
                    imageClassName="object-contain"
                    property1="default"
                    text="SmartPhone"
                />
                <Category
                    className="flex-shrink-0"
                    image={image20}
                    property1="default"
                    text="Headphones"
                />
                <Category
                    className="flex-shrink-0"
                    image={image2}
                    imageClassName="object-contain"
                    property1="default"
                    text="Accessories"
                />
                <Category
                    className="flex-shrink-0"
                    image={image19}
                    imageClassName="object-contain"
                    property1="default"
                    text="Camera & Photo"
                />
                <Category
                    className="flex-shrink-0"
                    image={image8}
                    imageClassName="object-contain"
                    property1="default"
                    text="TV & Homes"
                />
                <Category
                    className="flex-shrink-0"
                    image={image15}
                    imageClassName="object-contain"
                    property1="default"
                    text="TV & Homes"
                />
            </div>
        </div>
    );
};