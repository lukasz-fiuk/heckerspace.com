import { FC, useRef } from "react";

import { cubicBezier, m, useInView } from "framer-motion";

import { Directions } from "types/commonTypes";

import { AnimatedLineVariants } from "./AnimatedLine.animations";

export interface AnimatedLineProps {
  duration?: number;
  delay?: number;
  direction?: Directions;
  dissolve?: boolean;
  className?: string;
}

const AnimatedLine: FC<AnimatedLineProps> = ({
  delay = 0,
  duration = 2.4,
  direction = "right",
  dissolve = false,
  className,
  ...rest
}) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true });

  return (
    <m.div
      {...rest}
      className={className}
      aria-hidden
      ref={lineRef}
      initial="initial"
      animate={isInView ? "visible" : "initial"}
      exit={{
        x: "100%",
        opacity: 0,
        transition: { duration: 0.3, ease: cubicBezier(0.22, 0.61, 0.36, 1) },
      }}
      variants={AnimatedLineVariants[direction]}
      custom={{ dissolve }}
      transition={{
        duration: duration,
        delay: delay,
        ease: cubicBezier(0.22, 0.61, 0.36, 1),
        opacity: {
          duration: duration,
          delay: delay + 0.3,
          ease: cubicBezier(0.22, 0.61, 0.36, 1),
        },
      }}
    />
  );
};
export default AnimatedLine;
