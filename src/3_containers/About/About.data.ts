import { gql } from "graphql-request";
import { GetStaticProps } from "next";

import { getChapter } from "queries/getChapter.module";
import { getHead } from "queries/getHead";
import { getMedia } from "queries/getMedia";
import { client } from "utils/cmsClient";
import { convertMinutesToSeconds } from "utils/convertMinutesToSeconds.ts";

export const getStaticProps: GetStaticProps = async () => {
  const fetchArticle = gql`
  {
    article(where: { slug: "hello-heckers" }) {
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

  const data = await client.request(fetchArticle);
  const { article } = data;
  const { publishedAt } = article;

  const fetchNextArticle = gql`
  {
    nextArticle: articlesConnection(
      first:1
      orderBy: publishedAt_DESC
      where: {publishedAt_lt: "${publishedAt}"}
    ) {
      edges {
        node {
          id
          title
          slug
          modules {
           ${getChapter()}
          }
          publishedAt
        }
      }
    }
  }
`;

  const nextData = await client.request(fetchNextArticle);
  const { nextArticle } = nextData;
  const nextArticleContent = nextArticle.edges[0]
    ? nextArticle.edges[0].node
    : "";

  return {
    props: { ...article, publishedAt, nextArticleContent },
    revalidate: convertMinutesToSeconds(15),
  };
};
