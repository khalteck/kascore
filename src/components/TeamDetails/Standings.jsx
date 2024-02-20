//ANNOTAION!!
//The team id is hardcoded, be sure to make it dynamic when data fetching comences

import StandingsTable from "./StandingsTable";

const Standings = ({}) => {
  return (
    <div className="w-full">
      <StandingsTable teamId={49} />
    </div>
  );
};

export default Standings;
