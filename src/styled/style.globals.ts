import { createGlobalStyle } from "styled-components";

import { fontFaces, fonts } from "./fonts";
import { cssReset } from "./reset";
import { PALETTE } from "./theme";

// This "trick" fixes css formatting issue
const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  ${cssReset}

  html {
    font-size: calc(100vw / 1512 * 10);
    --vh: 1vh;

    [data-theme="light"] {
      --background: ${PALETTE.white};
      --primary: ${PALETTE.black};
      --primary_20: ${PALETTE.black_20};
      --primary_50: ${PALETTE.black_50};
      --primary_75: ${PALETTE.black_75};
      --secondary: ${PALETTE.gray};
      --backgroundToTransparent: ${`linear-gradient(${PALETTE.white},${PALETTE.transparent})`};
    }

    [data-theme="dark"] {
      --background: ${PALETTE.codGray};
      --primary: ${PALETTE.white};
      --primary_20: ${PALETTE.white_20};
      --primary_50: ${PALETTE.white_50};
      --primary_75: ${PALETTE.white_75};
      --secondary: ${PALETTE.gray};
      --backgroundToTransparent: ${`linear-gradient(
        ${PALETTE.codGray},
        ${PALETTE.transparent}
      )`};
    }
  }

  body {
    background-color: var(--background);
    color: var(--primary);
    transition: color 0.3s ease-in-out, background 0.3s ease-in-out;

    ${fonts.body}
    font-family: ${fontFaces.helvetica};
  }

  /////////////////////////////////////
  // Font global styles
  /////////////////////////////////////

  a,
  button {
    color: inherit;
    cursor: pointer;
    text-decoration: unset;
  }

  del,
  s {
    color: var(--secondary);
    text-decoration: line-through;
  }

  mark {
    padding: 0.1em;
  }

  .hidden {
    display: none;
  }
  /////////////////////////////////////
  // Pseudo elements
  /////////////////////////////////////

  & ::selection {
    background-color: yellow;
    color: black;
  }

  & :focus-visible {
    transition: outline-offset 0.3s ease-in-out;
    outline: 1px solid;
    outline-offset: 0.25em;
  }
`;
