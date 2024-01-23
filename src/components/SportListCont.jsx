import { useAppContext } from "../contexts/AppContext";
import sports from "../data/sports.json";
// import { useNavigate } from "react-router-dom";

const SportListCont = () => {
  const { currentPage, isDarkMode } = useAppContext();
  // const navigate = useNavigate();

  const scrollListToRight = () => {
    const listElement = document.getElementById("list");
    if (listElement) {
      listElement.scrollTo({
        left: listElement.scrollLeft + 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <ul
        id="list"
        className="bg-[#2a3543]/60 dark:bg-[#5a636b] w-full lg:px-[10%] h-[50px] md:h-[60px] gap-3 md:gap-6 items-center justify-start flex overflow-x-auto whitespace-nowrap no-scrollbar border-t-2 border-orange-500 pl-3 pr-10 relative"
      >
        {sports?.map((item, index, arr) => {
          return (
            <li
              key={index}
              className={`cursor-pointer hover:bg-white/50 dark:hover:bg-[#2a3543] transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 md:pl-3 pr-8 md:pr-[20px] py-[6px] rounded-full flex gap-2 items-center ${
                index === 0 && currentPage === "/"
                  ? "dark:bg-[#2a3543] bg-[#d1d5db] text-black dark:text-white"
                  : index !== 0 && currentPage?.includes(item?.link)
                  ? "dark:bg-[#2a3543] bg-[#d1d5db] text-black dark:text-white"
                  : "bg-white/20 text-white"
              }`}
            >
              <img
                alt=""
                src={
                  index === 0 && currentPage === "/"
                    ? arr[0]?.icon_active
                    : currentPage?.includes(item?.link)
                    ? item?.icon_active
                    : item?.icon
                }
                className="w-4 md:w-5 h-auto"
              />
              <p> {item?.name}</p>
            </li>
          );
        })}
      </ul>
      <div
        onClick={scrollListToRight}
        className="w-[50px] h-[48px] md:h-[60px] bg-gradient-to-l from-[#d1d5db] dark:from-[#1d2732] to-transparent absolute top-[107px] right-0 md:hidden flex items-center justify-end px-1"
      >
        <img
          alt=""
          src={
            !isDarkMode
              ? "/images/icons8-right-arrow-black.png"
              : "/images/icons8-right-arrow-white.png"
          }
          className="w-5 h-5 opacity-70"
        />
      </div>
    </>
  );
};

export default SportListCont;
