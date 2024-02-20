import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

const TopSection = ({ currentTeam }) => {
  const { isDarkMode } = useAppContext();
  const defaultFlag = isDarkMode
    ? "/images/icons8-football-50.png"
    : "/images/icons8-football-black.png";

  const [flagImageUrl, setFlagImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const country =
      currentTeam?.team?.country?.toLowerCase() === "england"
        ? "United Kingdom"
        : currentTeam?.team?.country?.toLowerCase();
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true
    `)
      .then((response) => response.json())
      .then((data) => {
        setFlagImageUrl(data[0]?.flags?.png);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country flag:", error);
        setLoading(false);
      });
  }, [currentTeam]);

  return (
    <>
      <div className="flex gap-3 items-center ml-1 mb-3 pb-2 border-b border-black/20 dark:border-white/20">
        <img
          alt="league-image"
          src={flagImageUrl || defaultFlag}
          className="w-6 h-auto"
        />
        <p
          className={`text-[.75rem] ${
            !isDarkMode ? "text-[#121a20]/50" : "text-neutral-100/60"
          }`}
        >
          <span className="font-bold">{currentTeam?.team?.country}</span>
        </p>
      </div>

      <div className="flex gap-5">
        <div className="w-[60px] flex justify-center items-center">
          <img
            alt="club-image"
            src={currentTeam?.team?.logo}
            className="w-[100px] h-auto rounded-lg"
          />
        </div>
        <div>
          <div className="font-medium leading-tight flex gap-3 items-center mb-2">
            <p className="font-bold">{currentTeam?.team?.name}</p>{" "}
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

          <p
            className={`text-[.75rem] ${
              !isDarkMode ? "text-[#121a20]/50" : "text-neutral-100/60"
            }`}
          >
            Stadium:{" "}
            <span className="font-bold">
              {currentTeam?.venue?.name} ({currentTeam?.venue?.city})
            </span>
          </p>
          <p
            className={`text-[.75rem] ${
              !isDarkMode ? "text-[#121a20]/50" : "text-neutral-100/60"
            }`}
          >
            Capacity:{" "}
            <span className="font-bold">
              {currentTeam?.venue?.capacity?.toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default TopSection;
