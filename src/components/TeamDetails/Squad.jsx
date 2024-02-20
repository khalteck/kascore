import { useState } from "react";
import squadData from "../../data/squad112.json";
import playerData from "../../data/playerDetails112.json";

import PlayerListCard from "./PlayerListCard";
import { useAppContext } from "../../contexts/AppContext";
import PlayerModal from "./PlayerModal";

const Squad = ({}) => {
  const { isDarkMode } = useAppContext();

  const allSquad = squadData?.response;

  const players = allSquad[0]?.players;
  const goalkeepers = players?.filter((x) => x?.position === "Goalkeeper");
  const defenders = players?.filter((x) => x?.position === "Defender");
  const midfielders = players?.filter((x) => x?.position === "Midfielder");
  const attackers = players?.filter((x) => x?.position === "Attacker");

  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const playerInfo = playerData?.response[0];
  const playerStats = playerData?.response[0]?.statistics;

  return (
    <>
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <div
            //   onClick={() => selectTab("info")}
            className={`text-[.75rem] px-3 py-1 border border-black/20 dark:border-white/30 rounded-full `}
          >
            ALL
          </div>
        </div>

        <div>
          <div className="w-full dark:bg-black/20 bg-gray-200 px-3 py-1 border-t border-black/20 dark:border-white/10 text-center mt-3">
            Goalkeepers
          </div>
          <div className="w-full text-[.85rem] font-bold flex gap-3 items-center px-3 py-1 border-y border-black/20 dark:border-white/10 text-center">
            <p className="w-8 text-start">#</p>
            <p>Name</p>
            <p className="ml-auto">Age</p>
          </div>
          <div className="flex flex-col text-[.85rem]">
            {goalkeepers?.map((item, index) => {
              return (
                <PlayerListCard
                  key={index}
                  item={item}
                  setSelectedPlayer={setSelectedPlayer}
                />
              );
            })}
          </div>
        </div>

        <div>
          <div className="w-full dark:bg-black/20 bg-gray-200 px-3 py-1 border-t border-black/20 dark:border-white/10 text-center mt-5">
            Defenders
          </div>
          <div className="w-full text-[.85rem] font-bold flex gap-3 items-center px-3 py-1 border-y border-black/20 dark:border-white/10 text-center">
            <p className="w-8 text-start">#</p>
            <p>Name</p>
            <p className="ml-auto">Age</p>
          </div>
          <div className="flex flex-col text-[.85rem]">
            {defenders?.map((item, index) => {
              return (
                <PlayerListCard
                  key={index}
                  item={item}
                  setSelectedPlayer={setSelectedPlayer}
                />
              );
            })}
          </div>
        </div>

        <div>
          <div className="w-full dark:bg-black/20 bg-gray-200 px-3 py-1 border-t border-black/20 dark:border-white/10 text-center mt-5">
            Midfielders
          </div>
          <div className="w-full text-[.85rem] font-bold flex gap-3 items-center px-3 py-1 border-y border-black/20 dark:border-white/10 text-center">
            <p className="w-8 text-start">#</p>
            <p>Name</p>
            <p className="ml-auto">Age</p>
          </div>
          <div className="flex flex-col text-[.85rem]">
            {midfielders?.map((item, index) => {
              return (
                <PlayerListCard
                  key={index}
                  item={item}
                  setSelectedPlayer={setSelectedPlayer}
                />
              );
            })}
          </div>
        </div>

        <div>
          <div className="w-full dark:bg-black/20 bg-gray-200 px-3 py-1 border-t border-black/20 dark:border-white/10 text-center mt-5">
            Attackers
          </div>
          <div className="w-full text-[.85rem] font-bold flex gap-3 items-center px-3 py-1 border-y border-black/20 dark:border-white/10 text-center">
            <p className="w-8 text-start">#</p>
            <p>Name</p>
            <p className="ml-auto">Age</p>
          </div>
          <div className="flex flex-col text-[.85rem]">
            {attackers?.map((item, index) => {
              return (
                <PlayerListCard
                  key={index}
                  item={item}
                  setSelectedPlayer={setSelectedPlayer}
                />
              );
            })}
          </div>
        </div>
      </div>

      {selectedPlayer && (
        <PlayerModal
          playerInfo={playerInfo}
          setSelectedPlayer={setSelectedPlayer}
          playerStats={playerStats}
        />
      )}
    </>
  );
};

export default Squad;
