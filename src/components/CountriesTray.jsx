/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesSkeleton from "./CountriesSkeleton";
import competitions from "../data/competitions.json";
import { useAppContext } from "../contexts/AppContext";
import leaguesData from "../data/leagues112.json";
import leaguesIds from "../data/topLeaguesIds.json";

const CountriesTray = ({ isDarkMode }) => {
  const { openSearch, setOpenSearch, navigate } = useAppContext();
  const [loading, setLoading] = useState(false);

  function toggleSearch() {
    setOpenSearch((prev) => !prev);
  }

  const ids = leaguesIds;
  const leagues = leaguesData?.response;
  const topLeagues = leagues
    ?.filter((item) => {
      if (ids?.includes(item?.league?.id)) {
        return item;
      }
    })
    ?.sort((a, b) => ids?.indexOf(a?.league?.id) - ids?.indexOf(b?.league?.id));
  const defalutFlag = isDarkMode
    ? "/images/icons8-football-50.png"
    : "/images/icons8-football-black.png";

  // console.log("topLeagues", topLeagues);

  return (
    <div className={`w-full flex flex-col gap-3`}>
      <div
        className={`w-full h-fit md:mx-auto  md:rounded-lg flex flex-col p-3 ${
          openSearch &&
          "md:w-[600px] border border-gray-300 dark:border-gray-600 md:mt-3"
        } ${isDarkMode ? " bg-[#1d2732]" : "bg-gray-100"} ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <h1 className="text-[.95rem] font-medium">Top Leagues</h1>

        {!openSearch && (
          <div className="w-full relative mt-3 hidden md:block">
            <input
              onClick={toggleSearch}
              type="text"
              placeholder="Search"
              className={`w-full border rounded-md bg-inherit outline-none px-2 py-1 placeholder:text-[.85rem] ${
                !isDarkMode
                  ? "border-black/50 placeholder:text-black/60"
                  : " border-neutral-100/30  "
              }`}
            />
            <img
              src={
                isDarkMode
                  ? "/images/icons8-search-64.png"
                  : "/images/icons8-search-black.png"
              }
              alt=""
              className="w-5 h-5 absolute top-[50%] right-2 translate-y-[-50%] opacity-60"
            />
          </div>
        )}
        <div className="flex flex-col gap-2 mt-5">
          {topLeagues?.map((itm, ind) => {
            return (
              <div
                key={ind}
                onClick={() => {
                  navigate(`/scores/football/competition/${itm?.league?.id}`);
                  setOpenSearch(false);
                }}
                className="w-full whitespace-nowrap truncate flex gap-3 px-2 py-1 hover:bg-black/20 dark:hover:bg-orange-500/10 rounded-md cursor-pointer"
              >
                <img
                  alt=""
                  src={itm?.country?.flag || defalutFlag}
                  className="w-5 h-5"
                />
                <p className="text-[.8rem]">{itm?.league?.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {!openSearch && (
        <div
          className={`w-full h-[500px] md:mx-auto md:mb-3 md:rounded-lg flex flex-col p-3 ${
            openSearch &&
            "md:w-[600px] border border-gray-300 dark:border-gray-600"
          } ${isDarkMode ? " bg-[#1d2732]" : "bg-gray-100"}`}
        >
          <p>Advertisement</p>
        </div>
      )}
    </div>
  );
};

export default CountriesTray;
