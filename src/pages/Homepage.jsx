import DateSlide from "../components/DateSlide";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeagueSchedule from "../components/LeagueSchedule";
import CountriesTray from "../components/CountriesTray";
import BottomBar from "../components/BottomBar";
import leagues from "../data/leagues.json";
import ids from "../data/id.json";
import fixture112 from "../data/fixture112.json";

import { useEffect, useState } from "react";
import FeaturedNewsCont from "../components/FeaturedNewsCont";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";
import LazyLoad from "react-lazyload";

const Homepage = () => {
  const { isDarkMode, topLeagues, fetchLeagues } = useAppContext();

  const fixturesDataRaw = leagues?.response;
  const fixtures = fixture112?.response;

  const fixtureDataRaw2 = fixturesDataRaw
    ?.map((itm) => {
      const myFixtures = fixtures?.filter(
        (x) => x?.league?.id === itm?.league?.id
      );
      return myFixtures?.length > 0 && itm;
    })
    ?.filter((x) => x !== false);

  const fixturesData = fixtureDataRaw2?.sort((a, b) => {
    const indexA = ids.indexOf(a?.league?.id);
    const indexB = ids.indexOf(b?.league?.id);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    } else if (indexA !== -1) {
      return -1;
    } else if (indexB !== -1) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log("fixtures", fixtures);

  // useEffect(() => {
  //   fetchLeagues();
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 30);
    setTimeout(() => {
      window.scrollTo(0, -30);
    }, 600);
  }, []);

  const [visibleComponents, setVisibleComponents] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY || 20;
    const windowHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight || 20;

    // Adjust the number of visible components based on scroll position
    const componentsToShow = Math.ceil(
      (scrolled + windowHeight) / (totalHeight / fixturesData.length) +
        (windowHeight || 20)
    );
    setVisibleComponents(Math.min(componentsToShow, fixturesData.length));
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixturesData]);

  return (
    <>
      <Header />
      <div
        className={`w-full pt-[150px] md:pt-[170px] md:pb-12 md:px-[10%] bg-[#d1d5db] text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200 ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <div className="w-full max-w-[1500px] mx-auto h-full flex gap-8">
          <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray isDarkMode={isDarkMode} />
          </div>

          <div
            className={`w-full md:w-[50%] md:min-w-[550px] h-full rounded-lg px-3 py-5  ${
              isDarkMode ? "bg-[#1d2732]" : "bg-gray-100"
            }`}
          >
            <div className="w-full mb-4 md:mb-0">
              <DateSlide isDarkMode={isDarkMode} />
            </div>

            <div
              className={`w-full md:mt-5 rounded-lg ${
                isDarkMode ? "bg-[#121a20]/50" : "bg-gray-200"
              }`}
            >
              <div
                className={`w-full flex flex-col ${
                  isDarkMode ? "text-[#121a20]" : "text-neutral-100"
                }`}
              >
                {fixturesData?.map((item, index) => (
                  <LazyLoad key={index} height={200} offset={100} once>
                    {index < visibleComponents && (
                      <LeagueSchedule
                        item={item}
                        isDarkMode={isDarkMode}
                        fixtures={fixtures}
                      />
                    )}
                  </LazyLoad>
                ))}

                {/* {topLeagues?.map((item, index) => {
                  return (
                    <LeagueSchedule
                      key={index}
                      item={item}
                      isDarkMode={isDarkMode}
                    />
                  );
                })} */}
              </div>
            </div>
          </div>
          <div
            className={`w-[25%] min-w-[200px] h-fit rounded-lg hidden lg:block p-4 ${
              isDarkMode ? "bg-[#1d2732]" : "bg-gray-100"
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
