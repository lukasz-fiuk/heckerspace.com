import React, { FC } from "react";

import Script from "next/script";
import "styled/style.globals.scss";
import "styled/reset.scss";

export interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Script src="/scripts/setInitialTheme.min.js" />
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
