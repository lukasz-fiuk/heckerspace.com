import { gql } from "graphql-request";
import { GetStaticProps, GetStaticPaths } from "next";

import { getChapter } from "queries/getChapter.module";
import { getHead } from "queries/getHead";
import { getMedia } from "queries/getMedia";
import { client } from "utils/cmsClient";
import { convertMinutesToSeconds } from "utils/convertMinutesToSeconds.ts";
import { extractChapterNames } from "utils/extractChapterNames";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fetchArticle = gql`
  {
    article(where: { slug: "${params!.slug}" }) {
      head ${getHead()}
      id
      createdAt
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
  const { createdAt } = article;

  const fetchNextArticle = gql`
  {
    nextArticle: articlesConnection(
      first:1
      orderBy: createdAt_DESC
      where: {createdAt_lt: "${createdAt}"}
    ) {
      edges {
        node {
          id
          title
          slug
          modules {
           ${getChapter()}
          }
          createdAt
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

  const badges = {
    completedBadge: "completed 🙌",
    viewedBadge: "viewed 👀",
  };

  const chaptersList = extractChapterNames(article.modules);

  return {
    props: {
      ...article,
      createdAt,
      nextArticleContent,
      ...badges,
      chaptersList,
    },
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
