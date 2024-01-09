/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import timeAgo from "../utils/timeAgo";

const FeaturedNewsCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/news-details")}
      className="min-w-[320px] h-auto rounded-lg relative cursor-pointer"
    >
      <img
        src={item?.mainMedia?.[0]?.thumbnail?.url}
        alt={item?.mainMedia?.[0]?.thumbnail?.alt}
        className="w-[450px] h-[200px] object-cover rounded-lg opacity-90 "
      />
      <div className="w-full h-full absolute top-0 left-0 p-3 bg-gradient-to-t from-black/90 to-black/10 rounded-lg flex flex-col">
        <div className="w-fit text-[.75rem] px-2 py-1 rounded-lg bg-gray-200 dark:bg-[#1d2732]">
          {item?.categoryLabel}
        </div>
        <p className="w-full mt-auto text-left font-bold text-white text-[1rem]  ">
          {item?.title}
        </p>
        <p className=" text-[0.8rem] text-neutral-100/80 ">
          {timeAgo(item?.publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default FeaturedNewsCard;
