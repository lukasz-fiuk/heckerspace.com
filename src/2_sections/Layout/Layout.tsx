"use client";
import { FC, ReactNode } from "react";

import { AnimatePresence, LazyMotion, m, MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";

import IntroAnimation from "1_components/IntroAnimation/IntroAnimation";
import ScrollProgress from "1_components/ScrollProgress/ScrollProgress";
import { SeoProps } from "1_components/SEO/SEO";
import FadeInOut from "1_components/Transitions/FadeInOut/FadeInOut";
import Footer from "2_sections/Footer/Footer";
import Header from "2_sections/Header/Header";
import { COMMONS } from "styled/commons";
import { handleScrollTop } from "utils/handleScrollTop";

import InfoMessage from "./InfoMessage/InfoMessage";
import S from "./Layout.module.scss";

export interface LayoutProps {
  children: ReactNode;
  head?: SeoProps;
}

const loadFeatures = () =>
  import("utils/framerMotionFeatures").then((res) => res.default);

const Layout: FC<LayoutProps> = ({ children, head }) => {
  const asPath = usePathname();

  return (
    <>
      <LazyMotion features={loadFeatures} strict>
        <MotionConfig reducedMotion="user">
          <IntroAnimation />
          {/* <SEO {...head} /> */}
          <InfoMessage />
          <Header />

          <AnimatePresence mode="wait">
            <ScrollProgress key={"scrollProgress" + asPath} />
          </AnimatePresence>

          <AnimatePresence
            mode="wait"
            onExitComplete={() => handleScrollTop({ smooth: false })}
          >
            <FadeInOut
              className={S.Main}
              renderAs={m["main"]}
              key={"main" + asPath}
              duration={COMMONS.defaultTransitionDuration}
            >
              {children}
            </FadeInOut>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <Footer key={"footer" + asPath} />
          </AnimatePresence>
        </MotionConfig>
      </LazyMotion>
    </>
  );
};
export default Layout;
