import { gql } from "graphql-request";
import { GetStaticProps, GetStaticPaths } from "next";

import { getChapter } from "queries/getChapter.module";
import { getHead } from "queries/getHead";
import { getMedia } from "queries/getMedia";
import { client } from "utils/cmsClient";
import { convertMinutesToSeconds } from "utils/convertMinutesToSeconds.ts";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = gql`
  {
    articles(where: { slug: "${params!.slug}" }) {
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
    revalidate: convertMinutesToSeconds(15),
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
