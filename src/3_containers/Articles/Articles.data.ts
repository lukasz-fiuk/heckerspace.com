import { gql } from "graphql-request";
import { GetStaticProps } from "next";

import { getArticleList } from "queries/getArticleList.module";
import { getRecentArticles } from "queries/getRecentArticles";
import { client } from "utils/cmsClient";
import { convertMinutesToSeconds } from "utils/convertMinutesToSeconds.ts";

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    {
      content: page(where: { slug: "articles" }) {
        modules {
         ${getArticleList()}
        }
      }
      recentArticles:   articles(orderBy: publishedAt_ASC) ${getRecentArticles()}
    }
  `;

  const data = await client.request(query);
  const { content, recentArticles } = data;

  return {
    props: { recentArticles, ...content },
    revalidate: convertMinutesToSeconds(15),
  };
};
