const FullBorderButton = ({ action }) => {
  return (
    <button
      onClick={action}
      className="w-full rounded-md text-[.85rem] p-2 border border-black/20 dark:border-white/30 dark:hover:border-white/50 hover:border-black/50"
    >
      View More
    </button>
  );
};

export default FullBorderButton;
