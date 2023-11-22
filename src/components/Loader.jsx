// import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-[#2a3543] flex justify-center items-center z-[999]">
      <div className="md:w-1/3 w-[80%] text-[1.2rem] md:text-[2rem] font-bold p-[25px] md:py-[20px] rounded-2xl flex flex-col gap-4 justify-center items-center">
        {/* <ClipLoader color={"#fff"} size={100} /> */}
        <img
          alt=""
          src="/images/logo.png"
          className="w-[150px] md:w-[200px] h-auto"
        />
      </div>
    </div>
  );
};

export default Loader;
