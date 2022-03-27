import React, { useRef, MutableRefObject } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import styles from "./Accordion.module.scss";
import slideTransition from "./AccordionDetail.module.scss";
import { AccordionDetailPropsI } from "./type";

/**
 * AccordionDetail
 * AccordionDetail is a part of Accordion component
 * @param expanded Use the expanded prop in AccordionDetail to determine its status
 * @param defaultIsExpanded If true, expands the accordion by default.
 */
export const AccordionDetail = ({
  children,
  className,
  style,
  expanded = false,
  defaultIsExpanded,
}: AccordionDetailPropsI) => {
  const nodeRef: MutableRefObject<HTMLDivElement> =
    useRef() as MutableRefObject<HTMLDivElement>;

  const expandedStatus = expanded || (defaultIsExpanded as boolean);
  return (
    <CSSTransition
      in={expandedStatus}
      timeout={300}
      classNames={slideTransition}
      nodeRef={nodeRef}
    >
      <div
        className={classNames(styles.chipsAccordionDetail, className, {
          [styles.expand]: expandedStatus,
        })}
        style={style}
        ref={nodeRef}
      >
        {children}
      </div>
    </CSSTransition>
  );
};
