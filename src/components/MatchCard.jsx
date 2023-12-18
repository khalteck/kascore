/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const MatchCard = ({ itm, currentLeague }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/details/${currentLeague}/${itm?.id}`)}
      className="flex gap-3 py-2 mb-2 pr-3 hover:bg-black/20 cursor-pointer"
    >
      <div className="w-[60px] text-[.85rem] text-neutral-100/50 border-r border-neutral-100/30 flex flex-col justify-center items-center">
        <p>{itm?.time}</p>
        <p>-</p>
      </div>
      <div className="flex flex-col text-[.9rem]">
        <div className="flex gap-2 items-center">
          <img
            alt="crest"
            src={itm?.home_crest}
            className="w-4 h-4 rounded-full"
          />
          <p>{itm?.home}</p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            alt="crest"
            src={itm?.away_crest}
            className="w-4 h-4 rounded-full"
          />
          <p>{itm?.away}</p>
        </div>
      </div>
      <img
        alt="fave"
        src="/images/icons8-star-50.png"
        className="w-6 h-6 ml-auto"
      />
    </div>
  );
};

export default MatchCard;
