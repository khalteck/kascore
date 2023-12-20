import Footer from "../components/Footer";
import Header from "../components/Header";
import CountriesTray from "../components/CountriesTray";
import BottomBar from "../components/BottomBar";
import { useAppContext } from "../contexts/AppContext";
import FeaturedNewsCont from "../components/FeaturedNewsCont";
import ScrollToTop from "../ScrollToTop";

const Favorites = () => {
  const { isDarkMode } = useAppContext();

  return (
    <>
      <Header />
      <div className="w-full pt-[85px] md:pt-[170px] md:pb-12 md:px-[10%] bg-white text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200">
        <div className="w-full h-full min-h-screen flex gap-8">
          <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray isDarkMode={isDarkMode} />
          </div>

          <div className="w-full md:w-[50%] md:min-w-[550px] md:bg-gray-100 dark:bg-[#1d2732] h-full rounded-lg px-3 py-5 mt-5 md:mt-0">
            {/* <div className="w-full mb-4 md:mb-0">
              <DateSlide />
            </div> */}

            <div className="w-full h-[550px] bg-gray-100 dark:bg-[#121a20]/50 md:mt-5 rounded-lg md:border md:dark:border-neutral-100/10 pb-5 ">
              <div className=" w-full flex gap-6 py-3 px-5 mb-5 font-medium dark:text-neutral-100/75 rounded-t-lg border-b border-black/20 dark:border-neutral-100/10 md:border-black/20 md:dark:border-neutral-100/20 ">
                <a
                  href="#"
                  className=" dark:hover:text-white text-[0.8rem] uppercase "
                >
                  Competitions
                </a>

                <a
                  href="#"
                  className=" dark:hover:text-white text-[0.8rem] uppercase"
                >
                  Teams
                </a>

                <a
                  href="#"
                  className=" dark:hover:text-white text-[0.8rem] uppercase"
                >
                  Matches
                </a>
              </div>

              <div className=" w-full h-auto flex justify-center  items-center px-5 ">
                <div className=" w-full border border-black/20 dark:border-neutral-100/10 md:border-black/20 md:dark:border-neutral-100/20 py-3 rounded-lg ">
                  <p className=" flex gap-1 md:gap-2 justify-center items-center  text-[0.9rem] md:text-[1rem] dark:text-neutral-100/75 ">
                    Tap
                    <img
                      src={
                        !isDarkMode
                          ? "/images/icons8-star-white.png"
                          : "/images/icons8-star-black.png"
                      }
                      alt="favorite"
                      className=" w-3.5 h-3.5 md:w-4 md:h-4 "
                    />
                    to add a match to Favorites
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`w-[30%] min-w-[200px] h-auto rounded-lg hidden lg:block p-4 ${
              !isDarkMode ? "bg-[#1d2732]" : "bg-gray-100"
            }`}
          >
            <FeaturedNewsCont isDarkMode={isDarkMode} />
            <div className="w-full bg-inherit h-[200px] mt-5 ">
              <h1 className="text-[.75rem]">ADVERTISEMENT</h1>
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

export default Favorites;
