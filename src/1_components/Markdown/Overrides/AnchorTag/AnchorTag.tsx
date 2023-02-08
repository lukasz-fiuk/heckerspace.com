import { FC, ReactNode } from "react";

import * as S from "./AnchorTag.styled";

export interface AnchorTagProps {
  children: ReactNode;
  disableFocus?: boolean;
}

const AnchorTag: FC<AnchorTagProps> = ({ children, disableFocus, ...rest }) => {
  return (
    <S.AnchorTagWrapper
      tabIndex={disableFocus ? -1 : 0}
      target="_blank"
      {...rest}
    >
      {children}
    </S.AnchorTagWrapper>
  );
};
export default AnchorTag;
