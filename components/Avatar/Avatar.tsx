import React from "react";
import classNames from "classnames";
import { BsFillPersonFill } from "react-icons/bs";
import styles from "./Avatar.module.scss";
import { AvatarPropsI } from "./type";
import { useLoaded } from "../../hooks/useLoaded";

export const Avatar = ({
  children: childrenProp,
  className,
  style,
  alt,
  src,
  variant = "circle",
  onClick,
}: AvatarPropsI) => {
  let children = null;
  let loaded = useLoaded(src as string);
  const hasImgNotFailing = src && loaded !== "error";

  if (hasImgNotFailing) {
    children = <img className={styles.image} src={src} alt={alt} />;
  } else if (childrenProp !== null) {
    children = childrenProp;
  } else if (src && alt) {
    children = alt[0];
  } else {
    children = <BsFillPersonFill />;
  }
  return (
    <span
      className={classNames(styles.chipsAvatar, className, {
        [styles.pointer]: onClick,
        [styles.circle]: variant === "circle",
        [styles.rounded]: variant === "rounded",
        [styles.square]: variant === "square",
      })}
      style={style}
      onClick={onClick}
    >
      {children}
    </span>
  );
};
