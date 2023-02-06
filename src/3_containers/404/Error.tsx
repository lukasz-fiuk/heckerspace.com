import React, { FC } from "react";

import IconButton from "1_components/Buttons/IconButton/IconButton";

import * as S from "./Error.styled";

export interface ErrorProps {}

const Error: FC<ErrorProps> = ({ ...rest }) => {
  return (
    <S.ErrorPageWrapper {...rest}>
      <S.HeadingWrapper>
        <S.ErrorMessage>Whoops, page not found 💀</S.ErrorMessage>
        <IconButton
          href="/"
          iconVariant="arrowRight"
          hoverDirection="right"
          label="go home"
        />
      </S.HeadingWrapper>
    </S.ErrorPageWrapper>
  );
};
export default Error;
