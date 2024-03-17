import { useAppContext } from "../../contexts/AppContext";

const ResultsCard = ({ item, type }) => {
  const { isDarkMode, navigate } = useAppContext();
  const defaultLogo = isDarkMode
    ? "/images/icons8-football-50.png"
    : "/images/icons8-football-black.png";
  return (
    <div
      // onClick={() => navigate(`/scores/details/${item?.fixture?.id}`)}
      className="cursor-pointer"
    >
      <div className="w-full flex gap-4 bg-gray-500/10 dark:bg-black/20 p-3 rounded-md">
        <div className="w-[50px] py-2 my-auto flex flex-col justify-between items-center text-[.75em]">
          {type === "fixture" ? (
            <div className="text-center opacity-70">
              <p>12 FEB</p>
              <p>12:30</p>
            </div>
          ) : (
            <p>{item?.fixture?.status?.short || "FT"}</p>
          )}
        </div>
        <div className="w-full flex flex-col gap-2 text-[.85rem]">
          <div className="flex gap-3 items-center">
            <img
              src={item?.teams?.home?.logo || defaultLogo}
              alt="home-team"
              className="w-5 h-5"
            />
            <p>{item?.teams?.home?.name || "Chelsea"}</p>
          </div>
          <div className="flex gap-3 items-center">
            <img
              src={item?.teams?.away?.logo || defaultLogo}
              alt="away-team"
              className="w-5 h-5"
            />
            <p>{item?.teams?.away?.name || "Arsenal"}</p>
          </div>
        </div>

        {type === "result" ? (
          <>
            <div className="flex flex-col justify-between font-bold">
              <p>{item?.goals?.home}</p>
              <p>{item?.goals?.away}</p>
            </div>

            <img
              alt=""
              src={
                isDarkMode
                  ? "/images/icons8-star-white.png"
                  : "/images/icons8-star-black.png"
              }
              className="w-5 h-5 opacity-70 my-auto"
            />
          </>
        ) : (
          <img
            alt=""
            src={
              isDarkMode
                ? "/images/icons8-star-white.png"
                : "/images/icons8-star-black.png"
            }
            className="w-5 h-5 opacity-70 my-auto"
          />
        )}
      </div>
    </div>
  );
};

export default ResultsCard;
