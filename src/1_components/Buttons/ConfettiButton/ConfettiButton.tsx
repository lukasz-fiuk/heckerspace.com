import React, { FC, ReactNode } from "react";

import HoverReplace from "1_components/HoverEffects/HoverReplace/HoverReplace";
import useConfetti from "hooks/useConfetii";

import * as S from "./ConfettiButton.styled";

export interface ConfettiButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

const ConfettiButton: FC<ConfettiButtonProps> = ({
  children,
  onClick,
  ...rest
}) => {
  const { ref: buttonRef, fireConfetti } = useConfetti();

  const handleCompleteButtonClick = () => {
    onClick && onClick();
    fireConfetti();
  };

  return (
    <S.ConfettiButtonWrapper
      ref={buttonRef}
      onClick={handleCompleteButtonClick}
      {...rest}
    >
      <HoverReplace direction="up">{children}</HoverReplace>
    </S.ConfettiButtonWrapper>
  );
};
export default ConfettiButton;
