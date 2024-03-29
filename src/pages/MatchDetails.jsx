/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Header from "../components/Header";
import CountriesTray from "../components/CountriesTray";
import BottomBar from "../components/BottomBar";
import DetailsTab from "../components/matchDetails/DetailsTab";
import fixtureById from "../data/fixtureById.json";
import fixture112 from "../data/fixture112.json";

import { useParams } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import FeaturedNewsCont from "../components/FeaturedNewsCont";
import ScrollToTop from "../ScrollToTop";
import { useState } from "react";
import SummaryCont from "../components/matchDetails/SummaryCont";
import getDate from "../utils/getDate";
import LineupsCont from "../components/matchDetails/LineupsCont";
import StatsCont from "../components/matchDetails/StatsCont";
import H2hCont from "../components/matchDetails/H2hCont";
import StandingsCont from "../components/matchDetails/StandingsCont";
import NewsTeam from "../components/matchDetails/NewsTeam";

const MatchDetails = () => {
  const {
    isDarkMode,
    topLeagues,
    fetchFixtureDetails,
    fixturesDetailsData,
    navigate,
  } = useAppContext();

  const { id } = useParams();

  const currentMatch = fixture112?.response?.filter(
    (x) => x?.fixture?.id === Number(id)
  )[0];

  // console.log("currentMatch", currentMatch);
  const currentLeague = currentMatch?.league;

  function parseTime(originalTime) {
    const dateObject = new Date(originalTime);

    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");

    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  }

  const inPlay = ["1H", "HT", "2H", "ET", "BT", "P", "SUSP", "INT", "LIVE"];
  const finished = ["FT", "AET", "PEN"];

  const [currentTab, setCurrentTab] = useState("summary");

  return (
    <>
      <Header />
      <div className="w-full pt-[100px] md:pt-[170px] md:pb-12 md:px-[10%] bg-white text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200">
        <div className="w-full max-w-[1500px] mx-auto h-full flex gap-8">
          <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray isDarkMode={isDarkMode} />
          </div>

          <div className="w-full md:w-[50%] md:min-w-[550px] md:bg-gray-100 dark:bg-[#1d2732] md:px-4 md:rounded-lg h-fit md:pb-5">
            <div className="w-full bg-gray-100 dark:bg-[#121a20]/50 md:mt-5 rounded-lg px-3 py-5 min-h-screen md:min-h-fit">
              <div className=" w-full flex justify-between items-center ">
                <div className=" flex gap-4 ">
                  <div className="bg-gray-100 p-1 rounded-full flex justify-center items-center ">
                    <img
                      src={currentLeague?.logo}
                      alt="league"
                      className=" w-8 h-8 rounded-full cursor-pointer"
                      onClick={() =>
                        navigate(
                          `/scores/football/competition/${currentLeague?.id}`
                        )
                      }
                    />
                  </div>
                  <div>
                    <p
                      onClick={() =>
                        navigate(
                          `/scores/football/competition/${currentLeague?.id}`
                        )
                      }
                      className=" font-medium leading-tight cursor-pointer hover:underline"
                    >
                      {currentLeague?.name}
                    </p>
                    <p className=" dark:text-neutral-100/50 text-[.85rem] ">
                      {currentLeague?.country}
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-7 ">
                  <img
                    src="/images/icons8-star-50.png"
                    alt="favorite"
                    className=" w-6 h-6 "
                  />
                  <img
                    src="/images/icons8-stadium-32.png"
                    alt="footballpitch"
                    className=" w-7 h-7 "
                  />
                </div>
              </div>

              <div
                className={`w-full my-3 rounded-lg flex justify-center items-center ${
                  isDarkMode ? "bg-[#121a20] " : "bg-gray-200"
                }`}
              >
                <div className="w-full md:w-[80%] bg-inherit flex justify-between items-center m-auto py-3">
                  <div
                    onClick={() => {
                      navigate(
                        `/scores/football/team/${currentMatch?.teams?.home?.id}`
                      );
                    }}
                    className="w-[33%] flex flex-col items-center cursor-pointer"
                  >
                    <img
                      src={currentMatch?.teams?.home?.logo}
                      alt="home-team"
                      className=" w-8 h-8 m-auto "
                    />
                    <p className=" text-[.85rem] font-bold mt-3 hover:underline">
                      {currentMatch?.teams?.home?.name}
                    </p>
                  </div>

                  <div className="text-center">
                    <div className=" w-full m-auto font-bold text-[1.2rem] md:text-[1.5rem] dark:text-white flex justify-center  ">
                      {inPlay?.includes(currentMatch?.fixture?.status?.short) ||
                      finished?.includes(currentMatch?.fixture?.status?.short)
                        ? `${currentMatch?.goals?.home} - ${currentMatch?.goals?.away}`
                        : parseTime(currentMatch?.fixture?.date)}
                    </div>
                    <p className=" dark:text-neutral-100/50 text-[0.75rem] md:text-[.85rem]">
                      {getDate(currentMatch?.fixture?.date)}
                    </p>
                  </div>

                  <div
                    onClick={() => {
                      navigate(
                        `/scores/football/team/${currentMatch?.teams?.away?.id}`
                      );
                    }}
                    className="w-[33%] flex flex-col items-center cursor-pointer"
                  >
                    <img
                      src={currentMatch?.teams?.away?.logo}
                      alt="away-team"
                      className=" w-8 h-8 m-auto "
                    />
                    <p className=" text-[.85rem] font-bold mt-3 hover:underline">
                      {currentMatch?.teams?.away?.name}
                    </p>
                  </div>
                </div>
              </div>

              <DetailsTab
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                isDarkMode={isDarkMode}
              />

              {currentTab === "summary" && (
                <SummaryCont
                  isDarkMode={isDarkMode}
                  currentMatch={currentMatch}
                />
              )}

              {currentTab === "lineups" && (
                <LineupsCont
                  isDarkMode={isDarkMode}
                  currentMatch={currentMatch}
                />
              )}

              {currentTab === "statistics" && <StatsCont />}

              {currentTab === "h2h" && <H2hCont />}

              {currentTab === "standings" && <StandingsCont />}

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

export default MatchDetails;
