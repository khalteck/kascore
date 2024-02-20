import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

const PlayerModal = ({ playerInfo, setSelectedPlayer, playerStats }) => {
  const { isDarkMode } = useAppContext();

  const currentYear = new Date().getFullYear();

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const years = Array.from(
    { length: currentYear - 2000 + 1 },
    (_, index) => 2000 + index
  );

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div
      onClick={() => setSelectedPlayer(null)}
      className="w-full h-full fixed top-0 left-0 z-[999] dark:bg-black/80 bg-black/60 px-3 py-[100px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-h-[400px] lg:max-h-[700px] overflow-y-auto sm:w-[500px] rounded-lg p-3 dark:bg-[#1d2732] bg-gray-100 mx-auto relative"
      >
        <img
          onClick={() => setSelectedPlayer(null)}
          alt=""
          src={
            isDarkMode
              ? "/images/icons8-close-50.png"
              : "/images/icons8-close-black.png"
          }
          className="w-5 h-5 absolute top-3 right-3 cursor-pointer"
        />
        <h2 className="text-center font-bold pb-2 border-b border-black/20 dark:border-white/10">
          Player Information
        </h2>

        <div className="flex gap-3 mt-5 text-[.85rem] pb-4 border-b border-black/20 dark:border-white/10">
          <img
            alt=""
            src={playerInfo?.player?.photo}
            className="w-[100px] h-[100px] object-cover rounded-lg"
          />
          <div>
            <p>
              <span className="opacity-70">Name:</span>{" "}
              <span className="font-bold">
                {playerInfo?.player?.firstname} {playerInfo?.player?.lastname}
              </span>
            </p>
            <p>
              <span className="opacity-70">Nationality:</span>{" "}
              <span className="font-bold">
                {playerInfo?.player?.nationality}
              </span>
            </p>

            <p>
              <span className="opacity-70">Age:</span>{" "}
              <span className="font-bold">{playerInfo?.player?.age}</span>
            </p>

            <p>
              <span className="opacity-70">Height:</span>{" "}
              <span className="font-bold">{playerInfo?.player?.height}</span>
            </p>

            <p>
              <span className="opacity-70">Weight:</span>{" "}
              <span className="font-bold">{playerInfo?.player?.weight}</span>
            </p>
          </div>
        </div>
        <div className="text-[.85rem] pb-3">
          <div className="">
            <h3 className="my-3 font-bold text-center">Player Statistics</h3>
            <div className="mb-3">
              <select
                value={selectedYear}
                onChange={handleYearChange}
                className="dark:bg-[#1d2732] bg-gray-100 border border-black/20 dark:border-white/20 rounded-md outline-none px-2 py-1"
              >
                <option hidden>{currentYear}</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex dark:bg-black/20 bg-gray-200 gap-3 items-center justify-between py-1 border-y border-black/20 dark:border-white/10 font-bold">
              <p className="mr-auto">Competition</p>
              <p className="w-8">P</p>
              <div className="w-8 text-center">
                <img
                  alt=""
                  src={
                    isDarkMode
                      ? "/images/icons8-football-50.png"
                      : "/images/icons8-football-black.png"
                  }
                  className="w-4 h-4"
                />
              </div>
              <div className="w-8 text-center">
                {" "}
                <img
                  alt=""
                  src={
                    isDarkMode
                      ? "/images/icons8-cleats-30.png"
                      : "/images/icons8-cleats-black.png"
                  }
                  className="w-4 h-4"
                />
              </div>
              <div className="w-8 text-center">
                {" "}
                <div className="w-2 h-3 bg-yellow-500"></div>
              </div>
              <div className="w-8 text-center">
                {" "}
                <div className="w-2 h-3 bg-red-500"></div>
              </div>
            </div>
            {playerStats?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-3 items-center justify-between py-1 border-y border-black/20 dark:border-white/10"
                >
                  <p className="mr-auto">{item?.league?.name}</p>
                  <p className="w-8">{item?.games?.appearences || 0}</p>
                  <p className="w-8">{item?.goals?.total || 0}</p>
                  <p className="w-8">{item?.goals?.assists || 0}</p>
                  <p className="w-8">{item?.cards?.yellow || 0}</p>
                  <p className="w-8">{item?.cards?.red || 0}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
