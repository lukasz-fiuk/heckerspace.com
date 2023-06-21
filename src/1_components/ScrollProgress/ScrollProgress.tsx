import { FC } from "react";

import { m, useScroll, useWillChange } from "framer-motion";

import S from "./ScrollProgess.module.scss";
import { ScrollProgressVariants } from "./ScrollProgress.animation";

export interface ScrollProgressProps {}

const ScrollProgress: FC<ScrollProgressProps> = ({ ...rest }) => {
  const { scrollYProgress } = useScroll();
  const willChange = useWillChange();

  return (
    <m.div
      className={S.ScrollIndicator}
      aria-hidden
      style={{ scaleX: scrollYProgress, willChange }}
      {...ScrollProgressVariants}
      {...rest}
    />
  );
};
export default ScrollProgress;
