import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Script
        src="/scripts/setInitialTheme.min.js"
        strategy="beforeInteractive"
      />
      <Head />
      <body style={{ opacity: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
