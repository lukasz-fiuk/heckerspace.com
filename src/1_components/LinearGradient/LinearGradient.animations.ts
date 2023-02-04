import { COMMONS } from "styled/commons";

export const LinearGradientVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: COMMONS.defaultTransitionDuration,
      ease: "easeInOut",
    },
  },
};
