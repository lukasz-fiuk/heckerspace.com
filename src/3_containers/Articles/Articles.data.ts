import { gql } from "graphql-request";
import { GetStaticProps } from "next";

import { getArticleList } from "queries/getArticleList.module";
import { client } from "utils/cmsClient";

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    {
      content: page(where: { slug: "articles" }) {
        modules {
         ${getArticleList()}
        }
      }
      recentArticles: articles {
        id
        slug
        title
      }
    }
  `;

  const data = await client.request(query);
  const { content, recentArticles } = data;

  return {
    props: { recentArticles, ...content },
    revalidate: 60 * 60,
  };
};
