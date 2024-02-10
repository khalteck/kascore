import { useAppContext } from "../contexts/AppContext";
import newsData from "../data/news.json";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import { useNavigate } from "react-router-dom";

const NewsListCont = () => {
  const categories = newsData?.categories;
  const navigate = useNavigate();
  const { currentPage, isDarkMode } = useAppContext();

  const scrollListToRight = () => {
    const listElement = document.getElementById("list");
    if (listElement) {
      listElement.scrollTo({
        left: listElement.scrollLeft + 180,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <ul
        id="list"
        className="bg-[#2a3543]/60 text-white dark:text-[#d1d5db] dark:bg-[#5a636b] w-full px-3 lg:px-[10%] h-[50px] md:h-[60px] gap-3 md:gap-6 items-center justify-start flex overflow-x-auto whitespace-nowrap no-scrollbar md:border-t-2 border-orange-500"
      >
        <li
          onClick={() => navigate("/news")}
          className={`w-fit h-fit cursor-pointer hover:bg-white/40 dark:hover:bg-[#2a3543] transition-all duration-300 text-[.8rem] md:text-[.9rem] px-5 py-1 font-bold rounded-full flex lg:flex-row flex-col lg:gap-2 items-center  ${
            currentPage === "/news"
              ? "text-orange-500 bg-[#d1d5db] dark:bg-[#2a3543]"
              : "dark:text-white bg-white/20"
          }`}
        >
          All
        </li>

        {categories?.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => navigate(`/news/${item?.title}`)}
              className={`w-fit h-fit cursor-pointer hover:bg-white/40 dark:hover:bg-[#2a3543] transition-all duration-300 text-[.8rem] md:text-[.9rem] px-5 py-1 font-bold rounded-full flex lg:flex-row flex-col lg:gap-2 items-center  ${
                currentPage === `/news/${item?.title}`
                  ? "text-orange-500 bg-[#d1d5db] dark:bg-[#2a3543]"
                  : "dark:text-white bg-white/20"
              }`}
            >
              {capitalizeFirstLetter(item?.title)}
            </li>
          );
        })}
      </ul>
      <div
        onClick={scrollListToRight}
        className="w-[50px] h-[48px] md:h-[60px] bg-gradient-to-l from-[#d1d5db] dark:from-[#1d2732] to-transparent absolute top-[107px] right-0 md:hidden flex items-center justify-end px-1"
      >
        <img
          alt=""
          src={
            !isDarkMode
              ? "/images/icons8-right-arrow-black.png"
              : "/images/icons8-right-arrow-white.png"
          }
          className="w-5 h-5 opacity-70"
        />
      </div>
    </>
  );
};

export default NewsListCont;
