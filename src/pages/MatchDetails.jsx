/* eslint-disable react/no-unescaped-entities */
import Footer from "../components/Footer";
import Header from "../components/Header";
import CountriesTray from "../components/CountriesTray";
import BottomBar from "../components/BottomBar";
import schedule from "../data/schedule.json";
import { useParams } from "react-router-dom";

const MatchDetails = () => {
  const { league_name, id } = useParams();
  const currentLeague = schedule?.filter(
    (x) => x?.league_name === league_name
  )[0];
  const currentMatch = currentLeague?.fixtures?.filter((y) => y?.id == id)[0];

  console.log("currentMatch", currentMatch);
  return (
    <>
      <Header />
      <div className="w-full pt-[100px] md:pt-[170px] md:pb-12 md:px-[10%] bg-[#121a20] text-neutral-100/80">
        <div className="w-full h-full flex gap-8">
          <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray />
          </div>

          <div className="w-full md:w-[50%] md:min-w-[550px] bg-[#1d2732] md:px-4 rounded-lg h-fit md:pb-5">
            {/* <div className="w-full mb-4 md:mb-0">
              <DateSlide />
            </div> */}

            <div className="w-full bg-[#121a20]/50 md:mt-5 rounded-lg px-3 py-5 min-h-screen md:min-h-fit">
              <div className=" w-full flex justify-between items-center ">
                <div className=" flex gap-4 ">
                  <div className=" flex justify-center items-center ">
                    <img
                      src={currentLeague?.country_flag}
                      alt="league"
                      className=" w-8 h-8 rounded-full "
                    />
                  </div>
                  <div>
                    <p className=" font-medium leading-tight ">
                      {currentLeague?.league_name}
                    </p>
                    <p className=" text-neutral-100/50 text-[.85rem] ">
                      {currentLeague?.country_name}
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

              <div className=" w-full my-3 bg-[#121a20] flex justify-center items-center rounded-lg ">
                <div className="w-full md:w-[80%] bg-inherit flex justify-between items-center m-auto py-3">
                  <div className="w-[33%] flex flex-col items-center">
                    <img
                      src={currentMatch?.home_crest}
                      alt="arsenal"
                      className=" w-8 h-8 m-auto "
                    />
                    <p className=" text-[.85rem] font-bold mt-3 ">
                      {currentMatch?.home}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className=" w-full m-auto font-bold text-[1.2rem] md:text-[1.5rem] text-white flex justify-center  ">
                      {currentMatch?.time}
                    </p>
                    <p className=" text-neutral-100/50 text-[0.75rem] md:text-[.85rem]">
                      Today
                    </p>
                  </div>

                  <div className="w-[33%] flex flex-col items-center">
                    <img
                      src={currentMatch?.away_crest}
                      alt="chelsea"
                      className=" w-8 h-8 m-auto "
                    />
                    <p className=" text-[.85rem] font-bold mt-3">
                      {currentMatch?.away}
                    </p>
                  </div>
                </div>
              </div>

              <div className=" w-full my-4 pb-3 flex gap-2 md:gap-5 border-b border-neutral-100/50 ">
                <a
                  href="#"
                  className=" hover:text-white text-[0.8rem] md:text-[1rem] "
                >
                  Info
                </a>
                {/* <a
                  href="#"
                  className=" hover:text-white text-[0.8rem] md:text-[1rem] "
                >
                  Summary
                </a> */}
                <a
                  href="#"
                  className=" hover:text-white text-[0.8rem] md:text-[1rem] "
                >
                  Line-ups
                </a>
                {/* <a
                  href="#"
                  className=" hidden md:block hover:text-white text-[0.8rem] md:text-[1rem] "
                >
                  Statistics
                </a> */}
                {/* <a
                  href="#"
                  className=" md:hidden text-[0.8rem] md:text-[1rem] "
                >
                  Stats
                </a> */}
                <a
                  href="#"
                  className=" hover:text-white text-[0.8rem] md:text-[1rem] "
                >
                  Standings
                </a>
                {/* <a
                  href="#"
                  className=" hover:text-white text-[0.8rem] md:text-[1rem] "
                >
                  Matches
                </a> */}
              </div>

              <div className="w-full">
                <h2 className="text-[.75rem]">MATCH INFO</h2>

                <div className="w-full flex flex-col gap-3 p-3 border border-white/30 rounded-lg text-[.75rem] mt-4">
                  <div className="flex gap-2 items-center hover:text-white cursor-pointer">
                    <img
                      alt=""
                      src="/images/icons8-calendar-64.png"
                      className="w-4 h-auto"
                    />
                    <p>18 Dec 2023</p>
                  </div>

                  <div className="flex gap-2 items-center hover:text-white cursor-pointer">
                    <img
                      alt=""
                      src="/images/icons8-whistle-100.png"
                      className="w-4 h-auto opacity-60"
                    />
                    <p>Francisco Jose Hernandez (Spain)</p>
                  </div>

                  <div className="flex gap-2 items-center hover:text-white cursor-pointer">
                    <img
                      alt=""
                      src="/images/icons8-stadium-64.png"
                      className="w-4 h-auto opacity-70"
                    />
                    <p>Estadi Municipal de Montilivi</p>
                  </div>
                </div>
              </div>

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
                      <p className=" text-neutral-100/50 text-[0.85rem] md:text-[1rem] ">
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

          <div className="w-[30%] min-w-[200px] bg-[#1d2732] h-[400px] rounded-lg hidden lg:block p-4">
            <h1 className="text-[.75rem]">ADVERTISEMENT</h1>
          </div>
        </div>
      </div>

      <Footer />
      <BottomBar />
    </>
  );
};

export default MatchDetails;
