import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BsThreeDots } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";

import { Breadcrumbs } from "./Breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Router>
    <Breadcrumbs {...args}>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
        Home
      </Link>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/room">
        Room
      </Link>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/pay">
        Pay
      </Link>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/user">
        User
      </Link>
      <span>Sam</span>
    </Breadcrumbs>
  </Router>
);

const CollapsedTemplate: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Router>
    <Breadcrumbs collapseButtonChildren={<BsThreeDots />} {...args}>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
    </Breadcrumbs>
  </Router>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  separator: <MdNavigateNext />,
};

export const CollapsedBreadcrumbs = CollapsedTemplate.bind({});
CollapsedBreadcrumbs.args = {
  maxItems: 4,
  itemsAfterCollapse: 2,
  itemsBeforeCollapse: 2,
};
