/* eslint-disable react/prop-types */
const NewsContentjsxElement = ({ content }) => {
  const JSXFromHTMLString = (str) => {
    if (str) {
      return <div dangerouslySetInnerHTML={{ __html: str }} />;
    }
  };
  return (
    <div
      className={`${
        content?.includes("<h") ? "font-bold text-[1.1rem] mt-8" : ""
      }`}
    >
      {JSXFromHTMLString(content)}
    </div>
  );
};

export default NewsContentjsxElement;
