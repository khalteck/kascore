import DateSlide from "../components/DateSlide";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeagueSchedule from "../components/LeagueSchedule";
import CountriesTray from "../components/CountriesTray";
import BottomBar from "../components/BottomBar";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="w-full pt-[105px] md:pt-[170px] md:pb-12 md:px-[10%] bg-[#121a20] text-neutral-100/80">
        <div className="w-full h-full flex gap-8">
          <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray />
          </div>

          <div className="w-full md:w-[50%] md:min-w-[550px] bg-[#1d2732] h-full rounded-lg px-3 py-5">
            <div className="w-full mb-4 md:mb-0">
              <DateSlide />
            </div>

            <div className="w-full bg-[#121a20]/50 md:mt-5 rounded-lg">
              <h1 className="font-medium text-[1.2rem] p-4 rounded-lg">
                Featured Leagues
              </h1>

              <div className="w-full flex flex-col text-neutral-100">
                <LeagueSchedule />
                <LeagueSchedule />
                <LeagueSchedule />
              </div>
            </div>
          </div>
          <div className="w-[30%] min-w-[200px] bg-[#1d2732] h-auto rounded-lg hidden lg:block p-4 ">
            <div className=" w-full bg-[#1d2732] h-[400px] ">
              <div className=" flex items-center justify-between md:border md:border-neutral-100/20 cursor-pointer py-2 px-2 mb-4 rounded-lg ">
                <p className=" text-[1.2rem] font-bold ">Featured News</p>
                <img
                  src="/images/icons8-right-arrow-30.png"
                  alt=""
                  className=" w-5 h-5 "
                />
              </div>
              <div className=" w-full ">
                <img
                  src="/images/K1.jpg"
                  alt=""
                  className=" w-full h-[200px] rounded-lg "
                />
                <h1>Will be back soon!</h1>
              </div>
            </div>
            <div className="w-full bg-inherit h-[200px] mt-5 ">
              <h1 className="text-[.75rem]">ADVERTISEMENT</h1>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BottomBar />
    </>
  );
};

export default Homepage;
