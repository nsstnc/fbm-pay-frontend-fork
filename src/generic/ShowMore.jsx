import style from '../style/showMore.module.css'
import appStyle from '../app.module.css'

// eslint-disable-next-line react/prop-types
const ShowMore = ({text, subText = "", img}) => {
  return (
    <div className={style.showMore}>
      <div className={`${style.showButton}`}>
        {text}
        {img}
      </div>

      <div>
        <p className={appStyle.hintText}>{subText}</p>
      </div>
    </div>
  )
}

export default ShowMore