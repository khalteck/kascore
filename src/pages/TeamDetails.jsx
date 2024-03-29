import { useState } from "react";
import ScrollToTop from "../ScrollToTop";
import BottomBar from "../components/BottomBar";
import CountriesTray from "../components/CountriesTray";
import FeaturedNewsCont from "../components/FeaturedNewsCont";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tab from "../components/TeamDetails/Tab";
import TopSection from "../components/TeamDetails/TopSection";
import { useAppContext } from "../contexts/AppContext";
import ResultsCard from "../components/TeamDetails/ResultsCard";
import FullBorderButton from "../components/Buttons/FullBorderButton";
import newsData from "../data/news.json";
import NewsCard from "../components/NewsCard";
import Overview from "../components/TeamDetails/Overview";
import Results from "../components/TeamDetails/Results";
import Fixtures from "../components/TeamDetails/Fixtures";
import Standings from "../components/TeamDetails/Standings";
import Squad from "../components/TeamDetails/Squad";
import NewsTeam from "../components/TeamDetails/NewsTeam";
import teamData from "../data/teams112.json";

const TeamDetails = () => {
  const { isDarkMode } = useAppContext();
  const [currentTab, setCurrentTab] = useState("overview");

  const currentTeam = teamData?.response[0];

  console.log("currentTeam", currentTeam);

  return (
    <>
      <Header />
      <div
        className={`w-full pt-[100px] md:pt-[170px] md:pb-12 md:px-[10%] bg-[#d1d5db] text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200 ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <div className="w-full max-w-[1500px] mx-auto h-full flex gap-8">
          <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray isDarkMode={isDarkMode} />
          </div>

          <div
            className={`w-full md:w-[50%] md:min-w-[550px] h-full md:rounded-lg px-3 py-5  ${
              isDarkMode ? "bg-[#1d2732]" : "bg-gray-100"
            }`}
          >
            <TopSection currentTeam={currentTeam} />

            <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />

            <div className="flex flex-col gap-10">
              {currentTab === "overview" && (
                <Overview setCurrentTab={setCurrentTab} />
              )}
              {currentTab === "fixtures" && <Fixtures />}
              {currentTab === "results" && <Results />}
              {currentTab === "standings" && <Standings />}
              {currentTab === "squad" && <Squad />}
              {currentTab === "news" && <NewsTeam />}
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

export default TeamDetails;
