import { FC, ReactNode } from "react";

import Icon from "1_components/Icon/Icon";

import S from "./ListItem.module.scss";

export interface ListItemProps {
  children: ReactNode;
}

const ListItem: FC<ListItemProps> = ({ children, ...rest }) => {
  return (
    <li className={S.ListItemWrapper} {...rest}>
      <Icon className={S.ArrowRight} variant="arrowRight" />
      <div className={S.Content}>{children}</div>
    </li>
  );
};
export default ListItem;
