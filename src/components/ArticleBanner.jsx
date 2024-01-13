/* eslint-disable react/prop-types */
const ArticleBanner = ({ article, avatar }) => {
  return (
    <div className="w-full flex justify-between gap-3 items-center border dark:border-white/20 border-black/20 rounded-lg px-3 py-2">
      <div className="flex gap-1">
        <img alt="" src={avatar} className="w-10 h-8 mt-1" />
        <div>
          <p className="text-[.95rem]">{article?.authors[0]?.name}</p>
          <p className="text-[.85rem] mt-[-2px] opacity-60">Kascore</p>
        </div>
      </div>
      <div className="text-right">
        <p className=" text-[0.8rem] opacity-60">{article?.publishedDate}</p>
        <p className=" text-[0.8rem] opacity-60">{article?.publishedTime}</p>
      </div>
    </div>
  );
};

export default ArticleBanner;
