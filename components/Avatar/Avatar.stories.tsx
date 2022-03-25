import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BiRun } from "react-icons/bi";
import hange from "../../assets/hange.png";
import { Avatar } from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "circle",
};

export const WithImage = Template.bind({});
WithImage.args = {
  variant: "circle",
  alt: "Hange",
  // @ts-ignore
  src: hange,
};

export const WithClickable = Template.bind({});
WithClickable.args = {
  variant: "circle",
  onClick: () => alert("click!"),
};

export const WithCustomChildren = Template.bind({});
WithCustomChildren.args = {
  children: <BiRun />,
};
