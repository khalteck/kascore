/* eslint-disable react/prop-types */
const DateSlide = ({ isDarkMode }) => {
  return (
    <ul
      className={`w-full flex gap-3 justify-between items-center p-3 rounded-lg ${
        isDarkMode
          ? "bg-[#121a20]/50 text-neutral-100/80"
          : "bg-[#d1d5db] text-[#121a20]"
      }`}
    >
      <li>
        <button className="p-1 rounded-md bg-orange-500 text-black text-[.7em] md:text-[.75rem] font-bold cursor-pointer leading-tight">
          LIVE
        </button>
      </li>
      <li>
        <ul className="w-full flex gap-3 md:gap-2 justify-between items-center border-x border-neutral-100/30 px-2 md:px-4">
          <li className="flex flex-col items-center justify-center text-[.7em] md:text-[.75rem] md:bg-neutral-100/10 md:px-2 rounded-md cursor-pointer">
            <p>FRI</p>
            <p className="text-[.85em] md:text-[.7rem] whitespace-nowrap">
              24 NOV
            </p>
          </li>
          <li className="flex flex-col items-center justify-center text-[.7em] md:text-[.75rem] md:bg-neutral-100/10 md:px-2 rounded-md cursor-pointer">
            <p>SAT</p>
            <p className="text-[.85em] md:text-[.7rem] whitespace-nowrap">
              25 NOV
            </p>
          </li>
          <li className="flex flex-col items-center justify-center text-[.7em] md:text-[.75rem] md:px-2 rounded-md text-orange-500 cursor-pointer">
            <p>TODAY</p>
            <p className="text-[.85em] md:text-[.7rem] whitespace-nowrap">
              26 NOV
            </p>
          </li>
          <li className="flex flex-col items-center justify-center text-[.7em] md:text-[.75rem] md:bg-neutral-100/10 md:px-2 rounded-md cursor-pointer">
            <p>MON</p>
            <p className="text-[.85em] md:text-[.7rem] whitespace-nowrap">
              27 NOV
            </p>
          </li>
          <li className="flex flex-col items-center justify-center text-[.7em] md:text-[.75rem] md:bg-neutral-100/10 md:px-2 rounded-md cursor-pointer">
            <p>TUE</p>
            <p className="text-[.85em] md:text-[.7rem] whitespace-nowrap">
              28 NOV
            </p>
          </li>
        </ul>
      </li>
      <li
        className={`flex gap-1 md:gap-2 items-center cursor-pointer ${
          isDarkMode ? "bg-[#121a20]/50 px-3 py-1 rounded-md" : "bg-transparent"
        }`}
      >
        <img
          alt="calendar"
          src="/images/icons8-calendar-64.png"
          className="w-5 md:w-6 h-auto"
        />
        <img
          alt="dropdown"
          src="/images/icons8-chevron-24.png"
          className="w-3 h-auto"
        />
      </li>
    </ul>
  );
};

export default DateSlide;
