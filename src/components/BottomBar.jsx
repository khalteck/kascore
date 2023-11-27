const BottomBar = () => {
  return (
    <div className="w-full h-[60px] md:hidden bg-[#2a3543] fixed bottom-0 left-0 z-40 top-shadow flex justify-between items-center px-7 text-neutral-100/70 text-[.85rem]">
      <div className="flex flex-col items-center">
        <img
          alt="calendar"
          src="/images/icons8-football-orange.png"
          className="w-6 h-auto"
        />
        <p className="text-orange-500">Matches</p>
      </div>

      <div className="flex flex-col items-center">
        <img
          alt="calendar"
          src="/images/icons8-trophy-48.png"
          className="w-6 h-auto"
        />
        <p>Leagues</p>
      </div>

      <div className="flex flex-col items-center">
        <img
          alt="calendar"
          src="/images/icons8-star-white.png"
          className="w-6 h-auto"
        />
        <p>Favorites</p>
      </div>
    </div>
  );
};

export default BottomBar;
