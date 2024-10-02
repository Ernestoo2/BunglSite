import React from "react";
import { NavigationScreen } from "../08_Product_Detail/NavigationWrapper/NavigationWrapper";
import { Footer } from "../08_Product_Detail/FooterWrapper/Footer/Footer";
import { CardBreadcrumb } from "../08_Product_Detail/Breadcrumb/cardBreadcrumb";
import Card from "./Card/Card";
import CardTotal from "./Card/CardTotal";
import CouponeCode from "./Card/CouponeCode"
const ElementShoppingCard = () => {
    return (
        <div className="bg-white">
            <div className=" ">
                <NavigationScreen />
                <CardBreadcrumb />
                <div className="flex ">
                    <Card />
                    <CardTotal />
                </div>
                <CouponeCode />
                {/* <NavigationWrapper /> */}
                <Footer />
            </div>
        </div>
    )
}
export default ElementShoppingCard;