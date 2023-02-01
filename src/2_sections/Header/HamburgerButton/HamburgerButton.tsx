import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

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
  const [isVisible, setIsVisible] = useState(true);
  const previousScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > previousScrollYRef.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      previousScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.HamburgerButtonWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onClick={() => setIsOpen(true)}
      style={{ pointerEvents: isVisible ? "all" : "none" }}
      {...rest}
    >
      {label}
    </S.HamburgerButtonWrapper>
  );
};
export default HamburgerButton;
