import Article from "3_containers/SingleArticle/SingleArticle";
import { getArticle } from "3_containers/SingleArticleApp/SingleArticle.data";

const ArticleApp = async () => {
  const data = await getArticle("hello-heckers");

  return <Article {...data} />;
};
export default ArticleApp;
