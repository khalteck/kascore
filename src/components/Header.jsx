import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  // const { currentPage } = useAppContext();

  // const [openMenu, setOpenMenu] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 500;

      setScrollBackground(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full ${
        scrollBackground
          ? "bg-[#2a3543] text-gray-200"
          : "bg-[#2a3543] text-gray-200"
      } flex justify-between items-center transition-all duration-700 fixed top-0 left-0 z-[100] font-mont`}
    >
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full h-[60px] md:h-[80px] flex gap-12 items-center justify-center sm:text-[.8rem] lg:text-[.9rem]">
          <div
            onClick={() => navigate("/")}
            className="flex gap-3 items-center cursor-pointer"
          >
            <img
              alt=""
              src="/images/logo.png"
              className="w-[150px] md:w-[200px] h-auto"
            />
          </div>
        </div>

        <ul className="bg-[#5a636b] w-full pl-[120px] md:pl-0 lg:px-[10%] md:h-[60px] gap-3 md:gap-6 items-center justify-center flex overflow-x-auto whitespace-nowrap">
          <li
            // onClick={() => navigate("/")}
            className={`w-fit cursor-pointer text-orange-500 hover:bg-[#2a3543] hover:text-white  lg:bg-[#2a3543] bg-[#2a3543] transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
          >
            <img
              alt=""
              src="/images/icons8-football-50.png"
              className="w-4 md:w-5 h-auto"
            />
            Football
          </li>
          <li
            // onClick={() => navigate("/")}
            className={`w-fit cursor-pointer hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
          >
            <img
              alt=""
              src="/images/icons8-basketball-50.png"
              className="w-4 md:w-5 h-auto"
            />
            Basketball
          </li>
          <li
            // onClick={() => navigate("/")}
            className={`w-fit cursor-pointer hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
          >
            <img
              alt=""
              src="/images/icons8-tennis-50.png"
              className="w-4 md:w-5 h-auto"
            />
            Tennis
          </li>
          <li
            // onClick={() => navigate("/")}
            className={`w-fit cursor-pointer hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
          >
            <img
              alt=""
              src="/images/icons8-hockey-50.png"
              className="w-4 md:w-5 h-auto"
            />
            Hockey
          </li>
          <li
            // onClick={() => navigate("/")}
            className={`w-fit cursor-pointer hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
          >
            <img
              alt=""
              src="/images/icons8-volleyball-50.png"
              className="w-4 md:w-5 h-auto"
            />
            Volleyball
          </li>

          <li
            // onClick={() => navigate("/")}
            className={`w-fit cursor-pointer hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
          >
            <img
              alt=""
              src="/images/icons8-handball-50.png"
              className="w-4 md:w-5 h-auto"
            />
            Handball
          </li>

          <li className="ml-14 border border-orange-500 rounded-md px-3 py-1 md:flex gap-2 items-center cursor-pointer hidden">
            <img
              alt="calendar"
              src="/images/icons8-great-britain-48.png"
              className="w-6 h-auto"
            />
            <p>EN</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
