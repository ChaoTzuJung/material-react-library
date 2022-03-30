import { ParentsBaseT, ColorBaseT } from "../../types";

export interface CheckboxPropsI extends ParentsBaseT, ColorBaseT {
  /** The name of the `input` element. */
  name?: string;
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value?: string;
  /** If `true`, the component is checked. */
  checked?: boolean;
  /** If `true`, the component is disabled. */
  disabled?: boolean;
  /**
   * Callback fired when the state is changed.
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
