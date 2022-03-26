import React from "react";
import classNames from "classnames";
import { BsFillPersonFill } from "react-icons/bs";
import styles from "./Badge.module.scss";
import { BadgePropsI } from "./type";
import { useLoaded } from "../../hooks/useLoaded";

/**
 * Badge
 * Badge generates a small badge on its parent.
 *
 * @param children Used to render icon or text elements inside the Badge if src is not set.
 * @param alt Used in combination with src to provide an alt attribute for the rendered img element.
 * @param src The src attribute for the img element.
 * @param badgeContent The content rendered within the badge.
 * @param variant The shape of the badge.
 * @param anchorOrigin The anchor of the badge.
 * @param color The color of the component.
 */
export const Badge = ({
  children,
  className,
  style,
  alt,
  src,
  badgeContent: badgeContentProp,
  variant = "circle",
  anchorOrigin = { horizontal: "right", vertical: "top" },
  color,
}: BadgePropsI) => {
  let badgeContent = null;
  const loaded = useLoaded(src as string);

  const hasImgNotFailing = src && loaded !== "error";

  if (hasImgNotFailing) {
    badgeContent = <img alt={alt} src={src} className={styles.image} />;
  } else if (badgeContentProp != null) {
    badgeContent = badgeContentProp;
  } else if (src && alt) {
    badgeContent = alt[0];
  } else {
    badgeContent = <BsFillPersonFill />;
  }

  console.log(`${anchorOrigin.vertical}${anchorOrigin.horizontal}`);

  return (
    <div style={style} className={classNames(styles.chipsBadge, className)}>
      {children}
      <span
        className={classNames(styles.content, {
          [styles.circle]: variant === "circle",
          [styles.rounded]: variant === "rounded",
          [styles.square]: variant === "square",
          [styles.topright]:
            `${anchorOrigin.vertical}${anchorOrigin.horizontal}` === "topright",
          [styles.topleft]:
            `${anchorOrigin.vertical}${anchorOrigin.horizontal}` === "topleft",
          [styles.bottomright]:
            `${anchorOrigin.vertical}${anchorOrigin.horizontal}` ===
            "bottomright",
          [styles.bottomleft]:
            `${anchorOrigin.vertical}${anchorOrigin.horizontal}` ===
            "bottomleft",
        })}
        style={{ backgroundColor: `${color}` }}
      >
        {badgeContent}
      </span>
    </div>
  );
};
