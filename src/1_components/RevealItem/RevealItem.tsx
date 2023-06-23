import { FC, ReactNode, useRef } from "react";

import { m, useInView } from "framer-motion";

import { Directions } from "types/commonTypes";

import { RevealItemVariants } from "./RevealItem.animations";
import S from "./RevealItem.module.scss";

export interface RevealItemProps {
  duration?: number;
  delay?: number;
  direction?: Directions;
  children: ReactNode;
}

const RevealItem: FC<RevealItemProps> = ({
  delay = 0,
  duration = 0.8,
  direction = "up",
  children,
  ...rest
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, amount: 1 });

  return (
    <div {...rest} className={S.RevealItemWrapper} ref={itemRef}>
      <m.div
        className={S.SlideIn}
        initial="initial"
        animate={isInView ? "hidden" : "initial"}
        exit="exit"
        variants={RevealItemVariants[direction]}
        transition={{ duration: duration, delay: delay, ease: "easeInOut" }}
      >
        {children}
      </m.div>

      <div className={S.DimensionGhost} aria-hidden>
        {children}
      </div>
    </div>
  );
};
export default RevealItem;
