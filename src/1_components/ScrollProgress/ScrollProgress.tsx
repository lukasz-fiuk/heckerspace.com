import React, { FC } from "react";

import { useScroll, useWillChange } from "framer-motion";

import * as S from "./ScrollProgess.styled";

export interface ScrollProgressProps {}

const ScrollProgress: FC<ScrollProgressProps> = ({ ...rest }) => {
  const { scrollYProgress } = useScroll();
  const willChange = useWillChange();

  return (
    <S.ScrollIndicator
      initial={{ scaleX: 0 }}
      exit={{
        scaleX: [null, 1],
        scaleY: 0,
        opacity: 0,
        transition: { duration: 0.4 },
      }}
      style={{ scaleX: scrollYProgress, willChange }}
      {...rest}
    />
  );
};
export default ScrollProgress;
