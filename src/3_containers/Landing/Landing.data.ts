import { gql } from "graphql-request";
import { GetStaticProps } from "next";

import { getArticleList } from "queries/getArticleList.module";
import { getHero } from "queries/getHero.module";
import { client } from "utils/cmsClient";

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    {
      content: page(where: { slug: "/" }) {
        modules {
          ${getArticleList()}
          ${getHero()}
        }
      }
      recentArticles: articles(last: 5) {
        id
        slug
        title
      }
    }
  `;

  const data = await client.request(query);
  const { recentArticles, content } = data;

  return {
    props: { recentArticles, ...content },
    revalidate: 60 * 60,
  };
};
