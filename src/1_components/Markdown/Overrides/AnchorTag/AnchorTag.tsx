import React, { FC, ReactNode } from "react";

import * as S from "./AnchorTag.styled";

export interface AnchorTagProps {
  children: ReactNode;
}

const AnchorTag: FC<AnchorTagProps> = ({ children, ...rest }) => {
  return (
    <S.AnchorTagWrapper target="_blank" {...rest}>
      {children}
    </S.AnchorTagWrapper>
  );
};
export default AnchorTag;
