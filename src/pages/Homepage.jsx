import DateSlide from "../components/DateSlide";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LeagueSchedule from "../components/LeagueSchedule";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="w-full pt-[105px] md:pt-[170px] md:pb-12 md:px-5 h-[2000px] bg-[#121a20] text-white">
        <div className="w-full md:w-[80%] mx-auto h-full flex gap-8">
          <div className="w-[25%] min-w-[200px] bg-[#1d2732] h-[70%] rounded-lg hidden md:flex flex-col">
            <div className=" flex items-center gap-7 mx-5 my-2 cursor-pointer hover ">
              <img
                src="/images/icons8-england-48.png"
                alt=""
                className=" w-6 h-5"
              />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img
                src="/images/icons8-england-48.png"
                alt=""
                className=" w-6 h-5"
              />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img
                src="/images/icons8-england-48.png"
                alt=""
                className=" w-6 h-5"
              />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img
                src="/images/icons8-england-48.png"
                alt=""
                className=" w-6 h-5"
              />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img
                src="/images/icons8-england-48.png"
                alt=""
                className=" w-6 h-5"
              />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img
                src="/images/icons8-england-48.png"
                alt=""
                className=" w-6 h-5"
              />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img
                src="/images/icons8-england-48.png"
                alt=""
                className=" w-6 h-5"
              />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img
                src="/images/icons8-england-48.png"
                alt=""
                className=" w-6 h-5"
              />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img
                src="/images/icons8-england-48.png"
                alt=""
                className=" w-6 h-5"
              />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img
                src="/images/icons8-england-48.png"
                alt=""
                className=" w-6 h-5"
              />
              <p className=" text-base">England</p>
            </div>
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
          <div className="w-[25%] min-w-[200px] bg-[#1d2732] h-[500px] rounded-lg hidden lg:block p-4">
            <h1 className="text-[.75rem]">ADVERTISEMENT</h1>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
