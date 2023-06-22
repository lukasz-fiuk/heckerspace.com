import { ElementType, FC, ReactNode } from "react";

import { m } from "framer-motion";

import { FadeInOutVariants } from "./FadeInOut.animations";
import S from "./FadeInOut.module.scss";

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
  const FadeInOutWrapper = renderAs;
  return (
    <FadeInOutWrapper
      as={renderAs}
      className={S.FadeInOutWrapper}
      {...FadeInOutVariants}
      transition={{ duration: duration, ease: "easeInOut" }}
      {...rest}
    >
      {children && children}
    </FadeInOutWrapper>
  );
};
export default FadeInOut;
