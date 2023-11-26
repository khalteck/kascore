import Footer from "../components/Footer";
import Header from "../components/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="w-full pt-[130px] md:pt-[170px] pb-12 px-5 lg:px-[12%] h-[2000px] bg-[#121a20] text-white">
        <div className="w-full h-full flex gap-8">
          <div className="w-[25%] bg-[#1d2732] h-[70%] rounded-lg hidden md:flex flex-col">
            <div className=" flex items-center gap-7 mx-5 my-2 cursor-pointer hover ">
              <img src="/images/icons8-england-48.png" alt="" className=" w-6 h-5" />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img src="/images/icons8-england-48.png" alt="" className=" w-6 h-5" />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img src="/images/icons8-england-48.png" alt="" className=" w-6 h-5" />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img src="/images/icons8-england-48.png" alt="" className=" w-6 h-5" />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img src="/images/icons8-england-48.png" alt="" className=" w-6 h-5" />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img src="/images/icons8-england-48.png" alt="" className=" w-6 h-5" />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img src="/images/icons8-england-48.png" alt="" className=" w-6 h-5" />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img src="/images/icons8-england-48.png" alt="" className=" w-6 h-5" />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img src="/images/icons8-england-48.png" alt="" className=" w-6 h-5" />
              <p className=" text-base">England</p>
            </div>
            <div className=" flex items-center gap-7 mx-5 mb-3 cursor-pointer hover ">
              <img src="/images/icons8-england-48.png" alt="" className=" w-6 h-5" />
              <p className=" text-base">England</p>
            </div>
          </div>

          <div className="w-full md:w-[50%] bg-[#1d2732] h-full rounded-lg p-3">
            <h1 className="font-bold text-center">LIVE</h1>
          </div>
          <div className="w-[25%] bg-[#1d2732] h-[500px] rounded-lg hidden md:block"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
