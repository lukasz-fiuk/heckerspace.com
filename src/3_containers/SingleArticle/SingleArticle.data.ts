import { gql } from "graphql-request";
import { GetStaticProps, GetStaticPaths } from "next";

import { getHead } from "queries/getHead";
import { client } from "utils/cmsClient";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = gql`
  {
    articles(where: { slug: "${params!.slug}" }) {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    {
      posts: articles {
        slug
      }
    }
  `;
  const data = await client.request(query);

  return {
    paths: data.posts.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: "blocking",
  };
};
