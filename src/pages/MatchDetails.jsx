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
      <div className="w-full pt-[105px] md:pt-[170px] md:pb-12 md:px-5 bg-[#121a20] text-neutral-100/80">
        <div className="w-full md:w-[80%] mx-auto h-full flex gap-8">
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
                    <img src="/images/icons8-england-circular-48.png" alt="league" className=" w-8 h-8 rounded-full " />
                  </div>
                  <div>
                    <p className=" font-medium leading-tight ">Premier League</p>
                    <p className=" text-neutral-100/50 text-[.85rem] ">England</p>
                  </div>
                </div>
                <div className=" flex items-center gap-7 ">
                  <img src="images/icons8-star-50.png" alt="favorite" className=" w-6 h-6 " />
                  <img src="images/icons8-stadium-32.png" alt="footballpitch" className=" w-7 h-7 " />
                </div>
              </div>

              <div className=" w-full my-3 bg-[#121a20] flex justify-center items-center rounded-lg ">
                  <div className=" w-[60%] bg-inherit flex justify-between items-center m-auto py-3">
                    <div className=" w-auto ">
                      <img src="images/icons8-arsenal-48.png" alt="arsenal" className=" w-8 h-8 m-auto "/>
                      <p className=" text-[.85rem] font-bold mt-3 " >Arsenal</p>
                    </div>

                    <div className=" ">
                      <p className=" w-full m-auto font-bold text-[1.5rem] text-white flex justify-center  "> 1 - 1 </p>
                      <p className=" text-neutral-100/50 text-[.85rem] mt-3 ">Full Time</p>
                    </div>

                    <div>
                      <img src="images/icons8-chelsea-fc-48.png" alt="chelsea" className=" w-8 h-8 m-auto " />
                      <p className=" text-[.85rem] font-bold mt-3">Chelsea</p>
                    </div>
                  </div>
              </div>

              <div className=" w-full my-4 pb-3 flex gap-5 border-b border-neutral-100/50 ">
                <a href="#" className=" hover:text-white ">Info</a>
                <a href="#">Summary</a>
                <a href="#">Line-ups</a>
                <a href="#">Statistics</a>
                <a href="#">Standings</a>
                <a href="#">Matches</a>
              </div>

              <div className=" flex gap-2">
                <button className=" py-2 px-4 border rounded-full text-neutral-100/50 text-[0.85rem] hover:text-white hover:border-neutral-100/50 ">EVENTS</button>
                <button className=" py-2 px-4 border rounded-full text-neutral-100/50 text-[0.85rem] hover:text-white hover:border-neutral-100/50 ">COMMENTARY</button>
              </div>

              <div className=" w-full border border-neutral-100/50 my-4 ">
                <div>
                  <div>
                    <p></p>
                  </div>
                  <div>
                    
                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
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
