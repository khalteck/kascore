import FullBorderButton from "../Buttons/FullBorderButton";
import NewsCard from "../NewsCard";
import ResultsCard from "./ResultsCard";
import newsData from "../../data/news.json";

const Overview = ({ setCurrentTab }) => {
  const news = newsData?.featuredArticles?.slice(0, 3);

  function handleViewMoreFixtures() {
    setCurrentTab("fixtures");
  }

  function handleViewMoreNews() {
    setCurrentTab("news");
  }

  function handleViewMoreResults() {
    setCurrentTab("results");
  }

  return (
    <>
      <div className="w-full">
        <h2 className="text-[.85rem] mb-3">LATEST RESULTS</h2>
        <div className="flex flex-col gap-3 mb-5">
          <ResultsCard type={"result"} />
          <ResultsCard type={"result"} />
          <ResultsCard type={"result"} />
        </div>

        <FullBorderButton action={handleViewMoreResults} />
      </div>

      <div className="w-full">
        <h2 className="text-[.85rem] mb-3">SCHEDULED</h2>
        <div className="flex flex-col gap-3 mb-5">
          <ResultsCard type={"fixture"} />
          <ResultsCard type={"fixture"} />
          <ResultsCard type={"fixture"} />
        </div>

        <FullBorderButton action={handleViewMoreFixtures} />
      </div>

      <div className="w-full">
        <h2 className="text-[.85rem] mb-3">NEWS</h2>
        <div className="flex flex-col gap-3 mb-5">
          {news?.map((item, index) => {
            return <NewsCard key={index} item={item} />;
          })}
        </div>

        <FullBorderButton action={handleViewMoreNews} />
      </div>
    </>
  );
};

export default Overview;
