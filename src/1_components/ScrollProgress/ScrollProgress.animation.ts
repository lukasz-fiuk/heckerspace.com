import { Variants } from "framer-motion";

import { COMMONS } from "styled/commons";

export const ScrollProgressVariants: Variants = {
  initial: { scaleX: 0, opacity: 0 },
  animate: { opacity: 1 },
  exit: {
    scaleX: [null, 1],
    scaleY: 0,
    opacity: 0,
    transition: { duration: COMMONS.defaultTransitionDuration },
  },
};
