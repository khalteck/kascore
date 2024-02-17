const ProgressBar = ({ progress, type }) => {
  return (
    <div
      className={`w-full h-2 bg-gray-200/30 overflow-hidden ${
        type === "home" ? "rotate-[180deg]" : ""
      }`}
    >
      <div className="h-full bg-orange-500" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
