/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import events from "../data/events.json";
import axios from "axios";
import moment from "moment";

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

  //==============================================================to get news headlines
  // NEWS API KEY="8cbe94ecef2445ea9b78d1a803d05406"

  // const [othernewsData, setOtherNewsData] = useState();
  const [newsData, setNewsData] = useState();

  const [loading, setLoading] = useState(false);

  const getNews = async () => {
    const url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=gb&" +
      "category=sports&" +
      "from=2023-12-31&" +
      "pageSize=100&" +
      "apiKey=8cbe94ecef2445ea9b78d1a803d05406";

    try {
      setLoading(true);
      const response = await axios.get(url);
      // console.log(response.data);
      const articles = response?.data?.articles;
      const sortedArray = articles?.sort(
        (a, b) =>
          new moment(b.publishedAt?.split("T")[0])?.format("YYYYMMDD") -
          new moment(a.publishedAt?.split("T")[0])?.format("YYYYMMDD")
      );

      setNewsData(sortedArray);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  // const getFootballNews = async () => {
  //   const url =
  //     "https://newsapi.org/v2/top-headlines?" +
  //     "category=sports&" +
  //     "from=2023-12-31&" +
  //     "language=en&" +
  //     "apiKey=8cbe94ecef2445ea9b78d1a803d05406";

  //   try {
  //     setLoading(true);
  //     const response = await axios.get(url);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error fetching news:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        isDarkMode,
        toggleMode,
        topLeagues,
        getNews,
        loading,
        newsData,
        openSearch,
        setOpenSearch,
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
