const SportListCont = () => {
  return (
    <ul className="bg-[#2a3543]/60 text-white dark:text-[#d1d5db] dark:bg-[#5a636b] w-full pl-[0px] md:pl-0 lg:px-[10%] md:h-[60px] gap-3 md:gap-6 items-center justify-start flex overflow-x-auto whitespace-nowrap border-t-2 border-orange-500">
      <li
        // onClick={() => navigate("/")}
        className={`w-fit cursor-pointer text-orange-500 hover:bg-white/30 dark:hover:bg-[#2a3543] hover:text-white bg-[#d1d5db] dark:bg-[#2a3543] transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
      >
        <img
          alt=""
          src="/images/icons8-football-orange.png"
          className="w-4 md:w-5 h-auto"
        />
        Football
      </li>
      <li
        // onClick={() => navigate("/")}
        className={`w-fit cursor-pointer hover:bg-white/30 dark:hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
        className={`w-fit cursor-pointer hover:bg-white/30 dark:hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
        className={`w-fit cursor-pointer hover:bg-white/30 dark:hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
        className={`w-fit cursor-pointer hover:bg-white/30 dark:hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
        className={`w-fit cursor-pointer hover:bg-white/30 dark:hover:bg-[#2a3543] hover:text-white  lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
      >
        <img
          alt=""
          src="/images/icons8-handball-50.png"
          className="w-4 md:w-5 h-auto"
        />
        Handball
      </li>

      {/* <li className="ml-14 border border-orange-500 rounded-md px-3 py-1 md:flex gap-2 items-center cursor-pointer hidden">
        <img
          alt="calendar"
          src="/images/icons8-great-britain-48.png"
          className="w-6 h-auto"
        />
        <p>EN</p>
      </li> */}
    </ul>
  );
};

export default SportListCont;
