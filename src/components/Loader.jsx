// import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-[#2a3543] flex justify-center items-center z-[999]">
      <div className="md:w-1/3 w-[80%] text-[1.2rem] md:text-[2rem] font-bold p-[25px] md:py-[20px] rounded-2xl flex flex-col gap-4 justify-center items-center">
        {/* <ClipLoader color={"#fff"} size={100} /> */}
        <div className="w-full flex justify-center items-center cursor-pointer text-white">
          <img
            alt=""
            src="/images/logo-white.png"
            className="w-8 md:w-10 h-auto"
          />
          <h1 className="text-[1.75rem] md:text-[2rem] font-black">Kascore</h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
