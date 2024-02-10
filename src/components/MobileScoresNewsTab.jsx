/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const MobileScoresNewsTab = ({ currentPage, isDarkMode }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:hidden flex text-[.85rem]">
      <div
        onClick={() => navigate("/")}
        className={`w-full p-3 flex justify-center items-center gap-2 font-medium ${
          !currentPage?.includes("/news") &&
          "border-b-[3px] border-orange-500 bg-black/10 dark:bg-black/20"
        }`}
      >
        <img
          alt="icon"
          src={
            isDarkMode
              ? "/images/icons8-football-50.png"
              : "/images/icons8-football-black.png"
          }
          className="w-5 h-auto"
        />
        <p className={``}>SCORES</p>
      </div>
      <div
        onClick={() => navigate("/news")}
        className={`w-full p-3 flex justify-center items-center gap-2 font-medium ${
          currentPage?.includes("/news") &&
          "border-b-[3px] border-orange-500 bg-black/10 dark:bg-black/20"
        }`}
      >
        <img
          alt="icon"
          src={
            isDarkMode
              ? "/images/icons8-news-64.png"
              : "/images/icons8-news-black.png"
          }
          className="w-5 h-auto"
        />
        <p className={``}>NEWS</p>
      </div>
    </div>
  );
};

export default MobileScoresNewsTab;
