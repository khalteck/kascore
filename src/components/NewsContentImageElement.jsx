/* eslint-disable react/prop-types */
const NewsContentImageElement = ({ image }) => {
  return (
    <div>
      <img
        src={image?.url}
        alt={image?.alt}
        className=" w-full h-auto rounded-lg my-1 md:my-2 object-cover "
      />
      <p className=" text-[0.8rem] ">{image?.alt}</p>
    </div>
  );
};

export default NewsContentImageElement;
