/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesSkeleton from "./CountriesSkeleton";

const CountriesTray = ({ isDarkMode }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div className={`flex flex-col gap-3`}>
      <div
        className={`w-full h-fit rounded-lg flex flex-col p-3 ${
          !isDarkMode ? " bg-[#1d2732]" : "bg-gray-100"
        } ${isDarkMode ? "dark" : ""}`}
      >
        <h1 className="text-[.95rem] font-medium">Top Leagues</h1>
        <div className="flex flex-col gap-2 mt-5">
          <div className="flex gap-3 px-2 py-1 hover:bg-black/20 dark:hover:bg-orange-500/10 rounded-md cursor-pointer">
            <img
              alt=""
              src={
                !isDarkMode
                  ? "/images/icons8-football-50.png"
                  : "/images/icons8-football-black.png"
              }
              className="w-5 h-5"
            />
            <p className="text-[.8rem]">UEFA Chanpions League</p>
          </div>
          <div className="flex gap-3 px-2 py-1 hover:bg-black/20 dark:hover:bg-orange-500/10 rounded-md cursor-pointer">
            <img
              alt=""
              src={
                !isDarkMode
                  ? "/images/icons8-football-50.png"
                  : "/images/icons8-football-black.png"
              }
              className="w-5 h-5"
            />
            <p className="text-[.8rem]">UEFA Europa League</p>
          </div>
          <div className="flex gap-3 px-2 py-1 hover:bg-black/20 dark:hover:bg-orange-500/10 rounded-md cursor-pointer">
            <img
              alt=""
              src={
                !isDarkMode
                  ? "/images/icons8-football-50.png"
                  : "/images/icons8-football-black.png"
              }
              className="w-5 h-5"
            />
            <p className="text-[.8rem]">English Premier Leage</p>
          </div>

          <div className="flex gap-3 px-2 py-1 hover:bg-black/20 dark:hover:bg-orange-500/10 rounded-md cursor-pointer">
            <img
              alt=""
              src={
                !isDarkMode
                  ? "/images/icons8-football-50.png"
                  : "/images/icons8-football-black.png"
              }
              className="w-5 h-5"
            />
            <p className="text-[.8rem]">Laliga</p>
          </div>
          <div className="flex gap-3 px-2 py-1 hover:bg-black/20 dark:hover:bg-orange-500/10 rounded-md cursor-pointer">
            <img
              alt=""
              src={
                !isDarkMode
                  ? "/images/icons8-football-50.png"
                  : "/images/icons8-football-black.png"
              }
              className="w-5 h-5"
            />
            <p className="text-[.8rem]">Bundesliga</p>
          </div>
          <div className="flex gap-3 px-2 py-1 hover:bg-black/20 dark:hover:bg-orange-500/10 rounded-md cursor-pointer">
            <img
              alt=""
              src={
                !isDarkMode
                  ? "/images/icons8-football-50.png"
                  : "/images/icons8-football-black.png"
              }
              className="w-5 h-5"
            />
            <p className="text-[.8rem]">Serie A</p>
          </div>
        </div>
      </div>

      <div
        className={`w-full h-fit rounded-lg flex flex-col p-3 ${
          !isDarkMode ? " bg-[#1d2732]" : "bg-gray-100"
        }`}
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
      </div>
    </div>
  );
};

export default CountriesTray;
