import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const BottomBar = () => {
  const navigate = useNavigate();
  const { currentPage, isDarkMode } = useAppContext();

  return (
    <div className="w-full h-[60px] md:hidden bg-gray-300 text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200 fixed bottom-0 left-0 z-40 top-shadow flex justify-between items-center px-7 text-[.85rem]">
      <div onClick={() => navigate("/")} className="flex flex-col items-center">
        <img
          alt="icon"
          src={
            currentPage === "/"
              ? "/images/icons8-football-orange.png"
              : !isDarkMode
              ? "/images/icons8-football-50.png"
              : "/images/icons8-football-black.png"
          }
          className="w-6 h-auto"
        />
        <p className={`${currentPage === "/" && "text-orange-500"}`}>Matches</p>
      </div>

      <div
        onClick={() => navigate("/leagues")}
        className="flex flex-col items-center"
      >
        <img
          alt="icon"
          src={
            currentPage === "/leagues"
              ? "/images/icons8-trophy-orange.png"
              : !isDarkMode
              ? "/images/icons8-trophy-48.png"
              : "/images/icons8-trophy-black.png"
          }
          className="w-7 h-auto mb-[-4px]"
        />
        <p className={`${currentPage === "/leagues" && "text-orange-500"}`}>
          Leagues
        </p>
      </div>

      <div
        onClick={() => navigate("/favorites")}
        className="flex flex-col items-center"
      >
        <img
          alt="icon"
          src={
            currentPage === "/favorites"
              ? "/images/icons8-star-50.png"
              : !isDarkMode
              ? "/images/icons8-star-white.png"
              : "/images/icons8-star-black.png"
          }
          className="w-6 h-auto"
        />
        <p className={`${currentPage === "/favorites" && "text-orange-500"}`}>
          Favorites
        </p>
      </div>

      {/* <div
        onClick={() => navigate("/news")}
        className="flex flex-col items-center"
      >
        <img
          alt="icon"
          src={
            currentPage === "/news"
              ? "/images/icons8-news-orange.png"
              : !isDarkMode
              ? "/images/icons8-news-64.png"
              : "/images/icons8-news-black.png"
          }
          className="w-6 h-auto"
        />
        <p className={`${currentPage === "/news" && "text-orange-500"}`}>
          News
        </p>
      </div> */}
    </div>
  );
};

export default BottomBar;
