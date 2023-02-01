export const HoverLoopVariants = {
  up: {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  },
  down: {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
  },
  left: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
  right: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  },
};

export const TRANSITION = { duration: 0.4, ease: "easeInOut" };
