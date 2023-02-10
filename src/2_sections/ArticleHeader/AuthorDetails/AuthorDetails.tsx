import { FC } from "react";

import { formatDate } from "utils/formatDate";

import * as S from "./AuthorDetails.styled";

export interface AuthorDetailsProps {
  name?: string;
  createdAt: string;
  estimatedReadingTime: number;
}

const AuthorDetails: FC<AuthorDetailsProps> = ({
  name = "Łukasz Fiuk",
  createdAt,
  estimatedReadingTime,
  ...rest
}) => {
  const formattedDate = formatDate(createdAt);
  const formattedMinute = estimatedReadingTime > 1 ? "minutes" : "minute";
  const readingTimeText = `
  ${estimatedReadingTime}
  ${formattedMinute} read ⏳`;

  const mobileReadingTimeText = `
  ${estimatedReadingTime}
  min ⏳`;

  return (
    <S.AuthorDetailsWrapper {...rest}>
      <S.Thumbnail
        src="/assets/portrait.jpg"
        alt={`Author image of ${name}`}
        width={100}
        height={100}
      />

      <S.Details>
        <S.Row>
          <S.AuthorName>{name}</S.AuthorName>
        </S.Row>

        <S.Row>
          <S.CreatedAt>{formattedDate}</S.CreatedAt>
          <S.Dot />
          <S.ReadingTime>{readingTimeText}</S.ReadingTime>
          <S.MobileReadingTime aria-hidden>
            {mobileReadingTimeText}
          </S.MobileReadingTime>
        </S.Row>
      </S.Details>

      <S.CopyLink aria-label="Copy article link" />
    </S.AuthorDetailsWrapper>
  );
};

export default AuthorDetails;
