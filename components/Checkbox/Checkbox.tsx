import classNames from "classnames";
import styles from "./Checkbox.module.scss";
import { CheckboxPropsI } from "./type";

/**
 * Checkbox
 * Checkboxes allow the user to select one or more items from a set.
 * @param name The name of the `input` element.
 * @param value The value of the component. The DOM API casts this to a string.
 * @param checked If `true`, the component is checked.
 * @param disabled If `true`, the component is disabled.
 * @function onChange Callback fired when the state is changed.
 */

export const Checkbox = ({
  style,
  children,
  className,
  name,
  value,
  checked,
  disabled,
  color = "default",
  onChange,
}: CheckboxPropsI) => {
  return (
    <div
      style={style}
      className={classNames(
        styles.chipsCheckbox,
        {
          [styles.disabled]: disabled,
        },
        className
      )}
    >
      <input
        className={classNames(styles.input, {
          [styles.default]: color === "default",
          [styles.primary]: color === "primary",
          [styles.secondary]: color === "secondary",
          [styles.success]: color === "success",
          [styles.warning]: color === "warning",
        })}
        type="checkbox"
        name={name}
        id={value}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e)}
      />
      <div className={styles.fake}></div>
      {children && (
        <label className={styles.label} htmlFor={value}>
          {children}
        </label>
      )}
    </div>
  );
};
