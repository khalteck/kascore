import ScrollToTop from "../../ScrollToTop";
import Header from "../../components/Header";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex flex-col gap-4 justify-center items-center bg-gray-200 dark:bg-[#2a3543] text-black dark:text-gray-200 py-[100px]">
        <div className="h-[100px]"></div>
        <img
          alt="404"
          src="/images/404.png"
          className="w-full sm:w-[400px] h-auto"
        />
        <p className="text-[2rem]">Oops! Page not found</p>

        <p className="underline">Go back to home</p>
      </div>
      <ScrollToTop />
    </>
  );
};

export default PageNotFound;
