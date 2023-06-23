import { FC } from "react";

import clsx from "clsx";
import Image from "next/image";

import CopyButton from "1_components/Buttons/CopyButton/CopyButton";
import { formatDate } from "utils/formatDate";
import { validateDateTime } from "utils/validateDateTime";

import S from "./AuthorDetails.module.scss";

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
    <div {...rest} className={S.AuthorDetailsWrapper}>
      <Image
        className={S.Thumbnail}
        src="/assets/lukasz-fiuk.webp"
        alt={`image of the author - ${name}`}
        width={100}
        height={100}
      />

      <div className={S.Details}>
        <div className={S.Row}>
          <p className={S.AuthorName}>{name}</p>
        </div>

        <div className={S.Row}>
          <time className={S.CreatedAt} dateTime={validateDateTime(createdAt)}>
            {formattedDate}
          </time>
          <span className={S.Dot} />
          <span className={S.ReadingTime}>{readingTimeText}</span>

          <span
            className={clsx(S.ReadingTime, S.MobileReadingTime)}
            aria-hidden
          >
            {mobileReadingTimeText}
          </span>
        </div>
      </div>

      <CopyButton className={S.CopyLink} aria-label="Copy article link" />
    </div>
  );
};

export default AuthorDetails;
