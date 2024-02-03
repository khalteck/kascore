/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import newsData from "../data/news.json";
import FeaturedNewsCard2 from "./FeaturedNewsCard2";

const FeaturedNewsCont = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const featured = newsData?.featuredArticles;

  return (
    <div
      className={`w-full h-fit ${isDarkMode ? " bg-[#1d2732]" : "bg-gray-100"}`}
    >
      <div
        onClick={() => navigate("/news")}
        className={`flex items-center justify-between md:border cursor-pointer py-2 px-2 mb-4 rounded-lg ${
          isDarkMode ? "md:border-neutral-100/20" : "border-black/20"
        }`}
      >
        <p className=" text-[.85rem] font-bold ">Featured News</p>
        <img
          src={
            isDarkMode
              ? "/images/icons8-right-arrow-30.png"
              : "/images/icons8-right-arrow-50.png"
          }
          alt=""
          className=" w-5 h-5 "
        />
      </div>
      <div className="flex flex-col gap-3">
        {" "}
        {featured?.map((item, index) => {
          return <FeaturedNewsCard2 key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedNewsCont;
