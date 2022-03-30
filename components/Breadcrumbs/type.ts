import React, { ReactNode } from "react";
import { ParentsBaseT } from "../../types";

export interface BreadcrumbsPropsI extends ParentsBaseT {
  /** Custom separator node. */
  separator?: ReactNode | string;
  /** Specifies the maximum number of breadcrumbs to display */
  maxItems?: number;
  /** If max items is exceeded, the number of items to show after the ellipsis. */
  itemsAfterCollapse?: number;
  /** If max items is exceeded, the number of items to show before the ellipsis. */
  itemsBeforeCollapse?: number;
  /** The content of the button component. */
  collapseButtonChildren?: ReactNode | string;
}
