import { FC, useRef } from "react";

import { m, useInView } from "framer-motion";

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
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      variants={AnimatedLineVariants[direction]}
      custom={{ dissolve }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeInOut",
        opacity: { duration: duration, delay: delay + 0.3, ease: "easeInOut" },
      }}
    />
  );
};
export default AnimatedLine;
