import ScrollToTop from "../ScrollToTop";
import BottomBar from "../components/BottomBar";
import CountriesTray from "../components/CountriesTray";
import FeaturedNewsCont from "../components/FeaturedNewsCont";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAppContext } from "../contexts/AppContext";

const CompetitionDetails = () => {
  const { isDarkMode } = useAppContext();
  return (
    <>
      <Header />
      <div
        className={`w-full pt-[150px] md:pt-[170px] md:pb-12 md:px-[10%] bg-[#d1d5db] text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200 ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <div className="w-full max-w-[1500px] mx-auto h-full flex gap-8">
          <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray isDarkMode={isDarkMode} />
          </div>

          <div
            className={`w-full min-h-[400px] md:w-[50%] md:min-w-[550px] h-full rounded-lg px-3 py-5  ${
              isDarkMode ? "bg-[#1d2732]" : "bg-gray-100"
            }`}
          >
            <div className="w-full mb-4 md:mb-0">Competition Details</div>
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

export default CompetitionDetails;
