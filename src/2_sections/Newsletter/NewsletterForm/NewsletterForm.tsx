import React, { FC } from "react";

import * as S from "./NewsletterForm.styled";

export interface NewsletterFormProps {}

const NewsletterForm: FC<NewsletterFormProps> = ({ ...rest }) => {
  return (
    <S.FormContainer {...rest}>
      <S.Label htmlFor="email-input">Email:</S.Label>
      <S.Input
        id="email-input"
        placeholder="coolboi@hecker.com"
        type="email"
        aria-labelledby="email-label"
        aria-describedby="email-desc"
        required
      />

      <S.Button type="submit">subscribe</S.Button>
    </S.FormContainer>
  );
};
export default NewsletterForm;
