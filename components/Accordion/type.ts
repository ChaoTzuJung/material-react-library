import { ParentsBaseT } from "../../types";

export interface AccordionPropsI extends ParentsBaseT {
  /** If true, expands the accordion by default. */
  defaultExpanded?: boolean;
  /** If true, expands the accordion, otherwise collapse it. */
  expanded?: boolean;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** Callback fired when the expand/collapse state is changed. */
  onChange?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    expanded: boolean
  ) => void;
}

export interface AccordionDetailPropsI extends ParentsBaseT {
  /** If true, expands the accordion by default. */
  defaultIsExpanded?: boolean;
  /** Use the expanded prop in AccordionDetail to determine its status */
  expanded?: boolean;
}

export interface AccordionSummaryPropsI extends ParentsBaseT {
  /** If true, expands the accordion by default. */
  defaultIsExpanded?: boolean;
  /** Use the expanded prop in AccordionSummary to determine its expandIcon status */
  expanded?: boolean;
  /** If true, the component is disabled. */
  disabled?: boolean;
  /** The icon to display as the expand indicator */
  expandIcon?: React.ReactNode;
  /** Callback fired when the AccordionSummary is clicked. */
  setDefaultIsExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
  /** Callback fired when the expand/collapse state is changed. */
  onChange?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    expanded: boolean
  ) => void;
}
