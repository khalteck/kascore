/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

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

  return (
    <AppContext.Provider
      value={{
        currentPage,
        isDarkMode,
        toggleMode,
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
