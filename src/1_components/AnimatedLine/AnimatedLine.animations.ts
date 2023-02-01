export const AnimatedLineVariants = {
  up: {
    initial: { scaleY: 0, transformOrigin: "bottom" },
    visible: ({ dissolve = false }) => ({
      scaleY: 1,
      opacity: dissolve ? 0 : 1,
    }),
  },
  down: {
    initial: { scaleY: 0, transformOrigin: "top" },
    visible: ({ dissolve = false }) => ({
      scaleY: 1,
      opacity: dissolve ? 0 : 1,
    }),
  },
  left: {
    initial: { scaleX: 0, transformOrigin: "right" },
    visible: ({ dissolve = false }) => ({
      scaleX: 1,
      opacity: dissolve ? 0 : 1,
    }),
  },
  right: {
    initial: { scaleX: 0, transformOrigin: "left" },
    visible: ({ dissolve = false }) => ({
      scaleX: 1,
      opacity: dissolve ? 0 : 1,
    }),
  },
};
