const PlayerListCard = ({ item, setSelectedPlayer }) => {
  return (
    <div
      onClick={() => setSelectedPlayer(item?.id)}
      className={`flex gap-3 items-center px-3 py-1 border-b border-black/20 dark:border-white/10 cursor-pointer hover:bg-orange-500/10`}
    >
      <p className="w-8">{item?.number || "-"}</p>
      <p>{item?.name}</p>
      <p className="ml-auto">{item?.age}</p>
    </div>
  );
};

export default PlayerListCard;
