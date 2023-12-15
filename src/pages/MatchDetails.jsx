import DateSlide from "../components/DateSlide";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeagueSchedule from "../components/LeagueSchedule";
import CountriesTray from "../components/CountriesTray";
import BottomBar from "../components/BottomBar";

const MatchDetails = () => {
  return (
    <>
      <Header />
      <div className="w-full pt-[120px] md:pt-[170px] md:pb-12 px-3 md:px-[10%] pb-10 bg-[#121a20] text-neutral-100/80">
        <div className="w-full h-full flex gap-8">
          <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray />
          </div>

          <div className="w-full md:w-[50%] md:min-w-[550px] bg-[#1d2732] h-full rounded-lg px-3 py-5">
            {/* <div className="w-full mb-4 md:mb-0">
              <DateSlide />
            </div> */}

            <div className="w-full bg-[#121a20]/50 md:mt-5 rounded-lg px-7 py-5 ">
              <div className=" w-full flex justify-between items-center ">
                <div className=" flex gap-4 ">
                  <div className=" flex justify-center items-center ">
                    <img
                      src="/images/icons8-england-circular-48.png"
                      alt="league"
                      className=" w-8 h-8 rounded-full "
                    />
                  </div>
                  <div>
                    <p className=" font-medium leading-tight ">
                      Premier League
                    </p>
                    <p className=" text-neutral-100/50 text-[.85rem] ">
                      England
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-7 ">
                  <img
                    src="images/icons8-star-50.png"
                    alt="favorite"
                    className=" w-6 h-6 "
                  />
                  <img
                    src="images/icons8-stadium-32.png"
                    alt="footballpitch"
                    className=" w-7 h-7 "
                  />
                </div>
              </div>

              <div className=" w-full my-3 bg-[#121a20] flex justify-center items-center rounded-lg ">
                <div className=" w-[80%] md:w-[60%] bg-inherit flex justify-between items-center m-auto py-3">
                  <div className=" w-auto ">
                    <img
                      src="images/icons8-arsenal-48.png"
                      alt="arsenal"
                      className=" w-8 h-8 m-auto "
                    />
                    <p className=" text-[.85rem] font-bold mt-3 ">Arsenal</p>
                  </div>

                  <div className=" ">
                    <p className=" w-full m-auto font-bold text-[1.2rem] md:text-[1.5rem] text-white flex justify-center  ">
                      {" "}
                      4 - 1{" "}
                    </p>
                    <p className=" text-neutral-100/50 text-[0.75rem] md:text-[.85rem] mt-3 ">
                      Full Time
                    </p>
                  </div>

                  <div>
                    <img
                      src="images/icons8-chelsea-fc-48.png"
                      alt="chelsea"
                      className=" w-8 h-8 m-auto "
                    />
                    <p className=" text-[.85rem] font-bold mt-3">Chelsea</p>
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
                <a
                  href="#"
                  className=" hover:text-white text-[0.8rem] md:text-[1rem] "
                >
                  Summary
                </a>
                <a
                  href="#"
                  className=" hover:text-white text-[0.8rem] md:text-[1rem] "
                >
                  Line-ups
                </a>
                <a
                  href="#"
                  className=" hidden md:block hover:text-white text-[0.8rem] md:text-[1rem] "
                >
                  Statistics
                </a>
                <a
                  href="#"
                  className=" md:hidden text-[0.8rem] md:text-[1rem] "
                >
                  Stats
                </a>
                <a
                  href="#"
                  className=" hover:text-white text-[0.8rem] md:text-[1rem] "
                >
                  Standings
                </a>
                <a
                  href="#"
                  className=" hover:text-white text-[0.8rem] md:text-[1rem] "
                >
                  Matches
                </a>
              </div>

              <div className=" flex gap-2">
                <button className=" py-2 px-3 md:py-2 md:px-4 border rounded-full text-neutral-100/50 text-[0.7rem] md:text-[0.85rem] hover:text-white hover:border-neutral-100/50 ">
                  EVENTS
                </button>
                <button className=" py-1 px-3 md:py-2 md:px-4 border rounded-full text-neutral-100/50  text-[0.7rem] md:text-[0.85rem] hover:text-white hover:border-neutral-100/50 ">
                  COMMENTARY
                </button>
              </div>

              <div className=" w-full my-4 border border-neutral-100/20 rounded-lg ">
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
              </div>

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
