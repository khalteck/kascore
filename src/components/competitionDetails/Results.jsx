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

const Results = () => {
  const { isDarkMode } = useAppContext();

  const fixturesDataRaw = leagues?.response;
  const fixtures = fixture112?.response?.slice(0, 50);

  const fixtureDataRaw2 = fixturesDataRaw
    ?.map((itm) => {
      const myFixtures = fixtures?.filter(
        (x) => x?.league?.id === itm?.league?.id
      );
      return myFixtures?.length > 0 && itm;
    })
    ?.filter((x) => x !== false);

  const fixturesData = fixtureDataRaw2?.sort((a, b) => {
    const indexA = ids.indexOf(a?.league?.id);
    const indexB = ids.indexOf(b?.league?.id);

    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    } else if (indexA !== -1) {
      return -1;
    } else if (indexB !== -1) {
      return 1;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    window.scrollTo(0, 30);
    setTimeout(() => {
      window.scrollTo(0, -30);
    }, 600);
  }, []);

  const [visibleComponents, setVisibleComponents] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY || 20;
    const windowHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight || 20;

    // Adjust the number of visible components based on scroll position
    const componentsToShow = Math.ceil(
      (scrolled + windowHeight) / (totalHeight / fixturesData.length) +
        (windowHeight || 20)
    );
    setVisibleComponents(Math.min(componentsToShow, fixturesData.length));
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixturesData]);

  return (
    <>
      <div className="w-full">
        {fixturesData?.map((item, index) => (
          <LazyLoad key={index} height={200} offset={100} once>
            {index < visibleComponents && (
              <LeagueSchedule
                item={item}
                isDarkMode={isDarkMode}
                fixtures={fixtures}
              />
            )}
          </LazyLoad>
        ))}
      </div>
      <ScrollToTop />
    </>
  );
};

export default Results;
