import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const BottomBar = () => {
  const navigate = useNavigate();
  const { currentPage } = useAppContext();

  return (
    <div className="w-full h-[60px] md:hidden bg-[#2a3543] fixed bottom-0 left-0 z-40 top-shadow flex justify-between items-center px-7 text-neutral-100/70 text-[.85rem]">
      <div onClick={() => navigate("/")} className="flex flex-col items-center">
        <img
          alt="calendar"
          src={
            currentPage === "/"
              ? "/images/icons8-football-orange.png"
              : "/images/icons8-football-50.png"
          }
          className="w-6 h-auto"
        />
        <p
          className={`${
            currentPage === "/" ? "text-orange-500" : "text-white"
          }`}
        >
          Matches
        </p>
      </div>

      <div
        onClick={() => navigate("/leagues")}
        className="flex flex-col items-center"
      >
        <img
          alt="calendar"
          src={
            currentPage === "/leagues"
              ? "/images/icons8-trophy-orange.png"
              : "/images/icons8-trophy-48.png"
          }
          className="w-7 h-auto mb-[-4px]"
        />
        <p
          className={`${
            currentPage === "/leagues" ? "text-orange-500" : "text-white"
          }`}
        >
          Leagues
        </p>
      </div>

      <div
        onClick={() => navigate("/favorites")}
        className="flex flex-col items-center"
      >
        <img
          alt="calendar"
          src={
            currentPage === "/favorites"
              ? "/images/icons8-star-50.png"
              : "/images/icons8-star-white.png"
          }
          className="w-6 h-auto"
        />
        <p
          className={`${
            currentPage === "/favorites" ? "text-orange-500" : "text-white"
          }`}
        >
          Favorites
        </p>
      </div>

      <div
        onClick={() => navigate("/news")}
        className="flex flex-col items-center"
      >
        <img
          alt="calendar"
          src={
            currentPage === "/news"
              ? "/images/icons8-news-orange.png"
              : "/images/icons8-news-64.png"
          }
          className="w-6 h-auto"
        />
        <p
          className={`${
            currentPage === "/news" ? "text-orange-500" : "text-white"
          }`}
        >
          News
        </p>
      </div>
    </div>
  );
};

export default BottomBar;
