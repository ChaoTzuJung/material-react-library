import { ParentsBaseT } from "../../types";

export interface CardPropsI extends ParentsBaseT {
  /**
   * The variant to use.
   * @default 'elevated'
   */
  variant?: "elevated" | "square" | "round";
  /** Callback fired when the button is clicked. */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
