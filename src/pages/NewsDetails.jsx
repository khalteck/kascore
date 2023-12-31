import Footer from "../components/Footer";
import Header from "../components/Header";
import BottomBar from "../components/BottomBar";
import { useAppContext } from "../contexts/AppContext";

const NewsDetails = () => {
  const { isDarkMode } = useAppContext();

  return (
    <>
      <Header />
      <div
        className={`w-full pt-[130px] md:pt-[170px] md:pb-12 md:px-[10%] bg-[#d1d5db] text-[#0f172a] dark:bg-[#2a3543] dark:text-gray-200 ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <div className="w-full h-full flex gap-8">
          {/* <div className="w-[20%] min-w-[200px] hidden md:block">
            <CountriesTray />
          </div> */}

          <div
            className={`w-full md:w-[50%] md:min-w-[550px] min-h-screen rounded-lg px-5 py-5 mt-5  ${
              !isDarkMode ? "bg-[#1d2732]" : "bg-white"
            }`}
          >
            {/* <div className="w-full mb-4 md:mb-0">
              <DateSlide />
            </div> */}
            <div
              className={`w-full ${
                !isDarkMode ? "text-white" : "text-black"
              }`}
            >
              <h1 className=" text-[2rem] font-black mb-2 ">Aston Villa good but want to get better, says boss Unai Emery after stunning 2023</h1>
              <p className=" text-[0.8rem] ">Khalid, 2h ago</p>
              <img src="/images/joppe.jpg" alt="" className=" w-full h-[550px] rounded-lg my-2 object-cover " /> 
              <p className=" text-[0.8rem] ">Emery has done a brilliant job at Villa</p>
              <h3 className=" font-bold text-[1.2rem] my-7 ">Aston Villa had a fantastic year, according to manager Unai Emery, but he said the Midlands club
                 still have plenty to work on heading into 2024 after moving level on points at the top of the 
                 Premier League with a 3-2 victory over Burnley on Saturday.
              </h3>
              <p className=" text-[1.05rem] ">Douglas Luiz scored an 89th-minute penalty to help Villa edge a 10-man Burnley and move up to 42 points,
                 the same as Liverpool, who lead on goal difference and host Newcastle United on Monday.
              </p>
              <p className=" my-6 text-[1.05rem] ">Reigning champions Manchester City, who also have a game in hand on Villa, are third on 40 points.</p> 
              <p className=" text-[1.05rem] mb-4 ">Villa's 15-match winning streak at home in the league was ended by lowly Sheffield United in a 1-1 draw last week,
                 followed by a 3-2 defeat at Manchester United on Boxing Day, but Emery's side managed to return to winning
                  ways in a hard-fought battle at Villa Park.
              </p>
              <img src="/images/joppe.jpg" alt="" className=" w-full h-[550px] rounded-lg mb-2 object-cover " />
              <p className=" text-[0.8rem] ">Villa are soaring in the Premier League</p>
              <p className=" text-[1.05rem] my-5 ">When asked if he thought the next year could be even better, Emery said: <strong>"Always the idea is to improve and
                 get better. It was really fantastic, the year we did – but I'm very excited for the next match.</strong> 
              </p>
              <p className=" text-[1.05rem] mb-4 font-bold ">"We have 42 points, and we can feel comfortable and happy, but... my expectation for the next year is try
                 to progress. I am going to manage how we can progress."
              </p>
              <p className=" text-[1.05rem]">Emery has transformed Villa in a little more than a year since replacing England great Steven Gerrard,
                 guiding them to a club record of 32 wins in all competitions across the calendar year.
              </p>
              <p className=" text-[1.05rem] my-4 ">"When I arrived here (in late 2022) the message always was get better, try to play Europe, try to be a
                 contender to be in the top 10, in the top seven, now we are top four," Emery said.
              </p>
              <p className=" font-bold text-[1.05rem] ">"We are in at the moment and if on (match) day 30, 32 we are in, maybe we can think it is our opportunity to get it."</p>

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

export default NewsDetails;
