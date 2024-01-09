import { useAppContext } from "../contexts/AppContext";
import newsData from "../data/news.json";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import { useNavigate } from "react-router-dom";

const NewsListCont = () => {
  const categories = newsData?.categories;
  const navigate = useNavigate();
  const { currentPage } = useAppContext();

  return (
    <ul className="bg-[#2a3543]/60 text-white dark:text-[#d1d5db] dark:bg-[#5a636b] w-full pl-[0px] md:pl-0 lg:px-[10%] md:h-[60px] gap-3 md:gap-6 items-center justify-start flex overflow-x-auto whitespace-nowrap no-scrollbar border-t-2 border-orange-500">
      <li
        onClick={() => navigate("/news")}
        className={`w-fit cursor-pointer hover:bg-white/30 dark:hover:bg-[#2a3543] transition-all duration-300 text-[.8rem] md:text-[.9rem] px-5 py-[12px] md:py-1 lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center  ${
          currentPage === "/news"
            ? "text-orange-500 bg-[#d1d5db] dark:bg-[#2a3543]"
            : "dark:text-white lg:bg-white/10"
        }`}
      >
        All
      </li>

      {categories?.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => navigate(`/news/${item?.title}`)}
            className={`w-fit h-fit cursor-pointer hover:bg-white/30 dark:hover:bg-[#2a3543] transition-all duration-300 text-[.8rem] md:text-[.9rem] px-5 py-[12px] md:py-1 lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center  ${
              currentPage === `/news/${item?.title}`
                ? "text-orange-500 bg-[#d1d5db] md:bg-[#2a3543] dark:bg-[#2a3543]"
                : "dark:text-white lg:bg-white/10"
            }`}
          >
            {capitalizeFirstLetter(item?.title)}
          </li>
        );
      })}

      {/* <li
        // onClick={() => navigate("/")}
        className={`w-fit cursor-pointer hover:bg-white/30 dark:hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-5 py-[12px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
      >
        Football
      </li> */}
      {/* <li
          // onClick={() => navigate("/")}
          className={`w-fit cursor-pointer hover:bg-white/30 dark:hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
        >
          <img
            alt=""
            src="/images/icons8-tennis-50.png"
            className="w-4 md:w-5 h-auto"
          />
          Tennis
        </li>
        <li
          // onClick={() => navigate("/")}
          className={`w-fit cursor-pointer hover:bg-white/30 dark:hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
        >
          <img
            alt=""
            src="/images/icons8-hockey-50.png"
            className="w-4 md:w-5 h-auto"
          />
          Hockey
        </li>
        <li
          // onClick={() => navigate("/")}
          className={`w-fit cursor-pointer hover:bg-white/30 dark:hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
        >
          <img
            alt=""
            src="/images/icons8-volleyball-50.png"
            className="w-4 md:w-5 h-auto"
          />
          Volleyball
        </li>
  
        <li
          // onClick={() => navigate("/")}
          className={`w-fit cursor-pointer hover:bg-white/30 dark:hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
        >
          <img
            alt=""
            src="/images/icons8-handball-50.png"
            className="w-4 md:w-5 h-auto"
          />
          Handball
        </li> */}

      {/* <li className="ml-14 border border-orange-500 rounded-md px-3 py-1 md:flex gap-2 items-center cursor-pointer hidden">
          <img
            alt="calendar"
            src="/images/icons8-great-britain-48.png"
            className="w-6 h-auto"
          />
          <p>EN</p>
        </li> */}
    </ul>
  );
};

export default NewsListCont;
