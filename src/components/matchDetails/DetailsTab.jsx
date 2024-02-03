/* eslint-disable react/prop-types */

const DetailsTab = ({ currentTab, setCurrentTab, isDarkMode }) => {
  const scrollListToRight = () => {
    const listElement = document.getElementById("list2");
    if (listElement) {
      listElement.scrollTo({
        left: listElement.scrollLeft + 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="list2"
      className=" w-full h-[30px] my-4 pb-3 pr-12 relative flex gap-5 border-b border-black/20 dark:border-neutral-100/50 overflow-x-auto whitespace-nowrap no-scrollbar"
    >
      <div
        onClick={() => setCurrentTab("summary")}
        className={`hover:text-orange-500 text-[0.8rem] uppercase cursor-pointer ${
          currentTab === "summary" && "text-orange-500"
        }`}
      >
        Summary
      </div>
      <div
        onClick={() => setCurrentTab("lineups")}
        className={`hover:text-orange-500 text-[0.8rem] uppercase cursor-pointer ${
          currentTab === "lineups" && "text-orange-500"
        }`}
      >
        LINEUPS
      </div>
      <div
        onClick={() => setCurrentTab("statistics")}
        className={`hover:text-orange-500 text-[0.8rem] uppercase cursor-pointer ${
          currentTab === "statistics" && "text-orange-500"
        }`}
      >
        STATISTICS
      </div>
      <div
        onClick={() => setCurrentTab("h2h")}
        className={`hover:text-orange-500 text-[0.8rem] uppercase cursor-pointer ${
          currentTab === "h2h" && "text-orange-500"
        }`}
      >
        H2H
      </div>{" "}
      <div
        onClick={() => setCurrentTab("standings")}
        className={`hover:text-orange-500 text-[0.8rem] uppercase cursor-pointer ${
          currentTab === "standings" && "text-orange-500"
        }`}
      >
        STANDINGS
      </div>
      <div
        onClick={() => setCurrentTab("news")}
        className={`hover:text-orange-500 text-[0.8rem] uppercase cursor-pointer ${
          currentTab === "news" && "text-orange-500"
        }`}
      >
        News
      </div>
      {/* <div
        onClick={scrollListToRight}
        className="w-[50px] h-[48px] md:h-[60px] bg-gradient-to-l from-[#d1d5db] dark:from-[#1d2732] to-transparent absolute top-0 right-0 md:hidden flex items-center justify-end px-1"
      >
        <img
          alt=""
          src={
            !isDarkMode
              ? "/images/icons8-right-arrow-black.png"
              : "/images/icons8-right-arrow-white.png"
          }
          className="w-5 h-5 opacity-70"
        />
      </div> */}
    </div>
  );
};

export default DetailsTab;
