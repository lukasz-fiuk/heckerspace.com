import { FC } from "react";

import Image from "next/image";

import IconButton from "1_components/Buttons/IconButton/IconButton";
import Markdown from "1_components/Markdown/Markdown";
import AuthorDetails, {
  AuthorDetailsProps,
} from "2_sections/ArticleHeader/AuthorDetails/AuthorDetails";
import { Media } from "types/commonTypes";

import S from "./ArticleHeader.module.scss";

export interface ArticleHeaderProps extends AuthorDetailsProps {
  title: string;
  createdAt: string;
  cover?: Media;
}

const ArticleHeader: FC<ArticleHeaderProps> = ({
  title,
  createdAt,
  cover,
  estimatedReadingTime,
  ...rest
}) => {
  return (
    <header {...rest} className={S.ArticleHeaderWrapper}>
      {cover && (
        <Image
          className={S.CoverImage}
          alt={cover.fileName}
          src={cover.url}
          width={cover.width}
          height={cover.height}
          priority
        />
      )}

      <IconButton
        className={S.ReturnButton}
        label="all articles"
        iconVariant="arrowLeft"
        hoverDirection="left"
        reverse
        href="/articles"
      />

      <h1 className={S.Title}>
        <Markdown markdown={title} raw />
      </h1>

      <AuthorDetails
        createdAt={createdAt}
        estimatedReadingTime={estimatedReadingTime}
      />
    </header>
  );
};
export default ArticleHeader;
