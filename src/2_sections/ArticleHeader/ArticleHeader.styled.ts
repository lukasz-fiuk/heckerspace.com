import Image from "next/image";
import styled from "styled-components";

import IconButton from "1_components/Buttons/IconButton/IconButton";
import { fonts } from "styled/fonts";

export const ArticleHeaderWrapper = styled.section`
  display: grid;
  place-items: center;
  row-gap: 24px;

  margin: 12vh 0 6.4rem 0;
`;

export const CoverImage = styled(Image)`
  margin-top: -8vh;
  object-fit: contain;
  max-width: 400px;
  max-height: 50vh;
  width: 80%;
`;

export const Title = styled.h1`
  ${fonts.h2}
  font-weight: bold;
  text-align: center;
`;

export const ReturnButton = styled(IconButton)`
  ${fonts.small}
  color:var(--primary);
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;
