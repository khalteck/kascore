import { useAppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const SearchListCard = ({ item, name, logo, id }) => {
  const { isDarkMode, setOpenSearch } = useAppContext();
  const noLogo = isDarkMode
    ? "/images/icons8-football-50.png"
    : "/images/icons8-football-black.png";

  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        setOpenSearch(false);
        item?.team
          ? navigate(`/scores/football/team/${id}`)
          : navigate(`/scores/football/competition/${id}`);
      }}
      className="w-full whitespace-nowrap truncate flex items-center justify-between gap-3 px-2 py-3 dark:bg-black/10 bg-gray-300/30 hover:bg-black/20 dark:hover:bg-orange-500/10 rounded-md cursor-pointer"
    >
      <div className="flex gap-3">
        <img alt="" src={logo || noLogo} className="w-5 h-5" />
        <p className="text-[.8rem]">{name}</p>
      </div>

      <img
        alt=""
        src={
          isDarkMode
            ? "/images/icons8-star-white.png"
            : "/images/icons8-star-black.png"
        }
        className="w-5 h-5 opacity-70"
      />
    </div>
  );
};

export default SearchListCard;
