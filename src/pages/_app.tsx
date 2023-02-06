import React from "react";

import { Inter } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { LazyMotion, MotionConfig } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffectOnce } from "usehooks-ts";

import KeydownHandler from "1_components/KeydownHandler/KeydownHandler";
import Layout from "2_sections/Layout/Layout";
import { GlobalStyles } from "styled/style.globals";

const loadFeatures = () =>
  import("utils/framerMotionFeatures").then((res) => res.default);

const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffectOnce(() => {
    document.body.style.opacity = "1";

    // Set VH size for mobile devices
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    router.beforePopState((state) => {
      state.options.scroll = false;
      return true;
    });
  });

  return (
    <React.StrictMode>
      <LazyMotion features={loadFeatures} strict>
        <MotionConfig reducedMotion="user">
          <style jsx global>{`
            html {
              font-family: ${inter.style.fontFamily};
            }
          `}</style>
          <GlobalStyles />
          <Layout head={pageProps.head}>
            <Component {...pageProps} />
          </Layout>
        </MotionConfig>
      </LazyMotion>
      <KeydownHandler />
      <Analytics />
    </React.StrictMode>
  );
};
export default App;
