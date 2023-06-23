import { ReactNode, FC, useState } from "react";

import clsx from "clsx";
import { AnimatePresence, m } from "framer-motion";

import { Directions } from "types/commonTypes";

import { HoverReplaceVariants, TRANSITION } from "./HoverReplace.animations";
import S from "./HoverReplace.module.scss";

export interface HoverReplaceProps {
  children: ReactNode;
  direction: Directions;
  disableInnerHover?: boolean;
  isHovering?: boolean;
  renderAs?: "div" | "span";
  className?: string;
}

const HoverReplace: FC<HoverReplaceProps> = ({
  children,
  direction = "right",
  disableInnerHover = false,
  isHovering,
  renderAs = "span",
  className,
  ...rest
}) => {
  const [isInnerHover, setIsInnerHover] = useState(false);

  const handleMouseEnter = () => setIsInnerHover(true);
  const handleMouseLeave = () => setIsInnerHover(false);

  const HoverReplaceWrapper = renderAs;
  const ReplaceItem = m[renderAs];
  return (
    <HoverReplaceWrapper
      {...rest}
      className={clsx(S.HoverReplaceWrapper, className)}
      onMouseEnter={!disableInnerHover ? handleMouseEnter : undefined}
      onMouseLeave={!disableInnerHover ? handleMouseLeave : undefined}
    >
      <AnimatePresence>
        <ReplaceItem
          className={S.ReplaceItem}
          key="first child"
          initial="initial"
          animate="animate"
          custom={{ isHovering: disableInnerHover ? isHovering : isInnerHover }}
          variants={HoverReplaceVariants.firstItem[direction]}
          transition={TRANSITION}
        >
          {children}
        </ReplaceItem>

        <ReplaceItem
          className={clsx(S.ReplaceItem, S.SecondItem)}
          key="second child"
          aria-hidden
          initial="initial"
          animate="animate"
          custom={{ isHovering: disableInnerHover ? isHovering : isInnerHover }}
          variants={HoverReplaceVariants.secondItem[direction]}
          transition={TRANSITION}
        >
          {children}
        </ReplaceItem>
      </AnimatePresence>
    </HoverReplaceWrapper>
  );
};

export default HoverReplace;
