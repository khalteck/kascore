/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import timeAgo from "../utils/timeAgo";
import { useAppContext } from "../contexts/AppContext";

const NewsCardByCat = ({ item }) => {
  const { currentPage } = useAppContext();
  const navigate = useNavigate();

  return (
    <div
      //   onClick={() => navigate("/news-details")}
      className="w-full flex gap-2 mb-4 md:mb-0 cursor-pointer"
    >
      <div className="w-[100px] md:w-[180px] ">
        <img
          src={item?.image?.data?.urls?.uploaded?.thumbnail}
          alt={""}
          className=" w-full h-[100px] md:h-[120px] rounded-md object-cover object-top"
        />
      </div>
      <div className=" w-[65%] flex flex-col">
        {currentPage?.includes("exclusive") && (
          <p className=" w-fit bg-orange-500 text-white py-[2px] px-1 text-[0.7rem] rounded-md font-bold leading-tight">
            Exclusive
          </p>
        )}
        <p className=" text-[.9rem] mb-3 md:mb-4 font-bold  mt-1">
          {item?.title}
        </p>
        <div className=" w-full flex items-center justify-between mt-auto">
          <div className="hidden md:flex flex-wrap gap-2">
            {item?.sports_related?.slice(0, 3)?.map((itm, ind) => {
              return (
                <p
                  key={ind}
                  className=" w-fit bg-gray-300 dark:bg-[#121a20] py-1 px-1 text-[0.7rem] rounded-md font-bold leading-tight"
                >
                  {itm?.data?.name}
                </p>
              );
            })}
          </div>
          <div className="flex md:hidden flex-wrap gap-2">
            {item?.sports_related?.slice(0, 2)?.map((itm, ind) => {
              return (
                <p
                  key={ind}
                  className=" w-fit bg-gray-300 dark:bg-[#121a20] py-1 px-1 text-[0.7rem] rounded-md font-bold leading-tight"
                >
                  {itm?.data?.name}
                </p>
              );
            })}
          </div>
          <p className=" text-[0.72rem] leading-tight text-black/70 dark:text-neutral-100/60 whitespace-nowrap">
            {timeAgo(item?.publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCardByCat;
