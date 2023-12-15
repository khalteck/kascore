import Footer from "../components/Footer";
import Header from "../components/Header";
import CountriesTray from "../components/CountriesTray";
import BottomBar from "../components/BottomBar";

const Favorites = () => {
  return (
    <>
      <Header />
      <div className="w-full pt-[105px] md:pt-[170px] md:pb-12 px-3 md:px-[10%] bg-[#121a20] text-neutral-100/80">
        <div className="w-full h-full flex gap-8">
          <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray />
          </div>

          <div className="w-full md:w-[50%] md:min-w-[550px] bg-[#1d2732] h-full rounded-lg px-3 py-5 my-5"> 
            {/* <div className="w-full mb-4 md:mb-0">
              <DateSlide />
            </div> */}
        
            <div className="w-full h-[550px] bg-[#121a20]/50 md:mt-5 rounded-lg md:border md:border-neutral-100/50 pb-5 ">
              
              <div className=" w-full flex gap-6 py-3 px-5 mb-5 font-medium text-neutral-100/75 rounded-t-lg border-b border-neutral-100/10 md:border-neutral-100/50 ">
                <a
                    href="#"
                    className=" hover:text-white text-[0.85rem] md:text-[1rem]  "
                >
                    Competitions
                </a>

                <a
                    href="#"
                    className=" hover:text-white text-[0.85rem] md:text-[1rem] "
                >
                    Teams
                </a>

                <a
                    href="#"
                    className=" hover:text-white text-[0.85rem] md:text-[1rem] "
                >
                    Matches
                </a>

              </div>

              <div className=" w-full h-auto flex justify-center  items-center px-5 ">
                <div className=" w-full border border-neutral-100/10 md:border-neutral-100/50 py-3 rounded-lg ">
                  <p className=" flex gap-1 md:gap-2 justify-center items-center  text-[0.9rem] md:text-[1rem] text-neutral-100/75 ">
                    Tap 
                    <img src="images/icons8-star-white.png" alt="favorite" className=" w-3.5 h-3.5 md:w-4 md:h-4 " />
                    to add a match to Favorites 
                  </p>
                </div>
              </div>

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

export default Favorites;
