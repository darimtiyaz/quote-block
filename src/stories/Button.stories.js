import { BrandA1 } from "./Button";
import FirstBrand from "../components/firstBrand";
import SecondBrand from "../components/secondBrand";
import { Description, Subtitle } from "@storybook/blocks";
import { within, userEvent } from "@storybook/testing-library";
import React from "react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object,
  color
} from "@storybook/addon-knobs";

export default {
  title: "Example/Quote Block (49)",
  component: BrandA1,
  tags: ["autodocs"],
  decorators: [withKnobs],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};



export const BrandA = () => {
  
  return (
    <FirstBrand />
  );
};
export const BrandB = () => {
  
  return (
    <SecondBrand />
  );
};
