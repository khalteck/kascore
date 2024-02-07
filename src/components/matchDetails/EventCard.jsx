import { TbRectangleVerticalFilled } from "react-icons/tb";

const EventCard = ({ isDarkMode, item, homeId, awayId }) => {
  return (
    <div className="flex justify-center items-center w-full gap-5">
      <div className="w-[30%] min-w-[100px] flex gap-2 items-center justify-end">
        {item?.team?.id === homeId && (
          <>
            <div>
              <p
                className={`${
                  item?.type === "Goal" ? "font-bold" : "font-medium"
                }  text-center`}
              >
                {item?.player?.name}
              </p>
              {item?.assist?.id && (
                <p className="font-light text-[.75rem] text-center">
                  {item?.assist?.name}
                </p>
              )}
            </div>
            {item?.type === "Goal" ? (
              <img
                alt=""
                // src="/images/icons8-calendar-64.png"
                src={
                  isDarkMode
                    ? "/images/icons8-football-50.png"
                    : "/images/icons8-football-black.png"
                }
                className="w-4 h-auto"
              />
            ) : item?.type === "Card" ? (
              <TbRectangleVerticalFilled
                color={item?.detail === "Yellow Card" ? "yellow" : "red"}
                size="15px"
              />
            ) : (
              <img
                alt=""
                // src="/images/icons8-player-change-50.png"
                src={
                  isDarkMode
                    ? "/images/icons8-player-change-50.png"
                    : "/images/icons8-player-change-50-black.png"
                }
                className="w-4 h-auto"
              />
            )}
          </>
        )}
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[2px] h-5 bg-black/20 dark:bg-white/20"></div>
        <div className="w-7 h-7 flex justify-center items-center rounded-full border border-black/20 dark:border-white/30">
          {item?.time?.elapsed}'
        </div>
        <div className="w-[2px] h-5 bg-black/20 dark:bg-white/20"></div>
      </div>
      <div className="w-[30%] min-w-[100px] flex gap-2 items-center justify-start">
        {item?.team?.id === awayId && (
          <>
            {item?.type === "Goal" ? (
              <img
                alt=""
                // src="/images/icons8-calendar-64.png"
                src={
                  isDarkMode
                    ? "/images/icons8-football-50.png"
                    : "/images/icons8-football-black.png"
                }
                className="w-4 h-auto"
              />
            ) : item?.type === "Card" ? (
              <TbRectangleVerticalFilled
                color={item?.detail === "Yellow Card" ? "yellow" : "red"}
                size="15px"
              />
            ) : (
              <img
                alt=""
                // src="/images/icons8-player-change-50.png"
                src={
                  isDarkMode
                    ? "/images/icons8-player-change-50.png"
                    : "/images/icons8-player-change-50-black.png"
                }
                className="w-4 h-auto"
              />
            )}
            <div>
              <p className="font-bold text-center">{item?.player?.name}</p>
              {item?.assist?.id && (
                <p className="font-light text-[.75rem] text-center">
                  {item?.assist?.name}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EventCard;
