"use client";
import { FC } from "react";

import { m } from "framer-motion";
import Link from "next/link";

import IconButton from "1_components/Buttons/IconButton/IconButton";
import Markdown from "1_components/Markdown/Markdown";
import ModuleRenderer, {
  Modules,
} from "2_sections/ModuleRenderer/ModuleRenderer";

import S from "./NextArticle.module.scss";

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
    <section className={S.NextArticleWrapper} {...rest}>
      <Link href={`/article/${slug}`} scroll={false}>
        <m.div
          className={S.Heading}
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <IconButton
            className={S.ArrowButton}
            label="Next article"
            iconVariant="arrowRight"
            hoverDirection="right"
            removeFocus
          />

          <h2 className={S.Title}>
            <Markdown markdown={title} raw />
          </h2>
        </m.div>
      </Link>

      <div className={S.FadedContentWrapper} aria-hidden>
        <ModuleRenderer modules={modules} disableFocus />
      </div>
    </section>
  );
};
export default NextArticle;
