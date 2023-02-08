import { FC } from "react";

import Head from "next/head";

import { PALETTE } from "styled/theme";

export interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: FC<SeoProps> = ({
  title = "Heckerspace",
  description = "Lovely blog about programming",
  keywords = "programming, technology, software development",
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="author" content="Łukasz Fiuk" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content={PALETTE.codGray} />

      <link
        rel="icon"
        type="image/png"
        href="/favicons/icon-256x256.png"
        sizes="256x256"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicons/icon-512x512.png"
        sizes="512x512"
      />
      <link rel="apple-touch-icon" href="/favicons/icon-512x512.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
};
export default SEO;
