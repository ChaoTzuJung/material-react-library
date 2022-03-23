import React, { CSSProperties } from "react";

export type StyleBaseT = {
  /** @ignore */
  className?: string;
  /** @ignore */
  style?: CSSProperties;
};

/** The content of the component. */
export type ParentsBaseT = StyleBaseT & {
  /** The content of the component. */
  children?: React.ReactNode;
};

export type ColorBaseT = {
  /** The color of the component. */
  color?: "default" | "primary" | "secondary" | "success" | "warning" | string;
};
