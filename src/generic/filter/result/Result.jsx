import style from "./result.module.css";

// eslint-disable-next-line react/prop-types
const Result = ({ content = [], preload }) => {
  return (
    <div
      className={`${style.result} ${preload ? style.preload : ""}`}
      style={{ overflow: "hidden" }}
    >
      {content}
    </div>
  );
};

export default Result;
