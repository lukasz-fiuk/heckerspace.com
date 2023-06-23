import { FC } from "react";

import Comments from "1_components/Comments/Comments";

import S from "./Discussion.module.scss";

export interface DiscussionProps {}

const Discussion: FC<DiscussionProps> = ({ ...rest }) => {
  return (
    <section
      {...rest}
      className={S.DiscussionWrapper}
      aria-label="Comments section"
    >
      <h2 className={S.Title}>Comments 💬</h2>
      <Comments />
    </section>
  );
};
export default Discussion;
