import React, { useState, Children } from "react";
import classNames from "classnames";
import styles from "./Accordion.module.scss";
import { AccordionPropsI } from "./type";

/**
 * AccordionDetail
 * AccordionDetail is a part of Accordion component
 * @param defaultExpanded If true, expands the accordion by default.
 * @param expanded Use the expanded prop in AccordionDetail to determine its status
 * @param disabled If true, the component is disabled.
 * @function onChange Callback fired when the expand/collapse state is changed.
 */

export const Accordion = ({
  children: childrenProp,
  className,
  style,
  defaultExpanded = false,
  expanded = false,
  disabled,
  onChange,
}: AccordionPropsI) => {
  const [defaultIsExpanded, setDefaultIsExpanded] =
    useState<boolean>(defaultExpanded);

  const children = Children.map(childrenProp, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    return React.cloneElement(child, {
      expanded,
      defaultIsExpanded,
      setDefaultIsExpanded,
      onChange,
    });
  });

  return (
    <div
      className={classNames(styles.chipsAccordion, {
        [styles.disabled]: disabled,
        className,
      })}
      style={style}
    >
      {children}
    </div>
  );
};
