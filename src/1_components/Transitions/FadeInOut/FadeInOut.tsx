import React, { ElementType, FC, ReactNode } from "react";

import { m } from "framer-motion";

import { FadeInOutVariants } from "./FadeInOut.animations";
import * as S from "./FadeInOut.styled";

export interface FadeInOutProps {
  duration?: number;
  children?: ReactNode;
  renderAs?: ElementType;
}

const FadeInOut: FC<FadeInOutProps> = ({
  children,
  duration = 0.3,
  renderAs = m["div"],
  ...rest
}) => {
  return (
    <S.FadeInOutWrapper
      as={renderAs}
      {...FadeInOutVariants}
      transition={{ duration: duration, ease: "easeInOut" }}
      {...rest}
    >
      {children && children}
    </S.FadeInOutWrapper>
  );
};
export default FadeInOut;
