import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SportListCont from "./SportListCont";
import SportListSearch from "./SportListSearch";
import CountriesTray from "./CountriesTray";
import { useAppContext } from "../contexts/AppContext";
import NewsListCont from "./NewsListCont";
import MobileScoresNewsTab from "./MobileScoresNewsTab";

const Header = () => {
  const { currentPage, toggleMode, isDarkMode } = useAppContext();

  const navigate = useNavigate();

  const [openSearch, setOpenSearch] = useState(false);
  function toggleSearch() {
    setOpenSearch((prev) => !prev);
  }

  return (
    <>
      <header
        className={`w-full bg-[#d1d5db] text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200 flex justify-between items-center transition-all duration-700 fixed top-0 left-0 z-30 font-mont`}
      >
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-row md:flex-col items-center md:items-start pr-3 md:pr-0">
            <div className="w-full flex justify-between items-center gap-5 h-[60px] md:h-[70px] lg:px-[10%] px-3">
              <div
                onClick={() => navigate("/")}
                className="flex items-center cursor-pointer"
              >
                <img
                  alt=""
                  src={
                    !isDarkMode
                      ? "/images/logo-white.png"
                      : "/images/logo-black.png"
                  }
                  className="w-8 md:w-10 h-auto"
                />
                <h1 className="text-[1.75rem] md:text-[2rem] font-black">
                  Kascore
                </h1>
              </div>

              <div className="hidden md:flex items-center border border-[#334155] bg-[#d1d5db] dark:bg-black/30 px-2 rounded-md">
                <img
                  src={
                    !isDarkMode
                      ? "/images/icons8-search-64.png"
                      : "/images/icons8-search-black.png"
                  }
                  alt=""
                  className="w-7 h-7 opacity-70"
                />
                <input
                  type="text"
                  className="w-[300px] bg-[#d1d5db] dark:bg-transparent py-2 px-3 outline-none dark:placeholder:text-inherit placeholder:text-black/60"
                  placeholder="Search"
                />
              </div>

              <ul className="hidden md:flex gap-5 items-center">
                <li
                  onClick={() => navigate("/")}
                  className="flex gap-2 items-center hover:text-orange-500 cursor-pointer transition-all duration-300"
                >
                  <img
                    alt=""
                    src={
                      currentPage === "/"
                        ? "/images/icons8-football-orange.png"
                        : !isDarkMode
                        ? "/images/icons8-football-50.png"
                        : "/images/icons8-football-black.png"
                    }
                    className="w-5 h-auto"
                  />
                  <p className={`${currentPage === "/" && "text-orange-500"}`}>
                    Scores
                  </p>
                </li>

                <li
                  onClick={() => navigate("/news")}
                  className="flex gap-2 items-center hover:text-orange-500 cursor-pointer transition-all duration-300"
                >
                  <img
                    alt=""
                    src={
                      currentPage === "/news"
                        ? "/images/icons8-news-orange.png"
                        : !isDarkMode
                        ? "/images/icons8-news-64.png"
                        : "/images/icons8-news-black.png"
                    }
                    className="w-5 h-auto"
                  />
                  <p
                    className={`${
                      currentPage === "/news" && "text-orange-500"
                    }`}
                  >
                    News
                  </p>
                </li>

                <li
                  onClick={() => navigate("/favorites")}
                  className="flex gap-2 items-center hover:text-orange-500 cursor-pointer transition-all duration-300"
                >
                  <img
                    alt=""
                    src={
                      currentPage === "/favorites"
                        ? "/images/icons8-star-50.png"
                        : !isDarkMode
                        ? "/images/icons8-star-white.png"
                        : "/images/icons8-star-black.png"
                    }
                    className={` ${!isDarkMode ? "w-5" : "w-6"} h-auto`}
                  />
                  <p
                    className={`${
                      currentPage === "/favorites" && "text-orange-500"
                    }`}
                  >
                    Favorites
                  </p>
                </li>

                {/* darkmode toggle */}
                <li className="ml-8">
                  {" "}
                  <img
                    onClick={toggleMode}
                    alt=""
                    src={
                      !isDarkMode
                        ? "/images/icons8-light-mode-78.png"
                        : "/images/icons8-dark-mode-100.png"
                    }
                    className={`h-auto cursor-pointer ${
                      isDarkMode ? "w-7" : "w-10"
                    }`}
                  />
                </li>
                <li className="border border-orange-500 rounded-md px-3 py-1 md:flex gap-2 items-center cursor-pointer hidden">
                  <img
                    alt="calendar"
                    src="/images/icons8-great-britain-48.png"
                    className="w-6 h-auto"
                  />
                  <p>EN</p>
                </li>
              </ul>
            </div>

            {currentPage !== "/news" && (
              <img
                src={
                  !isDarkMode
                    ? "/images/icons8-search-64.png"
                    : "/images/icons8-search-black.png"
                }
                alt=""
                className="w-7 h-7 md:hidden mr-3"
                onClick={toggleSearch}
              />
            )}

            <div
              onClick={toggleMode}
              className={`p-1 rounded-md bg-gray-200 dark:bg-[#1d2732]`}
            >
              <img
                alt=""
                src={
                  !isDarkMode
                    ? "/images/icons8-light-mode-78.png"
                    : "/images/icons8-dark-mode-100.png"
                }
                className={`h-auto cursor-pointer md:hidden ${
                  isDarkMode ? "w-7" : "w-[35px]"
                }`}
              />
            </div>
          </div>

          <MobileScoresNewsTab
            currentPage={currentPage}
            isDarkMode={isDarkMode}
          />
          {currentPage === "/news" ? <NewsListCont /> : <SportListCont />}
        </div>
      </header>

      {openSearch && (
        <div className="w-full h-screen overflow-y-auto fixed top-0 left-0 pt-4 pb-[80px] bg-white dark:bg-[#1d2732] z-40 dark:text-neutral-100">
          <div className="w-full flex gap-3 items-center px-3 mb-3">
            <input
              type="text"
              placeholder="Search by country..."
              className="w-full border border-black/20 dark:border-neutral-100/30 rounded-md bg-inherit outline-none px-2 py-1 placeholder:text-[.85rem]"
            />
            <img
              alt="calendar"
              // src="/images/icons8-close-50.png"
              src={
                !isDarkMode
                  ? "/images/icons8-close-50.png"
                  : "/images/icons8-close-black.png"
              }
              className="w-6 h-auto"
              onClick={toggleSearch}
            />
          </div>

          <div>
            <SportListSearch />
          </div>

          <div className="w-full">
            <CountriesTray isDarkMode={isDarkMode} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
