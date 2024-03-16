/* eslint-disable react/prop-types */

const Tab = ({ currentTab, setCurrentTab }) => {
  return (
    <div
      id="list2"
      className=" w-full h-[30px] my-4 pr-12 relative flex gap-5 border-b border-black/20 dark:border-neutral-100/20 mt-10 overflow-x-auto whitespace-nowrap no-scrollbar"
    >
      <div
        onClick={() => setCurrentTab("overview")}
        className={`hover:text-orange-500 text-[0.8rem] uppercase cursor-pointer border-b-2 ${
          currentTab === "overview"
            ? "text-orange-500 border-orange-500 font-bold"
            : "border-transparent"
        }`}
      >
        OVERVIEW
      </div>
      <div
        onClick={() => setCurrentTab("results")}
        className={`hover:text-orange-500 text-[0.8rem] uppercase cursor-pointer border-b-2 ${
          currentTab === "results"
            ? "text-orange-500 border-orange-500 font-bold"
            : "border-transparent"
        }`}
      >
        RESULTS
      </div>
      <div
        onClick={() => setCurrentTab("fixtures")}
        className={`hover:text-orange-500 text-[0.8rem] uppercase cursor-pointer border-b-2 ${
          currentTab === "fixtures"
            ? "text-orange-500 border-orange-500 font-bold"
            : "border-transparent"
        }`}
      >
        FIXTURES
      </div>
      <div
        onClick={() => setCurrentTab("standings")}
        className={`hover:text-orange-500 text-[0.8rem] uppercase cursor-pointer border-b-2 ${
          currentTab === "standings"
            ? "text-orange-500 border-orange-500 font-bold"
            : "border-transparent"
        }`}
      >
        STANDINGS
      </div>{" "}
      <div
        onClick={() => setCurrentTab("news")}
        className={`hover:text-orange-500 text-[0.8rem] uppercase cursor-pointer border-b-2 ${
          currentTab === "news"
            ? "text-orange-500 border-orange-500 font-bold"
            : "border-transparent"
        }`}
      >
        NEWS
      </div>
    </div>
  );
};

export default Tab;
