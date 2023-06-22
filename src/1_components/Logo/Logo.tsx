import { FC } from "react";

import { usePathname } from "next/navigation";

import Icon from "1_components/Icon/Icon";
import { handleScrollTop } from "utils/handleScrollTop";

import * as S from "./Logo.styled";

export interface LogoProps {
  href?: string;
  variant?: "logoType" | "logoMark";
}

const Logo: FC<LogoProps> = ({ href = "/", variant = "logoType", ...rest }) => {
  const currentPath = usePathname();

  function handleRedirect(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    if (href === currentPath) {
      event.preventDefault();
      handleScrollTop();
    }
  }

  return (
    <S.LogoWrapper
      href={href}
      aria-label="Home"
      title="Return to the homepage"
      onClick={handleRedirect}
      scroll={false}
      {...rest}
    >
      <Icon variant={variant} />
    </S.LogoWrapper>
  );
};
export default Logo;
