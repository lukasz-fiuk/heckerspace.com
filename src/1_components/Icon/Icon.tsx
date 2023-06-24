import { CSSProperties, FC } from "react";

import clsx from "clsx";

import S from "./Icon.module.scss";
import { renderIcon } from "./renderIcon";

export type IconVariant =
  | "twitter"
  | "github"
  | "arrowUp"
  | "arrowDown"
  | "arrowLeft"
  | "arrowRight"
  | "star"
  | "close"
  | "logoType"
  | "logoMark";

export interface IconProps {
  variant: IconVariant;
  className?: string;
  style?: CSSProperties;
}

const Icon: FC<IconProps> = ({ variant, className, ...rest }) => {
  return (
    <div {...rest} className={clsx(S.IconWrapper, className)}>
      {renderIcon(variant)}
    </div>
  );
};
export default Icon;
