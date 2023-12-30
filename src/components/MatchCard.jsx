/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const MatchCard = ({ itm, league, isDarkMode }) => {
  const navigate = useNavigate();

  function parseTime(originalTime) {
    const dateObject = new Date(originalTime);

    const hours = String(dateObject.getHours()).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");

    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  }

  return (
    <div
      onClick={() => navigate(`/details/${league?.name}/${itm?.id}`)}
      className={`flex gap-3 py-2 mb-2 pr-3 cursor-pointer ${
        !isDarkMode ? "hover:bg-black/20" : "hover:bg-orange-500/10"
      }`}
    >
      {itm?.status === "notstarted" ? (
        <div
          className={`w-[60px] text-[.85rem] border-r flex flex-col justify-center items-center ${
            isDarkMode ? "border-black" : "border-neutral-100/30"
          }`}
        >
          <p>{parseTime(itm?.start_at)}</p>
          <p>-</p>
        </div>
      ) : itm?.status === "finished" ? (
        <div
          className={`w-[60px] text-[.85rem] border-r flex flex-col justify-center items-center ${
            isDarkMode ? "border-black" : "border-neutral-100/30"
          }`}
        >
          <p>FT</p>
        </div>
      ) : itm?.status === "postponed" ? (
        <div
          className={`w-[60px] text-[.85rem] border-r flex flex-col justify-center items-center ${
            isDarkMode ? "border-black" : "border-neutral-100/30"
          }`}
        >
          <p>PostP.</p>
        </div>
      ) : (
        <div
          className={`w-[60px] text-[.85rem] border-r flex flex-col justify-center items-center ${
            isDarkMode ? "border-black" : "border-neutral-100/30"
          }`}
        >
          <p>-</p>
        </div>
      )}

      <div className="flex flex-col text-[.9rem]">
        <div className="flex gap-2 items-center">
          <img
            alt="crest"
            src={itm?.home_team?.logo}
            className="w-4 h-4 rounded-full"
          />
          <p>{itm?.home_team?.name}</p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            alt="crest"
            src={itm?.away_team?.logo}
            className="w-4 h-4 rounded-full"
          /> 
          <p>{itm?.away_team?.name}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center ml-auto">
        <div className="h-full flex flex-col justify-between font-bold">
          <p>{itm?.home_score?.current}</p>
          <p>{itm?.away_score?.current}</p>
        </div>
        <img alt="fave" src="/images/icons8-star-50.png" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default MatchCard;
