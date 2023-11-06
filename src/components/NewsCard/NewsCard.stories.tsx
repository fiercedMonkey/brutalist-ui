import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { NewsCardHead } from "./NewsCardHead/NewsCardHead";
import { NewsCardBody } from "./NewsCardBody/NewsCardBody";

const meta: Meta<typeof NewsCardBody & typeof NewsCardHead> = {
  title: "Components/NewsCardComponent",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewsCardBody & typeof NewsCardHead>;

export const NewsCardBodyMagenta: Story = {
  render: () => (
    <>
      <NewsCardHead headerTitle='News' headerColor='#e248c0' />
      <NewsCardBody
        timestamp='05/30/23'
        contentTitle='Lorem ipsum dolor sit amet'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Ut vel orci'
      />
    </>
  ),
};

export const NewsCardBodyAlternative: Story = {
  render: () => (
    <>
      <NewsCardHead headerTitle='News' headerColor='#e2b748' />
      <NewsCardBody
        timestamp='05/30/23'
        contentTitle='Lorem ipsum dolor sit amet'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Ut vel orci'
      />
    </>
  ),
};
