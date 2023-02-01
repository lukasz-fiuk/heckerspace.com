import { css } from "styled-components";

export const cssReset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea,
  select {
    appearance: none;
    background: none;
    font-family: inherit;
    border: none;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-transform: inherit;
    outline: none;
    border-radius: 0;
  }

  li,
  a {
    all: unset;
  }

  svg {
    height: auto;
    width: auto;
    display: block;
    max-width: unset;
  }
`;
