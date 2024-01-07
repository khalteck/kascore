/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../components/Footer";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import ScrollToTop from "../ScrollToTop";
import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
// import newsData from "../data/news.json";
import FeaturedNewsCard from "../components/FeaturedNewsCard";
import NewsCard from "../components/NewsCard";

const News = () => {
  // NEWS API KEY="8cbe94ecef2445ea9b78d1a803d05406"

  const { getNews, newsData } = useAppContext();

  useEffect(() => {
    getNews();
  }, []);

  // console.log("newsData", newsData);
  const featured = newsData?.featuredArticles;
  const topStories = newsData?.topStories;

  return (
    <>
      <Header />
      <div className="w-full pt-[130px] md:pt-[150px] md:pb-12 md:px-[10%] bg-white text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200">
        <div className="w-full h-full flex gap-8">
          <div className="w-full md:w-[60%] md:min-w-[700px] md:max-w-[800px] min-h-screen md:border border-black/20 dark:border-neutral-100/10 rounded-lg px-3 py-5 mt-5">
            <h1 className="font-bold mb-2">Featured News</h1>
            <div className="w-full h-[200px] flex gap-3 items-center rounded-lg overflow-x-scroll no-scrollbar overflow-y-hidden ">
              {featured?.map((item, index) => {
                return <FeaturedNewsCard key={index} item={item} />;
              })}
            </div>

            <div className=" w-full h-[50px] "></div>

            <div className=" py-5 md:border-y md:border-neutral-100/20 ">
              <h1 className=" font-bold text-[1rem]">Top Stories</h1>
            </div>
            <div className="w-full h-auto md:py-3 block gap-2">
              {topStories?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border-b py-3 border-black/20 dark:border-neutral-100/20"
                  >
                    <NewsCard item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop />
      <Footer />
      <BottomBar />
    </>
  );
};

export default News;
