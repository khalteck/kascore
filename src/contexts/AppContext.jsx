/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import events from "../data/events.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const navigate = useNavigate();

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
      // headers: {
      //   "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
      //   "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      // },
      headers: {
        "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
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
      // headers: {
      //   "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
      //   "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      // },
      headers: {
        "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
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

  const [newsDetailsData, setnewsDetailsData] = useState({});
  const getNewsDetails = async (newsId) => {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/news/v2/detail",
      // headers: {
      //   "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
      //   "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      // },
      headers: {
        "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
      params: {
        id: newsId,
      },
    };

    try {
      setLoading2(true);
      const response = await axios.request(options);
      setnewsDetailsData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  };

  const [openSearch, setOpenSearch] = useState(false);

  //=========================================================to fetch leagues
  const [leaguesData, setleaguesData] = useState({});
  const fetchLeagues = async () => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
      headers: {
        "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      },
    };

    try {
      setLoading2(true);
      const response = await axios.request(options);
      setleaguesData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  };

  //=========================================================to fetch standings
  const [standingsData, setstandingsData] = useState({});
  const fetchStandings = async (leagueId, year) => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/standings",
      headers: {
        "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
      params: {
        league: leagueId,
        season: year,
      },
    };

    try {
      setLoading2(true);
      const response = await axios.request(options);
      setstandingsData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  };

  //=========================================================to results
  const [resultData, setresultData] = useState({});
  const fetchResult = async (leagueId, year, number) => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      headers: {
        "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
      params: {
        league: leagueId,
        season: year,
        last: number,
      },
    };

    try {
      setLoading2(true);
      const response = await axios.request(options);
      setresultData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  };

  //=========================================================to results
  const [fixtureDetailsData, setfixtureDetailsData] = useState({});
  const fetchFixtureDetailsData = async (leagueId, year, number) => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
      headers: {
        "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
      params: {
        league: leagueId,
        season: year,
      },
    };

    try {
      setLoading2(true);
      const response = await axios.request(options);
      setfixtureDetailsData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  };

  //=========================================================to fetch fixtures by date
  const [fixturesData, setfixturesData] = useState({});
  const fetchFixtures = async (date) => {
    const options = {
      method: "GET",
      url: "https://v3.football.api-sports.io/fixtures",
      headers: {
        "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
      params: {
        date: date,
      },
    };

    try {
      setLoading2(true);
      const response = await axios.request(options);
      setfixturesData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  };

  //=========================================================to fetch fixture details by id
  const [fixturesDetailsData, setfixturesDetailsData] = useState({});
  const fetchFixtureDetails = async (fixtureId) => {
    const options = {
      method: "GET",
      url: "https://v3.football.api-sports.io/leagues",
      headers: {
        "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
      params: {
        id: fixtureId,
      },
    };

    try {
      setLoading2(true);
      const response = await axios.request(options);
      setfixturesDetailsData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  };

  //=========================================================to fetch match events
  const [matchEvents, setmatchEvents] = useState({});
  const fetchMatchEvents = async (fixtureId) => {
    const options = {
      method: "GET",
      url: "https://v3.football.api-sports.io/fixtures/events",
      headers: {
        "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
      params: {
        fixture: fixtureId,
      },
    };

    try {
      setLoading2(true);
      const response = await axios.request(options);
      setmatchEvents(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  };

  //=========================================================to fetch match lineups
  const [matchLineups, setmatchLineups] = useState({});
  const fetchMatchLineups = async (fixtureId) => {
    const options = {
      method: "GET",
      url: "https://v3.football.api-sports.io/fixtures/lineups",
      headers: {
        "X-RapidAPI-Key": "6204d52b01mshf43ae761a1d2815p157edejsn9d58f813da5a",
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
      params: {
        fixture: fixtureId,
      },
    };

    try {
      setLoading2(true);
      const response = await axios.request(options);
      setmatchLineups(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  };

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
        newsDetailsData,
        getNewsDetails,
        fixturesData,
        fetchLeagues,
        leaguesData,
        fetchFixtures,
        fixturesDetailsData,
        fetchFixtureDetails,
        navigate,
        fetchStandings,
        standingsData,
        fetchResult,
        resultData,
        fixtureDetailsData,
        fetchFixtureDetailsData,
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
