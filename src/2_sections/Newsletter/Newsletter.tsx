import React, { FC } from "react";

import * as S from "./Newsletter.styled";
import NewsletterForm from "./NewsletterForm/NewsletterForm";

export interface NewsletterProps {}

const Newsletter: FC<NewsletterProps> = ({ ...rest }) => {
  return (
    <S.NewsletterWrapper {...rest}>
      <S.Title>Newsletter ✉️📯</S.Title>
      <NewsletterForm />
    </S.NewsletterWrapper>
  );
};
export default Newsletter;
