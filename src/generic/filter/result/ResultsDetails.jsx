import style from "./results.module.css";

// eslint-disable-next-line react/prop-types
const ResultsDetails = ({ preload, results = [] }) => {
  const arr = [];
  for (let i = 0; i < results.length; i++) {
    arr.push(results[i]);
  }

  return (
    <div className={`${style.results} ${preload ? style.preload_details : ""}`}>
      <div className={preload ? style.spinner_block_details : ""}></div>
      {arr}
    </div>
  );
};

export default ResultsDetails;
