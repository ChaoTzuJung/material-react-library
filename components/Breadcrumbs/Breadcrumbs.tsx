import React, {
  useState,
  useEffect,
  Children,
  isValidElement,
  Fragment,
} from "react";
import classNames from "classnames";
import { BsThreeDots } from "react-icons/bs";
import styles from "./Breadcrumbs.module.scss";
import { BreadcrumbsPropsI } from "./type";

/**
 * Breadcrumbs
 * Breadcrumbs allow users to make selections from a range of values.
 * @param className Class that overrides or extends the styles applied to the component.
 * @param children The content of the component.
 * @param style Override or extend the styles applied to the component.
 * @param separator Custom separator node.
 * @param maxItems Specifies the maximum number of breadcrumbs to display.
 * @param itemsAfterCollapse If max items is exceeded, the number of items to show after the ellipsis.
 * @param itemsBeforeCollapse If max items is exceeded, the number of items to show before the ellipsis.
 * @param collapseButtonChildren The content of the button component.
 */

export const Breadcrumbs = ({
  className,
  children: childrenProp,
  style,
  separator = "/",
  maxItems = 8,
  itemsAfterCollapse = 1,
  itemsBeforeCollapse = 1,
  collapseButtonChildren = <BsThreeDots />,
  ...other
}: BreadcrumbsPropsI) => {
  const [isExpand, setIsExpand] = useState<boolean>(true);
  const breadcrumbLength = Children.count(childrenProp);
  const beforeCollapseItems = Children.toArray(childrenProp).slice(
    0,
    itemsBeforeCollapse
  );
  const afterCollapseItems = Children.toArray(childrenProp).slice(
    -`${itemsAfterCollapse}`
  );

  const expandChildren = Children.map(childrenProp, (child, index) => {
    if (!isValidElement(child)) {
      return null;
    }

    return (
      <>
        {index !== 0 && <li className={styles.separator}>{separator}</li>}
        <li className={styles.item}>{child}</li>
      </>
    );
  });

  const collapsedChildren = (
    <>
      {beforeCollapseItems.map((item) => {
        if (!isValidElement(item)) {
          return null;
        }
        return (
          <Fragment key={item.props.children}>
            <li className={styles.location}>{item}</li>
            <li className={styles.separator}>{separator}</li>
          </Fragment>
        );
      })}
      <li>
        <button className={styles.collapse} onClick={() => setIsExpand(true)}>
          {collapseButtonChildren}
        </button>
      </li>
      {afterCollapseItems.map((item) => {
        if (!isValidElement(item)) {
          return null;
        }
        return (
          <Fragment key={item.props.children}>
            <li className={styles.separator}>{separator}</li>
            <li className={styles.location}>{item}</li>
          </Fragment>
        );
      })}
    </>
  );

  useEffect(() => {
    if (!maxItems) {
      return;
    }

    console.log("breadcrumbLength:", breadcrumbLength);

    if (breadcrumbLength > maxItems) {
      setIsExpand(false);
    }

    if (itemsAfterCollapse + itemsBeforeCollapse >= breadcrumbLength) {
      setIsExpand(true);
    }
  }, [maxItems, itemsAfterCollapse, itemsBeforeCollapse]);

  return (
    <nav className={classNames(styles.chipsBreadcrumbs, className)} {...other}>
      <ol className={styles.path}>
        {isExpand ? expandChildren : collapsedChildren}
      </ol>
    </nav>
  );
};
