const Footer = () => {
  return (
    <footer className="h-auto w-full block bg-[#2a3543] md:bg-gradient-to-r from-[#5a636b] to-[#2a3543] text-white mb-[60px] md:mb-0 py-5 px-5 lg:py-10 lg:px-32 lg:flex items-center justify-between ">
      <div className=" w-full lg:w-1/3 my-10 lg:my-0 ">
        <div
          // onClick={() => navigate("/")}
          className="w-full flex justify-center md:justify-start items-center cursor-pointer"
        >
          <img
            alt=""
            src="/images/logo-white.png"
            className="w-8 md:w-10 h-auto"
          />
          <h1 className="text-[1.75rem] md:text-[2rem] font-black">Kascore</h1>
        </div>
      </div>

      <div className=" w-full lg:w-1/3 text-center lg:text-left mb-10 lg:mb-0 ">
        <p className=" font-bold text-[15px] ">
          © 2023 Kascore – All Rights Reserved.
        </p>
      </div>

      <div className=" w-4/5 lg:w-[20%] mx-auto my-10 lg:mx-0 lg:my-0 flex items-center justify-between">
        <div className=" w-[15%] lg:w-1/4 ">
          <a href="#">
            <img
              src="/images/icon-facebook.svg"
              className=" m-auto lg:m-0 "
              alt=""
            />
          </a>
        </div>
        <div className=" w-[15%] lg:w-1/4 ">
          <a href="#">
            <img
              src="/images/icon-twitter.svg"
              className=" m-auto lg:m-0"
              alt=""
            />
          </a>
        </div>
        <div className=" w-[15%] lg:w-1/4 ">
          <a href="#">
            <img
              src="/images/icon-instagram.svg"
              className=" m-auto lg:m-0"
              alt=""
            />
          </a>
        </div>
        <div className=" w-[15%] lg:w-1/4 ">
          <a href="#">
            <img
              src="/images/icon-youtube.svg"
              className=" m-auto lg:m-0"
              alt=""
            />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
