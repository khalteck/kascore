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
