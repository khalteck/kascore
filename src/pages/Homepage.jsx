import Footer from "../components/Footer";
import Header from "../components/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="w-full pt-[130px] md:pt-[170px] pb-12 px-5 lg:px-32 h-[2000px] bg-[#121a20] text-white">
        <div className="w-full h-full flex gap-8">
          <div className="w-[25%] bg-[#1d2732] h-[70%] rounded-lg hidden md:block"></div>
          <div className="w-full md:w-[40%] bg-[#1d2732] h-full rounded-lg p-3">
            <h1 className="font-bold text-center">LIVE</h1>
          </div>
          <div className="w-[35%] bg-[#1d2732] h-[70%] rounded-lg hidden md:block"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
