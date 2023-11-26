import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesSkeleton from "./CountriesSkeleton";

const CountriesTray = () => {
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
    <div className="w-full bg-[#1d2732] h-fit rounded-lg flex flex-col p-3">
      <div className="w-full relative mb-3 hidden md:block">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-neutral-100/30 rounded-md bg-inherit outline-none px-2 py-1 placeholder:text-[.85rem]"
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
  );
};

export default CountriesTray;
