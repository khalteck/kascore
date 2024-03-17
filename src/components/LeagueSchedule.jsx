/* eslint-disable react/prop-types */
import { useAppContext } from "../contexts/AppContext";
import MatchCard from "./MatchCard";

const LeagueSchedule = ({ item, isDarkMode, fixtures }) => {
  const { navigate } = useAppContext();
  // const currentLeague = item?.league_name;
  const info = item?.league;
  const countryInfo = item?.country;

  const defaultFlag = isDarkMode
    ? "/images/icons8-football-50.png"
    : "/images/icons8-football-black.png";

  const myFixtures = fixtures?.filter((x) => x?.league?.id === info?.id);

  return (
    <div
      className={`w-full border-b border-neutral-100/10 mb-4 pt-4 ${
        isDarkMode ? "dark" : ""
      } ${!isDarkMode ? "text-[#121a20]" : "text-neutral-100"}`}
    >
      <div className="flex">
        <div className="w-[60px] flex justify-center items-center">
          <img
            alt="league-image"
            src={countryInfo?.flag || info?.logo || defaultFlag}
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={() => navigate(`/scores/football/competition/${info?.id}`)}
          />
        </div>
        <div>
          <p
            onClick={() => navigate(`/scores/football/competition/${info?.id}`)}
            className="font-medium leading-tight hover:underline cursor-pointer"
          >
            {info?.name}
          </p>
          <p
            className={`text-[.85rem] ${
              !isDarkMode ? "text-[#121a20]/50" : "text-neutral-100/50"
            }`}
          >
            {countryInfo?.name}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col mt-4 border-t dark:border-gray-700 border-black/10">
        {myFixtures?.map((itm, ind) => {
          return (
            <MatchCard
              key={ind}
              itm={itm}
              isDarkMode={isDarkMode}
              league={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LeagueSchedule;
