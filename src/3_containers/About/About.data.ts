import { gql } from "graphql-request";
import { GetStaticProps } from "next";

import { getChapter } from "queries/getChapter.module";
import { getHead } from "queries/getHead";
import { getMedia } from "queries/getMedia";
import { client } from "utils/cmsClient";

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
  {
    articles(where: { slug: "hello-heckers" }) {
      head ${getHead()}
      id
      publishedAt
      title
      cover ${getMedia()}
      modules {
        ${getChapter()}
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
