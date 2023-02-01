export const HoverReplaceVariants = {
  firstItem: {
    up: {
      initial: { y: 0 },
      animate: ({ isHovering = false }) => ({ y: isHovering ? "-100%" : 0 }),
    },
    down: {
      initial: { y: 0 },
      animate: ({ isHovering = false }) => ({ y: isHovering ? "100%" : 0 }),
    },
    left: {
      initial: { x: 0 },
      animate: ({ isHovering = false }) => ({ x: isHovering ? "-100%" : 0 }),
    },
    right: {
      initial: { x: 0 },
      animate: ({ isHovering = false }) => ({ x: isHovering ? "100%" : 0 }),
    },
  },

  secondItem: {
    up: {
      initial: { y: "100%" },
      animate: ({ isHovering = false }) => ({ y: isHovering ? 0 : "100%" }),
    },
    down: {
      initial: { y: "-100%" },
      animate: ({ isHovering = false }) => ({ y: isHovering ? 0 : "-100%" }),
    },
    left: {
      initial: { x: "-100%" },
      animate: ({ isHovering = false }) => ({ x: isHovering ? 0 : "100%" }),
    },
    right: {
      initial: { x: "100%" },
      animate: ({ isHovering = false }) => ({ x: isHovering ? 0 : "-100%" }),
    },
  },
};

export const TRANSITION = { duration: 0.4, ease: "easeInOut" };
