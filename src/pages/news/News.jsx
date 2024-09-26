import Menu from "../../generic/menu/Menu.jsx"
import appStyle from "../../app.module.css"
import NewsItems from "./items/NewsItems.jsx"
import Footer from "../../generic/footer/Footer.jsx"
import style from "./news.module.css"
import { handleWidth } from "../../generic/handleWidth/handleWidth.js"
import notification from "../../image/notification.svg"
import greenCircle from "../../image/greenCircle.svg"
import { useState } from "react"
import Button from "../../generic/buttons/Button.jsx"
import close from "../../image/close-notification.svg"

const News = () => {
  const [showNotification, setShowNotification] = useState(false)

  let isWidth = handleWidth()

  const handleNotification = () => {
    setShowNotification(!showNotification)
  }

  return (
    <div className={appStyle.page}>
      <Menu />

      <div className={appStyle.main}>
        {isWidth ? (
          <h1 className={appStyle.pageTitle}>News</h1>
        ) : (
          <div className={style.content}>
            <h1 className={appStyle.pageTitle}>News</h1>
            {showNotification ? (
              <div className={style.content_notification}>
                <div className={style.title}>
                  <h1 className={`${style.title_notification}`}>
                    TECHNICAL MAINTENANCE FOR BIN NUMBER{" "}
                    <span className={style.notification_num}>436797</span>
                  </h1>
                  <p className={style.subtitle}>
                    Technical maintenance for bin number 436797
                  </p>
                  <div className={style.close_notification}>
                    <img
                      className={style.icon_close}
                      src={close}
                      alt={"close"}
                      onClick={handleNotification}
                    />
                  </div>
                </div>
                <div className={style.date_news}>
                  <div className={style.date}>
                    <p className={`${appStyle.smallerText} ${appStyle.hint}`}>
                      436797
                    </p>
                  </div>
                  <div className={style.btn_news}>
                    <Button text="Important news" link={"#"} />
                  </div>
                </div>
              </div>
            ) : (
              <div className={style.notification} onClick={handleNotification}>
                <img src={notification} alt="notification" />
                <img
                  className={style.icon_green_circle}
                  src={greenCircle}
                  alt="circle"
                />
              </div>
            )}
          </div>
        )}

        <NewsItems />

        <Footer />
      </div>
    </div>
  )
}

export default News
