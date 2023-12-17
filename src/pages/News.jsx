import Footer from "../components/Footer";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";

const News = () => {
  return (
    <>
      <Header />
      <div className="w-full pt-[85px] md:pt-[170px] md:pb-12 md:px-[10%] bg-[#121a20] text-neutral-100/80">
        <div className="w-full h-full flex gap-8">
          {/* <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray />
          </div> */}

          <div className="w-full md:w-[50%] md:min-w-[550px] bg-[#1d2732] min-h-screen rounded-lg px-3 py-5 mt-5">
            {/* <div className="w-full mb-4 md:mb-0">
              <DateSlide />
            </div> */}
            <h1 className="font-bold">News Page</h1>
          </div>
          {/* <div className="w-[30%] min-w-[200px] h-[400px] hidden lg:block">
            <div className="bg-[#1d2732] w-full h-[500px] p-4 rounded-lg">
              <h1 className="text-[.75rem]">FEATURED NEWS</h1>
            </div>
            <div className="bg-[#1d2732] w-full h-[400px] mt-5 p-4 rounded-lg">
              <h1 className="text-[.75rem]">ADVERTISEMENT</h1>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
      <BottomBar />
    </>
  );
};

export default News;
