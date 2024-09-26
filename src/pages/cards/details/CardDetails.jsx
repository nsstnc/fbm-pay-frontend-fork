import appStyle from "../../../app.module.css"
import Menu from "../../../generic/menu/Menu.jsx"
import style from "./cardDetails.module.css"
import TextButton from "../../../generic/buttons/TextButton.jsx"
import back from "../../../image/arrowBack.svg"
import mastercard from "../../../image/cards/oneBlackCard.svg"
import changeBlack from "../../../image/changeTotalBlack.svg"
import pause from "../../../image/pause.svg"
import stop from "../../../image/stop.svg"
import add from "../../../image/plusAdd.svg"
import addWhite from "../../../image/plus.svg"
import payments from "../../../image/payments.svg"
import checkOn from "../../../image/checkOn.svg"
import mastercardIcon from "../../../image/cards/icons/masterCard.svg"
import pdf from "../../../image/pdf.svg"
import Status from "../../../generic/status/Status.jsx"
import statusStyle from "../../../generic/status/status.module.css"
import Button from "../../../generic/buttons/Button.jsx"
import {
  CARDS_ALL_ROUTE,
  CARDS_ISSUANCE_ROUTE,
} from "../../../routing/consts.js"
import ResultsDetails from "../../../generic/filter/result/ResultsDetails.jsx"
import ResultDetails from "../../../generic/filter/result/ResultDetails.jsx"
import download from "../../../image/downloadIcon.svg"
import Card from "../../../generic/filter/result/card/Card.jsx"
import ShowMore from "../../../generic/filter/showMore/ShowMore.jsx"
import WhiteButton from "../../../generic/buttons/WhiteButton.jsx"
import Footer from "../../../generic/footer/Footer.jsx"
import refresh from "../../../image/refreshIcon.svg"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const CardDetails = () => {
  const location = useLocation()
  console.log("location", location)
  const { cardData = {} } = location.state || {}
  console.log(cardData)

  const [isToggled, setIsToggled] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setIsToggled(true)
  }

  useEffect(() => {
    console.log("cardData", { cardData })
  }, [cardData])

  useEffect(() => {
    if (isToggled) {
      const timer = setTimeout(() => {
        setIsToggled(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isToggled])

  return (
    <div className={appStyle.page}>
      <Menu />

      <div className={appStyle.main}>
        <div className={style.header}>
          <h1 className={appStyle.pageTitle}>Card Details</h1>
          <TextButton
            text="Go Back"
            img={<img alt="Go back" src={back} />}
            link={CARDS_ALL_ROUTE}
          />
        </div>

        <div className={style.pageContent}>
          <div className={style.headerContainer}>
            <div>
              <div
                className={`card-html`}
                style={{
                  marginLeft: "-20px",
                  background: "url(/src/image/cardV2.svg) no-repeat center",
                }}
              >
                <div
                  className={`flex`}
                  style={{ marginLeft: "1rem", marginTop: "-1rem" }}
                >
                  <h2>5676 </h2> <h2 style={{ marginLeft: "1.4rem" }}>3811 </h2>{" "}
                  <h2 style={{ marginLeft: "1.4rem" }}> 1111 </h2>{" "}
                  <h2 style={{ marginLeft: "1.4rem" }}> 1111</h2>{" "}
                </div>
                <div className={`flex`} style={{ margin: "1.75rem 0 0 1rem" }}>
                  <h3 style={{ fontSize: "0.8rem" }}> EXP </h3>{" "}
                  <h2
                    style={{
                      marginLeft: ".5rem",
                      fontSize: "0.75rem",
                      marginTop: "3px",
                    }}
                  >
                    {cardData.expire_date}
                  </h2>{" "}
                  <h3 style={{ marginLeft: "4.1rem", fontSize: "0.8rem" }}>
                    CVV{" "}
                  </h3>{" "}
                  <h2
                    style={{
                      marginLeft: ".5rem",
                      fontSize: "0.75rem",
                      marginTop: "3px",
                    }}
                  >
                    {" "}
                    {cardData.cvv}{" "}
                  </h2>
                </div>
              </div>
            </div>

            <div className={style.content}>
              <div className={style.contentHeader}>
                <div className={style.contentHeader1}>
                  <div>
                    <h2 className={appStyle.pageTitle}>{cardData.card_name}</h2>
                    <img alt="Change" src={changeBlack} />
                  </div>

                  <div>
                    <Status
                      className={statusStyle.Active}
                      text={cardData.status_name}
                      style={{ height: "2.2rem" }}
                    />

                    <div
                      className={`${statusStyle.Pending} ${style.status}`}
                      style={{ height: "2.2rem", paddingTop: ".42rem" }}
                    >
                      <a href="#" className={`btnDetail`}>
                        <img alt="Pause" src={pause} />{" "}
                      </a>
                    </div>

                    <div
                      className={`${statusStyle.Blocked} ${style.status}`}
                      style={{ height: "2.2rem", paddingTop: ".42rem" }}
                    >
                      <a href="#" className={`btnDetail`}>
                        <img alt="Stop" src={stop} />
                      </a>
                    </div>
                    <p className={`${appStyle.mainText} ${appStyle.hint}`}>
                      #{cardData.number}
                    </p>
                  </div>
                </div>

                <div className={style.contentHeader2}>
                  <div>
                    <h2 className={appStyle.pageTitle}>
                      {cardData?.balance?.value
                        ? parseFloat(cardData.balance.value).toFixed(2)
                        : "0.00"}
                    </h2>
                    <img alt="Add" src={add} />
                  </div>

                  <div>
                    <div className={style.contentHeader3}>
                      <p className={`${appStyle.smallerText} ${appStyle.hint}`}>
                        Account
                      </p>

                      <div>
                        <p className={`${appStyle.mainText}`}>
                          “
                          {cardData?.name ? cardData.name : "No name available"}
                          ”
                        </p>
                        <p
                          className={`${appStyle.mainText}`}
                          style={{
                            color: "#464646",
                          }}
                        >
                          #
                          {cardData?.account?.iban
                            ? String(cardData.account.iban).slice(-6)
                            : "not found iban"}
                        </p>
                      </div>
                    </div>

                    <div>
                      <img alt="Payments" src={payments} />
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.contentMain}>
                <div className={style.column}>
                  <p className={appStyle.titleText}>Billing address</p>
                  <p className={appStyle.mainText}>
                    155 South Fair Oaks Avenue
                    <br />
                    204, Pasadena, CA 91105
                  </p>
                </div>

                <div className={style.divider}></div>

                <div className={style.column}>
                  <p className={appStyle.titleText}>3DS Status</p>

                  <div className={style.flex}>
                    <label>
                      {" "}
                      On <input type="checkbox" className={`switch`} />{" "}
                    </label>
                  </div>
                </div>

                <div className={style.divider}></div>

                <div className={style.column}>
                  <div className={style.flex}>
                    <p className={appStyle.titleText}>Who has access</p>
                    <div className={style.button}>
                      <Button
                        text="Add Users"
                        img={<img alt="Add users" src={addWhite} />}
                      />
                    </div>
                  </div>

                  <select
                    style={{
                      background:
                        "url(http://194.58.123.133:5000/src/image/arrow-down.svg) no-repeat right",
                      borderColor: "#AAAAAA",
                      appearance: "none",
                      paddingRight: "4rem",
                      backgroundPosition: "center right 10px",
                      borderRadius: "6px",
                    }}
                  >
                    <option value="">
                      {cardData?.account?.name
                        ? String(cardData.account.name).split(" ")[0]
                        : "Name not available"}{" "}
                      {cardData?.account?.email
                        ? cardData.account.email
                        : "not found email"}
                    </option>
                  </select>
                </div>

                <div className={style.divider}></div>

                <div className={style.column}>
                  <p className={appStyle.titleText}>Creation Date</p>

                  <p className={appStyle.mainText}>{cardData.created_at}</p>
                </div>

                <div className={style.divider}></div>

                <div className={style.column}>
                  <div className={style.flex}>
                    <p className={appStyle.titleText}>Limits</p>
                    <img alt="Change" src={changeBlack} />
                  </div>

                  <div className={style.flex}>
                    <div className={style.column}>
                      <p className={`${appStyle.hint} ${appStyle.smallerText}`}>
                        1 day
                      </p>
                      <p className={appStyle.mainText}>
                        {cardData?.limits?.daily?.value
                          ? parseFloat(cardData.limits.daily.value).toFixed(2)
                          : "0.00"}
                      </p>
                    </div>

                    <div className={style.column}>
                      <p className={`${appStyle.hint} ${appStyle.smallerText}`}>
                        7 day
                      </p>
                      <p className={appStyle.mainText}>
                        {cardData?.limits?.weekly?.value
                          ? parseFloat(cardData.limits.weekly.value).toFixed(2)
                          : "0.00"}
                      </p>
                    </div>

                    <div className={style.column}>
                      <p className={`${appStyle.hint} ${appStyle.smallerText}`}>
                        30 day
                      </p>
                      <p className={appStyle.mainText}>
                        {cardData?.limits?.monthly?.value
                          ? parseFloat(cardData.limits.monthly.value).toFixed(2)
                          : "0.00"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={appStyle.margin}>
            <div className={style.block_page_refresh}>
              <div className={style.page}>
                <h2 className={`${appStyle.pageTitle} ${style.pageTitle}`}>
                  Card History
                </h2>

                <div className={style.refresh}>
                  <a
                    onClick={handleClick}
                    className={style.refreshLink}
                    href="#"
                  >
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
            <div className={`${style.search} ${appStyle.margin}`}>
              <div className={style.searchItems}>
                <div>
                  <p className={appStyle.mainText}>Period</p>
                  <select
                    className={appStyle.mainText}
                    style={{
                      background:
                        "url(http://194.58.123.133:5000/src/image/arrow-down.svg) no-repeat right",
                      borderColor: "#AAAAAA",
                      appearance: "none",
                      paddingRight: "4rem",
                      backgroundPosition: "center right 10px",
                      borderRadius: "6px",
                    }}
                  >
                    <option>For today</option>
                  </select>
                </div>

                <div>
                  <p className={appStyle.mainText}>Transaction Type:</p>
                  <select
                    className={appStyle.mainText}
                    style={{
                      background:
                        "url(http://194.58.123.133:5000/src/image/arrow-down.svg) no-repeat right",
                      borderColor: "#AAAAAA",
                      appearance: "none",
                      paddingRight: "4rem",
                      backgroundPosition: "center right 10px",
                      borderRadius: "6px",
                    }}
                  >
                    <option>Debit and Credit</option>
                  </select>
                </div>
              </div>

              <div>
                <WhiteButton
                  text="EXCEL"
                  img={<img alt="Download" src={download} />}
                />
              </div>
            </div>

            <ResultsDetails
              preload={isToggled}
              results={[
                <ResultDetails
                  content={[
                    // eslint-disable-next-line react/jsx-key
                    <p className={appStyle.hint} style={{ width: "7rem" }}>
                      DATE
                    </p>,
                    <p className={appStyle.hint} style={{ width: "7rem" }}>
                      TIME
                    </p>,
                    <p className={appStyle.hint} style={{ width: "7rem" }}>
                      STATUS
                    </p>,
                    <p className={appStyle.hint} style={{ width: "8rem" }}>
                      STATUS CHANGE DATE
                    </p>,
                    <p className={appStyle.hint} style={{ width: "10rem" }}>
                      TRANSACTION AMOUNT
                    </p>,
                    <p className={appStyle.hint} style={{ width: "10rem" }}>
                      ACCOUNT AMOUNT
                    </p>,
                    <p className={appStyle.hint}>PAYMENTS DETAILS</p>,
                    <p className={appStyle.hint}>CARD NUMBER</p>,
                    <p
                      className={appStyle.hint}
                      style={{ width: "8rem", textAlign: "center" }}
                    >
                      ACTIONS
                    </p>,
                  ]}
                />,
                <ResultDetails
                  content={[
                    // eslint-disable-next-line react/jsx-key
                    <p className={appStyle.mainText} style={{ width: "7rem" }}>
                      10.04.2024
                    </p>,
                    <p className={appStyle.mainText} style={{ width: "7rem" }}>
                      11:59
                    </p>,
                    <div style={{ width: "7rem" }}>
                      <Status className={statusStyle.Pending} text="Pending" />
                    </div>,
                    <p className={appStyle.mainText} style={{ width: "8rem" }}>
                      10.04.2024
                    </p>,
                    <p className={appStyle.mainText} style={{ width: "10rem" }}>
                      -€25.00
                    </p>,
                    <p className={appStyle.mainText} style={{ width: "10rem" }}>
                      -€25.00
                    </p>,
                    <p className={appStyle.mainText}>FACEBK 52H6HY3M22</p>,
                    <div>
                      <Card
                        card={<img alt="Mastercard" src={mastercardIcon} />}
                      />
                    </div>,
                    <div
                      style={{
                        width: "8rem",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img alt="Pdf" src={pdf} />
                    </div>,
                  ]}
                />,
                <ResultDetails
                  content={[
                    // eslint-disable-next-line react/jsx-key
                    <p className={appStyle.mainText} style={{ width: "7rem" }}>
                      10.04.2024
                    </p>,
                    <p className={appStyle.mainText} style={{ width: "7rem" }}>
                      11:59
                    </p>,
                    <div style={{ width: "7rem" }}>
                      <Status className={statusStyle.Active} text="Active" />
                    </div>,
                    <p className={appStyle.mainText} style={{ width: "8rem" }}>
                      10.04.2024
                    </p>,
                    <p className={appStyle.mainText} style={{ width: "10rem" }}>
                      -€25.00
                    </p>,
                    <p className={appStyle.mainText} style={{ width: "10rem" }}>
                      -€25.00
                    </p>,
                    <p className={appStyle.mainText}>FACEBK 52H6HY3M22</p>,
                    <div>
                      <Card
                        card={<img alt="Mastercard" src={mastercardIcon} />}
                      />
                    </div>,
                    <div
                      style={{
                        width: "8rem",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img alt="Pdf" src={pdf} />
                    </div>,
                  ]}
                />,
              ]}
            />
          </div>

          <div className={appStyle.margin}>
            <ShowMore text="Show 25" subText="6 of 27" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default CardDetails
