import { FC, ReactNode } from "react";

import { AnimatePresence, m } from "framer-motion";
import { useRouter } from "next/router";

import IntroAnimation from "1_components/IntroAnimation/IntroAnimation";
import ScrollProgress from "1_components/ScrollProgress/ScrollProgress";
import SEO, { SeoProps } from "1_components/SEO/SEO";
import Footer from "2_sections/Footer/Footer";
import Header from "2_sections/Header/Header";
import { COMMONS } from "styled/commons";
import { handleScrollTop } from "utils/handleScrollTop";

import * as S from "./Layout.styled";

export interface LayoutProps {
  children: ReactNode;
  head: SeoProps;
}

const Layout: FC<LayoutProps> = ({ children, head }) => {
  const { asPath } = useRouter();

  return (
    <>
      <IntroAnimation />
      <SEO {...head} />
      <Header />

      <AnimatePresence mode="wait" initial={false}>
        <ScrollProgress key={"scrollProgress" + asPath} />
      </AnimatePresence>

      <AnimatePresence
        mode="wait"
        onExitComplete={() => handleScrollTop({ smooth: false })}
      >
        <S.Main
          renderAs={m["main"]}
          key={"main" + asPath}
          duration={COMMONS.defaultTransitionDuration}
        >
          {children}
        </S.Main>
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <Footer key={"footer" + asPath} />
      </AnimatePresence>
    </>
  );
};
export default Layout;
