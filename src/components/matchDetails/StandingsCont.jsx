import standingsData from "../../data/standings112.json";

const StandingsCont = () => {
  const standings = standingsData?.response[0]?.league?.standings[0];

  console.log("standings", standings);
  return (
    <div className="w-full min-h-[300px]">
      <div className="flex gap-2 items-center">
        <div
          //   onClick={() => selectTab("info")}
          className={`text-[.75rem] px-3 py-1 border border-black/20 dark:border-white/30 rounded-full `}
        >
          ALL
        </div>
      </div>

      <div className="w-full text-[.75rem] mt-4">
        <div className="w-full border border-black/20 dark:border-white/10 flex gap-3 items-center p-2 rounded-t-md font-bold px-3">
          <p>#</p>
          <p>TEAM</p>
          <p className="ml-auto w-5">P</p>
          <p className="w-5 hidden md:block">W</p>
          <p className="w-5 hidden md:block">D</p>
          <p className="w-5 hidden md:block">L</p>
          <p className="w-5 hidden md:block">F</p>
          <p className="w-5 hidden md:block">A</p>
          <p className="w-5">GD</p>
          <p className="w-5">PTS</p>
        </div>

        <div>
          {standings?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full px-3 border border-black/20 dark:border-white/10 flex gap-3 items-center p-2"
              >
                <p>{item?.rank}</p>
                <div className="flex gap-2 items-center">
                  <img
                    src={item?.team?.logo}
                    alt="home-team"
                    className="w-4 h-4"
                  />
                  <p>{item?.team?.name}</p>
                </div>
                <p className="ml-auto w-5">{item?.all?.played}</p>
                <p className="w-5 hidden md:block">{item?.all?.win}</p>
                <p className="w-5 hidden md:block">{item?.all?.draw}</p>
                <p className="w-5 hidden md:block">{item?.all?.lose}</p>
                <p className="w-5 hidden md:block">{item?.all?.goals?.for}</p>
                <p className="w-5 hidden md:block">
                  {item?.all?.goals?.against}
                </p>
                <p className="w-5">{item?.goalsDiff}</p>
                <p className="w-5">{item?.points}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StandingsCont;
