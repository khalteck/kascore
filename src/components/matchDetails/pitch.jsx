import React from "react";

const Pitch = ({ teamsData, awayId, homeId }) => {
  // Define styles for the pitch and player
  const pitchStyle = {
    width: "100%",
    maxWidth: "500px",
    height: "375px",
    position: "relative",
    overflow: "hidden",
    display: "grid",
    gap: "5px",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    // justifyItems: "center", // Center each player horizontally
    // gridAutoFlow: "dense", // Remove empty grid blocks
  };

  const playerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "0.8em",
  };

  // Map through teamsData to render players
  const renderHomePlayers = () => {
    return teamsData[0]?.startXI?.map((playerData, index) => {
      const { player } = playerData;
      const [x, y] = player.grid.split(":").map(Number);
      const gridColumn = y;
      const gridRow = x;
      const gridColumnEnd = y === 1 && x === 1 ? "span 5" : "auto"; // Span the item to take up all the horizontal space if it's in the first column

      return (
        <div
          key={player.id}
          style={{ ...playerStyle, gridColumn, gridRow, gridColumnEnd }}
          className="border h-[60px]"
        >
          <div className="bg-black text-white rounded-full w-7 h-7 flex justify-center items-center font-bold">
            {player?.number}
          </div>
          <span>{player.name}</span>
        </div>
      );
    });
  };

  const renderAwayPlayers = () => {
    return teamsData[1]?.startXI?.map((playerData, index) => {
      const { player } = playerData;
      const [x, y] = player.grid.split(":").map(Number);
      const pos1 = x == 4 ? 1 : x == 3 ? 2 : x == 2 ? 3 : 4;
      const pos2 = x === 5 ? 1 : x === 4 ? 2 : x === 3 ? 3 : x === 2 ? 4 : 5;

      const gridColumn = y;
      const gridRow = x?.toString()?.includes("5") ? pos2 : pos1;

      return (
        <div
          key={player.id}
          style={{ ...playerStyle, gridColumn, gridRow }}
          className="border h-[60px]"
        >
          <div className="bg-white text-black rounded-full w-7 h-7 flex justify-center items-center font-bold">
            {player?.number}
          </div>
          <span>{player.name}</span>
        </div>
      );
    });
  };

  return (
    <div className="h-[750px] bg-pitch bg-cover bg-no-repeat">
      <div style={{ ...pitchStyle, alignItems: "end" }} className="">
        {renderHomePlayers()}
      </div>
      <div style={{ ...pitchStyle, alignItems: "start" }} className="">
        {renderAwayPlayers()}
      </div>
    </div>
  );
};

export default Pitch;
