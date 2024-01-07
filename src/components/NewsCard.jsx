/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import timeAgo from "../utils/timeAgo";

const NewsCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      //   onClick={() => navigate("/news-details")}
      className="w-full flex gap-2 mb-4 md:mb-0 cursor-pointer"
    >
      <div className=" w-[180px] ">
        <img
          src={item?.mainMedia?.[0]?.thumbnail?.url}
          alt={item?.mainMedia?.[0]?.thumbnail?.alt}
          className=" w-full h-[120px] rounded-md object-cover "
        />
      </div>
      <div className=" w-[65%] flex flex-col">
        <p className=" text-[1rem] mb-3 md:mb-4 font-bold  ">{item?.title}</p>
        <div className=" w-full flex items-center justify-between mt-auto">
          <p className=" w-fit bg-gray-300 dark:bg-[#121a20] py-1 px-1 text-[0.7rem] rounded-md font-bold leading-tight">
            {item?.categoryLabel}
          </p>
          <p className=" text-[0.72rem] leading-tight text-black/70 dark:text-neutral-100/60">
            {timeAgo(item?.publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
