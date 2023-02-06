import React, { FC } from "react";

import Link from "next/link";

import Markdown from "1_components/Markdown/Markdown";
import ModuleRenderer, {
  Modules,
} from "2_sections/ModuleRenderer/ModuleRenderer";

import * as S from "./NextArticle.styled";

export interface NextArticleProps {
  modules: Modules;
  title: string;
  slug: string;
}

const NextArticle: FC<NextArticleProps> = ({
  title,
  modules,
  slug,
  ...rest
}) => {
  return (
    <S.NextArticleWrapper {...rest}>
      <S.Divider />
      <S.Heading>
        <S.NextButton
          label="Next article"
          iconVariant="arrowRight"
          hoverDirection="right"
          href={`/article/${slug}`}
        />
        <Link href={`/article/${slug}`} scroll={false}>
          <S.Title>
            <Markdown markdown={title} raw />
          </S.Title>
        </Link>
      </S.Heading>

      <Link href={`/article/${slug}`} scroll={false}>
        <S.FadedContentWrapper>
          <ModuleRenderer modules={modules} />
        </S.FadedContentWrapper>
      </Link>
    </S.NextArticleWrapper>
  );
};
export default NextArticle;
