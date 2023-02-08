import { FC } from "react";

import * as S from "./Icon.styled";
import { renderIcon } from "./renderIcon";

export type IconVariant =
  | "twitter"
  | "github"
  | "arrowUp"
  | "arrowDown"
  | "arrowLeft"
  | "arrowRight"
  | "star"
  | "logoType"
  | "logoMark";

export interface IconProps {
  variant: IconVariant;
}

const Icon: FC<IconProps> = ({ variant, ...rest }) => {
  return <S.IconWrapper {...rest}>{renderIcon(variant)}</S.IconWrapper>;
};
export default Icon;
