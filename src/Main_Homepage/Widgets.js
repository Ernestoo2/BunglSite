import React from "react";
import { Button } from "@mui/material";
import { Widget } from "./Widget";
import { WidgetWrapper } from "./WidgetWrapper";

export const Widgets = () => {
  return (
    <div className="inline-flex items-start gap-6 absolute top-[280px] ">
      <Widget
        override={
          <Button color="Primary" icons="After" largeSize size="large" status="Normal" type="Primary" variant="primary">
            Shop Now
          </Button>
        }
      />
      <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
        <WidgetWrapper
          override={
            <Button
              color="Primary"
              icons="After"
              largeSize
              size="large"
              status="Normal"
              type="Primary"
              variant="primary"
            >
              Shop Now
            </Button>
          }
        />

      </div>
    </div>
  );
};