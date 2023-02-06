import React, { FC } from "react";

import Giscus from "@giscus/react";
import { useDarkMode } from "usehooks-ts";

import * as S from "./Comments.styled";

export interface CommentsProps {}

const Comments: FC<CommentsProps> = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <S.CommentsWrapper>
      <Giscus
        id="comments"
        repo="lukasz-fiuk/heckerspace.com"
        repoId="R_kgDOH2WtkA"
        category="General"
        categoryId="DIC_kwDOH2WtkM4CUBLM"
        reactionsEnabled="1"
        lang="en"
        mapping="title"
        emitMetadata="0"
        inputPosition="top"
        theme={isDarkMode ? "dark" : "light"}
        loading="lazy"
      />
    </S.CommentsWrapper>
  );
};
export default Comments;
