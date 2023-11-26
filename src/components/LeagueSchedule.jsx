import MatchCard from "./MatchCard";

const LeagueSchedule = () => {
  return (
    <div className="w-full border-b border-neutral-100/20 pt-4">
      <div className="flex">
        <div className="w-[60px] flex justify-center items-center">
          <img
            alt="league"
            src="/images/icons8-england-circular-48.png"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div>
          <p className="font-medium leading-tight">Premier League</p>
          <p className="text-neutral-100/50 text-[.85rem]">England</p>
        </div>
      </div>

      <div className="w-full flex flex-col mt-4">
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </div>
    </div>
  );
};

export default LeagueSchedule;
