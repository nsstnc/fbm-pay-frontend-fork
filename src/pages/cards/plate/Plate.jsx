import style from "./plate.module.css"
import appStyle from "../../../app.module.css"
import arrow from "../../../image/arrow.svg"
import GreenButton from "../../../generic/buttons/GreenButton.jsx"
import { useState } from "react"
import Issuance from "../issuance/Issuance.jsx"
import { handleWidth } from "../../../generic/handleWidth/handleWidth.js"

// eslint-disable-next-line react/prop-types,no-unused-vars
const Plate = ({ title, img, cardImg, oneCardImg, plate }) => {
  const [issuance, setIssuance] = useState(false)

  const visibleIssuance =
    issuance === true ? (
      <Issuance
        title={`${img.props.alt} ${title}`}
        cardImg={cardImg}
        value={issuance}
        setValue={setIssuance}
        plate={plate}
      />
    ) : (
      <></>
    )

  //handlWidth
  let isWidth = handleWidth()

  //onClick issuanuance true

  const onClick = () => {
    setIssuance(true)
    window.scrollTo(0, 0)

    if (isWidth) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  //handleWidth

  return (
    <div className={style.plate}>
      {visibleIssuance}
      <div className={`${style.titleContainer} ${style.container}`}>
        <div className={style.title}>
          {!isWidth && <div className={style.cardImage}>{cardImg}</div>}

          {isWidth ? (
            <>
              {" "}
              <h1 className={appStyle.pageTitle}>{title}</h1>
              <div className={style.img}>{img}</div>
            </>
          ) : (
            <div className={style.content_bin}>
              {" "}
              <div className={style.img}>{img}</div>
              <h1 className={`${appStyle.pageTitle} ${style.binTitle}`}>
                {title}
              </h1>
            </div>
          )}
        </div>

        <div className={style.text}>
          <p
            className={`${appStyle.hint} ${appStyle.mainText} ${style.textServices}`}
          >
            {plate.type_of_use === "For advertising and services" ? (
              <>Advertising (FB, Google, TikTok, etc.) and services </>
            ) : (
              <>{plate.type_of_use}</>
            )}
            <a
              href="https://docs.google.com/spreadsheets/d/1FnHQFVaNZFQ9vuvCPCJ6BIs7xOZ86BFRnjROf0I2EZM/edit"
              target="_blank"
            >
              <span className={`${appStyle.green} ${appStyle.mainText}`}>
                {" "}
                (all merchants)
              </span>
              <img alt="More" src={arrow} className={style.textImg} />{" "}
            </a>
          </p>
        </div>

        {isWidth && (
          <div>
            <GreenButton text="Issue Card" onClick={onClick} />
          </div>
        )}
      </div>

      <div className={`${style.container} ${style.hints}`}>
        <div className={style.plateGrey}>
          <p className={appStyle.smallerText}>On & Off 3DS</p>
        </div>
        <div className={style.plateGrey}>
          <p className={appStyle.smallerText}>UK</p>
        </div>
        <div className={style.plateGrey}>
          <p className={appStyle.smallerText}>Without any hidden commission</p>
        </div>
      </div>
      {!isWidth && (
        <div className={style.btn_issue}>
          <div style={{ width: "170px" }}>
            <GreenButton text="Issue Card" onClick={onClick} />
          </div>
        </div>
      )}
      {isWidth && <div className={style.cardImage}>{cardImg}</div>}
    </div>
  )
}

export default Plate
