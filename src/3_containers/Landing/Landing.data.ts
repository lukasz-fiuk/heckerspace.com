import { gql } from "graphql-request";
import { GetStaticProps } from "next";

import { client } from "utils/cmsClient";

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    {
      content: page(where: { slug: "/" }) {
        modules {
          ... on ArticleList {
            id
            __typename
            title
            completedLabel
            viewedLabel
            buttonHref
            buttonLabel
            buttonHoverDirection
            buttonIcon
            buttonReverse
          }
          ... on Hero {
            id
            __typename
            title
          }
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
