/* eslint-disable react/prop-types */
const CountryCard = ({ item }) => {
  return (
    <div className=" flex items-center gap-3 mb-1 p-1 cursor-pointer dark:hover:bg-orange-500/10 hover:bg-black/20 rounded-md">
      <img src={item?.flagImageUrl} alt="flag" className="w-6 h-auto" />
      <p className="text-[.85rem]">{item?.countryName}</p>
    </div>
  );
};

export default CountryCard;
