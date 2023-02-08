import { Dispatch, FC, SetStateAction } from "react";

import useScrollDirection from "hooks/useScrollDirection";

import * as S from "./HamburgerButton.styled";

export interface HamburgerButtonProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  label?: string;
}

const HamburgerButton: FC<HamburgerButtonProps> = ({
  setIsOpen,
  label = "menu",
  ...rest
}) => {
  const { isUserScrollingUp } = useScrollDirection();

  return (
    <S.HamburgerButtonWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: isUserScrollingUp ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileTap={{ scale: 1.2 }}
      onClick={() => setIsOpen(true)}
      style={{ pointerEvents: isUserScrollingUp ? "all" : "none" }}
      {...rest}
    >
      {label}
    </S.HamburgerButtonWrapper>
  );
};
export default HamburgerButton;
