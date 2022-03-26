import { ParentsBaseT } from "../../types";

export interface AvatarPropsI extends ParentsBaseT {
  /** Used in combination with src to provide an alt attribute for the rendered img element. */
  alt?: string;
  /** The src attribute for the img element. */
  src?: string;
  /** The shape of the avatar. */
  variant?: "circle" | "rounded" | "square";
  /** Callback fired when the Avatar is clicked. */
  onClick?: (...args: any[]) => void;
}
