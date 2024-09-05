import { createElement } from "react";

import type { TagName } from "../types";

interface Props {
  children?: React.ReactNode;
  tagName?: TagName;
  className?: string;
}

const FLEX_DEFAULT_STYLE = "flex w-full";

const WrapperComponent = (factor: string) => {
  return (factor2: string) => {
    return ({ children, tagName = "div", className = "" }: Props) => {
      return createElement(
        tagName,
        {
          className: `${FLEX_DEFAULT_STYLE} ${factor} ${factor2} ${className}`,
        },
        children,
      );
    };
  };
};

const CenterComponentGenerator = WrapperComponent("justify-center");
const Center = CenterComponentGenerator("items-center");

const ColComponentGenerator = WrapperComponent("flex-col justify-center");
const ColCenter = ColComponentGenerator("items-center");
const ColEnd = ColComponentGenerator("items-end");
const ColStart = ColComponentGenerator("items-start");

const RowComponentGenerator = WrapperComponent("flex-row items-center");
const RowCenter = RowComponentGenerator("justify-center");
const RowEnd = RowComponentGenerator("justify-end");
const RowStart = RowComponentGenerator("justify-start");

export const Flex = {
  RowCenter,
  ColCenter,
  RowEnd,
  ColEnd,
  Center,
  RowStart,
  ColStart,
};
