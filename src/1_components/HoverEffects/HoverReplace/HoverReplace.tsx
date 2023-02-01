import { ReactNode, FC, useState } from "react";

import { AnimatePresence } from "framer-motion";

import { Directions } from "types/commonTypes";

import { HoverReplaceVariants, TRANSITION } from "./HoverReplace.animations";
import * as S from "./HoverReplace.styled";

export interface HoverReplaceProps {
  children: ReactNode;
  direction: Directions;
  disableInnerHover?: boolean;
  isHovering?: boolean;
}

const HoverReplace: FC<HoverReplaceProps> = ({
  children,
  direction = "right",
  disableInnerHover = false,
  isHovering,
  ...rest
}) => {
  const [isInnerHover, setIsInnerHover] = useState(false);

  const handleMouseEnter = () => setIsInnerHover(true);
  const handleMouseLeave = () => setIsInnerHover(false);

  return (
    <S.HoverReplaceWrapper
      onMouseEnter={!disableInnerHover ? handleMouseEnter : undefined}
      onMouseLeave={!disableInnerHover ? handleMouseLeave : undefined}
      {...rest}
    >
      <AnimatePresence>
        <S.ReplaceItem
          key="first child"
          initial="initial"
          animate="animate"
          custom={{ isHovering: disableInnerHover ? isHovering : isInnerHover }}
          variants={HoverReplaceVariants.firstItem[direction]}
          transition={TRANSITION}
        >
          {children}
        </S.ReplaceItem>

        <S.ReplaceItem
          key="second child"
          aria-hidden
          $second
          initial="initial"
          animate="animate"
          custom={{ isHovering: disableInnerHover ? isHovering : isInnerHover }}
          variants={HoverReplaceVariants.secondItem[direction]}
          transition={TRANSITION}
        >
          {children}
        </S.ReplaceItem>
      </AnimatePresence>
    </S.HoverReplaceWrapper>
  );
};

export default HoverReplace;
