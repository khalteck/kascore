const Footer = () => {
  return (
    <footer className="h-auto w-full bg-gradient-to-r from-[#626a71] to-[#2a3543]  text-white py-10 px-32 flex items-center justify-between ">
      <div className=" w-1/3 ">
        <a href="#"><img src="./logo.svg" alt="" /></a>
      </div>
      <div className=" w-1/3 m-auto flex items-center">
        <p className=" font-bold">© 2023 Kascore – All Rights Reserved.</p>
      </div>
      <div className=" w-[20%] flex items-center justify-between">
        <div className=" w-1/4 ">
          <a href="#"><img src="./icon-facebook.svg" alt="" /></a>
        </div>
        <div className=" w-1/4 ">
          <a href="#"><img src="./icon-instagram.svg" alt="" /></a>
        </div>
        <div className=" w-1/4 ">
          <a href="#"><img src="./icon-twitter.svg" alt="" /></a>
        </div>
        <div className=" w-1/4  ">
          <a href="#"><img src="./icon-youtube.svg" alt="" /> </a>
        </div> 
      </div>
      
    </footer>
  );  
};

export default Footer;
