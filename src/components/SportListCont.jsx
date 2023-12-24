import { useAppContext } from "../contexts/AppContext";
import sports from "../data/sportList.json";

const SportListCont = () => {
  const { currentPage } = useAppContext();
  return (
    <ul className="bg-[#2a3543]/60 dark:bg-[#5a636b] w-full lg:px-[10%] md:h-[60px] gap-3 md:gap-6 items-center justify-start flex overflow-x-auto whitespace-nowrap no-scrollbar border-t-2 border-orange-500">
      {sports?.map((item, index, arr) => {
        return (
          <li
            key={index}
            // onClick={() => navigate("/")}
            className={`cursor-pointer hover:bg-white/30 dark:hover:bg-[#2a3543] text-white  transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 md:pl-3 md:pr-8 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center ${
              index === 0 && currentPage === "/"
                ? "dark:bg-[#2a3543] bg-white/30"
                : currentPage?.includes(item?.link)
                ? "dark:bg-[#2a3543] bg-white/30"
                : "lg:bg-white/10"
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
  );
};

export default SportListCont;
