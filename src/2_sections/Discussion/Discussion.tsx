import { FC } from "react";

import Comments from "1_components/Comments/Comments";

import * as S from "./Discussion.styled";

export interface DiscussionProps {}

const Discussion: FC<DiscussionProps> = ({ ...rest }) => {
  return (
    <S.DiscussionWrapper aria-label="Comments section" {...rest}>
      <S.Title>Comments 💬</S.Title>
      <Comments />
    </S.DiscussionWrapper>
  );
};
export default Discussion;
