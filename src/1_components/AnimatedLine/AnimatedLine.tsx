import { FC, useRef } from "react";

import { cubicBezier, useInView } from "framer-motion";

import { Directions } from "types/commonTypes";

import { AnimatedLineVariants } from "./AnimatedLine.animations";
import * as S from "./AnimatedLine.styled";

export interface AnimatedLineProps {
  duration?: number;
  delay?: number;
  direction?: Directions;
  dissolve?: boolean;
}

const AnimatedLine: FC<AnimatedLineProps> = ({
  delay = 0,
  duration = 2.4,
  direction = "right",
  dissolve = false,
  ...rest
}) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true });

  return (
    <S.LineWrapper
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
          duration: duration * 1.2,
          delay: delay + 0.3,
          ease: cubicBezier(0.22, 0.61, 0.36, 1),
        },
      }}
      {...rest}
    />
  );
};
export default AnimatedLine;
