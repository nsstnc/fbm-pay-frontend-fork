import style from "./results.module.css";

// eslint-disable-next-line react/prop-types
const Results = ({results = []}) => {

  const arr = []
  for (let i = 0; i < results.length; i++) {
    arr.push(results[i])
  }

  return (
    <div className={style.results} style={{overflow:'hidden'}}>
      {arr}
    </div>

  )
}

export default Results