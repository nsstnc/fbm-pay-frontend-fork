import style from "./results.module.css";

// eslint-disable-next-line react/prop-types
const Results = ({ results = [], preload }) => {
  const arr = [];
  for (let i = 0; i < results.length; i++) {
    arr.push(results[i]);
  }

  return (
    <div className={`${style.results} ${preload ? style.preload : ""}`}>
      <div className={`${preload ? style.spinner_block : ""}`}></div>
      {arr}
    </div>
  );
};

export default Results;
