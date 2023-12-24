/* eslint-disable react/prop-types */
import MatchCard from "./MatchCard";

const LeagueSchedule = ({ item, isDarkMode }) => {
  // const currentLeague = item?.league_name;
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
            src="/images/icons8-england-circular-48.png"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div>
          <p className="font-medium leading-tight">{item?.name}</p>
          <p
            className={`text-[.85rem] ${
              isDarkMode ? "text-[#121a20]/50" : "text-neutral-100/50"
            }`}
          >
            {item?.country}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col mt-4">
        {item?.schedule?.map((itm, ind) => {
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
