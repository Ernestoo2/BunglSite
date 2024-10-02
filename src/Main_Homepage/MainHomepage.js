import React from "react";
import { FooterScreen } from "../08_Product_Detail/FooterWrapper/Footer";
import { Newsletter } from "./Newslatter";
import { BannerWrapper } from "./BannerWrapper";
import { Div } from "./Div";
import { DivWrapper } from "./DivWrapper";
import { Electronics } from "./Electronics";
import { Group } from "./Group";
import { OverlapGroup } from "./OverlapGroup";
import { OverlapGroupWrapper } from "./OverlapGroupwrapper";
import { OverlapWrapper } from "./OverlapWrapper";
import { Product } from "./Product";
import { Widgets } from "./Widgets";
import { SectionComponentNode1 } from "./SectionComponentNode1";
import { Frame } from "./Frame";
import { HeadingWrapper } from "./HeadingWrappper";
import { WidgetWrapper } from "./WidgetWrapper";

export const MainHomepage = () => {
  return (
    <div className="bg-white w-full">
      <div className="bg-white w-full max-w-[1728px] mx-auto">
        <section className="p-4">
          <Frame />
        </section>
        <section className="p-4">

        </section>

        {/* <section className="bg-yellow-600 p-4">
        <Overlap />
        </section> */}

        <section className=" grid mt-[600px] w-full h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <OverlapWrapper />
          <OverlapGroupWrapper />
          <DivWrapper />

          <OverlapGroup />
          <Widgets />
          <DivWrapper />
          <OverlapWrapper />
        </section>
        <section className="p-4">

        </section>
        <section className="p-4">
          <Group />
        </section>

        <section className="p-4">
          <HeadingWrapper />
          <Product />
          <Div />

        </section>



        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 p-4">
          {/* Add your Overlap1 and Overlap2 components here if needed */}
        </section>

        <section className="mt-8 p-4">
          <BannerWrapper />
        </section>

        <section className="mt-8 p-4">
          <Electronics />
        </section>

        <section className="mt-8 p-4">
          <BannerWrapper />
        </section>

        <section className="mt-8 p-4">
          <BannerWrapper />
        </section>

        <section className="mt-8">
          <SectionComponentNode1 />
        </section>

        <section className="mt-8 p-4">
          <Newsletter />
        </section>

        <footer className="mt-8">
          <FooterScreen />
        </footer>
      </div>
    </div >
  );
};