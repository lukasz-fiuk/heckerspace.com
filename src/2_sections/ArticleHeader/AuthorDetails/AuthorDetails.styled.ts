import Image from "next/image";
import styled, { css } from "styled-components";

import CopyButton from "1_components/Buttons/CopyButton/CopyButton";
import { fonts } from "styled/fonts";
import media from "styled/mediaQueries";

export const AuthorDetailsWrapper = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, auto) 1fr;
  align-items: end;

  column-gap: 16px;
  width: 100%;
  margin: 24px 0;
`;

export const Thumbnail = styled(Image)`
  width: 56px;
  height: 56px;

  border-radius: 50%;
  object-fit: cover;
  background-color: var(--background);
`;

export const Details = styled.div`
  display: grid;
  row-gap: 4px;
`;

export const AuthorName = styled.p`
  ${fonts.small}
  font-weight: bold;
  color: var(--primary);
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  ${media.tablet} {
    column-gap: 16px;
  }
`;

/////////////////////////////////////
// Text details with shared styles
/////////////////////////////////////

const secondarySmall = css`
  ${fonts.small}
  color: var(--primary_75);
`;

export const CreatedAt = styled.time`
  ${secondarySmall}
  text-transform: uppercase;
`;

export const ReadingTime = styled.span`
  display: none;
  ${secondarySmall}

  ${media.tablet} {
    display: initial;
  }
`;
export const MobileReadingTime = styled(ReadingTime)`
  display: initial;

  ${media.tablet} {
    display: none;
  }
`;

export const Dot = styled.span`
  width: 4px;
  height: 4px;

  border-radius: 100%;
  background-color: var(--primary_75);
`;

export const CopyLink = styled(CopyButton)`
  justify-self: end;
  color: var(--primary_75);
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--primary);
  }
`;
