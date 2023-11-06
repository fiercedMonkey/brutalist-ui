import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary",
    type: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    type: "secondary",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger",
    type: "danger",
  },
};

export const Success: Story = {
  args: {
    label: "Success",
    type: "success",
  },
};

export const Info: Story = {
  args: {
    label: "Info",
    type: "info",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    type: "primary",
    disabled: true,
  },
};


export const Fullwidth: Story = {
  args: {
    label: "Fullwidth",
    type: "primary",
    fullwidth: true,
  },
};
