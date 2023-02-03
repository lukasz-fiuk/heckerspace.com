import styled from "styled-components";

import { fonts } from "styled/fonts";
import { PALETTE } from "styled/theme";

export const DefaultSpacing = styled.div`
  line-height: 2;

  h2 {
    ${fonts.h3}
    line-height: 2;
    margin-top: clamp(80px, 9.6rem, 104px);
  }

  blockquote {
    border-left: 4px solid var(--secondary);
    margin: clamp(24px, 4rem, 40px);
    padding-left: clamp(24px, 4rem, 40px);
    font-style: oblique;

    & p {
      color: var(--primary);
    }
  }

  code {
    display: inline-block;
    font-style: normal;
    font-weight: 500;
    ${fonts.code}

    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
      monospace;

    border-radius: 8px;
    padding: 0 0.25em;
    margin: 0.1em 0;
    color: var(--primary);

    line-height: 1.5;
    transition: 0.3s ease-in-out;

    &[data-theme="light"] {
      background: ${PALETTE.white_75};
    }

    &[data-theme="dark"] {
      background: ${PALETTE.black_20};
      border: 1px solid #262626;
    }
  }

  p {
    ${fonts.body}
    padding-bottom: 1em;
    line-height: 2;
    color: var(--primary_75);

    &:last-child {
      padding-bottom: 0;
    }
  }

  em,
  strong {
    color: var(--primary);
    font-weight: bold;
  }

  ul {
    display: grid;
    row-gap: 1em;
    padding-bottom: 1em;
  }

  ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  img,
  video {
    width: 100%;
    padding: 4rem 0;
  }
`;
