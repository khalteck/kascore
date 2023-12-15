import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SportListCont from "./SportListCont";
import SportListSearch from "./SportListSearch";
import CountriesTray from "./CountriesTray";
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

  const [openSearch, setOpenSearch] = useState(false);
  function toggleSearch() {
    setOpenSearch((prev) => !prev);
  }

  return (
    <>
      <header
        className={`w-full ${
          scrollBackground
            ? "bg-[#2a3543] text-gray-200"
            : "bg-[#2a3543] text-gray-200"
        } flex justify-between items-center transition-all duration-700 fixed top-0 left-0 z-30 font-mont`}
      >
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex justify-between items-center gap-5 h-[60px] md:h-[70px] md:px-[10%] px-3">
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

            <div className="hidden md:flex items-center bg-black/30 px-2 rounded-md">
              <img
                src="/images/icons8-search-64.png"
                alt=""
                className="w-7 h-7 opacity-70"
              />
              <input
                type="text"
                className="w-[300px] bg-transparent py-2 px-3 outline-none"
                placeholder="Search"
              />
            </div>

            <ul className="hidden md:flex gap-5 items-center">
              <li
                onClick={() => navigate("/favorites")}
                className="flex gap-2 items-center hover:text-white cursor-pointer"
              >
                <img
                  alt=""
                  src="/images/icons8-basketball-50.png"
                  className="w-5 h-auto"
                />
                <p>Favorites</p>
              </li>
              <li className="flex gap-2 items-center">
                <img
                  alt=""
                  src="/images/icons8-basketball-50.png"
                  className="w-5 h-auto"
                />
                <p className="whitespace-nowrap">Get the app</p>
              </li>
              <li className="ml-8 border border-orange-500 rounded-md px-3 py-1 md:flex gap-2 items-center cursor-pointer hidden">
                <img
                  alt="calendar"
                  src="/images/icons8-great-britain-48.png"
                  className="w-6 h-auto"
                />
                <p>EN</p>
              </li>
            </ul>
          </div>

          <img
            src="/images/icons8-search-64.png"
            alt=""
            className="w-7 h-7 absolute top-4 right-2 opacity-70 md:hidden"
            onClick={toggleSearch}
          />

          <SportListCont />
        </div>
      </header>

      {openSearch && (
        <div className="w-full h-screen overflow-y-auto fixed top-0 left-0 pt-4 pb-[80px] bg-[#1d2732] z-40 text-neutral-100">
          <div className="w-full flex gap-3 items-center px-3 mb-3">
            <input
              type="text"
              placeholder="Search by country..."
              className="w-full border border-neutral-100/30 rounded-md bg-inherit outline-none px-2 py-1 placeholder:text-[.85rem]"
            />
            <img
              alt="calendar"
              src="/images/icons8-close-50.png"
              className="w-6 h-auto"
              onClick={toggleSearch}
            />
          </div>

          <div>
            <SportListSearch />
          </div>

          <div className="w-full">
            <CountriesTray />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
