import ProgressBar from "./ProgressBar";

const StatsCont = () => {
  return (
    <div className="w-full min-h-[200px] flex flex-col gap-3 text-[.85rem] mt-5">
      <div>
        <div className="flex justify-between">
          <p className="font-bold">5</p>
          <p>Shots on goal</p>
          <p className="font-bold">6</p>
        </div>
        <div className="flex gap-2 mt-2">
          <ProgressBar progress={45} type="home" />
          <ProgressBar progress={55} type="away" />
        </div>
      </div>

      <div>
        <div className="flex justify-between">
          <p className="font-bold">5</p>
          <p>Shots on goal</p>
          <p className="font-bold">6</p>
        </div>
        <div className="flex gap-2 mt-2">
          <ProgressBar progress={40} type="home" />
          <ProgressBar progress={60} type="away" />
        </div>
      </div>

      <div>
        <div className="flex justify-between">
          <p className="font-bold">5</p>
          <p>Shots on goal</p>
          <p className="font-bold">6</p>
        </div>
        <div className="flex gap-2 mt-2">
          <ProgressBar progress={60} type="home" />
          <ProgressBar progress={40} type="away" />
        </div>
      </div>
    </div>
  );
};

export default StatsCont;
