import { ScaleLoader } from "react-spinners";

import { useAppContext } from "../contexts/AppContext";

const Loader = () => {
  const { isDarkMode } = useAppContext();
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-gray-200 text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200 flex justify-center items-center z-[999]">
      <div className="md:w-1/3 w-[80%] text-[1.2rem] md:text-[2rem] font-bold p-[25px] md:py-[20px] rounded-2xl flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="w-full flex justify-center items-center cursor-pointer">
            <img
              alt=""
              src={
                isDarkMode ? "/images/logo-white.png" : "/images/logo-black.png"
              }
              className="w-8 md:w-10 h-auto"
            />
            <h1 className="text-[1.75rem] md:text-[2rem] font-black">
              Kascore
            </h1>
          </div>
          <ScaleLoader color={"#f97316"} size={100} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
