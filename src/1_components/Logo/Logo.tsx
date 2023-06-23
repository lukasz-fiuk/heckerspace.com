import { FC } from "react";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon from "1_components/Icon/Icon";
import { handleScrollTop } from "utils/handleScrollTop";

import S from "./Logo.module.scss";

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
    <Link
      {...rest}
      className={clsx(S.LogoWrapper, className)}
      href={href}
      aria-label="Home"
      title="Return to the homepage"
      onClick={handleRedirect}
      scroll={false}
    >
      <Icon variant={variant} />
    </Link>
  );
};
export default Logo;
