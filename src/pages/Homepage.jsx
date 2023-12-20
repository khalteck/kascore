import DateSlide from "../components/DateSlide";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeagueSchedule from "../components/LeagueSchedule";
import CountriesTray from "../components/CountriesTray";
import BottomBar from "../components/BottomBar";
import schedule from "../data/schedule.json";
import FeaturedNewsCont from "../components/FeaturedNewsCont";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Homepage = () => {
  const { isDarkMode } = useAppContext();

  return (
    <>
      <Header />
      <div
        className={`w-full pt-[105px] md:pt-[170px] md:pb-12 md:px-[10%] bg-[#d1d5db] text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200 ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <div className="w-full h-full flex gap-8">
          <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray isDarkMode={isDarkMode} />
          </div>

          <div
            className={`w-full md:w-[50%] md:min-w-[550px] h-full rounded-lg px-3 py-5  ${
              !isDarkMode ? "bg-[#1d2732]" : "bg-gray-100"
            }`}
          >
            <div className="w-full mb-4 md:mb-0">
              <DateSlide isDarkMode={isDarkMode} />
            </div>

            <div
              className={`w-full md:mt-5 rounded-lg ${
                !isDarkMode ? "bg-[#121a20]/50" : "bg-gray-200"
              }`}
            >
              <h1 className="font-medium text-[1.2rem] p-4 rounded-lg">
                Featured Leagues
              </h1>

              <div
                className={`w-full flex flex-col ${
                  !isDarkMode ? "text-[#121a20]" : "text-neutral-100"
                }`}
              >
                {schedule?.map((item, index) => {
                  return (
                    <LeagueSchedule
                      key={index}
                      item={item}
                      isDarkMode={isDarkMode}
                    />
                  );
                })}
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

export default Homepage;
