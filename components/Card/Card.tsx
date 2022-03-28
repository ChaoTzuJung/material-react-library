import classNames from "classnames";
import { CardPropsI } from "./type";
import styles from "./Card.module.scss";

/**
 * Card
 * Just a card.
 * @param variant The variant to use.
 * @function onClick Callback fired when the button is clicked.
 */
export const Card = ({
  style,
  children,
  className,
  variant = "elevated",
  onClick,
}: CardPropsI) => {
  return (
    <div
      className={classNames(styles.chipsCard, className, {
        [styles.elevated]: variant === "elevated",
        [styles.square]: variant === "square",
        [styles.round]: variant === "round",
      })}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
