import Footer from "../components/Footer";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";

const News = () => {
  return (
    <>
      <Header />
      <div className="w-full pt-[85px] md:pt-[170px] md:pb-12 md:px-[10%] bg-[#121a20] text-neutral-100/80">
        <div className="w-full h-full flex gap-8">
          {/* <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray />
          </div> */}

          <div className="w-full md:w-[50%] md:min-w-[550px] bg-[#1d2732] min-h-screen border border-neutral-100/10 rounded-lg px-3 py-5 mt-5">
            {/* <div className="w-full mb-4 md:mb-0">
              <DateSlide />
            </div> */}
            <h1 className="font-bold mb-2 text-white">News Page</h1>
            <div className=" w-full h-[200px] flex gap-3 items-center rounded-lg overflow-x-scroll no-scrollbar overflow-y-hidden ">
              <div className=" min-w-[350px] h-auto rounded-lg relative cursor-pointer">
                <img src="/images/fayas.jpg" alt="" className=" w-[400px] h-[200px] object-cover rounded-lg opacity-90 " />
                <div className=" w-full h-[200px] absolute top-0 left-0 px-3 ">
                  <p className=" w-[85%] mt-[130px] text-left font-bold text-white text-[1rem]  ">Five talking points as Liverpool are held to United
                    stalemate</p>
                  <p className=" text-[0.8rem] text-neutral-100/60 ">Updated 4hours ago</p>
                </div>
              </div>
              <div className=" min-w-[350px] h-auto rounded-lg relative ">
                <img src="/images/vienna.jpg" alt="" className=" w-[400px] h-[200px] object-cover rounded-lg opacity-70 " />
                <div className=" w-full h-[200px] absolute top-0 left-0 px-3 ">
                  <p className="  mt-[130px] text-left font-bold text-white text-[1rem]  ">Five talking points as Liverpool are held to United
                    stalemate</p>
                  <p className=" text-[0.8rem] text-neutral-100/60 ">Updated 4hours ago</p>
                </div>
              </div>
              <div className=" min-w-[350px] h-auto rounded-lg relative ">
                <img src="/images/shoot.jpg" alt="" className=" w-[400px] h-[200px] object-cover rounded-lg opacity-70 " />
                <div className=" w-full h-[200px] absolute top-0 left-0 px-3 ">
                  <p className="  mt-[130px] text-left font-bold text-white text-[1rem]  ">Five talking points as Liverpool are held to United
                    stalemate</p>
                  <p className=" text-[0.8rem] text-neutral-100/60 ">Updated 4hours ago</p>
                </div>
              </div>
              <div className=" min-w-[350px] h-auto rounded-lg relative ">
                <img src="/images/sven.jpg" alt="" className=" w-[400px] h-[200px] object-cover rounded-lg opacity-80 " />
                <div className=" w-full h-[200px] absolute top-0 left-0 px-3 ">
                  <p className="  mt-[130px] text-left font-bold text-white text-[1rem]  ">Five talking points as Liverpool are held to United
                    stalemate</p>
                  <p className=" text-[0.8rem] text-neutral-100/60 ">Updated 4hours ago</p>
                </div>
              </div>
            </div>
            <div className=" w-full h-[50px] ">
              
            </div> 

            <div className=" py-5 border-y border-neutral-100/20 ">
              <h1 className=" font-bold text-[1rem] text-white ">Top Stories</h1>
            </div>

            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          {/* <div className="w-[30%] min-w-[200px] h-[400px] hidden lg:block">
            <div className="bg-[#1d2732] w-full h-[500px] p-4 rounded-lg">
              <h1 className="text-[.75rem]">FEATURED NEWS</h1>
            </div>
            <div className="bg-[#1d2732] w-full h-[400px] mt-5 p-4 rounded-lg">
              <h1 className="text-[.75rem]">ADVERTISEMENT</h1>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
      <BottomBar />
    </>
  );
};

export default News;
