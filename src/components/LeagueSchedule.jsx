/* eslint-disable react/prop-types */
import MatchCard from "./MatchCard";

const LeagueSchedule = ({ item }) => {
  const currentLeague = item?.league_name;
  return (
    <div className="w-full border-b border-neutral-100/20 pt-4">
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
          <p className="text-neutral-100/50 text-[.85rem]">
            {item?.country_name}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col mt-4">
        {item?.fixtures?.map((itm, ind) => {
          return (
            <MatchCard key={ind} itm={itm} currentLeague={currentLeague} />
          );
        })}
      </div>
    </div>
  );
};

export default LeagueSchedule;
