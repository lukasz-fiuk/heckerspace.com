import { FC } from "react";

import Markdown from "1_components/Markdown/Markdown";
import AuthorDetails, {
  AuthorDetailsProps,
} from "2_sections/ArticleHeader/AuthorDetails/AuthorDetails";
import { Media } from "types/commonTypes";

import * as S from "./ArticleHeader.styled";

export interface ArticleHeaderProps extends AuthorDetailsProps {
  title: string;
  publishedAt: string;
  cover?: Media;
}

const ArticleHeader: FC<ArticleHeaderProps> = ({
  title,
  publishedAt,
  cover,
  estimatedReadingTime,
  ...rest
}) => {
  return (
    <S.ArticleHeaderWrapper {...rest}>
      {cover && (
        <S.CoverImage
          alt={cover.fileName}
          src={cover.url}
          width={cover.width}
          height={cover.height}
          priority
        />
      )}

      <S.ReturnButton
        label="all articles"
        iconVariant="arrowLeft"
        hoverDirection="left"
        reverse
        href="/articles"
      />

      <S.Title>
        <Markdown markdown={title} raw />
      </S.Title>

      <AuthorDetails
        publishedAt={publishedAt}
        estimatedReadingTime={estimatedReadingTime}
      />
    </S.ArticleHeaderWrapper>
  );
};
export default ArticleHeader;
