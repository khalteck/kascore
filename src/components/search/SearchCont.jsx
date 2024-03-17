import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import CountriesTray from "../CountriesTray";
import SportListCont from "../SportListCont";
import SearchListCard from "./SearchListCard";
import leaguesData from "../../data/leagues112.json";
import teamsData from "../../data/teams112.json";

const SearchCont = ({ toggleSearch }) => {
  const { isDarkMode } = useAppContext();

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    //logic to trugger search
  };

  const leagues = leaguesData?.response?.slice(0, 5);
  const teams = teamsData?.response;

  console.log("teams", teams);
  return (
    <div className="w-full h-screen overflow-y-auto fixed top-0 left-0 pt-4 pb-[80px] bg-gray-200 dark:bg-[#1d2732] z-40 dark:text-neutral-100">
      <div className="w-full md:w-[600px] md:mx-auto flex gap-3 items-center px-3 mb-3">
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          autoFocus
          className="w-full border border-black/20 dark:border-neutral-100/30 rounded-md bg-inherit outline-none px-2 py-1 placeholder:text-[.85rem]"
        />
        <img
          alt="calendar"
          // src="/images/icons8-close-50.png"
          src={
            isDarkMode
              ? "/images/icons8-close-50.png"
              : "/images/icons8-close-black.png"
          }
          className="w-6 h-auto cursor-pointer"
          onClick={() => {
            toggleSearch();
            setSearchTerm("");
          }}
        />
      </div>

      <div>
        <SportListCont />
      </div>

      <div className="w-full">
        {!searchTerm && <CountriesTray isDarkMode={isDarkMode} />}

        {searchTerm && (
          <>
            <div
              className={`w-full h-fit md:mx-auto md:rounded-lg flex flex-col p-3 md:w-[600px] border border-gray-300 dark:border-gray-600 mt-3 ${
                isDarkMode ? " bg-[#1d2732]" : "bg-gray-100"
              } ${isDarkMode ? "dark" : ""}`}
            >
              <h1 className="text-[.95rem] font-medium">Teams</h1>

              <div className="flex flex-col gap-2 mt-4">
                {teams?.map((item, index) => {
                  const name = item?.team?.name;
                  const logo = item?.team?.logo;
                  const id = item?.team?.id;
                  return (
                    <SearchListCard
                      key={index}
                      item={item}
                      name={name}
                      logo={logo}
                      id={id}
                    />
                  );
                })}
              </div>
            </div>

            <div
              className={`w-full h-fit md:mx-auto md:rounded-lg flex flex-col p-3 md:w-[600px] border border-gray-300 dark:border-gray-600 mt-3 ${
                isDarkMode ? " bg-[#1d2732]" : "bg-gray-100"
              } ${isDarkMode ? "dark" : ""}`}
            >
              <h1 className="text-[.95rem] font-medium">Competitions</h1>

              <div className="flex flex-col gap-2 mt-4">
                {leagues?.map((item, index) => {
                  const name = item?.league?.name;
                  const logo =
                    item?.country?.flag || item?.league?.logo || null;
                  const id = item?.league?.id;
                  return (
                    <SearchListCard
                      key={index}
                      item={item}
                      name={name}
                      logo={logo}
                      id={id}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}

        {searchTerm && leagues?.length === 0 && teams?.length === 0 && (
          <div
            className={`w-full h-[200px] md:mx-auto md:rounded-lg flex flex-col justify-center items-center p-3 md:w-[600px] border border-gray-300 dark:border-gray-600 mt-3 ${
              isDarkMode ? " bg-[#1d2732]" : "bg-gray-100"
            } ${isDarkMode ? "dark" : ""}`}
          >
            <h1 className="text-[.95rem] font-light">No results..</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchCont;
