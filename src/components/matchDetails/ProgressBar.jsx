const ProgressBar = ({ progress, type }) => {
  return (
    <div
      className={`w-full h-2 bg-gray-300 dark:bg-gray-200/50 overflow-hidden ${
        type === "home" ? "rotate-[180deg]" : ""
      }`}
    >
      <div
        className={`h-full   ${
          type === "home" ? "bg-orange-500" : "bg-blue-500"
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
