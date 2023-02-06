import React, { FC } from "react";

import Comments from "1_components/Comments/Comments";

import * as S from "./Discussion.styled";

export interface DiscussionProps {}

const Discussion: FC<DiscussionProps> = ({ ...rest }) => {
  return (
    <S.DiscussionWrapper {...rest}>
      <S.Divider />
      <S.Title>Comments</S.Title>
      <Comments />
    </S.DiscussionWrapper>
  );
};
export default Discussion;
