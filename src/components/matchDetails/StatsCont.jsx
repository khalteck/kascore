import ProgressBar from "./ProgressBar";
import statsData from "../../data/stats112.json";

const StatsCont = () => {
  const teamStatistics = statsData?.response;

  const combinedStatistics = teamStatistics[0]?.statistics.map(
    (stat, index) => ({
      type: stat.type,
      homeValue: stat.value || 0,
      awayValue: teamStatistics[1]?.statistics[index]?.value || 0,
      total:
        (stat?.value || 0) + (teamStatistics[1]?.statistics[index].value || 0),
    })
  );

  //   console.log("combinedStatistics", combinedStatistics);

  return (
    <div className="w-full min-h-[200px] flex flex-col gap-4 text-[.85rem] mt-5">
      {combinedStatistics?.map((item, index) => {
        const homeProgress =
          ((item?.homeValue || 0) / (item?.total || 0)) * 100;
        const awayProgress =
          ((item?.awayValue || 0) / (item?.total || 0)) * 100;

        const homeProg = item?.homeValue?.toString()?.includes("%")
          ? Number(item?.homeValue?.slice(0, 2))
          : homeProgress;
        const awayProg = item?.awayValue?.toString()?.includes("%")
          ? Number(item?.awayValue?.slice(0, 2))
          : awayProgress;

        return (
          <div key={index}>
            <div className="flex justify-between">
              <p
                className={`${
                  item?.homeValue > item?.awayValue ? "font-bold" : "font-light"
                }`}
              >
                {item?.homeValue || 0}
              </p>
              <p>{item?.type}</p>
              <p
                className={`${
                  item?.homeValue < item?.awayValue ? "font-bold" : "font-light"
                }`}
              >
                {item?.awayValue || 0}
              </p>
            </div>
            <div className="flex gap-[7px] mt-2">
              <ProgressBar progress={homeProg} type="home" />
              <ProgressBar progress={awayProg} type="away" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCont;
