import standingsData from "../../data/standings112.json";
import { useNavigate } from "react-router-dom";

const StandingsHalf = ({ teamId }) => {
  const standings = standingsData?.response[0]?.league?.standings[0];
  const navigate = useNavigate();

  // console.log("standings", standings);

  const getColorFromDescription = (description) => {
    const lowerCaseDescription = description?.toLowerCase();
    if (lowerCaseDescription.includes("promotion")) {
      return "#f97316"; // Orange for promotion
    } else if (description === "No_Description") {
      return ""; // No color for other descriptions
    } else {
      return "#dc2626"; // Red for relegation
    }
  };

  const categorizedData = standings.reduce((acc, curr) => {
    const description =
      curr.description?.replace(/ /g, "_") || "No_Description";
    const color = getColorFromDescription(description);

    if (!acc[description]) {
      acc[description] = { teams: [], color };
    }
    acc[description]?.teams.push(curr);
    return acc;
  }, {});

  const categories = Object?.keys(categorizedData)?.map((x) =>
    x?.replace(/_/g, " ")
  );

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
          {standings?.slice(0, 7)?.map((item, index, arr) => {
            const description =
              item.description?.replace(/ /g, "_") || "No_Description";
            const myCategoryColor = categorizedData[description]?.color;

            return (
              <div
                key={index}
                onClick={() => {
                  navigate(`/scores/football/team/${item?.team?.id}`);
                }}
                className={`w-full border border-black/10 dark:border-white/10 flex gap-3 items-center py-2 pr-2 cursor-pointer ${
                  teamId === item?.team?.id && "bg-white/10 font-bold"
                }`}
              >
                <div className="flex gap-1 items-center">
                  <div
                    className={`w-1 h-5 rounded-lg ${
                      item?.description !== arr[0]?.description &&
                      item?.description !== null &&
                      !item?.description?.includes("Relegation") &&
                      "opacity-50"
                    }`}
                    style={{ backgroundColor: myCategoryColor }}
                  ></div>
                  <p>{item?.rank}</p>
                </div>
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

export default StandingsHalf;
