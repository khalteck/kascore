//ANNOTAION!!
// Query the data based on the "status" param, to get only the finished fixtures
//the order by timestamp

import leagues from "../../data/leagues.json";
import ids from "../../data/id.json";
import fixture112 from "../../data/fixture112.json";
import LazyLoad from "react-lazyload";
import LeagueSchedule from "../LeagueSchedule";
import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import ScrollToTop from "../../ScrollToTop";
import { useParams } from "react-router-dom";
import leaguesData from "../../data/leagues112.json";
import ResultsCard from "./ResultsCard";

const Fixtures = () => {
  const {
    isDarkMode,
    fixtureDetailsData,
    fetchFixtureDetailsData,
    currentPage,
    loading2,
  } = useAppContext();

  const { id } = useParams();
  const leagues = leaguesData?.response;
  const currentComp = leagues?.filter((x) => x?.league?.id === Number(id))[0];
  const year = "2020";

  // useEffect(() => {
  //   const leagueId = currentComp?.league?.id?.toString();
  //   fetchFixtureDetailsData(leagueId, year, 10);
  // }, [currentComp, currentPage]);

  const fixtures = fixtureDetailsData?.response;

  // const fixturesDataRaw = leagues?.response;
  // const fixtures = fixture112?.response?.slice(50, 100);

  // const fixtureDataRaw2 = fixturesDataRaw
  //   ?.map((itm) => {
  //     const myFixtures = fixtures?.filter(
  //       (x) => x?.league?.id === itm?.league?.id
  //     );
  //     return myFixtures?.length > 0 && itm;
  //   })
  //   ?.filter((x) => x !== false);

  // const fixturesData = fixtureDataRaw2?.sort((a, b) => {
  //   const indexA = ids.indexOf(a?.league?.id);
  //   const indexB = ids.indexOf(b?.league?.id);

  //   if (indexA !== -1 && indexB !== -1) {
  //     return indexA - indexB;
  //   } else if (indexA !== -1) {
  //     return -1;
  //   } else if (indexB !== -1) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // });

  useEffect(() => {
    window.scrollTo(0, 30);
    setTimeout(() => {
      window.scrollTo(0, -30);
    }, 600);
  }, []);

  // const [visibleComponents, setVisibleComponents] = useState(0);

  // const handleScroll = () => {
  //   const scrolled = window.scrollY || 20;
  //   const windowHeight = window.innerHeight;
  //   const totalHeight = document.documentElement.scrollHeight || 20;

  //   // Adjust the number of visible components based on scroll position
  //   const componentsToShow = Math.ceil(
  //     (scrolled + windowHeight) / (totalHeight / fixturesData.length) +
  //       (windowHeight || 20)
  //   );
  //   setVisibleComponents(Math.min(componentsToShow, fixturesData.length));
  // };

  // useEffect(() => {
  //   handleScroll();

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [fixturesData]);

  return (
    <>
      {loading2 && (
        <div className="w-full h-[300px] border border-black/20 dark:border-white/20 flex justify-center items-center rounded-lg">
          <ClipLoader color={"#f97316"} size={30} />
        </div>
      )}

      {!loading2 && (
        <div className="w-full flex flex-col gap-3">
          {fixtures?.slice(0, 10)?.map((item, index) => {
            return <ResultsCard key={index} item={item} type={"fixture"} />;
          })}
        </div>
      )}
      <ScrollToTop />
    </>
  );
};

export default Fixtures;
