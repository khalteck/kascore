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

          <div className="w-full md:w-[50%] md:min-w-[550px] bg-[#1d2732] h-full rounded-lg px-3 py-5">
            {/* <div className="w-full mb-4 md:mb-0">
              <DateSlide />
            </div> */}

            <div className="w-full bg-[#121a20]/50 md:mt-5 rounded-lg">
              <h1 className="font-medium text-[1.2rem] p-4 rounded-lg">
                Favorites
              </h1>
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
