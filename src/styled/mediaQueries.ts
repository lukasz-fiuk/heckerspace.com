import { COMMONS } from "./commons";

const customMediaQuery = (value: number) => `@media (min-width: ${value}px)`;

const media = {
  tablet: customMediaQuery(COMMONS.breakpoints.tablet),
  desktop: customMediaQuery(COMMONS.breakpoints.desktop),
  desktopLarge: customMediaQuery(COMMONS.breakpoints.desktopLarge),
};

export default media;
