import { ElementType, FC, ReactNode } from "react";

import { clsx } from "clsx";
import { m } from "framer-motion";

import { FadeInOutVariants } from "./FadeInOut.animations";
import S from "./FadeInOut.module.scss";

export interface FadeInOutProps {
  duration?: number;
  children?: ReactNode;
  renderAs?: ElementType;
  className?: string;
}

const FadeInOut: FC<FadeInOutProps> = ({
  children,
  duration = 0.3,
  renderAs = m["div"],
  className,
  ...rest
}) => {
  const FadeInOutWrapper = renderAs;
  return (
    <FadeInOutWrapper
      className={clsx(S.FadeInOutWrapper, className)}
      {...FadeInOutVariants}
      transition={{ duration: duration, ease: "easeInOut" }}
      {...rest}
    >
      {children && children}
    </FadeInOutWrapper>
  );
};
export default FadeInOut;
