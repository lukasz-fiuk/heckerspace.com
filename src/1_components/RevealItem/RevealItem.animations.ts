import { COMMONS } from "styled/commons";

export const RevealItemVariants = {
  up: {
    initial: { y: "110%" },
    hidden: { y: 0 },
    exit: {
      y: "-110%",
      opacity: 0,
      transition: {
        duration: COMMONS.defaultTransitionDuration,
        ease: "easeInOut",
      },
    },
  },
  down: {
    initial: { y: "-110%" },
    hidden: { y: 0 },
    exit: {
      y: "110%",
      opacity: 0,
      transition: {
        duration: COMMONS.defaultTransitionDuration,
        ease: "easeInOut",
      },
    },
  },
  left: {
    initial: { x: "110%" },
    hidden: { x: 0 },
    exit: {
      x: "-110%",
      opacity: 0,
      transition: {
        duration: COMMONS.defaultTransitionDuration,
        ease: "easeInOut",
      },
    },
  },
  right: {
    initial: { x: "-110%" },
    hidden: { x: 0 },
    exit: {
      x: "110%",
      opacity: 0,
      transition: {
        duration: COMMONS.defaultTransitionDuration,
        ease: "easeInOut",
      },
    },
  },
};
