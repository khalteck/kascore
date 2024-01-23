/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../components/Footer";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import ScrollToTop from "../ScrollToTop";
import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
// import newsData from "../data/news.json";
// import categoryData from "../data/newsCategory.json";

import FeaturedNewsCard from "../components/FeaturedNewsCard";
// import NewsCard from "../components/NewsCard";

import NewsCardByCat from "../components/NewsCardByCat";
import { useParams } from "react-router-dom";
import NewsSkeleton from "../components/NewsSkeleton";
import { ScaleLoader } from "react-spinners";

const News2 = () => {
  const { category } = useParams();
  const {
    getNews,
    newsData,
    getNewsByCategory,
    categoryData,
    loading,
    loading2,
    isDarkMode,
  } = useAppContext();

  useEffect(() => {
    getNews();
  }, []);

  const featured = newsData?.featuredArticles;
  const categories = newsData?.categories;
  const currentCategory = categories?.filter(
    (itm) => itm?.title === category
  )[0];

  //   console.log("currentCategory", currentCategory);

  useEffect(() => {
    if (currentCategory?.id?.length > 5) {
      getNewsByCategory(currentCategory?.id, "1");
    }
  }, [currentCategory]);

  const newsData2 = categoryData?.data;

  //   console.log("newsData2", newsData2);

  return (
    <>
      <Header />
      <div className="w-full pt-[130px] md:pt-[150px] md:pb-12 md:px-[10%] bg-gray-100 text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200">
        <div className="w-full h-full flex gap-8">
          {(loading2 || loading) && (
            <div
              className={`w-full md:w-[60%] md:min-w-[700px] md:max-w-[800px] min-h-[80vh] flex justify-center items-center md:rounded-lg px-5 py-5 mt-5  ${
                isDarkMode ? "bg-[#1d2732]" : "bg-gray-200"
              }`}
            >
              <ScaleLoader color={"#f97316"} size={100} />
            </div>
          )}

          {!loading2 && !loading && (
            <div className="w-full md:w-[60%] md:min-w-[700px] md:max-w-[800px] min-h-screen md:border border-black/20 dark:border-neutral-100/10 rounded-lg px-3 py-5 mt-5">
              {currentCategory?.title?.includes("football") && (
                <div className="w-full h-[200px] flex gap-3 items-center rounded-lg overflow-x-scroll no-scrollbar overflow-y-hidden ">
                  {featured?.map((item, index) => {
                    return <FeaturedNewsCard key={index} item={item} />;
                  })}
                </div>
              )}

              <div className="w-full h-auto md:py-3 block gap-2">
                {loading2 && <NewsSkeleton />}
                {!loading2 &&
                  newsData2?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="border-b py-3 border-black/20 dark:border-neutral-100/20"
                      >
                        <NewsCardByCat item={item} />
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </div>

      <ScrollToTop />
      <Footer />
      <BottomBar />
    </>
  );
};

export default News2;
