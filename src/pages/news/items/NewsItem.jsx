import style from './newsItem.module.css'
import appStyle from '../../../app.module.css'
import Button from "../../../generic/buttons/Button.jsx";

// eslint-disable-next-line react/prop-types
const NewsItem = ({title, number, link, text, date}) => {
  return (
    <div className={style.item}>
      <div>
        <div className={style.header}>
          <h1 className={appStyle.titleText}>{title} <span
            className={`${appStyle.titleText} ${appStyle.span}`}>{number}</span></h1>
          <div>
            <Button text="Important news"
                    link={link}
            />
          </div>
        </div>

        <div className={style.text}>
          <p className={appStyle.mainText}>{text}</p>
        </div>

        <div className={style.date}>
          <p className={`${appStyle.smallerText} ${appStyle.hint}`}>{date}</p>
        </div>
      </div>

      <div className={style.button}>
        <p className={`${appStyle.mainText} ${appStyle.green}`}>Read More</p>
      </div>
    </div>
  )
}

export default NewsItem