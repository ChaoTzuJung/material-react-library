import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "./Badge";
import { Avatar } from "../Avatar/Avatar";

export default {
  title: "Components/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>{args.children}</Badge>
);

export const Default = Template.bind({});
Default.args = {
  variant: "circle",
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  variant: "circle",
  badgeContent: 1,
  anchorOrigin: { horizontal: "right", vertical: "top" },
  children: <Avatar variant="circle" />,
  color: "red",
};
