import style from "../metapay.module.css"
import appStyle from "../../../app.module.css"
import Menu from "../../../generic/menu/Menu.jsx"
import HeaderItems from "../../../generic/headerItem/HeaderItems.jsx"
import Results from "../../../generic/filter/result/Results.jsx"
import { DS3_ROUTE, METAPAY_ROUTE } from "../../../routing/consts.js"
import Result from "../../../generic/filter/result/Result.jsx"
import mastercard from "../../../image/cards/icons/masterCard.svg"
import card from "../../../image/cardNumbers.svg"
import copy from "../../../image/copyIcon.svg"
import WhiteButton from "../../../generic/buttons/WhiteButton.jsx"
import showMore from "../../../image/showMore.svg"
import Footer from "../../../generic/footer/Footer.jsx"
import ShowMore from "../../../generic/filter/showMore/ShowMore.jsx"
import questionMarkBlack from "../../../image/questionMarkBlack.svg"
import Card from "../../../generic/filter/result/card/Card.jsx"
import refresh from "../../../image/refreshIcon.svg"
import { useEffect, useState } from "react"
import { useValue } from "../../../generic/model/value.jsx"
import { $isMenuOpened } from "../../../generic/model/menuModel.js"

const Ds3 = () => {
  const [isToggled, setIsToggled] = useState(false)

  const handleClick = (e) => {
    console.log(e)
    e.preventDefault()
    setIsToggled(true)
  }

  useEffect(() => {
    if (isToggled) {
      const timer = setTimeout(() => {
        setIsToggled(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isToggled])

  const [opened] = useValue($isMenuOpened)

  return (
    <div className={appStyle.page}>
      <Menu />

      <div className={`${appStyle.main} ${opened ? appStyle.active : ""}`}>
        <h1 className={appStyle.pageTitle}>METAPAY and 3DS OTP codes</h1>

        <HeaderItems
          texts={[<p>METAPAY</p>, <p>3DS</p>]}
          links={[METAPAY_ROUTE, DS3_ROUTE]}
        />

        <div className={style.content}>
          <div className={style.header}>
            <div className={style.block_title_refresh}>
              <p className={appStyle.titleText}>3DS CODES</p>
              <div className={style.refresh}>
                <a onClick={handleClick} className={style.refreshLink} href="#">
                  {isToggled ? (
                    <div className={style.spinner_preload}></div>
                  ) : (
                    <img
                      className={style.refreshIcon}
                      src={refresh}
                      alt="refresh"
                    />
                  )}
                </a>
              </div>
            </div>
          </div>

          <Results
            preload={isToggled}
            results={[
              <Result
                content={[
                  <p className={appStyle.hint}>DATE</p>,
                  <p className={appStyle.hint}>CARD NUMBER</p>,
                  <p className={appStyle.hint}>CARD NAME</p>,
                  <p className={appStyle.hint}>MERCHANT</p>,
                  <p className={appStyle.hint}>3DS OTP CODE</p>,
                ]}
              />,
              <Result
                content={[
                  <p className={appStyle.mainText}>11.05.2024 11:45</p>,
                  <div>
                    <Card card={<img alt="Mastercard" src={mastercard} />} />
                  </div>,
                  <div className={style.flex}>
                    <div className={style.accountId}>
                      <p className={`${appStyle.green} ${appStyle.mainText}`}>
                        Card 1
                      </p>
                    </div>
                  </div>,
                  <p className={appStyle.mainText}>Facebook LLC </p>,
                  <div className={style.flex}>
                    <p className={`${appStyle.mainText} ${appStyle.green}`}>
                      436456
                    </p>
                    <img alt="Copy" src={copy} />
                  </div>,
                ]}
              />,
              <Result
                content={[
                  <p className={appStyle.mainText}>09.05.2024 13:58</p>,
                  <div>
                    <Card card={<img alt="Mastercard" src={mastercard} />} />
                  </div>,
                  <div className={style.flex}>
                    <div className={style.accountId}>
                      <p className={`${appStyle.green} ${appStyle.mainText}`}>
                        IVAN 3
                      </p>
                    </div>
                  </div>,
                  <p className={appStyle.mainText}>GOOGLE LLC</p>,
                  <div className={style.flex}>
                    <p className={`${appStyle.mainText} ${appStyle.green}`}>
                      999354
                    </p>
                    <img alt="Copy" src={copy} />
                  </div>,
                ]}
              />,
            ]}
          />

          <div className={appStyle.margin}></div>

          <ShowMore
            text="Show 25"
            img={<img alt="Show more" src={showMore} />}
            subText="6 of 27"
          />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Ds3
