/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const MatchCard = ({ itm, league, isDarkMode }) => {
  const teams = itm?.teams;
  const navigate = useNavigate();

  function parseTime(originalTime) {
    const dateObject = new Date(originalTime);

    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");

    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  }

  const inPlay = ["1H", "HT", "2H", "ET", "BT", "P", "SUSP", "INT", "LIVE"];

  return (
    <div
      onClick={() => navigate(`/scores/details/${itm?.fixture?.id}`)}
      className={`flex gap-3 py-2 pb-2 pr-3 cursor-pointer border-b ${
        isDarkMode
          ? "hover:bg-black/20 border-gray-700"
          : "hover:bg-orange-500/10 border-gray-700/10"
      }`}
    >
      <div
        className={`w-[60px] text-[.85rem] border-r flex flex-col justify-center items-center ${
          !isDarkMode ? "border-black/40" : "border-neutral-100/30"
        }`}
      >
        {itm?.fixture?.status?.short === "NS" ? (
          <p>{parseTime(itm?.fixture?.date)}</p>
        ) : (
          <p>{itm?.fixture?.status?.short}</p>
        )}

        {inPlay?.includes(itm?.fixture?.status?.short) && (
          <p className="text-orange-500">{itm?.fixture?.status?.elapsed}'</p>
        )}
      </div>

      <div className="flex flex-col text-[.9rem]">
        <div className="flex gap-2 items-center">
          {teams?.home?.logo ? (
            <img
              alt="crest"
              src={teams?.home?.logo}
              className="w-4 h-4 rounded-full"
            />
          ) : (
            <div className="w-3 h-3 rounded-full dark:bg-white/10 bg-black/10"></div>
          )}
          <p>{teams?.home?.name}</p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            alt="crest"
            src={teams?.away?.logo}
            className="w-4 h-4 rounded-full"
          />
          <p>{teams?.away?.name}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center ml-auto">
        {/* <p className="text-[.85rem]">{itm?.fixture?.status?.short}</p> */}
        <div
          className={`h-full flex flex-col justify-between items-center font-bold text-[.85rem] ${
            inPlay?.includes(itm?.fixture?.status?.short) && "text-orange-500"
          }`}
        >
          <p>{itm?.goals?.home}</p>
          <p>{itm?.goals?.away}</p>
        </div>
        <img alt="fave" src="/images/icons8-star-50.png" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default MatchCard;
