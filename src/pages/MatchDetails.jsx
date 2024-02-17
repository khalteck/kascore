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

const MatchDetails = () => {
  const { isDarkMode, topLeagues, fetchFixtureDetails, fixturesDetailsData } =
    useAppContext();

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
      <div className="w-full pt-[150px] md:pt-[170px] md:pb-12 md:px-[10%] bg-white text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200">
        <div className="w-full max-w-[1500px] mx-auto h-full flex gap-8">
          <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray isDarkMode={isDarkMode} />
          </div>

          <div className="w-full md:w-[50%] md:min-w-[550px] md:bg-gray-100 dark:bg-[#1d2732] md:px-4 rounded-lg h-fit md:pb-5">
            <div className="w-full bg-gray-100 dark:bg-[#121a20]/50 md:mt-5 rounded-lg px-3 py-5 min-h-screen md:min-h-fit">
              <div className=" w-full flex justify-between items-center ">
                <div className=" flex gap-4 ">
                  <div className="bg-gray-100 p-1 rounded-full flex justify-center items-center ">
                    <img
                      src={currentLeague?.logo}
                      alt="league"
                      className=" w-8 h-8 rounded-full "
                    />
                  </div>
                  <div>
                    <p className=" font-medium leading-tight ">
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

              <div className=" w-full my-3 bg-gray-200 dark:bg-[#121a20] rounded-lg flex justify-center items-center ">
                <div className="w-full md:w-[80%] bg-inherit flex justify-between items-center m-auto py-3">
                  <div className="w-[33%] flex flex-col items-center">
                    <img
                      src={currentMatch?.teams?.home?.logo}
                      alt="home-team"
                      className=" w-8 h-8 m-auto "
                    />
                    <p className=" text-[.85rem] font-bold mt-3 ">
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

                  <div className="w-[33%] flex flex-col items-center">
                    <img
                      src={currentMatch?.teams?.away?.logo}
                      alt="away-team"
                      className=" w-8 h-8 m-auto "
                    />
                    <p className=" text-[.85rem] font-bold mt-3">
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

              {/* <div className=" flex gap-2">
                <button className=" py-2 px-3 md:py-2 md:px-4 border rounded-full text-neutral-100/50 text-[0.7rem] md:text-[0.85rem] hover:text-white hover:border-neutral-100/50 ">
                  EVENTS
                </button>
                <button className=" py-1 px-3 md:py-2 md:px-4 border rounded-full text-neutral-100/50  text-[0.7rem] md:text-[0.85rem] hover:text-white hover:border-neutral-100/50 ">
                  COMMENTARY
                </button>
              </div> */}

              {/* <div className=" w-full my-4 border border-neutral-100/20 rounded-lg ">
                <div className=" w-full border px-3 py-2 md:px-5 md:py-4 flex rounded-t-lg border-neutral-100/20">
                  <div className=" w-full flex justify-between ">
                    <div className="  w-full flex items-center ">
                      <p className=" text-neutral-100/50 text-[0.85rem] md:text-[1rem]  uppercasex">
                        6'
                      </p>
                    </div>

                    <div className=" w-full flex gap-2 md:gap-3 items-center ">
                      <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                        Drey
                      </p>
                      <img
                        src="images/icons8-football-orange.png"
                        alt="owngoal"
                        className=" w-4 h-4 md:w-5 md:h-5 "
                      />
                    </div>
                  </div>
                  <div className=" w-full flex gap-5 md:gap-10 ">
                    <div>
                      <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                        0 - 1
                      </p>
                    </div>
                    <div>
                      <div className=" w-full flex gap-2 md:gap-3 items-center ">
                        <img
                          src="images/icons8-football-50.png"
                          alt="goal"
                          className=" w-4 h-4 md:w-5 md:h-5 "
                        />
                        <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                          Khalid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" w-full border px-3 py-2 md:px-5 md:py-4 flex border-neutral-100/20">
                  <div className=" w-full flex justify-between ">
                    <div className=" w-full flex items-center ">
                      <p className=" text-neutral-100/50 text-[0.85rem] md:text-[1rem] ">
                        HT
                      </p>
                    </div>

                    <div className=" w-full flex gap-2 md:gap-3 items-center ">
                      <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                        Drey
                      </p>
                      <img
                        src="images/icons8-football-orange.png"
                        alt="owngoal"
                        className=" w-4 h-4 md:w-5 md:h-5 "
                      />
                    </div>
                  </div>
                  <div className=" w-full flex gap-5 md:gap-10 ">
                    <div>
                      <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                        0 - 1
                      </p>
                    </div>
                    <div>
                      <div className=" w-full flex gap-2 md:gap-3 items-center ">
                        <img
                          src="images/icons8-football-50.png"
                          alt="goal"
                          className=" w-4 h-4 md:w-5 md:h-5 "
                        />
                        <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                          Khalid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" w-full border px-3 py-2 md:px-5 md:py-4 flex border-neutral-100/20">
                  <div className=" w-full flex justify-between ">
                    <div className=" w-full flex items-center ">
                      <p className=" text-neutral-100/50 text-[0.85rem] md:text-[1rem] ">
                        55'
                      </p>
                    </div>

                    <div className=" w-full flex gap-2 md:gap-3 items-center ">
                      <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                        Drey
                      </p>
                      <img
                        src="images/icons8-football-orange.png"
                        alt="owngoal"
                        className=" w-4 h-4 md:w-5 md:h-5 "
                      />
                    </div>
                  </div>
                  <div className=" w-full flex gap-5 md:gap-10 ">
                    <div>
                      <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                        1 - 1
                      </p>
                    </div>
                    <div>
                      <div className=" w-full flex gap-2 md:gap-3 items-center ">
                        <img
                          src="images/icons8-football-50.png"
                          alt="goal"
                          className=" w-4 h-4 md:w-5 md:h-5 "
                        />
                        <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                          Khalid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" w-full border px-3 py-2 md:px-5 md:py-4 flex border-neutral-100/20">
                  <div className=" w-full flex justify-between ">
                    <div className=" w-full flex items-center ">
                      <p className=" text-neutral-100/50 text-[0.85rem] md:text-[1rem] ">
                        78'
                      </p>
                    </div>

                    <div className=" w-full flex gap-2 md:gap-3 items-center ">
                      <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                        Drey
                      </p>
                      <img
                        src="images/icons8-football-orange.png"
                        alt="owngoal"
                        className=" w-4 h-4 md:w-5 md:h-5 "
                      />
                    </div>
                  </div>
                  <div className=" w-full flex gap-5 md:gap-10 ">
                    <div>
                      <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                        2 - 1
                      </p>
                    </div>
                    <div>
                      <div className=" w-full flex gap-2 md:gap-3 items-center ">
                        <img
                          src="images/icons8-football-50.png"
                          alt="goal"
                          className=" w-4 h-4 md:w-5 md:h-5 "
                        />
                        <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                          Khalid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" w-full border px-3 py-2 md:px-5 md:py-4 flex border-neutral-100/20">
                  <div className=" w-full flex justify-between ">
                    <div className=" w-full flex items-center ">
                      <p className=" text-neutral-100/50 text-[0.85rem] md:text-[1rem] ">
                        90
                      </p>
                    </div>

                    <div className=" w-full flex gap-2 md:gap-3 items-center ">
                      <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                        Drey
                      </p>
                      <img
                        src="images/icons8-football-orange.png"
                        alt="owngoal"
                        className=" w-4 h-4 md:w-5 md:h-5 "
                      />
                    </div>
                  </div>
                  <div className=" w-full flex gap-5 md:gap-10 ">
                    <div>
                      <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                        3 - 1
                      </p>
                    </div>
                    <div>
                      <div className=" w-full flex gap-2 md:gap-3 items-center ">
                        <img
                          src="images/icons8-football-50.png"
                          alt="goal"
                          className=" w-4 h-4 md:w-5 md:h-5 "
                        />
                        <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                          Khalid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" w-full border px-3 py-2 md:px-5 md:py-4 flex border-neutral-100/20">
                  <div className=" w-full flex justify-between ">
                    <div className=" w-full flex items-center ">
                      <p className=" text-neutral-100/50 text-[0.85rem] md:text-[1rem] ">
                        FT
                      </p>
                    </div>

                    <div className=" w-full flex gap-2 md:gap-3 items-center ">
                      <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                        Drey
                      </p>
                      <img
                        src="images/icons8-football-orange.png"
                        alt="owngoal"
                        className=" w-4 h-4 md:w-5 md:h-5 "
                      />
                    </div>
                  </div>
                  <div className=" w-full flex gap-5 md:gap-10 ">
                    <div>
                      <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                        4 - 1
                      </p>
                    </div>
                    <div>
                      <div className=" w-full flex gap-2 md:gap-3 items-center ">
                        <img
                          src="images/icons8-football-50.png"
                          alt="goal"
                          className=" w-4 h-4 md:w-5 md:h-5 "
                        />
                        <p className=" text-white text-[0.85rem] md:text-[1rem] font-medium ">
                          Khalid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="w-full flex flex-col text-neutral-100">
                <LeagueSchedule />
                <LeagueSchedule />
                <LeagueSchedule />
              </div> */}
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
