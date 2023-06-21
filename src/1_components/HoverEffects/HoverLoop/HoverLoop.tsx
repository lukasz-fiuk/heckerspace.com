import { useState, ReactNode, FC, useEffect } from "react";

import { AnimatePresence, m } from "framer-motion";

import { Directions } from "types/commonTypes";

import { HoverLoopVariants, TRANSITION } from "./HoverLoop.animations";
import S from "./HoverLoop.module.scss";

interface HoverLoopProps {
  children: ReactNode;
  direction: Directions;
  disableInnerHover?: boolean;
  isHovering?: boolean;
  renderAs?: "div" | "span";
}

const HoverLoop: FC<HoverLoopProps> = ({
  children,
  isHovering,
  disableInnerHover = false,
  direction,
  renderAs = "span",
  ...rest
}) => {
  const [isExiting, setIsExiting] = useState(false);
  const [innerHover, setInnerHover] = useState(false);
  const [key, setKey] = useState("loop item");

  useEffect(() => {
    if (!isHovering && !innerHover && isExiting) {
      setKey(`loop item-${Math.random()}`);
    }
  }, [isHovering, innerHover, isExiting]);

  const handleMouseEnter = () => setInnerHover(true);
  const handleMouseLeave = () => setInnerHover(false);

  const Tag = m[renderAs];
  const HoverLoopWrapper = renderAs;

  return (
    <HoverLoopWrapper
      {...rest}
      className={S.HoverLoopWrapper}
      onMouseEnter={!disableInnerHover ? handleMouseEnter : undefined}
      onMouseLeave={!disableInnerHover ? handleMouseLeave : undefined}
    >
      <AnimatePresence mode="wait">
        {(isHovering || (!disableInnerHover && innerHover)) && (
          <Tag
            className={S.LoopItem}
            key={key}
            onAnimationStart={() => setIsExiting(true)}
            onAnimationComplete={() => setIsExiting(false)}
            {...HoverLoopVariants[direction]}
            transition={TRANSITION}
          >
            {children}
          </Tag>
        )}
      </AnimatePresence>

      <div className={S.DimensionGhost} aria-hidden>
        {children}
      </div>
    </HoverLoopWrapper>
  );
};

export default HoverLoop;
