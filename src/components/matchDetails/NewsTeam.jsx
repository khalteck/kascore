import newsData from "../../data/news.json";
import NewsCard from "../NewsCard";
import ScrollToTop from "../../ScrollToTop";

const NewsTeam = () => {
  const news = newsData?.featuredArticles;
  return (
    <>
      <div className="w-full flex flex-col gap-3">
        {news?.map((item, index) => {
          return <NewsCard key={index} item={item} />;
        })}
      </div>
      <ScrollToTop />
    </>
  );
};

export default NewsTeam;
