import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

const TopSection = ({ currentComp }) => {
  const { isDarkMode } = useAppContext();
  const defaultFlag = isDarkMode
    ? "/images/icons8-football-50.png"
    : "/images/icons8-football-black.png";

  const [logo, setLogo] = useState(null);

  useEffect(() => {
    if (currentComp) {
      setLogo(currentComp?.league?.logo);
    }
  }, [currentComp]);

  return (
    <>
      <div className="flex gap-3 items-center ml-1 mb-3 pb-2 border-b border-black/20 dark:border-white/20">
        <img
          alt="competition-image"
          src={currentComp?.country?.flag || defaultFlag}
          className="w-6 h-auto"
        />
        <p
          className={`text-[.75rem] ${
            !isDarkMode ? "text-[#121a20]/50" : "text-neutral-100/60"
          }`}
        >
          <span className="font-bold">Competition</span>
        </p>
      </div>

      <div className="flex gap-5">
        <div className="w-[60px] flex justify-center items-center">
          <img
            alt="comp-image"
            src={logo || defaultFlag}
            className="w-[80px] h-auto rounded-lg dark:bg-white bg-black/70"
          />
        </div>
        <div>
          <div className="font-medium leading-tight flex gap-3 items-center mb-2">
            <p className="font-bold">{currentComp?.league?.name}</p>{" "}
            <img
              alt=""
              src={
                isDarkMode
                  ? "/images/icons8-star-white.png"
                  : "/images/icons8-star-black.png"
              }
              className="w-5 h-5 opacity-70"
            />
          </div>

          <p
            className={`text-[.75rem] ${
              !isDarkMode ? "text-[#121a20]/50" : "text-neutral-100/60"
            }`}
          >
            Country:{" "}
            <span className="font-bold">{currentComp?.country?.name}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default TopSection;
