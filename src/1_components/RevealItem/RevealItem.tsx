import { FC, ReactNode, useRef } from "react";

import { useInView } from "framer-motion";

import { Directions } from "types/commonTypes";

import { RevealItemVariants } from "./RevealItem.animations";
import * as S from "./RevealItem.styled";

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
    <S.RevealItemWrapper ref={itemRef} {...rest}>
      <S.SlideIn
        initial="initial"
        animate={isInView ? "hidden" : "initial"}
        exit="exit"
        variants={RevealItemVariants[direction]}
        transition={{ duration: duration, delay: delay, ease: "easeInOut" }}
      >
        {children}
      </S.SlideIn>

      <S.DimensionGhost aria-hidden>{children}</S.DimensionGhost>
    </S.RevealItemWrapper>
  );
};
export default RevealItem;
