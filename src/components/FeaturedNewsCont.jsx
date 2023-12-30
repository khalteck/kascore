/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const FeaturedNewsCont = ({ isDarkMode }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-full h-[700px] ${
        !isDarkMode ? " bg-[#1d2732]" : "bg-gray-100"
      }`}
    >
      <div
        onClick={() => navigate("/news")}
        className={`flex items-center justify-between md:border cursor-pointer py-2 px-2 mb-4 rounded-lg ${
          !isDarkMode ? "md:border-neutral-100/20" : "border-black/20"
        }`}
      >
        <p className=" text-[.85rem] font-bold ">Featured News</p>
        <img
          src={
            !isDarkMode
              ? "/images/icons8-right-arrow-30.png"
              : "/images/icons8-right-arrow-50.png"
          }
          alt=""
          className=" w-5 h-5 "
        />
      </div>
      <div className=" w-full h-auto relative border border-neutral-100/20 rounded-lg ">
        <div className=" w-full h-auto opacity-90">
          <img
            src="/images/fayas.jpg"
            alt=""
            className=" w-full h-[200px] rounded-lg  object-cover"
          />
        </div>
        <div className=" w-full h-[200px] opacity-90 p-3 absolute top-0 left-0 bg-black/40">
          <p className=" w-[85%] mt-[130px] text-left font-bold text-white text-[1rem] ">
            Five talking points as Liverpool are held to United stalemate
          </p>
        </div>
      </div>
      <div className=" w-full h-auto relative border border-neutral-100/20 my-4 rounded-lg ">
        <div className=" w-full h-auto opacity-90">
          <img
            src="/images/sven.jpg"
            alt=""
            className=" w-full h-[200px] rounded-lg  object-cover"
          />
        </div>
        <div className=" w-full h-[200px] opacity-90 p-3 absolute top-0 left-0 bg-black/40">
          <p className=" w-[85%] mt-[130px] text-left font-bold text-white text-[1rem] ">
            Five talking points as Liverpool are held to United stalemate
          </p>
        </div>
      </div>
      <div className=" w-full h-auto relative border border-neutral-100/20 rounded-lg ">
        <div className=" w-full h-auto opacity-90 ">
          <img
            src="/images/vienna.jpg"
            alt=""
            className=" w-full h-[200px] rounded-lg  object-cover"
          />
        </div>
        <div className=" w-full h-[200px] opacity-90 p-3 absolute top-0 left-0 bg-black/40">
          <p className=" w-[85%] mt-[130px] text-left font-bold text-white text-[1rem] ">
            Five talking points as Liverpool are held to United stalemate
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNewsCont;
