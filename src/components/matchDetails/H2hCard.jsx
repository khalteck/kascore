const H2hCard = ({ item }) => {
  return (
    <div className="mb-5">
      <div className="w-full  px-3 py-1 border-y border-black/20 dark:border-white/10 text-center">
        {item?.league?.name}
      </div>
      <div className="w-full flex gap-4 bg-gray-500/10 dark:bg-black/20 p-3 rounded-md">
        <div className="w-[90px] py-2 flex flex-col justify-between items-center text-[.75em]">
          <p className="text-center">{item?.fixture?.date?.split("T")[0]}</p>
          <p>{item?.fixture?.status?.short}</p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <img
              src={item?.teams?.home?.logo}
              alt="home-team"
              className="w-5 h-5"
            />
            <p>{item?.teams?.home?.name}</p>
          </div>
          <div className="flex gap-3 items-center">
            <img
              src={item?.teams?.away?.logo}
              alt="away-team"
              className="w-5 h-5"
            />
            <p>{item?.teams?.away?.name}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between font-bold">
          <p>{item?.goals?.home}</p>
          <p>{item?.goals?.away}</p>
        </div>
      </div>
    </div>
  );
};

export default H2hCard;
