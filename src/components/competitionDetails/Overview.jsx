import FullBorderButton from "../Buttons/FullBorderButton";
import NewsCard from "../NewsCard";
import ResultsCard from "./ResultsCard";
import newsData from "../../data/news.json";
import ScrollToTop from "../../ScrollToTop";
import StandingsHalf from "./StandingsHalf";

const Overview = ({
  setCurrentTab,
  currentComp,
  standings,
  resultData,
  fixtureDetailsData,
}) => {
  const news = newsData?.featuredArticles?.slice(0, 3);

  function handleViewMoreStandings() {
    setCurrentTab("standings");
  }

  function handleViewMoreFixtures() {
    setCurrentTab("fixtures");
  }

  function handleViewMoreNews() {
    setCurrentTab("news");
  }

  function handleViewMoreResults() {
    setCurrentTab("results");
  }

  // console.log("fixtureDetailsData", fixtureDetailsData);
  const results = resultData?.response;
  const fixtures = fixtureDetailsData?.response;

  return (
    <>
      {currentComp?.league?.type === "League" && (
        <div className="w-full">
          <h2 className="text-[.85rem] mb-3">STANDINGS</h2>
          <StandingsHalf standings={standings} />

          <FullBorderButton action={handleViewMoreStandings} />
        </div>
      )}

      <div className="w-full">
        <h2 className="text-[.85rem] mb-3">RESULTS</h2>
        <div className="flex flex-col gap-3 mb-5">
          {results?.map((item, index) => {
            return <ResultsCard key={index} item={item} type={"result"} />;
          })}
        </div>

        <FullBorderButton action={handleViewMoreResults} />
      </div>

      <div className="w-full">
        <h2 className="text-[.85rem] mb-3">FIXTURES</h2>
        <div className="flex flex-col gap-3 mb-5">
          {fixtures?.slice(0, 3)?.map((item, index) => {
            return <ResultsCard key={index} item={item} type={"fixture"} />;
          })}
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

      <ScrollToTop />
    </>
  );
};

export default Overview;
