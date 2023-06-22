import { gql } from "graphql-request";

import { getArticleList } from "queries/getArticleList.module";
import { getHero } from "queries/getHero.module";
import { getRecentArticles } from "queries/getRecentArticles";
import { client } from "utils/cmsClient";

import { LandingProps } from "./Landing";

export const getLandingData = async () => {
  const query = gql`
    {
      content: page(where: { slug: "/" }) {
        modules {
          ${getArticleList()}
          ${getHero()}
        }
      }
      recentArticles: articles(first: 5, orderBy: createdAt_DESC) ${getRecentArticles()}
    }
  `;

  const data = await client.request(query);
  const { recentArticles, content } = data;

  return { recentArticles, ...content } as LandingProps;
};
