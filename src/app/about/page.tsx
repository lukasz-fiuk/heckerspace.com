export { default } from "3_containers/SingleArticleApp/SingleArticle";

export const generateStaticParams = async () => {
  return [{ slug: "hello-heckers" }];
};
