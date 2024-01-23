import { useState } from "react";
import generateDateArray from "../utils/generateDateArray";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

/* eslint-disable react/prop-types */
const DateSlide = ({ isDarkMode }) => {
  const dateArray = generateDateArray();

  const [selectedDate, setSelectedDate] = useState("");
  const [datePicked, setdatePicked] = useState(false);

  function handleDateSelect() {
    setdatePicked(true);
  }

  function getDayFromDate(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = date?.getDay();

    return daysOfWeek[dayIndex];
  }

  return (
    <ul
      className={`w-full flex gap-3 justify-between items-center p-3 rounded-lg ${
        isDarkMode
          ? "bg-[#121a20]/50 text-neutral-100/80"
          : "bg-[#d1d5db] text-[#121a20]"
      }`}
    >
      <li>
        {datePicked ? (
          <div
            onClick={() => {
              setdatePicked(false);
              setSelectedDate("");
            }}
            className={`flex flex-col items-center justify-center font-medium text-[.7em] md:text-[.75rem] bg-white/40 dark:bg-neutral-100/10 px-2 rounded-md cursor-pointer `}
          >
            <p>Today</p>
            <p className="text-[.85em] md:text-[.7rem] whitespace-nowrap">
              {dateArray[2]?.day?.split(", ")[1]}
            </p>
          </div>
        ) : (
          <button className="p-1 rounded-md bg-orange-500 text-black text-[.7em] md:text-[.75rem] font-bold cursor-pointer leading-tight">
            LIVE
          </button>
        )}
      </li>
      <li>
        <ul className="w-full flex gap-3 md:gap-2 justify-between items-center border-x border-black/60 dark:border-neutral-100/30 px-2 md:px-4">
          {!datePicked &&
            dateArray?.map((item, index) => {
              const day = item?.day?.split(", ")[0];
              const monthDay = item?.day?.split(", ")[1];

              return (
                <li
                  key={index}
                  className={`flex flex-col items-center justify-center font-medium text-[.7em] md:text-[.75rem] md:bg-white/40 dark:md:bg-neutral-100/10 md:px-2 rounded-md cursor-pointer ${
                    index === 2 && "text-orange-500"
                  }`}
                >
                  <p>{day}</p>
                  <p className="text-[.85em] md:text-[.7rem] whitespace-nowrap">
                    {monthDay}
                  </p>
                </li>
              );
            })}
          {datePicked && (
            <div className="flex flex-col items-center justify-center border border-black/40 dark:border-white/20 font-bold rounded-md">
              <p className="mb-[-5px] text-[.85rem]">
                {getDayFromDate(selectedDate)}
              </p>
              <DatePicker
                selected={selectedDate}
                onSelect={handleDateSelect}
                onChange={(date) => setSelectedDate(date)}
                className="w-[150px] text-[.75rem] text-center bg-transparent"
                dateFormat="yyyy-MM-dd"
              />
            </div>
          )}
        </ul>
      </li>
      <li
        className={`flex gap-1 md:gap-2 items-center cursor-pointer ${
          isDarkMode ? "bg-[#121a20]/50 px-3 py-1 rounded-md" : "bg-transparent"
        }`}
      >
        <div className="cursor-pointer relative w-8 h-8">
          <DatePicker
            // selected={selectedDate}
            onSelect={handleDateSelect} //when day is clicked
            onChange={(date) => setSelectedDate(date)}
            className="w-8 h-8 bg-transparent absolute top-[-20px] left-0 z-10"
          />
          <img
            alt="calendar"
            src={
              !isDarkMode
                ? "/images/icons8-calendar-black.png"
                : "/images/icons8-calendar-64.png"
            }
            className="w-7 h-auto absolute top-0 left-0 z-0"
          />
        </div>
      </li>
    </ul>
  );
};

export default DateSlide;
