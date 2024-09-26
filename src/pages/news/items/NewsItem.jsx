import style from "./newsItem.module.css"
import appStyle from "../../../app.module.css"
import Button from "../../../generic/buttons/Button.jsx"
import { handleWidth } from "../../../generic/handleWidth/handleWidth.js"

// eslint-disable-next-line react/prop-types
const NewsItem = ({ title, number, link, text, date }) => {
  //handleWidth
  let isWidth = handleWidth()

  return (
    <div className={style.item}>
      <div>
        <div className={style.header}>
          {!isWidth && (
            <div className={style.btn_important}>
              <Button text="Important news" link={link} />
            </div>
          )}
          <div className={style.title}>
            <h1 className={`${appStyle.titleText} ${style.title_technical}`}>
              {title}{" "}
              <span className={`${appStyle.titleText} ${appStyle.span}`}>
                {number}
              </span>
            </h1>
          </div>
          {isWidth && (
            <div>
              <Button text="Important news" link={link} />
            </div>
          )}
        </div>

        <div className={style.text}>
          <p className={appStyle.mainText}>{text}</p>
        </div>
        {isWidth && (
          <div className={style.date}>
            <p className={`${appStyle.smallerText} ${appStyle.hint}`}>{date}</p>
          </div>
        )}
        {!isWidth && (
          <div className={style.content_date_btn}>
            <div className={style.date}>
              <p className={`${appStyle.smallerText} ${appStyle.hint}`}>
                {date}
              </p>
            </div>
            <div className={style.button}>
              <p className={`${appStyle.mainText} ${appStyle.green}`}>
                Read More
              </p>
            </div>
          </div>
        )}
      </div>
      {isWidth && (
        <div className={style.button}>
          <p className={`${appStyle.mainText} ${appStyle.green}`}>Read More</p>
        </div>
      )}
    </div>
  )
}

export default NewsItem
