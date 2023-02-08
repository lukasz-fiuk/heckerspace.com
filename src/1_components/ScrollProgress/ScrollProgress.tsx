import { FC } from "react";

import { useScroll, useWillChange } from "framer-motion";

import * as S from "./ScrollProgess.styled";
import { ScrollProgressVariants } from "./ScrollProgress.animation";

export interface ScrollProgressProps {}

const ScrollProgress: FC<ScrollProgressProps> = ({ ...rest }) => {
  const { scrollYProgress } = useScroll();
  const willChange = useWillChange();

  return (
    <S.ScrollIndicator
      aria-hidden
      style={{ scaleX: scrollYProgress, willChange }}
      {...ScrollProgressVariants}
      {...rest}
    />
  );
};
export default ScrollProgress;
