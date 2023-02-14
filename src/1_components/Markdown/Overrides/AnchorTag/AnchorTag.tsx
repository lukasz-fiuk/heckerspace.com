import { FC, ReactNode } from "react";

import { useDarkMode } from "usehooks-ts";

import * as S from "./AnchorTag.styled";

export interface AnchorTagProps {
  children: ReactNode;
  disableFocus?: boolean;
}

const AnchorTag: FC<AnchorTagProps> = ({ children, disableFocus, ...rest }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <S.AnchorTagWrapper
      tabIndex={disableFocus ? -1 : 0}
      target="_blank"
      data-theme={isDarkMode ? "dark" : "light"}
      {...rest}
    >
      {children}
    </S.AnchorTagWrapper>
  );
};
export default AnchorTag;
