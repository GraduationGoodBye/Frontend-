import { createElement } from "react";

import type { TagName } from "../types";

interface Props {
  children?: React.ReactNode;
  tagName?: TagName;
  gap?: number;
  className?: string;
}

const FLEX_DEFAULT_STYLE = "flex w-full items-center justify-center";

const WrapperComponent = (factor: string) => {
  return ({ children, tagName = "div", gap = 0, className = "" }: Props) => {
    return createElement(
      tagName,
      { className: `${FLEX_DEFAULT_STYLE} gap-${gap} ${factor} ${className}` },
      children,
    );
  };
};

const RowCenter = WrapperComponent("flex-row");
const ColCenter = WrapperComponent("flex-col");

/**
 *  
  필요한 tailwindcss 클래스를 추가하면 됩니다.
  ex)
  const RowStartCenter = WrapperComponent("flex-row justify-start");
  const RowEndCenter = WrapperComponent("flex-row justify-end");
 */

export const Flex = { RowCenter, ColCenter };
