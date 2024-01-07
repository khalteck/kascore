const SportListSearch = () => {
  return (
    <ul className="bg-[#121a20]/70 w-full pl-[120px] md:pl-0 lg:px-[10%] md:h-[60px] gap-3 md:gap-6 items-center justify-center flex overflow-x-auto whitespace-nowrap no-scrollbar">
      <li
        // onClick={() => navigate("/")}
        className={`w-fit cursor-pointer hover:bg-[#2a3543] text-orange-500 lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
        className={`w-fit cursor-pointer hover:bg-[#2a3543] text-neutral-100 lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
        className={`w-fit cursor-pointer hover:bg-[#2a3543] text-neutral-100 lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
        className={`w-fit cursor-pointer hover:bg-[#2a3543] text-neutral-100 lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
        className={`w-fit cursor-pointer hover:bg-[#2a3543] text-neutral-100 lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
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
        className={`w-fit cursor-pointer hover:bg-[#2a3543] text-neutral-100 lg:bg-white/10 transition-all duration-300 text-[.8rem] md:text-[.9rem] px-3 py-[6px] lg:rounded-md flex lg:flex-row flex-col lg:gap-2 items-center `}
      >
        <img
          alt=""
          src="/images/icons8-handball-50.png"
          className="w-4 md:w-5 h-auto"
        />
        Handball
      </li>

      <li className="ml-14 border border-orange-500 rounded-md px-3 py-1 md:flex gap-2 items-center cursor-pointer hidden">
        <img
          alt="calendar"
          src="/images/icons8-great-britain-48.png"
          className="w-6 h-auto"
        />
        <p>EN</p>
      </li>
    </ul>
  );
};

export default SportListSearch;
