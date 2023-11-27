import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CountriesSkeleton = () => {
  const numbersArray = [];
  for (let i = 1; i <= 50; i++) {
    numbersArray.push(i);
  }

  return (
    <SkeletonTheme color="#f3f3f3" highlightColor="#e0e0e0">
      <div className="flex flex-col gap-2">
        {/* <Skeleton count={3} /> */}
        {numbersArray?.map((x, ind) => {
          return (
            <div key={ind} className="w-full h-6 bg-white/10 rounded-md"></div>
          );
        })}
      </div>
    </SkeletonTheme>
  );
};

export default CountriesSkeleton;
