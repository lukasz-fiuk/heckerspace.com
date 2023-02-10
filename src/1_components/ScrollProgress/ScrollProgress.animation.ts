import { Variants } from "framer-motion";

import { COMMONS } from "styled/commons";

export const ScrollProgressVariants: Variants = {
  initial: { scaleY: 0, opacity: 0 },
  animate: { scaleY: 1, opacity: 1 },
  exit: {
    x: "100%",
    scaleY: 0,
    opacity: 0,
    transition: {
      duration: COMMONS.defaultTransitionDuration,
      ease: "easeInOut",
    },
  },
};
