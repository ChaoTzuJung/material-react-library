import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { ParentsBaseT, ColorBaseT } from "../../types";

type OmittedReactButtonElement = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "color"
>;

export interface ButtonPropsI
  extends ParentsBaseT,
    ColorBaseT,
    OmittedReactButtonElement {
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant?: "text" | "outlined" | "contained";
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string;
  /** Same as the prop "to" in react-router-dom <Link />. */
  to?: string;
  /** @ignore */
  target?: "_self" | "_blank" | "_parent" | "_top";
  /** Button border radius in pixels. */
  radius?: number;
  /** Button shape. */
  shape?: "rectangle" | "square" | "round";
  /** Callback fired when the button is clicked. */
  onClick?: (...args: any[]) => void;
}
