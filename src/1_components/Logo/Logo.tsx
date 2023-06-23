import { FC } from "react";

import clsx from "clsx";
import { usePathname } from "next/navigation";

import Icon from "1_components/Icon/Icon";
import { handleScrollTop } from "utils/handleScrollTop";

import * as S from "./Logo.styled";

export interface LogoProps {
  href?: string;
  variant?: "logoType" | "logoMark";
  className?: string;
}

const Logo: FC<LogoProps> = ({
  href = "/",
  className,
  variant = "logoType",
  ...rest
}) => {
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
      {...rest}
      className={clsx(className)}
      href={href}
      aria-label="Home"
      title="Return to the homepage"
      onClick={handleRedirect}
      scroll={false}
    >
      <Icon variant={variant} />
    </S.LogoWrapper>
  );
};
export default Logo;
