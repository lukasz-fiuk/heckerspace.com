import React, { FC } from "react";

import Markdown from "1_components/Markdown/Markdown";
import ModuleRenderer, {
  Modules,
} from "2_sections/ModuleRenderer/ModuleRenderer";

import * as S from "./NextArticle.styled";

export interface NextArticleProps {
  modules: Modules;
  title: string;
}

const NextArticle: FC<NextArticleProps> = ({ title, modules, ...rest }) => {
  return (
    <S.NextArticleWrapper {...rest}>
      <S.Divider />
      <S.Heading>
        <S.NextButton
          label="Next article"
          iconVariant="arrowRight"
          hoverDirection="right"
          href="/about"
        />
        <S.Title>
          <Markdown markdown={title} raw />
        </S.Title>
      </S.Heading>

      <S.FadedContentWrapper>
        <ModuleRenderer modules={modules} />
      </S.FadedContentWrapper>
    </S.NextArticleWrapper>
  );
};
export default NextArticle;
