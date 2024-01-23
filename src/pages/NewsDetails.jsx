/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import { useAppContext } from "../contexts/AppContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import NewsContentjsxElement from "../components/NewsContentjsxElement";
import NewsContentImageElement from "../components/NewsContentImageElement";
// import Loader from "../components/Loader";
import ArticleBanner from "../components/ArticleBanner";
import ScrollToTop from "../ScrollToTop";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";

const NewsDetails = () => {
  const { isDarkMode, getNewsDetails, newsDetailsData, loading2 } =
    useAppContext();

  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [body, setbody] = useState(null);

  useEffect(() => {
    if (newsDetailsData) {
      setArticle(newsDetailsData?.article);
      setbody(newsDetailsData?.article?.body);
    }
    return () => {
      setArticle(null);
      setbody(null);
    };
  }, [newsDetailsData]);

  useEffect(() => {
    getNewsDetails(id);
  }, [id]);

  // const article = newsDetailsData?.article;
  // const body = article?.body;

  const defaultAvatar = isDarkMode
    ? "/images/logo-white.png"
    : "/images/logo-black.png";
  const avatar = article?.authors[0]?.avatar_url || defaultAvatar;

  const related = article?.related?.relatedArticles;

  return (
    <>
      <Header />
      {/* {loading2 && <Loader />} */}

      <div
        className={`w-full pt-[130px] md:pt-[170px] pb-3 md:pb-5 md:px-[10%] bg-[#d1d5db] text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200 ${
          isDarkMode ? "dark" : ""
        }`}
      >
        {loading2 && (
          <div
            className={`w-full md:w-[60%] md:min-w-[700px] md:max-w-[800px] min-h-[400px] flex justify-center items-center md:rounded-lg px-5 py-5 mt-5  ${
              isDarkMode ? "bg-[#1d2732]" : "bg-white"
            }`}
          >
            <ScaleLoader color={"#f97316"} size={100} />
          </div>
        )}
        {!loading2 && (
          <div className="w-full h-full flex gap-8">
            <div
              className={`w-full md:w-[60%] md:min-w-[700px] md:max-w-[800px] min-h-screen md:rounded-lg px-5 py-5 mt-5  ${
                isDarkMode ? "bg-[#1d2732]" : "bg-white"
              }`}
            >
              <div
                className={`w-full ${isDarkMode ? "text-white" : "text-black"}`}
              >
                <h1 className=" text-[1.68rem] md:text-[2rem] font-black mb-1 md:mb-2 ">
                  {article?.title}
                </h1>

                <ArticleBanner avatar={avatar} article={article} />

                <img
                  src={article?.mainMedia[0]?.original?.url}
                  alt={article?.mainMedia[0]?.original?.alt}
                  className=" w-full h-auto min-h-[250px] rounded-lg my-b md:mb-2 mt-4 object-cover "
                />
                <p className=" text-[0.8rem] mt-1">
                  {article?.mainMedia[0]?.original?.alt}
                </p>

                <h3 className=" font-bold text-[1.12rem] md:text-[1.2rem] my-4 md:my-7 ">
                  {article?.subTitle}
                </h3>

                <div className="w-full flex flex-col gap-5 mb-5">
                  {body?.map((itm, ind) => {
                    const content = itm?.data?.content;
                    const type = itm?.type;
                    const image = itm?.image?.original;

                    return (
                      <React.Fragment key={ind}>
                        {type === "editor_block" ? (
                          <NewsContentjsxElement content={content} />
                        ) : type === "image" ? (
                          <NewsContentImageElement image={image} />
                        ) : (
                          ""
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                <ArticleBanner avatar={avatar} article={article} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`w-full md:pb-12 md:px-[10%] bg-[#d1d5db] text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200 ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <div
          className={`w-full md:w-[60%] md:min-w-[700px] md:max-w-[800px] min-h-screen md:rounded-lg px-5 py-5 ${
            isDarkMode ? "bg-[#1d2732]" : "bg-white"
          }`}
        >
          <div className={`w-full ${isDarkMode ? "text-white" : "text-black"}`}>
            <h3 className=" font-bold text-[1.1rem] mb-4 ">Related News</h3>
            {related?.map((item, index) => {
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

      <Footer />
      <BottomBar />
      <ScrollToTop />
    </>
  );
};

export default NewsDetails;
