import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { currentPage } = useAppContext();

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

  // function handleClick() {
  //   setOpenMenu((prevState) => !prevState);
  // }

  // function scrollToFooter() {
  //   const footerSection = document.getElementById("footer");
  //   if (footerSection) {
  //     footerSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  // function scrollToTeam() {
  //   if (currentPage?.includes("about")) {
  //     const teamSection = document.getElementById("team");
  //     if (teamSection) {
  //       teamSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   } else {
  //     navigate("/about#team");
  //   }
  // }

  return (
    <header
      className={`w-full ${
        scrollBackground
          ? "bg-[#2a3543] text-gray-200"
          : "bg-[#2a3543] text-gray-200"
      } flex justify-between items-center transition-all duration-700 fixed top-0 left-0 z-[100] font-mont`}
    >
      {/* <Link to="/">
        <>
          {" "}
          <div
            onClick={() => navigate("/")}
            className="gap-3 items-center md:hidden flex cursor-pointer"
          >
            <img alt="" src="/images/logo.png" className="w-[150px] h-auto" />
          </div>
        </>
      </Link> */}
      {/* <div
        onClick={handleClick}
        className="flex flex-col gap-2 w-10 md:hidden cursor-pointer"
      >
        <div
          className={`w-full h-1 ${
            scrollBackground
              ? "bg-[#ef4444]"
              : !scrollBackground
              ? "bg-white"
              : "bg-[#ef4444]"
          } rounded-lg`}
        ></div>
        <div
          className={`w-full h-1 ${
            scrollBackground
              ? "bg-[#ef4444]"
              : !scrollBackground
              ? "bg-white"
              : "bg-[#ef4444]"
          } rounded-lg`}
        ></div>{" "}
      </div> */}
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
            className={`w-fit cursor-pointer hover:bg-[#2a3543] hover:text-white  lg:bg-[#2a3543] bg-[#2a3543] transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
            className={`w-fit cursor-pointer hover:bg-[#2a3543] hover:text-white  lg:bg-white/20 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
            className={`w-fit cursor-pointer hover:bg-[#2a3543] hover:text-white  lg:bg-white/20 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
            className={`w-fit cursor-pointer hover:bg-[#2a3543] hover:text-white  lg:bg-white/20 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
            className={`w-fit cursor-pointer hover:bg-[#2a3543] hover:text-white  lg:bg-white/20 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
            className={`w-fit cursor-pointer hover:bg-[#2a3543] hover:text-white  lg:bg-white/20 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
          >
            <img
              alt=""
              src="/images/icons8-handball-50.png"
              className="w-4 md:w-5 h-auto"
            />
            Handball
          </li>
        </ul>
      </div>

      {/* mobile dropdown */}
      {/* {openMenu && (
        <div className="w-full min-h-fit h-[100vh] z-[200] bg-neutral-800 fixed top-0 left-0 lg:hidden">
          <div
            onClick={() => {
              handleClick();
            }}
            className="w-fit h-fit p-2  bg-white rounded-full cursor-pointer mr-[25px] absolute top-4 right-0"
          >
            <img
              className="w-5 h-5  text-white"
              alt=""
              src="/images/icons8-close-50.png"
            />
          </div>
          <ul className="slide float-right w-full min-h-[150px] bg-neutral-800 py-10 text-white gap-3 px-7 text-[1.25rem] md:hidden flex flex-col">
            <li className="py-2 uppercase border-b">
              <div
                onClick={() => {
                  handleClick();
                  navigate("/login");
                }}
                className="flex gap-3 items-center text-[#ef4444] text-[1.25rem] font-medium cursor-pointer"
              >
                <img
                  alt=""
                  src="/images/icons8-user-50.png"
                  className="w-10 h-10"
                />
                <p>Login</p>
              </div>
            </li>
            <li
              onClick={() => {
                handleClick();
                navigate("/");
              }}
              className="py-2 uppercase"
            >
              Home
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/about");
              }}
              className="py-2 uppercase"
            >
              About
            </li>

            <li
              onClick={() => {
                handleClick();
                scrollToTeam();
              }}
              className="py-2 uppercase"
            >
              Team
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/projects");
              }}
              className="py-2 uppercase"
            >
              Projects
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/countries");
              }}
              className="py-2 uppercase"
            >
              Countries
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/volunteers");
              }}
              className="py-2 uppercase"
            >
              Volunteers
            </li>

            <li
              onClick={() => {
                handleClick();
                navigate("/shop");
              }}
              className="py-2 uppercase"
            >
              Shop
            </li>

            <li
              onClick={() => {
                handleClick();
                scrollToFooter();
              }}
              className="py-2 uppercase"
            >
              Contact
            </li>
          </ul>
        </div>
      )} */}
    </header>
  );
};

export default Header;
