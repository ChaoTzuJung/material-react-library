import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const ElevatedCard = Template.bind({});
ElevatedCard.args = {
  children: "Elevated",
  variant: "elevated",
};

export const SquareCard = Template.bind({});
SquareCard.args = {
  children: "Square",
  variant: "square",
};

export const roundCard = Template.bind({});
roundCard.args = {
  children: "Round",
  variant: "round",
};
