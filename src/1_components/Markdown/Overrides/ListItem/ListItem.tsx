import React, { FC, ReactNode } from "react";

import * as S from "./ListItem.styled";

export interface ListItemProps {
  children: ReactNode;
}

const ListItem: FC<ListItemProps> = ({ children, ...rest }) => {
  return (
    <S.ListItemWrapper {...rest}>
      <S.ArrowRight variant="arrowRight" />
      <S.Content>{children}</S.Content>
    </S.ListItemWrapper>
  );
};
export default ListItem;
