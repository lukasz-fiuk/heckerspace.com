import { css } from "styled-components";

export type FontFamily = keyof typeof fontFaces;

export const fontFaces = {
  helvetica: `"Helvetica Neue", "Inter", Arimo, Helvetica, Arial, sans-serif;`,
};

export const fonts = {
  h1: css`
    font-size: clamp(40px, 6.4rem, 64px);
    line-height: 1.2;
  `,

  h2: css`
    font-size: clamp(32px, 4.8rem, 48px);
    line-height: 1.2;
  `,

  h3: css`
    font-size: clamp(24px, 3.2rem, 32px);
    line-height: 1.2;
  `,

  body: css`
    font-size: clamp(18px, 2.4rem, 24px);
    line-height: 2;
  `,

  small: css`
    font-size: clamp(14px, 1.6rem, 16px);
    line-height: 1.5;
  `,

  code: css`
    font-size: clamp(16px, 2rem, 20px);
    line-height: 2;
  `,
};
