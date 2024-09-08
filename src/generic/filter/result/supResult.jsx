import style from './supresult.module.css'

// eslint-disable-next-line react/prop-types
const Result = ({content = []}) => {
  return (
    <div className={style.result}>
      {content}
    </div>
  )
}

export default Result