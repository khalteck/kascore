import { useState } from "react";
import getDate from "../../utils/getDate";
import EventCard from "./EventCard";
import eventsData from "../../data/events112.json";

const SummaryCont = ({ isDarkMode, currentMatch }) => {
  const events = eventsData?.response;
  // console.log("events", events);

  const homeId = currentMatch?.teams?.home?.id;
  const awayId = currentMatch?.teams?.away?.id;

  const [tab, setTab] = useState("info");
  function selectTab(param) {
    setTab(param);
  }

  return (
    <div className="w-full">
      {/* <h2 className="text-[.75rem]">MATCH INFO</h2> */}
      <div className="flex gap-2 items-center">
        <div
          onClick={() => selectTab("events")}
          className={`text-[.75rem] px-3 py-1 border border-black/20 dark:border-white/30 rounded-full cursor-pointer ${
            tab === "events" &&
            " bg-black/70 text-white dark:bg-white/80 dark:text-black"
          }`}
        >
          EVENTS
        </div>
        <div
          onClick={() => selectTab("info")}
          className={`text-[.75rem] px-3 py-1 border border-black/20 dark:border-white/30 rounded-full cursor-pointer ${
            tab === "info" &&
            " bg-black/70 text-white dark:bg-white/80 dark:text-black"
          }`}
        >
          INFO
        </div>
      </div>

      {tab === "events" && (
        <div className="w-full min-h-[200px] flex flex-col items-center p-3 border border-black/20 dark:border-white/30 rounded-lg text-[.75rem] mt-4">
          {events?.map((item, index) => {
            return (
              <EventCard
                key={index}
                isDarkMode={isDarkMode}
                item={item}
                homeId={homeId}
                awayId={awayId}
              />
            );
          })}
        </div>
      )}

      {tab === "info" && (
        <div className="w-full flex flex-col gap-3 p-3 border border-black/20 dark:border-white/30 rounded-lg text-[.75rem] mt-4">
          <div className="flex gap-2 items-center cursor-pointer">
            <img
              alt=""
              // src="/images/icons8-calendar-64.png"
              src={
                isDarkMode
                  ? "/images/icons8-calendar-64.png"
                  : "/images/icons8-calendar-black.png"
              }
              className="w-4 h-auto"
            />
            <p>{getDate(currentMatch?.fixture?.date)}</p>
          </div>

          <div className="flex gap-2 items-center cursor-pointer">
            <img
              alt=""
              // src="/images/icons8-whistle-100.png"
              src={
                isDarkMode
                  ? "/images/icons8-whistle-100.png"
                  : "/images/icons8-whistle-black.png"
              }
              className="w-4 h-auto opacity-60"
            />
            <p>{currentMatch?.fixture?.referee}</p>
          </div>

          <div className="flex gap-2 items-center cursor-pointer">
            <img
              alt=""
              // src="/images/icons8-stadium-64.png"
              src={
                isDarkMode
                  ? "/images/icons8-stadium-64.png"
                  : "/images/icons8-stadium-black.png"
              }
              className="w-4 h-auto opacity-70"
            />
            <p>
              {currentMatch?.fixture?.venue?.name} (
              {currentMatch?.fixture?.venue?.city})
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryCont;
