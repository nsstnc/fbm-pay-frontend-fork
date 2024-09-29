import style from "./cardsAll.module.css"
import appStyle from "../../../app.module.css"
import Menu from "../../../generic/menu/Menu.jsx"
import HeaderItems from "../../../generic/headerItem/HeaderItems.jsx"
import plusGreen from "../../../image/plusGreen.svg"
import cards from "../../../image/menuIcons/cards.svg"
import {
  CARDS_ALL_ROUTE,
  CARDS_ISSUANCE_ROUTE,
} from "../../../routing/consts.js"
import Footer from "../../../generic/footer/Footer.jsx"
import Filter from "../../../generic/filter/Filter.jsx"
import Input from "../../../generic/input/Input.jsx"
import Result from "../../../generic/filter/result/Result.jsx"
import Button from "../../../generic/buttons/Button.jsx"
import YellowButton from "../../../generic/buttons/YellowButton.jsx"
import RedButton from "../../../generic/buttons/RedButton.jsx"
import Divider from "../../../generic/divider/Divider.jsx"
import questionMark from "../../../image/questionMark.svg"
import mastercard from "../../../image/cards/icons/masterCard.svg"
import unionpay from "../../../image/cards/icons/inionPay.svg"
import Status from "../../../generic/status/Status.jsx"
import statusStyle from "../../../generic/status/status.module.css"
import Card from "../../../generic/filter/result/card/Card.jsx"
import QuestionMark from "../../../generic/popups/questionMark/QuestionMarkRight.jsx"
import questionStyle from "../../../generic/popups/questionMark/questionMarkRight.module.css"
import { useContext, useEffect, useState } from "react"
import { CardsContext } from "../../context/CardsContext"
import NoDataMessage from "../../../generic/noDataMessage/NoDataMessage.jsx"
import { useValue } from "../../../generic/model/value.jsx"
import { $isMenuOpened } from "../../../generic/model/menuModel"
import { handleWidth } from "../../../generic/handleWidth/handleWidth.js"

const  CardsAll = () => {
  const [isToggled, setIsToggled] = useState(true)
  const { cardsList, setCards } = useContext(CardsContext)

  const fetchCardDetails = async (cardId) => {
    const url = `/api/cards/${cardId}`
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
      Accept: "application/json",
    }

    try {
      const response = await fetch(url, {
        method: "GET",
        headers,
      })

      if (response.ok) {
        const result = await response.json()
        return result.data
      } else {
        const errorText = await response.text()
        console.error(
          "Ошибка при получении данных карты:",
          response.status,
          response.statusText,
          errorText
        )
        return null
      }
    } catch (error) {
      console.error("Ошибка при получении данных карты:", error)
      return null
    }
  }

  const fetchCards = async () => {
    const url = "/api/cards"
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
      Accept: "application/json",
    }

    try {
      const response = await fetch(url, {
        method: "GET",
        headers,
      })

      if (response.ok) {
        const result = await response.json()
        const cardsData = result.data

        // Получение деталей для каждой карты
        const cardsWithDetails = await Promise.all(
          cardsData.map(async (card) => {
            const cardDetails = await fetchCardDetails(card.id)
            return {
              ...card,
              details: cardDetails,
            }
          })
        )

        setCards(cardsWithDetails)
        console.log(cardsWithDetails)
      } else {
        const errorText = await response.text()
        console.error(
          "Ошибка при получении данных карт:",
          response.status,
          response.statusText,
          errorText
        )
      }
    } catch (error) {
      console.error("Ошибка при получении данных карт:", error)
    } finally {
      // Устанавливаем isToggled в false после завершения всех операций
      setIsToggled(false)
    }
  }

  const handleClick = (e) => {
    console.log(e)
    e.preventDefault()
    setIsToggled(true)
    fetchCards()
  }

  useEffect(() => {
    fetchCards()
  }, [])

  //hanldeToggle
  const [opened] = useValue($isMenuOpened)

  //handleWidth
  let isWidth = handleWidth()

  return (
    <div className={appStyle.page}>
      <Menu />

      <div className={`${appStyle.main} ${opened ? appStyle.active : ""}`}>
        <h1 className={appStyle.pageTitle}>Сards</h1>

        <HeaderItems
          texts={[
            <>
              <img alt="Card issuance" src={plusGreen} />
              <p>Сard Issuance</p>
            </>,
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.62477 16.5C5.21055 16.5 4.87487 16.1642 4.875 15.75C4.87513 15.3358 5.21102 15 5.62523 15H7.12523C7.53945 15 7.87515 15.3358 7.875 15.75C7.87485 16.1642 7.539 16.5 7.12477 16.5H5.62477Z"
                  fill="#21A038"
                />
                <path
                  d="M8.625 15.75C8.62485 16.1642 8.96055 16.5 9.37477 16.5H10.8748C11.289 16.5 11.6249 16.1642 11.625 15.75C11.6251 15.3358 11.2895 15 10.8752 15H9.37523C8.961 15 8.62515 15.3358 8.625 15.75Z"
                  fill="#21A038"
                />
                <path
                  d="M13.1248 16.5C12.7106 16.5 12.3749 16.1642 12.375 15.75C12.3752 15.3358 12.711 15 13.1252 15H14.6252C15.0394 15 15.3751 15.3358 15.375 15.75C15.3749 16.1642 15.039 16.5 14.6248 16.5H13.1248Z"
                  fill="#21A038"
                />
                <path
                  d="M16.125 15.75C16.1249 16.1642 16.4606 16.5 16.8748 16.5H18.3748C18.789 16.5 19.1249 16.1642 19.125 15.75C19.1251 15.3358 18.7894 15 18.3752 15H16.8752C16.461 15 16.1252 15.3358 16.125 15.75Z"
                  fill="#21A038"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.375 6.75C14.3395 6.75 13.5 7.58948 13.5 8.625V9.375C13.5 10.4105 14.3395 11.25 15.375 11.25H17.625C18.6605 11.25 19.5 10.4105 19.5 9.375V8.625C19.5 7.58948 18.6605 6.75 17.625 6.75H15.375ZM15 8.625C15 8.41793 15.1679 8.25 15.375 8.25H17.625C17.8321 8.25 18 8.41793 18 8.625V9.375C18 9.58208 17.8321 9.75 17.625 9.75H15.375C15.1679 9.75 15 9.58208 15 9.375V8.625Z"
                  fill="#21A038"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.625 3.75C3.34682 3.75 1.5 5.59682 1.5 7.875V16.125C1.5 18.4032 3.34682 20.25 5.625 20.25H18.375C20.6532 20.25 22.5 18.4032 22.5 16.125V7.875C22.5 5.59682 20.6532 3.75 18.375 3.75H5.625ZM3 7.875C3 6.42525 4.17525 5.25 5.625 5.25H18.375C19.8248 5.25 21 6.42525 21 7.875V16.125C21 17.5747 19.8248 18.75 18.375 18.75H5.625C4.17525 18.75 3 17.5747 3 16.125V7.875Z"
                  fill="#21A038"
                />
              </svg>
              <p>All cards</p>
            </>,
          ]}
          links={[CARDS_ISSUANCE_ROUTE, CARDS_ALL_ROUTE]}
        />

        <div>
          <Filter
            onClick={handleClick}
            preload={isToggled}
            title="ALL CARDS"
            inputs={[
              [
                <Input label="IBAN" type="text" placeholder="All" />,
                <Input label="BIN" type="text" placeholder="All BINSs" />,
                <Input label="Status" type="text" placeholder="All" />,
                <Input label="PAN" type="text" placeholder="Write PAN" />,
                <Input
                  label="Create Date"
                  type="text"
                  placeholder="For the whole period"
                />,
              ],
            ]}
            something={[
              <Divider />,
              <div className={style.buttons}>
                {isWidth ? (
                  <>
                    <div>
                      <Button text="Create card" link={"/cards/issuance"} />
                    </div>

                    <div className={style.rightButtons}>
                      <div className={style.rightButton}>
                        <YellowButton text="Set Limits" />
                      </div>
                      <div className={style.rightButton}>
                        <YellowButton text="Hold Card" />
                        <YellowButton text="Unhold Card" />
                      </div>
                      <div className={style.rightButton}>
                        <YellowButton text="Activate 3DS" />
                        <YellowButton text="Deactivate 3DS" />
                      </div>
                      <div className={style.rightButton}>
                        <RedButton text="Close Card" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className={style.rightButtons}>
                    <div className={style.rightButton}>
                      <YellowButton text="Hold Card" />
                      <YellowButton text="Unhold Card" />
                    </div>
                    <div className={style.rightButton}>
                      <YellowButton text="Activate 3DS" />
                      <YellowButton text="Deactivate 3DS" />
                    </div>
                    <div className={style.rightButton}>
                      <YellowButton text="Set Limits" />
                      <RedButton text="Close Card" />
                    </div>
                  </div>
                )}
              </div>,
            ]}
            results={
              cardsList.length > 0
                ? [
                    <Result
                      content={[
                        // eslint-disable-next-line react/jsx-key
                        <div className={style.title} style={{ width: "7rem" }}>
                          <QuestionMark
                            position={questionStyle.rightSide}
                            text="To access the mass customization of cards, you must check the box for the desired cards"
                          />
                        </div>,
                        <p className={appStyle.hint}>CARD NUMBER</p>,
                        <p className={appStyle.hint} style={{ width: "8rem" }}>
                          CARD NAME
                        </p>,
                        <p className={appStyle.hint} style={{ width: "7rem" }}>
                          CARD TYPE
                        </p>,
                        <p className={appStyle.hint} style={{ width: "10rem" }}>
                          CREATION DATE
                        </p>,
                        <p className={appStyle.hint} style={{ width: "8rem" }}>
                          STATUS
                        </p>,
                        <p className={appStyle.hint} style={{ width: "8rem" }}>
                          ACCOUNT #
                        </p>,
                        <p className={appStyle.hint} style={{ width: "8rem" }}>
                          ACC NAME
                        </p>,
                        <p className={appStyle.hint} style={{ width: "8rem" }}>
                          USERS
                        </p>,
                        <div className={style.flex} style={{ width: "8rem" }}>
                          <p className={appStyle.hint}>BALANCE</p>
                          <QuestionMark
                            position={questionStyle.top}
                            text="Balance of the account this card belongs to"
                          />
                        </div>,
                        <p className={appStyle.hint} style={{ width: "8rem" }}>
                          DAILY LIMIT
                        </p>,
                        <p className={appStyle.hint} style={{ width: "8rem" }}>
                          WEEKLY LIMIT
                        </p>,
                        <p className={appStyle.hint} style={{ width: "8rem" }}>
                          MONTHLY LIMIT
                        </p>,
                      ]}
                    />,

                    ...cardsList.map((card, index) => (
                      <Result
                        key={card.id}
                        content={[
                          // eslint-disable-next-line react/jsx-key
                          <div style={{ width: "7rem" }}>
                            <input type="checkbox" />
                          </div>,
                          <div className={style.flex}>
                            <Card
                              card={<img alt="Mastercard" src={mastercard} />}
                              number={card.number}
                              cardData={card}
                            />
                          </div>,
                          <div className={style.flex} style={{ width: "8rem" }}>
                            <div className={style.accountId}>
                              <p
                                className={`${appStyle.green} ${appStyle.mainText}`}
                              >
                                {card.card_name}
                              </p>
                            </div>
                          </div>,
                          <p
                            className={appStyle.mainText}
                            style={{ width: "7rem" }}
                          >
                            {card.card_type_name}
                          </p>,
                          <p
                            className={`${appStyle.green} ${appStyle.mainText}`}
                            style={{ width: "10rem" }}
                          >
                            {card.created_at}{" "}
                          </p>,
                          <div style={{ width: "8rem" }}>
                            <Status
                              className={statusStyle.Active}
                              text={card.status_name}
                            />
                          </div>,
                          <div style={{ width: "8rem" }}>
                            <div className={style.refillMethod}>
                              <p
                                className={`${appStyle.hint} ${appStyle.smallerText}`}
                              >
                                {String(card.account.iban).slice(-6)}
                              </p>
                            </div>
                          </div>,
                          <p
                            className={appStyle.mainText}
                            style={{ width: "8rem" }}
                          >
                            {card.account.name}
                          </p>,
                          <p
                            className={`${appStyle.green} ${appStyle.mainText}`}
                            style={{ width: "8rem" }}
                          >
                            {card.users ? card.users.length : 0}
                          </p>,
                          <p
                            className={appStyle.mainText}
                            style={{ width: "8rem" }}
                          >
                            {parseFloat(card.balance.value).toFixed(2)}
                          </p>,
                          <p
                            className={appStyle.mainText}
                            style={{ width: "8rem" }}
                          >
                            {parseFloat(card.limits.daily.value).toFixed(2)}
                          </p>,
                          <p
                            className={appStyle.mainText}
                            style={{ width: "8rem" }}
                          >
                            {parseFloat(card.limits.weekly.value).toFixed(2)}
                          </p>,
                          <p
                            className={appStyle.mainText}
                            style={{ width: "8rem" }}
                          >
                            {parseFloat(card.limits.monthly.value).toFixed(2)}
                          </p>,
                        ]}
                      />
                    )),
                  ]
                : [<NoDataMessage key={-1} />]
            }
          />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default CardsAll
