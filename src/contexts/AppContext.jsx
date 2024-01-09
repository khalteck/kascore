/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import events from "../data/events.json";
import axios from "axios";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("mode"))
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("mode", JSON.stringify(newMode));
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
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/news/v2/list",
      headers: {
        "X-RapidAPI-Key": "212912e40bmsh331c90cc55611e6p178f8djsna36fe9dec8b3",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      setNewsData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const [loading2, setLoading2] = useState(false);

  const [categoryData, setcategoryData] = useState();

  const getNewsByCategory = async (categoryId, page) => {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/news/v2/list-by-sport",
      headers: {
        "X-RapidAPI-Key": "212912e40bmsh331c90cc55611e6p178f8djsna36fe9dec8b3",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
      params: {
        category: categoryId,
        page: page,
      },
    };

    try {
      setLoading2(true);
      const response = await axios.request(options);
      setcategoryData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  };

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
        categoryData,
        getNewsByCategory,
        loading2,
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
