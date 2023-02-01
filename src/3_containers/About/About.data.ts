import { gql } from "graphql-request";
import { GetStaticProps } from "next";

import { getHead } from "queries/getHead";
import { client } from "utils/cmsClient";

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
  {
    articles(where: { slug: "hello-heckers" }) {
      ${getHead()}
      id
      publishedAt
      title
      cover {
        height
        url
        width
        fileName
      }
      modules {
        ... on Chapter {
          id
          __typename
          chapterName
          content
        }
      }
    }
  }
  
  `;

  const data = await client.request(query);
  const { articles } = data;

  return {
    props: articles[0],
    revalidate: 60 * 60,
  };
};
