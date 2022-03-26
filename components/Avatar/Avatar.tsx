import React from "react";
import classNames from "classnames";
import { BsFillPersonFill } from "react-icons/bs";
import styles from "./Avatar.module.scss";
import { AvatarPropsI } from "./type";
import { useLoaded } from "../../hooks/useLoaded";

/**
 * Avatar
 * Avatars are found throughout material design with uses in everything from tables to dialog menus.
 *
 * @param children Used to render icon or text elements inside the Avatar if src is not set.
 * @param alt Used in combination with src to provide an alt attribute for the rendered img element.
 * @param src The src attribute for the img element.
 * @param variant The shape of the avatar.
 * @function onClick Callback fired when the Avatar is clicked.
 */
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
