import React, { FC } from "react";

import "styled/reset.scss";
import "styled/style.globals.scss";

import { Inter } from "next/font/google";
import Script from "next/script";

import KeydownHandler from "1_components/KeydownHandler/KeydownHandler";
import Layout from "2_sections/Layout/Layout";
export interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <React.StrictMode>
      <html lang="en" className={inter.className}>
        <Script src="/scripts/setInitialTheme.min.js" />
        <body style={{ opacity: 1 }}>
          <Layout>{children}</Layout>
          <KeydownHandler />
        </body>
      </html>
    </React.StrictMode>
  );
};
export default RootLayout;
