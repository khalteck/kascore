/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../components/Footer";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import ScrollToTop from "../ScrollToTop";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

const News = () => {
  // NEWS API KEY="8cbe94ecef2445ea9b78d1a803d05406"

  const navigate = useNavigate();
  const { getNews, newsData } = useAppContext();

  useEffect(() => {
    getNews();
  }, []);

  console.log("newsData", newsData);

  return (
    <>
      <Header />
      <div className="w-full pt-[130px] md:pt-[150px] md:pb-12 md:px-[10%] bg-white text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200">
        <div className="w-full h-full flex gap-8">
          {/* <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray />
          </div> */}

          <div className="w-full md:w-[60%] md:min-w-[650px] min-h-screen md:border border-black/20 dark:border-neutral-100/10 rounded-lg px-3 py-5 mt-5">
            {/* <div className="w-full mb-4 md:mb-0">
              <DateSlide />
            </div> */}
            <h1 className="font-bold mb-2">Top Stories</h1>
            <div className=" w-full h-[200px] flex gap-3 items-center rounded-lg overflow-x-scroll no-scrollbar overflow-y-hidden ">
              <div
                onClick={() => navigate("/news-details")}
                className=" min-w-[330px] h-auto rounded-lg relative cursor-pointer"
              >
                <img
                  src="/images/fayas.jpg"
                  alt=""
                  className=" w-[400px] h-[200px] object-cover rounded-lg opacity-90 "
                />
                <div className=" w-full h-[200px] absolute top-0 left-0 px-3 ">
                  <p className=" w-[85%] mt-[130px] text-left font-bold text-white text-[1rem]  ">
                    Five talking points as Liverpool are held to United
                    stalemate
                  </p>
                  <p className=" text-[0.8rem] text-neutral-100/80 ">
                    Updated 4hours ago
                  </p>
                </div>
              </div>
              <div
                onClick={() => navigate("/news-details")}
                className=" min-w-[330px] h-auto rounded-lg relative cursor-pointer ">
                <img
                  src="/images/vienna.jpg"
                  alt=""
                  className=" w-[400px] h-[200px] object-cover rounded-lg opacity-70 "
                />
                <div className=" w-full h-[200px] absolute top-0 left-0 px-3 ">
                  <p className="  w-[85%] mt-[130px] text-left font-bold text-white text-[1rem]  ">
                    Five talking points as Liverpool are held to United
                    stalemate
                  </p>
                  <p className=" text-[0.8rem] text-neutral-100/60 ">
                    Updated 4hours ago
                  </p>
                </div>
              </div>
              <div
                onClick={() => navigate("/news-details")} 
                className=" min-w-[330px] h-auto rounded-lg relative cursor-pointer ">
                <img
                  src="/images/shoot.jpg"
                  alt=""
                  className=" w-[400px] h-[200px] object-cover rounded-lg opacity-70 "
                />
                <div className=" w-full h-[200px] absolute top-0 left-0 px-3 ">
                  <p className="  w-[85%] mt-[130px] text-left font-bold text-white text-[1rem]  ">
                    Five talking points as Liverpool are held to United
                    stalemate
                  </p>
                  <p className=" text-[0.8rem] text-neutral-100/60 ">
                    Updated 4hours ago
                  </p>
                </div>
              </div>
              <div 
                onClick={() => navigate("/news-details")}
                className=" min-w-[330px] h-auto rounded-lg relative cursor-pointer ">
                <img
                  src="/images/sven.jpg"
                  alt=""
                  className=" w-[400px] h-[200px] object-cover rounded-lg opacity-80 "
                />
                <div className=" w-full h-[200px] absolute top-0 left-0 px-3 ">
                  <p className="  w-[85%] mt-[130px] text-left font-bold text-white text-[1rem]  ">
                    Five talking points as Liverpool are held to United
                    stalemate
                  </p>
                  <p className=" text-[0.8rem] text-neutral-100/60 ">
                    Updated 4hours ago
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full h-[50px] "></div>

            <div className=" py-5 md:border-y md:border-neutral-100/20 ">
              <h1 className=" font-bold text-[1rem]">More News</h1>
            </div>

            <div className=" w-full h-auto md:py-3 block md:flex gap-3 md:border-b md:border-neutral-100/20 ">
              <div 
                onClick={() => navigate("/news-details")}
                className=" w-full md:w-1/2 flex gap-2 mb-4 md:mb-0 cursor-pointer">
                <div className=" w-[35%] ">
                  <img
                    src="/images/boots.jpg"
                    alt=""
                    className=" w-full h-[80px] rounded-md object-cover "
                  />
                </div>
                <div className=" w-[65%] ">
                  <p className=" text-[0.9rem] md:text-[0.82rem] mb-3 md:mb-4 font-bold  ">
                    Sunderland turn to Beale to aid promotion push
                  </p>
                  <div className=" w-full flex items-center justify-between ">
                    <p className=" w-fit bg-gray-300 dark:bg-[#121a20] py-1 px-1 text-[0.7rem] rounded-md font-bold ">
                      Football
                    </p>
                    <p className=" text-[0.72rem] text-black/70 dark:text-neutral-100/60">
                      1 hour ago
                    </p>
                  </div>
                </div>
              </div>

              <div 
                onClick={() => navigate("/news-details")}
                className=" w-full md:w-1/2 flex gap-2 mb-4 md:mb-0 cursor-pointer ">
                <div className=" w-[35%] ">
                  <img
                    src="/images/sven.jpg"
                    alt=""
                    className=" w-full h-[80px] rounded-md object-cover "
                  />
                </div>
                <div className=" w-[65%] ">
                  <p className=" text-[0.9rem] md:text-[0.82rem] mb-3 md:mb-4 font-bold  ">
                    Sunderland turn to Beale to aid promotion push
                  </p>
                  <div className=" w-full flex items-center justify-between ">
                    <p className=" w-fit bg-gray-300 dark:bg-[#121a20] py-1 px-1 text-[0.7rem] rounded-md font-bold ">
                      Football
                    </p>
                    <p className=" text-[0.72rem] text-black/70 dark:text-neutral-100/60 ">
                      3 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full h-auto md:py-3 block md:flex gap-3 md:border-b md:border-neutral-100/20 ">
              <div 
                onClick={() => navigate("/news-details")}
                className=" w-full md:w-1/2 flex gap-2 mb-4 md:mb-0 cursor-pointer">
                <div className=" w-[35%] ">
                  <img
                    src="/images/shoot.jpg"
                    alt=""
                    className=" w-full h-[80px] rounded-md "
                  />
                </div>
                <div className=" w-[65%] ">
                  <p className=" text-[0.9rem] md:text-[0.82rem] mb-3 md:mb-4 font-bold  ">
                    Sunderland turn to Beale to aid promotion push
                  </p>
                  <div className=" w-full flex items-center justify-between ">
                    <p className=" w-fit bg-gray-300 dark:bg-[#121a20] py-1 px-1 text-[0.7rem] rounded-md font-bold ">
                      Football
                    </p>
                    <p className=" text-[0.72rem] text-black/70 dark:text-neutral-100/60 ">
                      2 hours ago
                    </p>
                  </div>
                </div>
              </div>

              <div 
                onClick={() => navigate("/news-details")}
                className=" w-full md:w-1/2 flex gap-2 mb-4 md:mb-0 cursor-pointer ">
                <div className=" w-[35%] ">
                  <img
                    src="/images/connor.jpg"
                    alt=""
                    className=" w-full h-[80px] rounded-md object-cover "
                  />
                </div>
                <div className=" w-[65%] ">
                  <p className=" text-[0.9rem] md:text-[0.82rem] mb-3 md:mb-4 font-bold  ">
                    Sunderland turn to Beale to aid promotion push
                  </p>
                  <div className=" w-full flex items-center justify-between ">
                    <p className=" w-fit bg-gray-300 dark:bg-[#121a20] py-1 px-1 text-[0.7rem] rounded-md font-bold ">
                      Football
                    </p>
                    <p className=" text-[0.72rem] text-black/70 dark:text-neutral-100/60">
                      10 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full h-auto md:py-3 block md:flex gap-3 md:border-b md:border-neutral-100/20 ">
              <div 
                onClick={() => navigate("/news-details")}
                className=" w-full md:w-1/2 flex gap-2 mb-4 md:mb-0 cursor-pointer">
                <div className=" w-[35%] ">
                  <img
                    src="/images/keenan.jpg"
                    alt=""
                    className=" w-full h-[80px] rounded-md "
                  />
                </div>
                <div className=" w-[65%] ">
                  <p className=" text-[0.9rem] md:text-[0.82rem] mb-3 md:mb-4 font-bold  ">
                    Sunderland turn to Beale to aid promotion push
                  </p>
                  <div className=" w-full flex items-center justify-between ">
                    <p className=" w-fit bg-gray-300 dark:bg-[#121a20] py-1 px-1 text-[0.7rem] rounded-md font-bold ">
                      Football
                    </p>
                    <p className=" text-[0.72rem] text-black/70 dark:text-neutral-100/60 ">
                      6 hours ago
                    </p>
                  </div>
                </div>
              </div>

              <div 
                onClick={() => navigate("/news-details")}
                className=" w-full md:w-1/2 flex gap-2 mb-4 md:mb-0 cursor-pointer ">
                <div className=" w-[35%] ">
                  <img
                    src="/images/jack.jpg"
                    alt=""
                    className=" w-full h-[80px] rounded-md object-cover "
                  />
                </div>
                <div className=" w-[65%] ">
                  <p className=" text-[0.9rem] md:text-[0.82rem] mb-3 md:mb-4 font-bold  ">
                    Sunderland turn to Beale to aid promotion push
                  </p>
                  <div className=" w-full flex items-center justify-between ">
                    <p className=" w-fit bg-gray-300 dark:bg-[#121a20] py-1 px-1 text-[0.7rem] rounded-md font-bold ">
                      Football
                    </p>
                    <p className=" text-[0.72rem] text-black/70 dark:text-neutral-100/60 ">
                      7 hours ago
                    </p>
                  </div>
                </div>
              </div>
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

      <ScrollToTop />
      <Footer />
      <BottomBar />
    </>
  );
};

export default News;
