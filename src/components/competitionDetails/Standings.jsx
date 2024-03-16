//ANNOTAION!!
//The team id is hardcoded, be sure to make it dynamic when data fetching comences

import StandingsTable from "./StandingsTable";
import ScrollToTop from "../../ScrollToTop";

const Standings = ({}) => {
  return (
    <>
      <div className="w-full">
        <StandingsTable />
      </div>
      <ScrollToTop />
    </>
  );
};

export default Standings;
