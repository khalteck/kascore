/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import events from "../data/events.json";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
    // If you prefer to toggle the class on 'body':
    // document.body.classList.toggle('dark');
  };

  //==============================================================to get prem fixtures for 23/12/2023
  const englandSchedule = events?.data?.filter(
    (item) => item?.league?.slug === "england-premier-league"
  );

  const topLeagues = [
    {
      name: "Premier League",
      logo: englandSchedule[0]?.league?.logo,
      country: "England",
      schedule: englandSchedule,
    },
  ];

  console.log("topLeagues", topLeagues);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        isDarkMode,
        toggleMode,
        topLeagues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
