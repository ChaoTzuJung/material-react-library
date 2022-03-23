import React, {
  Fragment,
  MutableRefObject,
  useRef,
  useState,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Button.module.scss";
import { ButtonPropsI } from "./type";

/**
 * Button
 * Buttons allow users to take actions, and make choices, with a single tap.
 * @param children The content of the component.
 * @param className Class that overrides or extends the styles applied to the component.
 * @param style Override or extend the styles applied to the component.
 * @param color The color of the component. It supports those theme colors that make sense for this component.
 * @param disabled If `true`, the component is disabled..
 * @param name The name of the component.
 * @param variant The variant to use.
 * @param href The URL to link to when the button is clicked. If defined, an `a` element will be used as the root node
 * @param to Same as the prop "to" in react-router-dom <Link />.
 * @param target Specifies where to display the linked URL.
 * @param radius Button border radius in pixels.
 * @param shape Button shape.
 * @function onClick Callback fired when the button is clicked.
 */

export const Button = ({
  children,
  className,
  style,
  color = "default",
  disabled,
  name,
  variant = "outlined",
  href,
  to,
  target,
  radius = 4,
  shape = "rectangle",
  onClick,
  ...other
}: ButtonPropsI) => {
  console.log("styles:", styles);
  const [customizedStyle, setCustomizedStyle] = useState(style);
  const ref: MutableRefObject<HTMLButtonElement | null> = useRef(null);

  const composeClass = () => {
    return classNames(styles.chipsButton, {
      [styles.text]: variant === "text",
      [styles.outlined]: variant === "outlined",
      [styles.contained]: variant === "contained",
      [styles.primary]: color === "primary",
      [styles.secondary]: color === "secondary",
      [styles.success]: color === "success",
      [styles.warning]: color === "warning",
    });
  };

  const handleButtonShape = (squareButtonSide: number) => {
    switch (shape) {
      case "rectangle":
        setCustomizedStyle({
          ...style,
          borderRadius: `${radius}px`,
        });
        break;
      case "square":
        setCustomizedStyle({
          ...style,
          width: `${squareButtonSide}px`,
          height: `${squareButtonSide}px`,
          borderRadius: `${radius}px`,
        });
        break;
      case "round":
        setCustomizedStyle({
          ...style,
          width: `${squareButtonSide}px`,
          height: `${squareButtonSide}px`,
          borderRadius: `${squareButtonSide}px`,
        });
        break;
      default:
        break;
    }
  };

  const handleMouseOver = () => {
    if (disabled) return;
    if (!style) return;
    const { color: textColor, backgroundColor } = style;
    if (!textColor && !backgroundColor) return;

    switch (variant) {
      case "outlined":
      case "text":
        setCustomizedStyle({
          ...style,
          color: "#fff",
          backgroundColor: textColor,
        });
        break;
      case "contained":
        setCustomizedStyle({
          ...style,
          color: backgroundColor,
          backgroundColor: "#fff",
        });
        break;
      default:
        break;
    }
  };

  const renderButton = (onClick?: ButtonPropsI["onClick"]) => {
    return (
      <button
        className={composeClass()}
        style={customizedStyle}
        type="button"
        disabled={disabled}
        name={name}
        onClick={onClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={() => setCustomizedStyle(customizedStyle)}
        ref={ref}
        {...other}
      >
        <span className={classNames(styles.text, styles.centerFlex)}>
          {children}
        </span>
      </button>
    );
  };

  useEffect(() => {
    const _width = ref.current?.offsetWidth as number;
    const _height = ref.current?.offsetHeight as number;
    const longerSide = Math.max(_width, _height);

    handleButtonShape(longerSide);
  }, [shape]);

  return (
    <Fragment>
      {to ? (
        <Link to={to} target={disabled ? "_self" : target}>
          {renderButton()}
        </Link>
      ) : href ? (
        <a href={disabled ? undefined : href} target={target}>
          {renderButton()}
        </a>
      ) : (
        <Fragment>{renderButton(onClick)}</Fragment>
      )}
    </Fragment>
  );
};
