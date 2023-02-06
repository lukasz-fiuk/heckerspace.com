import styled from "styled-components";

import { fonts } from "styled/fonts";

export const ErrorPageWrapper = styled.div`
  display: grid;
  place-items: center;

  min-height: 100vh;
`;

export const HeadingWrapper = styled.div`
  display: grid;
  place-items: center;
  row-gap: 16px;
`;

export const ErrorMessage = styled.h1`
  ${fonts.h1}
  font-weight: bold;
`;
