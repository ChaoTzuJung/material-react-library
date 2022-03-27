import React, { useRef, MutableRefObject } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import styles from "./Accordion.module.scss";
import fadeTransition from "./AccordionSummary.module.scss";
import { AccordionSummaryPropsI } from "./type";

/**
 * AccordionSummary
 * AccordionSummary is a part of Accordion component
 * @param expanded Use the expanded prop in AccordionDetail to determine its status
 * @param defaultIsExpanded If true, expands the accordion by default.
 * @param expandIcon The icon to display as the expand indicator
 * @function setDefaultIsExpanded Callback fired when the AccordionSummary is clicked.
 * @function onChange Callback fired when the expand/collapse state is changed.
 */

export const AccordionSummary = ({
  children,
  className,
  style,
  expanded = false,
  defaultIsExpanded,
  expandIcon,
  setDefaultIsExpanded,
  onChange,
}: AccordionSummaryPropsI) => {
  const nodeRef: MutableRefObject<HTMLDivElement> =
    useRef() as MutableRefObject<HTMLDivElement>;

  const expandedStatus = expanded || (defaultIsExpanded as boolean);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onChange?.(event, !expanded);
    !onChange && setDefaultIsExpanded?.(!defaultIsExpanded);
  };

  return (
    <CSSTransition
      in={expandedStatus}
      timeout={300}
      classNames={fadeTransition}
      nodeRef={nodeRef}
    >
      <div
        className={classNames(styles.chipsAccordionSummary, className)}
        style={style}
        onClick={handleClick}
        ref={nodeRef}
      >
        <div className={styles.content}>{children}</div>
        <div
          className={classNames(styles.icon, {
            [styles.direction]: expandedStatus,
          })}
        >
          {expandIcon}
        </div>
      </div>
    </CSSTransition>
  );
};
