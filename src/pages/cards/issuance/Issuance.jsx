import style from "./issuance.module.css"
import appStyle from "../../../app.module.css"
import close from "../../../image/close.svg"
import Divider from "../../../generic/divider/Divider.jsx"
import arrow from "../../../image/arrow.svg"
import Input from "../../../generic/input/Input.jsx"
import InputCheckbox from "../../userManagement/input/Input.jsx"
import Button from "../../../generic/buttons/Button.jsx"
import plateStyle from "../plate/plate.module.css"
import { CARDS_DETAILS_ROUTE } from "../../../routing/consts.js"
import QuestionMark from "../../../generic/popups/questionMark/QuestionMark.jsx"
import QuestionMarkTable from "../../../generic/popups/questionMark/QuestionMarkTable.jsx"
import questionStyle from "../../../generic/popups/questionMark/questionMark.module.css"
import React, { useState, useEffect } from "react"

// eslint-disable-next-line react/prop-types
const Issuance = ({
  title,
  cardImg,
  plate,
  value = "",
  setValue = () => {},
}) => {
  const [limitValue, setLimitValue] = useState(0) // Состояние для значения поля Input
  const currency_sign =
    plate.currency === "USD" ? "$" : plate.currency === "EURO" ? "€" : ""
  const [isChecked, setIsChecked] = useState(false)
  const [isMultipleCardsChecked, setIsMultipleCardsChecked] = useState(false)
  const [cardsAmount, setCardsAmount] = useState("1")
  const [totalCost, setTotalCost] = useState(plate.from_1_to_5_cost)

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked)
  }

  const onClick = () => {
    setValue(false)
    document.body.style.overflow = "auto"
  }
  const handleMoneyClick = (amount) => {
    setLimitValue(amount) // Обновление значения поля Input
  }

  useEffect(() => {
    let numberOfCards = parseInt(cardsAmount) || 1
    // console.log(numberOfCards)
    if (1 <= numberOfCards <= 5) {
      setTotalCost(numberOfCards * plate.from_1_to_5_cost)
    } else if (6 <= numberOfCards <= 9) {
      setTotalCost(numberOfCards * plate.from_6_to_9_cost)
    } else if (10 <= numberOfCards) {
      setTotalCost(numberOfCards * plate.from_10_cost)
    }
  }, [cardsAmount])

  useEffect(() => {
    if (!isMultipleCardsChecked) {
      setCardsAmount(1)
    }
  }, [isMultipleCardsChecked])

  const limit = { marginRight: ".3rem!important", lineHeight: "2 !important" }

  return (
    <div className={style.background}>
      <div
        className={style.issuance}
        style={{ paddingTop: "1.5rem", top: "55vh", left: "64vw" }}
      >
        <div className={style.header}>
          <h1 className={appStyle.pageTitle} style={{ marginLeft: "-.8rem" }}>
            {title}
          </h1>
          <img
            alt="Close"
            src={close}
            style={{ paddingRight: "15px", cursor: "pointer" }}
            onClick={onClick}
            value={value}
          />
        </div>

        <div className={style.container} style={{ marginTop: "1rem" }}>
          <div className={style.card} style={{ marginLeft: "1.5rem" }}>
            {/*<div className={`card-html card-dark`} style={{marginLeft:'-.5rem'}}>*/}
            {/*    <div className={`flex`} style={{marginTop:'-1.5rem'}}><h2 >5676 38 • • </h2> <h2 style={{ marginLeft: "1rem" }}> • • • • </h2> <h2 style={{ marginLeft: "1rem" }}> • • • •</h2> </div>*/}
            {/*</div>*/}
            {cardImg}

            <div className={style.text}>
              <div className={style.field}>
                <p className={appStyle.titleText}>Currency</p>
                <p className={appStyle.mainText}>{plate.currency}</p>
              </div>
              <div className={style.divider}>
                <Divider />
              </div>

              <div className={style.field}>
                <p className={appStyle.titleText}>
                  All {plate.currency} payments
                </p>
                <p className={appStyle.mainText}>
                  {plate.all_currency_payments}
                </p>
              </div>
              <div className={style.divider}>
                <Divider />
              </div>

              <div className={style.field}>
                <p className={appStyle.titleText}>
                  Non-{plate.currency} payments
                </p>
                <p className={appStyle.mainText}>
                  {plate.non_currency_payments}
                </p>
              </div>
              <div className={style.divider}>
                <Divider />
              </div>

              <div className={style.field}>
                <p className={appStyle.titleText}>Declined payments</p>
                <p className={appStyle.mainText}>
                  {currency_sign}
                  {plate.declined_payments}
                </p>
              </div>
              <div className={style.divider}>
                <Divider />
              </div>

              <a
                href="https://docs.google.com/spreadsheets/d/1FnHQFVaNZFQ9vuvCPCJ6BIs7xOZ86BFRnjROf0I2EZM/edit?usp=sharing"
                target="_blank"
              >
                <div className={style.field}>
                  <p className={`${appStyle.titleText} ${appStyle.green}`}>
                    Available merchants
                  </p>

                  <img alt="More" src={arrow} className={style.img} />
                </div>{" "}
              </a>
            </div>
          </div>

          <div
            className={style.fields}
            style={{ marginLeft: "-1rem", marginRight: "1rem" }}
          >
            <div className={style.inputs}>
              <Input label="Card Name*" placeholder="Card 1" type="text" />
              <Input label="BIN*" placeholder="123456" type="text" />
              <Input label="Account*" placeholder="123456" type="text" />
              <label>
                <div className={`flex`} style={{ gap: "0.3rem 0 0.3rem" }}>
                  <p
                    style={{ lineHeight: "2!important" }}
                    className={style.limits}
                  >
                    Limit
                  </p>{" "}
                  <QuestionMark
                    position={questionStyle.right}
                    style={{ paddingLeft: "1rem" }}
                    text="If you set a limit, for example, 1000€, then you will not spend more than 1000€ with this card totally."
                  />
                </div>
                <Input
                  placeholder={`${currency_sign}100`}
                  type="text"
                  style={{ marginTop: ".5rem" }}
                  value={limitValue} // Установка значения поля Input
                  onChange={(e) => setLimitValue(e.target.value)} // Обновление состояния при вводе текста
                />
              </label>
            </div>

            <div className={style.moneyContainer}>
              {[50, 100, 150, 200, 250].map((amount) => (
                <div
                  key={amount}
                  className={style.money}
                  onClick={() => handleMoneyClick(amount)} // Обработчик клика
                >
                  <p>
                    {currency_sign}
                    {amount}
                  </p>
                </div>
              ))}
            </div>

            <div className={style.inputs2}>
              <label className={`undefined _label_1d14k_1 _titleText_jgjs7_59`}>
                3DS CONFIRMATION
                <input type="checkbox" className={`switch`} />
              </label>

              <label className={`undefined _label_1d14k_1 _titleText_jgjs7_59`}>
                Issue multiple card
                <input
                  type="checkbox"
                  className={`switch`}
                  onChange={(e) => setIsMultipleCardsChecked(e.target.checked)}
                />
              </label>
            </div>

            <div className={`${style.password}`}>
              <div
                className={`${style.password}`}
                style={{ marginTop: "1rem" }}
              >
                <input
                  className={`password-input`}
                  type="text"
                  placeholder={cardsAmount}
                  disabled={!isMultipleCardsChecked} // Отключить input, если чекбокс не отмечен
                  value={cardsAmount}
                  onChange={(e) => setCardsAmount(e.target.value)}
                />
                <div className={`password-control`}>
                  <div className={`flex`}>
                    <span
                      className={`${appStyle.green}`}
                      style={{ margin: ".16rem .5rem 0 0" }}
                    >
                      Prices
                    </span>
                    <QuestionMarkTable
                      position={questionStyle.right}
                      text={`<div className={style.cardContents}>
                                          <div className={style.cardContent}>
                                            <p>${plate.from_1_to_5_cost}${currency_sign}</p>
                                            <p className={appStyle.mainText}>from 1 to 5 cards</p>
                                          </div>
                                          <Divider/>
                                          <div className={style.cardContent}>
                                            <p>${plate.from_6_to_9_cost}${currency_sign}</p>
                                            <p className={appStyle.mainText}>from 6 to 9 cards</p>
                                          </div>
                                          <Divider/>
                                          <div className={style.cardContent}>
                                            <p>${plate.from_10_cost}${currency_sign}</p>
                                            <p className={appStyle.mainText}>from 10 cards</p>
                                          </div>
                                        </div>`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={style.checkbox}>
              <input type="checkbox" onChange={handleCheckboxChange} />
              <p className={`${appStyle.mainText} ${appStyle.hint}`}>
                I agree to the terms and conditions of this type of card
              </p>
            </div>

            <div className={style.issue}>
              <p className={appStyle.pageTitle}>
                {totalCost}
                {currency_sign}
              </p>
              <p className={`${appStyle.smallerText} ${appStyle.hint}`}>
                Total Cost
              </p>
              <Button
                text="Issue Now"
                link={isChecked ? CARDS_DETAILS_ROUTE : ""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Issuance
