/* eslint-disable react/prop-types */
import MatchCard from "./MatchCard";

const LeagueSchedule = ({ item, isDarkMode }) => {
  const currentLeague = item?.league_name;
  return (
    <div
      className={`w-full border-b border-neutral-100/20 pt-4 ${
        isDarkMode ? "text-[#121a20]" : "text-neutral-100"
      }`}
    >
      <div className="flex">
        <div className="w-[60px] flex justify-center items-center">
          <img
            alt="league"
            src={item?.country_flag}
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div>
          <p className="font-medium leading-tight">{item?.league_name}</p>
          <p
            className={`text-[.85rem] ${
              isDarkMode ? "text-[#121a20]/50" : "text-neutral-100/50"
            }`}
          >
            {item?.country_name}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col mt-4">
        {item?.fixtures?.map((itm, ind) => {
          return (
            <MatchCard
              key={ind}
              itm={itm}
              currentLeague={currentLeague}
              isDarkMode={isDarkMode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LeagueSchedule;
