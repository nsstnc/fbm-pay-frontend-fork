import style from './result.module.css'

// eslint-disable-next-line react/prop-types
const ResultDetails = ({content = []}) => {
  return (
    <div className={style.result}>
      {content}
    </div>
  )
}

export default ResultDetails