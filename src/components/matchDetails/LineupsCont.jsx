import lineupsData from "../../data/lineups112.json";
import Pitch from "./pitch";
import SoccerLineUp from "react-soccer-lineup";

const LineupsCont = ({ isDarkMode, currentMatch }) => {
  const homeId = currentMatch?.teams?.home?.id;
  const awayId = currentMatch?.teams?.away?.id;

  const homeLineup = lineupsData?.response?.filter(
    (x) => x?.team?.id === homeId
  )[0];
  const awayLineup = lineupsData?.response?.filter(
    (x) => x?.team?.id === awayId
  )[0];

  const teamsData = lineupsData?.response;

  const homeTeamData = teamsData[0]?.startXI;
  const awayTeamData = teamsData[1]?.startXI;

  const arr = [homeTeamData, awayTeamData];

  // Create an object to hold the home team data
  const homeTeam = {
    squad: {
      gk: {},
      df: [],
      cm: [],
      fw: [],
    },
    style: {
      color: "white",
      nameColor: "white",
      numberColor: "black",
    },
  };

  const awayTeam = {
    squad: {
      gk: {},
      df: [],
      cm: [],
      fw: [],
    },

    style: {
      color: "black",
      nameColor: "white",
      numberColor: "white",
    },
  };

  arr?.forEach((data, index) => {
    data?.forEach(({ player }) => {
      let { pos, name, number, grid } = player;
      const [x, y] = grid.split(":").map(Number);
      const playerInfo = { name, number, color: "" };

      // Handle cases where the pos property is null
      if (!pos) {
        switch (x) {
          case 1:
            pos = "G";
            break;
          case 2:
            pos = "D";
            break;
          case 3:
            pos = "M";
            break;
          case 4:
            pos = "F";
            break;
          default:
            break;
        }
      }

      switch (pos) {
        case "G":
          if (index === 0) {
            homeTeam.squad.gk = playerInfo;
          } else {
            awayTeam.squad.gk = playerInfo;
          }
          break;
        case "D":
          if (index === 0) {
            homeTeam.squad.df[y - 1] = playerInfo;
          } else {
            awayTeam.squad.df[y - 1] = playerInfo;
          }
          break;
        case "M":
          if (index === 0) {
            homeTeam.squad.cm[y - 1] = playerInfo;
          } else {
            awayTeam.squad.cm[y - 1] = playerInfo;
          }
          break;
        case "F":
          if (index === 0) {
            homeTeam.squad.fw[y - 1] = playerInfo;
          } else {
            awayTeam.squad.fw[y - 1] = playerInfo;
          }
          break;
        default:
          break;
      }
    });
  });

  // console.log("homeLineup", homeLineup);

  return (
    <div className="w-full">
      <div className="w-full min-h-[300px]">
        <div className="flex justify-between gap-3 items-center">
          <div className="text-start text-[.85rem]">
            <p className="font-bold uppercase">{homeLineup?.team?.name}</p>
            <p>{homeLineup?.formation}</p>
          </div>
          <div className="text-end text-[.85rem]">
            <p className="font-bold uppercase">{awayLineup?.team?.name}</p>
            <p>{awayLineup?.formation}</p>
          </div>
        </div>
        <p className="text-[.85rem] opacity-50 mt-5">Scroll to reveal {">"}</p>

        <div className="mt-3 overflow-x-auto no-scrollbar">
          {/* <Pitch teamsData={teamsData} homeId={homeId} awayId={awayId} /> */}
          <SoccerLineUp
            size={"small"}
            color={"#48b048"}
            pattern={"lines"}
            homeTeam={awayTeam}
            awayTeam={homeTeam}
          />
        </div>
      </div>

      <div className="w-full min-h-[400px] mt-10">
        <div className="w-full bg-black/20 px-3 py-1 border-y border-black/20 dark:border-white/10 text-center">
          Starting XI
        </div>
        <div className="flex gap-5 justify-between text-[.85rem]">
          <div className="w-1/2 flex flex-col">
            <div
              className={` px-3 py-3 border-b border-black/20 dark:border-white/10 mb-auto`}
            >
              <div className="flex flex-col md:flex-row md:gap-7 gap-2 md:items-center justify-between">
                <p className="md:text-[1rem] font-bold">
                  {homeLineup?.team?.name}
                </p>
                <img
                  src={homeLineup?.team?.logo}
                  alt="home-team"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
              <p className="mt-2">
                <span className="font-bold">Coach: </span>
                {homeLineup?.coach?.name}
              </p>
            </div>
            {homeLineup?.startXI?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex gap-3 items-center px-3 py-1 border-b border-black/20 dark:border-white/10`}
                >
                  <p className="w-5">{item?.player?.number}</p>
                  <p>{item?.player?.name}</p>
                </div>
              );
            })}
          </div>

          <div className="w-1/2 flex flex-col">
            <div
              className={` px-3 py-3 border-b border-black/20 dark:border-white/10`}
            >
              <div className="flex flex-col md:flex-row md:gap-7 gap-2 md:items-center justify-between">
                <p className="md:text-[1rem] font-bold">
                  {awayLineup?.team?.name}
                </p>
                <img
                  src={awayLineup?.team?.logo}
                  alt="home-team"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
              <p className="mt-2">
                {" "}
                <span className="font-bold">Coach: </span>{" "}
                {awayLineup?.coach?.name}
              </p>
            </div>
            {awayLineup?.startXI?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex gap-3 items-center px-3 py-1 border-b border-black/20 dark:border-white/10`}
                >
                  <p className="w-5">{item?.player?.number}</p>
                  <p>{item?.player?.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full min-h-[200px] mt-10">
        <div className="w-full bg-black/20 px-3 py-1 border-y border-black/20 dark:border-white/10 text-center">
          Substitutes
        </div>
        <div className="flex gap-5 justify-between text-[.85rem]">
          <div className="w-1/2 flex flex-col">
            {homeLineup?.substitutes?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex gap-7 items-center px-3 py-1 border-b border-black/20 dark:border-white/10`}
                >
                  <p className="w-5">{item?.player?.number}</p>
                  <p>{item?.player?.name}</p>
                </div>
              );
            })}
          </div>

          <div className="w-1/2 flex flex-col">
            {awayLineup?.substitutes?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex gap-7 items-center px-3 py-1 border-b border-black/20 dark:border-white/10`}
                >
                  <p className="w-5">{item?.player?.number}</p>
                  <p>{item?.player?.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineupsCont;
