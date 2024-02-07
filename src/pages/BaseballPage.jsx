import DateSlide from "../components/DateSlide";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CountriesTray from "../components/CountriesTray";
import BottomBar from "../components/BottomBar";
// import schedule from "../data/schedule.json";
// import events from "../data/events.json";

import FeaturedNewsCont from "../components/FeaturedNewsCont";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const CricketPage = () => {
  const { isDarkMode } = useAppContext();
  return (
    <>
      <Header />
      <div
        className={`w-full pt-[150px] md:pt-[170px] md:pb-12 md:px-[10%]  text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200 ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <div className="w-full max-w-[1500px] mx-auto h-full flex gap-8">
          <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray isDarkMode={isDarkMode} />
          </div>

          <div
            className={`w-full md:w-[50%] md:min-w-[550px] h-full rounded-lg px-2 py-3 md:px-3 md:py-5  ${
              !isDarkMode ? "bg-gray-100" : "bg-[#1d2732]"
            }`}
          >
            {/*<div className="w-full mb-4 md:mb-0">
              <DateSlide isDarkMode={isDarkMode} />
          </div>*/}

            <div
              className={`w-full rounded-lg px-2 py-2 md:px-5 md:py-6 ${
                !isDarkMode ? "bg-gray-100" : "bg-[#121a20]/50"
              }`}
            >
              <div
                className={`w-full  ${
                  !isDarkMode ? "text-[#121a20]" : "text-neutral-100"
                }`}
              >
                <div className=" w-full flex justify-between items-center ">
                  <div className=" w-full flex gap-4 ">
                    <div className=" p-1 flex justify-center items-center ">
                      <img
                        src="/images/icons8-hockey-94.png"
                        alt="league"
                        className=" w-9 h-9 "
                      />
                    </div>
                    <div>
                      <p className=" font-medium leading-tight ">
                        NPB: PRE-SEASON 
                      </p>
                      <p className="  text-[.85rem] ">NPB</p>
                    </div>
                  </div>
                  <div className=" w-auto ">
                    <img
                      src="/images/icons8-star-50.png"
                      alt="favorite"
                      className=" w-6 h-6  "
                    />
                  </div>
                </div>
              </div>

              <div
                className={`w-full my-3 flex justify-center items-center rounded-lg ${
                  !isDarkMode ? "bg-gray-200" : "bg-[#121a20]"
                }`}
              >
                <div className="w-full md:w-[80%] bg-inherit flex justify-between items-center rounded-lg m-auto py-3">
                  <div className="w-[33%] flex flex-col items-center">
                    <img
                      src="/images/icons8-arsenal-48.png"
                      alt="arsenal"
                      className=" w-8 h-8 m-auto "
                    />
                    <p className=" text-[.85rem] font-bold mt-3 ">
                      Rivas
                    </p>
                  </div>

                  <div className="text-center">
                    <div className=" w-full m-auto font-bold text-[1.2rem] md:text-[1.5rem] flex justify-center  ">
                      <p>2 - 5</p>
                    </div>
                    <p className=" text-[0.75rem] mt-2 md:text-[.85rem]">
                      Full Time
                    </p>
                  </div>

                  <div className="w-[33%] flex flex-col items-center">
                    <img
                      src="/images/icons8-spain-48.png"
                      alt="spain"
                      className=" w-8 h-8 m-auto "
                    />
                    <p className=" text-[.85rem] font-bold mt-3">
                      Hermosillo
                    </p>
                  </div>
                </div>
              </div>

              <div className=" w-full my-4 pb-3 flex gap-5 border-b border-black/20 dark:border-white/30 ">
                <a
                  href="#"
                  className=" hover:text-orange-500 text-[0.8rem] uppercase"
                >
                  Info
                </a>

                <a
                  href="#"
                  className=" hover:text-orange-500 text-[0.8rem] uppercase"
                >
                  Summary
                </a>

                <a
                  href="#"
                  className=" hover:text-orange-500 text-[0.8rem] uppercase"
                >
                  Table
                </a>
              </div>

              <div className="w-full">
                <h2 className="text-[.75rem]">MATCH INFO</h2>

                <div className="w-full flex justify-center items-center gap-8 py-3 border border-black/20 dark:border-white/30 rounded-lg text-[.75rem] mt-4">
                  <div className="flex gap-2 items-center cursor-pointer">
                    <img
                      alt=""
                      // src="/images/icons8-calendar-64.png"
                      src={
                        !isDarkMode
                          ? "/images/icons8-calendar-black.png"
                          : "/images/icons8-calendar-64.png"
                      }
                      className="w-5 h-auto"
                    />
                    <p>2024-01-07</p>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <img
                      alt=""
                      // src="/images/icons8-stadium-64.png"
                      src={
                        !isDarkMode
                          ? "/images/icons8-stadium-black.png"
                          : "/images/icons8-stadium-64.png"
                      }
                      className="w-5 h-auto opacity-70"
                    />
                    <p>Estadi Municipal de Montilivi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-[25%] min-w-[200px] h-fit rounded-lg hidden lg:block p-4 ${
              !isDarkMode ? "bg-gray-100" : "bg-[#1d2732]"
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

export default CricketPage;