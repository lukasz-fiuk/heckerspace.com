import { gql } from "graphql-request";

import { getChapter } from "queries/getChapter.module";
import { getHead } from "queries/getHead";
import { getMedia } from "queries/getMedia";
import { client } from "utils/cmsClient";
import { extractChapterNames } from "utils/extractChapterNames";

import { ArticleProps } from "./SingleArticle";

export const getArticle = async (slug: string) => {
  console.log({ slug });
  const fetchArticle = gql`
    {
      article(where: { slug: "${slug}" }) {
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
    ...article,
    createdAt,
    nextArticleContent,
    ...badges,
    chaptersList,
  } as ArticleProps;
};

export const generateStaticParams = async () => {
  const query = gql`
    {
      posts: articles {
        slug
      }
    }
  `;
  const data = await client.request(query);
  const paths = data.posts.map((post: any) => ({ slug: post.slug }));
  return paths;
};
