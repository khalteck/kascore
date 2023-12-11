import { useNavigate } from "react-router-dom";

const MatchCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/details")}
      className="flex gap-3 py-2 mb-2 pr-3 hover:bg-black/20 cursor-pointer"
    >
      <div className="w-[60px] text-[.85rem] text-neutral-100/50 border-r border-neutral-100/30 flex flex-col justify-center items-center">
        <p>13:00</p>
        <p>-</p>
      </div>
      <div className="flex flex-col text-[.9rem]">
        <div className="flex gap-2 items-center">
          <img
            alt="crest"
            src="/images/icons8-england-circular-48.png"
            className="w-4 h-4 rounded-full"
          />
          <p>Tottenham Hotspur</p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            alt="crest"
            src="/images/icons8-england-circular-48.png"
            className="w-4 h-4 rounded-full"
          />
          <p>Aston Villa</p>
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
