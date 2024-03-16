/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesSkeleton from "./CountriesSkeleton";
import competitions from "../data/competitions.json";
import { useAppContext } from "../contexts/AppContext";

const CountriesTray = ({ isDarkMode }) => {
  const { openSearch, setOpenSearch, navigate } = useAppContext();
  const [loading, setLoading] = useState(false);

  function toggleSearch() {
    setOpenSearch((prev) => !prev);
  }

  //=======================================================to handle top leagues
  // const [englandLeagues, setenglandLeagues] = useState([]);
  // const [spainLeagues, setspainLeagues] = useState([]);
  // const [italyLeagues, setitalyLeagues] = useState([]);
  // const [germanyLeagues, setgermanyLeagues] = useState([]);
  // const [franceLeagues, setfranceLeagues] = useState([]);

  const [topLeagues, settopLeagues] = useState([]);

  // console.log("topLeagues", topLeagues);

  useEffect(() => {
    async function loadTopLeagues() {
      try {
        setLoading(true);
        const topEngland = competitions
          ?.filter((item) => {
            return item?.category?.name?.toLowerCase()?.includes("england");
          })
          ?.slice(0, 6);
        // setenglandLeagues(topEngland?.slice(0, 6));

        const topSpain = competitions
          ?.filter((item) => {
            return item?.category?.name?.toLowerCase()?.includes("spain");
          })
          ?.slice(0, 5);
        // setspainLeagues(topSpain?.slice(0, 5));

        const topItaly = competitions
          ?.filter((item) => {
            return item?.category?.name?.toLowerCase()?.includes("italy");
          })
          ?.slice(0, 5);
        // setitalyLeagues(topItaly?.slice(0, 5));

        const topGermany = competitions
          ?.filter((item) => {
            return item?.category?.name?.toLowerCase()?.includes("germany");
          })
          ?.slice(0, 5);
        // setgermanyLeagues(topGermany?.slice(0, 5));

        const topFrance = competitions
          ?.filter((item) => {
            return item?.category?.name?.toLowerCase()?.includes("france");
          })
          ?.slice(0, 5);
        // setfranceLeagues(topFrance?.slice(0, 5));

        const topUefa = competitions
          ?.filter((item) =>
            item?.name?.toLowerCase()?.split(" ")[0]?.includes("uefa")
          )
          ?.slice(0, 6);

        const top = [
          ...topEngland,
          topSpain[0],
          topGermany[0],
          topItaly[0],
          topFrance[0],
          ...topUefa,
        ];
        settopLeagues(top);
      } catch (error) {
        console.error("error loading comps =>", error);
      } finally {
        setLoading(false);
      }
    }
    loadTopLeagues();
  }, [competitions]);

  //=======================================================to handle countries
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const requiredCountries = [
          "England",
          "Spain",
          "Italy",
          "France",
          "Germany",
          "Netherlands",
        ];

        const filteredCountries = data.reduce((acc, country) => {
          const countryName = country.name.common;
          if (requiredCountries.includes(countryName)) {
            acc.unshift({
              countryName: countryName,
              flagImageUrl: country.flags.png,
            });
          } else {
            acc.push({
              countryName: countryName,
              flagImageUrl: country.flags.png,
            });
          }
          return acc;
        }, []);

        filteredCountries?.unshift({
          countryName: "England",
          flagImageUrl: "/images/icons8-england-48.png",
        });
        setCountries(filteredCountries?.slice(0, 51));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

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
                onClick={() => navigate(`/scores/football/competition/1`)}
                className="w-full whitespace-nowrap truncate flex gap-3 px-2 py-1 hover:bg-black/20 dark:hover:bg-orange-500/10 rounded-md cursor-pointer"
              >
                <img
                  alt=""
                  src={
                    itm?.category?.name === "England"
                      ? "/images/icons8-england-48.png"
                      : itm?.category?.name === "Spain"
                      ? "/images/icons8-spain-48.png"
                      : itm?.category?.name === "Italy"
                      ? "/images/icons8-italy-48.png"
                      : itm?.category?.name === "Germany"
                      ? "/images/icons8-germany-48.png"
                      : itm?.category?.name === "France"
                      ? "/images/icons8-france-48.png"
                      : isDarkMode
                      ? "/images/icons8-football-50.png"
                      : "/images/icons8-football-black.png"
                  }
                  className="w-5 h-5"
                />
                <p className="text-[.8rem]">{itm?.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div
        className={`w-full h-fit md:mx-auto md:mb-3 md:rounded-lg flex flex-col p-3 ${
          openSearch &&
          "md:w-[600px] border border-gray-300 dark:border-gray-600"
        } ${isDarkMode ? " bg-[#1d2732]" : "bg-gray-100"}`}
      >
        <div className="w-full relative mb-3 hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className={`w-full border rounded-md bg-inherit outline-none px-2 py-1 placeholder:text-[.85rem] ${
              isDarkMode
                ? "border-black/50 placeholder:text-black/60"
                : " border-neutral-100/30  "
            }`}
          />
          <img
            src="/images/icons8-search-64.png"
            alt=""
            className="w-5 h-5 absolute top-[50%] right-2 translate-y-[-50%] opacity-60"
          />
        </div>

        {countries?.map((item, index) => {
          return <CountryCard key={index} item={item} />;
        })}

        {loading && <CountriesSkeleton />}
      </div> */}

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
