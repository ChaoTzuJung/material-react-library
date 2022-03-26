import { ParentsBaseT, ColorBaseT } from "../../types";

export interface BadgePropsI extends ParentsBaseT, ColorBaseT {
  /** Used in combination with src to provide an alt attribute for the rendered img element. */
  alt?: string;
  /** The src attribute for the img element. */
  src?: string;
  /** The shape of the avatar. */
  variant?: "circle" | "rounded" | "square";
  /** The content rendered within the badge. */
  badgeContent?: React.ReactNode;
  /** The anchor of the badge. */
  anchorOrigin?: { horizontal?: "left" | "right"; vertical?: "bottom" | "top" };
}
