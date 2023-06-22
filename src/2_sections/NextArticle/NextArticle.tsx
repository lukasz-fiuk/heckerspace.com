"use client";
import { FC } from "react";

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
      <Link href={`/article/${slug}`} scroll={false}>
        <S.Heading
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <S.ArrowButton
            label="Next article"
            iconVariant="arrowRight"
            hoverDirection="right"
            removeFocus
          />

          <S.Title>
            <Markdown markdown={title} raw />
          </S.Title>
        </S.Heading>
      </Link>

      <S.FadedContentWrapper aria-hidden>
        <ModuleRenderer modules={modules} disableFocus />
      </S.FadedContentWrapper>
    </S.NextArticleWrapper>
  );
};
export default NextArticle;
