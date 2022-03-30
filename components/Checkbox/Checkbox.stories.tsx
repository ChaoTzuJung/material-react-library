import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

const TemplateWithLabel: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}>This is label</Checkbox>
);

export const Default = Template.bind({});
Default.args = {
  name: "default",
  value: "default",
  checked: true,
};

export const Primary = Template.bind({});
Primary.args = {
  name: "primary",
  value: "primary",
  color: "primary",
  checked: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: "secondary",
  value: "secondary",
  color: "secondary",
  checked: true,
};

export const Success = Template.bind({});
Success.args = {
  name: "success",
  value: "success",
  color: "success",
  checked: true,
};

export const Warning = Template.bind({});
Warning.args = {
  name: "warning",
  value: "warning",
  color: "warning",
  checked: true,
};

export const Disable = Template.bind({});
Disable.args = {
  name: "warning",
  value: "warning",
  disabled: true,
  checked: true,
};

export const WithLabel = TemplateWithLabel.bind({});
