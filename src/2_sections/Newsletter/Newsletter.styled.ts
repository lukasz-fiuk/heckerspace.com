import styled from "styled-components";

import { fonts } from "styled/fonts";

export const NewsletterWrapper = styled.section`
  display: grid;
  place-items: center;
  row-gap: 24px;
  margin-bottom: 240px;
`;

export const Title = styled.h2`
  ${fonts.h1}
  font-weight: bold;
  text-align: center;

  padding-bottom: 16px;
`;
