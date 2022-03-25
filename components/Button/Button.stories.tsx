import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning"],
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const CustomTemplate: ComponentStory<typeof Button> = (args) => {
  const [processing, setProcessing] = useState(false);
  const [buttonContent, setButtonContent] =
    useState<"Start" | "In Process...">("Start");

  const simulateProcessing = () => {
    setProcessing(true);
    setButtonContent("In Process...");

    const endProcess = setTimeout(() => {
      setProcessing(false);
      setButtonContent("Start");
    }, 2000);
    return () => clearTimeout(endProcess);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      style={{ width: "150px" }}
      disabled={processing}
      {...args}
      onClick={simulateProcessing}
    >
      {buttonContent}
    </Button>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "button",
  color: "default",
  disabled: false,
  variant: "contained",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "button",
  color: "primary",
  disabled: false,
  variant: "contained",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "button",
  color: "secondary",
  disabled: false,
  variant: "contained",
};

export const Success = Template.bind({});
Success.args = {
  children: "button",
  color: "success",
  disabled: false,
  variant: "contained",
};

export const Warning = Template.bind({});
Warning.args = {
  children: "button",
  color: "warning",
  disabled: false,
  variant: "contained",
};

export const InProgress = CustomTemplate.bind({});
InProgress.args = {};
