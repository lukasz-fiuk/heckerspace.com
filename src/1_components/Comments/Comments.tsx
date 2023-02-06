import React, { FC } from "react";

import Giscus from "@giscus/react";
import { useDarkMode } from "usehooks-ts";

export interface CommentsProps {}

const Comments: FC<CommentsProps> = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <Giscus
      id="comments"
      repo="lukasz-fiuk/heckerspace.com"
      repoId="R_kgDOH2WtkA"
      category="General"
      categoryId="DIC_kwDOH2WtkM4CUBLM"
      reactionsEnabled="1"
      lang="en"
      mapping="pathname"
      emitMetadata="0"
      inputPosition="bottom"
      theme={isDarkMode ? "dark" : "light"}
    />
  );
};
export default Comments;
