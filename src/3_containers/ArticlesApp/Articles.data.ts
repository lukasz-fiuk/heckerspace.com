import { gql } from "graphql-request";

import { getArticleList } from "queries/getArticleList.module";
import { getRecentArticles } from "queries/getRecentArticles";
import { client } from "utils/cmsClient";

import { ArticlesProps } from "./Articles";

export const getArticlesData = async () => {
  const query = gql`
    {
      content: page(where: { slug: "articles" }) {
        modules {
         ${getArticleList()}
        }
      }
      recentArticles:   articles(orderBy: createdAt_ASC) ${getRecentArticles()}
    }
  `;

  const data = await client.request(query);
  const { content, recentArticles } = data;

  return { recentArticles, ...content } as ArticlesProps;
};
