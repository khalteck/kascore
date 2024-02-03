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
                        NHL: Regular season
                      </p>
                      <p className="  text-[.85rem] ">NHL</p>
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
                className={`w-full my-3  rounded-lg  m-auto py-5 px-4 ${
                  !isDarkMode ? "bg-gray-200" : "bg-[#121a20]"
                }`}
              >
                <div className=" flex justify-between dark:text-neutral-100/70 text-[0.7rem] ">
                  <p>Twenty20 (1st T20I)</p>
                  <p>11 Jan</p>
                </div>
                <p className=" dark:text-neutral-100/70 text-[0.63rem] my-2 ">
                  Finished
                </p>
                <div className=" flex justify-between  ">
                  <p className=" font-bold text-[1.05rem] ">India</p>
                  <p className=" font-bold text-[1.05rem] ">
                    {" "}
                    159/4{" "}
                    <span className="text-[0.75rem] dark:text-neutral-100/70 ">
                      (17.3)
                    </span>{" "}
                  </p>
                </div>
                <div className=" flex justify-between my-2 ">
                  <p className=" font-bold text-[1.05rem] ">Afghanistan</p>
                  <p className=" font-bold text-[1.05rem] ">
                    {" "}
                    158/5{" "}
                    <span className="text-[0.75rem] dark:text-neutral-100/70 ">
                      (20.0)
                    </span>{" "}
                  </p>
                </div>
                <p className=" dark:text-neutral-100/70 text-[0.6rem] ">
                  India win by 6 wickets
                </p>
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
                  Scorecard
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
                  Teams
                </a>
              </div>

              <div className="w-full">
                <h2 className="text-[.75rem]">MATCH INFO</h2>

                <div className="w-full items-center gap-5 py-3 border border-black/20 dark:border-neutral-100/20 dark:text-neutral-100/70 rounded-lg text-[.7rem] md:text-[.85rem] mt-4">
                  <div className=" flex cursor-pointer pl-3 pb-3 border-b border-black/20 dark:border-neutral-100/20 ">
                    <p className=" w-[20%]">Event</p>
                    <p className=" w-[80%] ">
                      Cricket Australia XI v West Indies International Tours
                    </p>
                  </div>
                  <div className=" flex  cursor-pointer pl-3 py-3 border-b border-black/20 dark:border-neutral-100/20">
                    <p className="w-[20%]">This Match</p>
                    <p className=" w-[80%] ">Non Official Test</p>
                  </div>
                  <div className=" flex  cursor-pointer pl-3 py-3 border-b border-black/20 dark:border-neutral-100/20">
                    <p className="w-[20%]">Starts (venue)</p>
                    <p className=" w-[80%] ">10:00, 10 January 2024</p>
                  </div>
                  <div className=" flex  cursor-pointer pl-3 py-3 border-b border-black/20 dark:border-neutral-100/20">
                    <p className="w-[20%]">Starts (GMT)</p>
                    <p className=" w-[80%] ">23:30, 09 January 2024</p>
                  </div>
                  <div className=" flex  cursor-pointer pl-3 py-3 border-b border-black/20 dark:border-neutral-100/20">
                    <p className="w-[20%]">Toss</p>
                    <p className=" w-[80%] ">
                      West Indies won the toss and chose to bat
                    </p>
                  </div>
                  <div className=" flex  cursor-pointer pl-3 py-3 border-b border-black/20 dark:border-neutral-100/20">
                    <p className="w-[20%]">Country</p>
                    <p className=" w-[80%] ">Australia</p>
                  </div>
                  <div className=" flex  cursor-pointer pl-3 py-3 border-b border-black/20 dark:border-neutral-100/20">
                    <p className="w-[20%]">City</p>
                    <p className=" w-[80%] ">Adelaide</p>
                  </div>
                  <div className=" flex  cursor-pointer pl-3 py-3 border-b border-black/20 dark:border-neutral-100/20">
                    <p className="w-[20%]">Venue</p>
                    <p className=" w-[80%] ">Karen Rolton Oval</p>
                  </div>
                  <div className=" flex  cursor-pointer pl-3 py-3 border-b border-black/20 dark:border-neutral-100/20">
                    <p className="w-[20%]">Umpire 1</p>
                    <p className=" w-[80%] ">Ben Treloar</p>
                  </div>
                  <div className=" flex  cursor-pointer pl-3 py-3 border-b border-black/20 dark:border-neutral-100/20">
                    <p className="w-[20%]">Umpire 2</p>
                    <p className=" w-[80%] ">Michael Graham-Smith</p>
                  </div>
                  <div className=" flex  cursor-pointer pl-3 pt-3">
                    <p className="w-[20%]">Referee</p>
                    <p className=" w-[80%] ">Kent Hannam</p>
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
