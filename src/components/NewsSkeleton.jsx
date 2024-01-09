import { SkeletonTheme } from "react-loading-skeleton";

const NewsSkeleton = () => {
  const numbersArray = [];
  for (let i = 1; i <= 20; i++) {
    numbersArray.push(i);
  }

  return (
    <SkeletonTheme color="#f3f3f3" highlightColor="#e0e0e0">
      <div className="flex flex-col gap-4">
        {numbersArray?.map((x, ind) => {
          return (
            <div
              key={ind}
              className="w-full h-[150px] bg-black/10 dark:bg-white/10 rounded-md"
            ></div>
          );
        })}
      </div>
    </SkeletonTheme>
  );
};

export default NewsSkeleton;
