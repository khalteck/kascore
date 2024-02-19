import h2hData from "../../data/h2h112.json";
import H2hCard from "./H2hCard";

const H2hCont = () => {
  const h2h = h2hData?.response;

  //   console.log("h2h", h2h);

  return (
    <div className="w-full min-h-[300px] flex flex-col text-[.85rem] -mt-4">
      {h2h?.map((item, index) => {
        return <H2hCard key={index} item={item} />;
      })}
    </div>
  );
};

export default H2hCont;
