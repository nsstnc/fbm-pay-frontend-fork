import style from "./dashboard.module.css"
import Menu from "../../generic/menu/Menu.jsx"
import ContentCard from "../../generic/contentCard/ContentCard.jsx"
import Footer from "../../generic/footer/Footer.jsx"
import arrow from "../../image/arrow.svg"
import appStyle from "../../app.module.css"
import cards from "../../image/cards.svg"
import { Link } from "react-router-dom"
import refreshIcon from "../../image/refreshIcon.svg"
import NoDataMessage from "../../generic/noDataMessage/NoDataMessage.jsx"
import { LogoMenu } from "../../generic/logoMenu/LogoMenu.jsx"
import { useValue } from "../../generic/model/value.jsx"
import { $isMenuOpened } from "../../generic/model/menuModel.js"
import { handleWidth } from "../../generic/handleWidth/handleWidth.js"

import {
  ALL_ACCOUNTS_ROUTE,
  CARDS_ALL_ROUTE,
  PAYMENTS_CARDS_ROUTE,
} from "../../routing/consts.js"
import QuestionMark from "../../generic/popups/questionMark/QuestionMark.jsx"
import questionStyle from "../../generic/popups/questionMark/questionMark.module.css"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AccountsContext } from "../context/AccountsContext"
import { CardsContext } from "../context/CardsContext"

import { format, isToday, isWithinInterval, subDays } from "date-fns"

// const calculateTotals = (transactions) => {
//     const today = new Date();
//     const oneMonthAgo = subDays(today, 30);
//
//     let totalToday = 0;
//     let totalLast30Days = 0;
//
//     transactions.forEach((transaction) => {
//         const transactionDate = new Date(transaction.date);
//
//         // является ли транзакция сегодняшней
//         if (isToday(transactionDate)) {
//             totalToday += transaction.amount;
//         }
//
//         // попадает ли транзакция в последние 30 дней
//         if (isWithinInterval(transactionDate, {start: oneMonthAgo, end: today})) {
//             totalLast30Days += transaction.amount;
//         }
//     });
//
//     return {totalToday, totalLast30Days};
// };

const Dashboard = () => {
  const [isToggled, setIsToggled] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isPreload, setIsPreload] = useState(false)
  const [isMenu, setIsMenu] = useState(false)
  const [payNew, setPayNew] = useState([])
  const { accounts, setAccounts } = useContext(AccountsContext)
  const { cardsList, setCards } = useContext(CardsContext)
  // const [totalToday, setTotalToday] = useState(0);
  // const [totalLast30Days, setTotalLast30Days] = useState(0);
  const [widgets, setWidgets] = useState({
    cardIssuedToDay: { count: 0 },
    cardIssuedToMonth: { count: 0 },
    totalSpendForToday: { count: 0 },
    totalSpendForMonth: { count: 0 },
  })
  const navigate = useNavigate()

  const handleClickDashboard = (e) => {
    e.preventDefault()
    setIsToggled(true)
    setIsPreload(true)
    fetchAccounts()
    fetchCards()
    fetchNews()
  }

  // const handleClickAccounts = (e) => {
  //     e.preventDefault();
  //     setIsLoading(true);
  //     fetchAccounts();
  // };

  const fetchNews = async () => {
    const url = "/api/news"
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
        console.log(result.data)
        setPayNew(result.data)
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
    } // Устанавливаем isToggled в false после завершения всех операций
    setIsToggled(false)
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
        setCards(result.data)
        // console.log(result.data)
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
    } // Устанавливаем isToggled в false после завершения всех операций
    setIsToggled(false)
  }

  const fetchAccounts = async () => {
    const url = "/api/accounts"
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
        // console.log(result);
        setAccounts(result.data)
      } else {
        const errorText = await response.text()
        console.error(
          "Ошибка при получении данных аккаунтов:",
          response.status,
          response.statusText,
          errorText
        )
      }
    } catch (error) {
      console.error("Ошибка при получении данных аккаунтов:", error)
    } finally {
      // Устанавливаем isToggled в false после завершения всех операций
      setIsToggled(false)
    }
  }

  useEffect(() => {
    fetchAccounts()
    fetchCards()
    fetchNews()
  }, [])

  // useEffect(() => {
  //     if (isToggled || isLoading) {
  //         const timer = setTimeout(() => {
  //             if (isToggled) {
  //                 setIsToggled(false);
  //                 setIsPreload(false);
  //             }
  //             setIsLoading(false);
  //         }, 2000);
  //
  //         return () => clearTimeout(timer);
  //     }
  // }, [isToggled ? isToggled : isLoading]);

  useEffect(() => {
    const fetchWidgets = async () => {
      const headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
      }

      try {
        const allWidgets = await Promise.all(
          accounts.map(async (account) => {
            const accountIds = accounts
              .map((account) => `accountIds[]=${account.id}`)
              .join("&")
            const url = `/api/widgets/dashboard?${accountIds}`

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
                "Ошибка при получении виджетов для аккаунта",
                account.id,
                ":",
                response.status,
                response.statusText,
                errorText
              )
              return null
            }
          })
        )

        const validWidgets = allWidgets.filter((w) => w !== null)
        const mergedWidgets = mergeWidgetValues(validWidgets)
        // console.log(mergedWidgets);
        setWidgets(mergedWidgets)
      } catch (error) {
        console.error("Ошибка при получении данных виджетов:", error)
      }
    }

    const mergeWidgetValues = (widgets) => {
      const initial = {
        cardIssuedToDay: { count: 0 },
        cardIssuedToMonth: { count: 0 },
        totalSpendForToday: { count: 0 },
        totalSpendForMonth: { count: 0 },
      }

      return widgets.reduce((acc, widget) => {
        if (
          widget.cardIssuedToDay &&
          typeof widget.cardIssuedToDay.count === "number"
        ) {
          acc.cardIssuedToDay.count += widget.cardIssuedToDay.count
        }
        if (
          widget.cardIssuedToMonth &&
          typeof widget.cardIssuedToMonth.count === "number"
        ) {
          acc.cardIssuedToMonth.count += widget.cardIssuedToMonth.count
        }
        if (
          widget.totalSpendForToday &&
          typeof widget.totalSpendForToday.count === "number"
        ) {
          acc.totalSpendForToday.count += widget.totalSpendForToday.count
        }
        if (
          widget.totalSpendForMonth &&
          typeof widget.totalSpendForMonth.count === "number"
        ) {
          acc.totalSpendForMonth.count += widget.totalSpendForMonth.count
        }
        return acc
      }, initial)
    }

    fetchWidgets()
  }, [accounts])

  // const payNew = []
  // for (let i = 0; i < 10; ++i) {
  //     payNew.push(
  //        {
  //           "id": 1,
  //           "title": "Тестовая новость",
  //           "preview": null,
  //           "content": "<p>Текст</p>",
  //           "author": "Super Admin",
  //           "published_at": null,
  //           "created_at": "2024-09-17T07:03:24.000000Z",
  //           "updated_at": "2024-09-17T07:03:24.000000Z"
  //       }
  //     );
  // }

  // data card
  const cardsIssuedContent1 = (
    <div className={style.contentCard}>
      <div className={style.divCardsContainer}>
        <div className={style.divCards}>
          <img alt="card1" src={cards} />
        </div>
        <div className={style.divText}>
          <p className={appStyle.pageTitle}>{widgets.cardIssuedToDay.count}</p>
          <p className={`${appStyle.smallerText} ${appStyle.hint}`}>Cards</p>
        </div>
      </div>
      <Link to={CARDS_ALL_ROUTE} className={`details`}>
        <p className={appStyle.green}>All Cards</p>
      </Link>
    </div>
  )

  const cardsIssuedContent2 = (
    <div className={style.contentCard}>
      <div className={style.divCardsContainer}>
        <div className={style.divCards}>
          <img alt="card2" src={cards} />
        </div>
        <div className={style.divText}>
          <p className={appStyle.pageTitle}>{widgets.cardIssuedToDay.count}</p>
          <p className={`${appStyle.smallerText} ${appStyle.hint}`}>Cards</p>
        </div>
      </div>
      <Link to={CARDS_ALL_ROUTE} className={`details`}>
        <p className={appStyle.green}>All Cards</p>
      </Link>
    </div>
  )

  //handleMenu

  const [isMenuOpened, setIsMenuOpened] = useValue($isMenuOpened)

  // handleWidth

  let isWidth = handleWidth()

  return (
    <div className={`${appStyle.page}  `}>
      {/* <LogoMenu handleToggle={handleToggle} /> */}
      <Menu />

      <div className={`${appStyle.main} ${isMenuOpened ? style.active : ""}`}>
        <div className={style.block_page_refresh}>
          <div className={style.page}>
            <h1 className={`${appStyle.pageTitle} ${style.pageTitle} `}>
              Dashboard
            </h1>
          </div>
          <div className={style.refresh}>
            <a
              onClick={handleClickDashboard}
              className={style.refreshLink}
              href="#"
            >
              {isToggled ? (
                <div className={style.spinner_preload}></div>
              ) : (
                <img
                  className={style.refreshIcon}
                  src={refreshIcon}
                  alt="refresh"
                />
              )}
            </a>
          </div>
        </div>
        <div
          className={`${style.pageContent} ${isToggled ? style.preload : ""} `}
        >
          <ContentCard
            preload={isToggled}
            title={
              <p className={appStyle.titleText}>
                TOTAL SPEND FOR{" "}
                <span
                  className={`${appStyle.link} ${appStyle.titleText} ${appStyle.green}`}
                >
                  TODAY
                </span>
              </p>
            }
            content={
              <div className={style.contentCard}>
                <p className={appStyle.pageTitle}>
                  {parseFloat(widgets.totalSpendForToday.count).toFixed(2)}
                </p>
                <Link to={PAYMENTS_CARDS_ROUTE} className={`details`}>
                  <p className={appStyle.green}>Details</p>
                </Link>
              </div>
            }
          />
          <ContentCard
            preload={isToggled}
            title={
              <p className={appStyle.titleText}>
                TOTAL SPEND FOR{" "}
                <span
                  className={`${appStyle.link} ${appStyle.titleText} ${appStyle.green}`}
                >
                  LAST 30 DAYS
                </span>
              </p>
            }
            content={
              <div className={style.contentCard}>
                <p className={appStyle.pageTitle}>
                  {parseFloat(widgets.totalSpendForMonth.count).toFixed(2)}
                </p>
                <Link to={PAYMENTS_CARDS_ROUTE} className={`details`}>
                  <p className={appStyle.green}>Details</p>
                </Link>
              </div>
            }
            className={style.div2}
          />
          <ContentCard
            title={
              <div className={style.title}>
                <p className={appStyle.titleText}>TOTAL DECLINE RATE</p>
                <QuestionMark
                  position={questionStyle.top}
                  text="WARNING: Your total decline rate for 30 days mustn’t exceed 10% of all transactions. If exceeded, we will be forced to stop your account"
                />
              </div>
            }
            content={
              <div className={style.contentCard}>
                <div className={`${style.declineRed} ${style.declineContent}`}>
                  <p className={style.declineRedText}>12.5%</p>
                  <p className={`${style.black} ${appStyle.smallerText}`}>
                    in last 7 days
                  </p>
                </div>
                <div
                  className={`${style.declineGreen} ${style.declineContent}`}
                >
                  <p className={style.declineRedText}>5%</p>
                  <p className={`${style.black} ${appStyle.smallerText}`}>
                    in last 30 days
                  </p>
                </div>
              </div>
            }
            className={style.div3}
          />
          {/* width ?
          <div className="cards">
            <ContentCard
              title={
                <div className={style.title}>
                  <p className={appStyle.titleText}>TOTAL DECLINE RATE</p>
                  <QuestionMark
                    position={questionStyle.top}
                    text="WARNING: Your total decline rate for 30 days mustn’t exceed 10% of all transactions. If exceeded, we will be forced to stop your account"
                  />
                </div>
              }
              content={
                <div className={style.contentCard}>
                  <div
                    className={`${style.declineRed} ${style.declineContent}`}
                  >
                    <p className={style.declineRedText}>12.5%</p>
                    <p className={`${style.black} ${appStyle.smallerText}`}>
                      in last 7 days
                    </p>
                  </div>
                  <div
                    className={`${style.declineGreen} ${style.declineContent}`}
                  >
                    <p className={style.declineRedText}>5%</p>
                    <p className={`${style.black} ${appStyle.smallerText}`}>
                      in last 30 days
                    </p>
                  </div>
                </div>
              }
              className={style.div3}
            />
            {/* <div className={style.cards}> */}
          {/* 
            <ContentCard
              title={<p className={appStyle.titleText}>CARDS ISSUED TODAY</p>}
              content={
                <div className={style.contentCard}>
                  <div className={style.divCardsContainer}>
                    <div className={style.divText}>
                      <p className={appStyle.pageTitle}>
                        {widgets.cardIssuedToDay.count}
                      </p>
                      <p className={`${appStyle.smallerText} ${appStyle.hint}`}>
                        Cards
                      </p>
                    </div>

                    <div className={style.divCards}>
                      <img alt="card1" src={cards} />
                    </div>
                  </div>
                  <Link to={CARDS_ALL_ROUTE} className={`details`}>
                    <p className={appStyle.green}>All Cards</p>
                  </Link>
                </div>
              }
              className={style.div4}
            />
          </div>
          :
          <ContentCard
            title={
              <div className={style.title}>
                <p className={appStyle.titleText}>TOTAL DECLINE RATE</p>
                <QuestionMark
                  position={questionStyle.top}
                  text="WARNING: Your total decline rate for 30 days mustn’t exceed 10% of all transactions. If exceeded, we will be forced to stop your account"
                />
              </div>
            }
            content={
              <div className={style.contentCard}>
                <div className={`${style.declineRed} ${style.declineContent}`}>
                  <p className={style.declineRedText}>12.5%</p>
                  <p className={`${style.black} ${appStyle.smallerText}`}>
                    in last 7 days
                  </p>
                </div>
                <div
                  className={`${style.declineGreen} ${style.declineContent}`}
                >
                  <p className={style.declineRedText}>5%</p>
                  <p className={`${style.black} ${appStyle.smallerText}`}>
                    in last 30 days
                  </p>
                </div>
              </div>
            }
            className={style.div3}
          />
          {/* <div className={style.cards}> */}
          {/* <ContentCard
            title={<p className={appStyle.titleText}>CARDS ISSUED TODAY</p>}
            content={
              <div className={style.contentCard}>
                <div className={style.divCardsContainer}>
                  <div className={style.divText}>
                    <p className={appStyle.pageTitle}>
                      {widgets.cardIssuedToDay.count}
                    </p>
                    <p className={`${appStyle.smallerText} ${appStyle.hint}`}>
                      Cards
                    </p>
                  </div>

                  <div className={style.divCards}>
                    <img alt="card1" src={cards} />
                  </div>
                </div>
                <Link to={CARDS_ALL_ROUTE} className={`details`}>
                  <p className={appStyle.green}>All Cards</p>
                </Link>
              </div>
            }
            className={style.div4}
          />   */}

          {isWidth ? (
            <>
              <ContentCard
                title={<p className={appStyle.titleText}>CARDS ISSUED TODAY</p>}
                content={cardsIssuedContent1}
                className={style.div4}
              />
              <ContentCard
                title={<p className={appStyle.titleText}>ALL VALID CARDS</p>}
                content={cardsIssuedContent2}
                className={style.div5}
              />
            </>
          ) : (
            <div className={style.cards}>
              <ContentCard
                title={<p className={appStyle.titleText}>CARDS ISSUED TODAY</p>}
                content={cardsIssuedContent1}
                className={style.div4}
              />
              <ContentCard
                title={
                  <p className={appStyle.titleText}>
                    ALL VALID <br /> CARDS
                  </p>
                }
                content={cardsIssuedContent2}
                className={style.div5}
              />
            </div>
          )}

          {/* </div> */}
          <ContentCard
            title={
              <div className={style.contentCard}>
                <p className={appStyle.titleText}>[FBM] PAY NEWS</p>
                <Link to="/news/">
                  <p className={appStyle.green}>All News</p>
                </Link>
              </div>
            }
            content={
              <div className={style.content}>
                {payNew.length > 0 ?
                    payNew.slice(0, 3).map((title, index) => (
                        <div className={style.payNews__text}>
                          <div className={style.text}>
                            <p className={appStyle.mainText}> {title.title} </p>
                            <p className={`${appStyle.hint} ${appStyle.smallerText}`}>
                              {new Date(title.updated_at).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                            </p>
                          </div>

                          <img alt="Arrow icon" src={arrow}/>
                        </div>
                    ))
                    : <NoDataMessage/>}

              </div>
            }
            className={style.div6}
          />
          <ContentCard
              preload={isLoading}
              title={
                <div className={style.contentCard}>
                  <div className={style.menu_refresh}>
                    <p className={appStyle.titleText}>ACCOUNT’S BALANCES</p>
                  {/*<a*/}
                  {/*    onClick={handleClickAccounts}*/}
                  {/*    className={style.refresh}*/}
                  {/*    href="#"*/}
                  {/*>*/}
                  {/*    {isLoading ? (*/}
                  {/*        <div className={style.spinner_repload}></div>*/}
                  {/*    ) : (*/}
                  {/*        <img className={style.icon_refresh} src={refreshIcon}/>*/}
                  {/*    )}*/}
                  {/*</a>*/}
                </div>

                <Link to={ALL_ACCOUNTS_ROUTE}>
                  <p className={appStyle.green}>Show More</p>
                </Link>
              </div>
            }
            content={
              <div className={style.content}>
                {accounts.length > 0 ? (
                  accounts.map((account, index) => (
                    <div
                      key={index}
                      className={`${appStyle.shadow} ${style.balance}`}
                    >
                      <div className={style.balance__text}>
                        <p
                          className={`${appStyle.smallerText} ${appStyle.hint}`}
                        >
                          # {account.iban}
                        </p>
                        <div className={style.balance__title}>
                          <p className={appStyle.titleText}>{account.name}</p>
                        </div>
                      </div>
                      <div className={style.balance__text}>
                        <p
                          className={`${appStyle.smallerText} ${appStyle.hint}`}
                        >
                          Notification
                        </p>
                        <p className={appStyle.mainText}>
                          {parseFloat(account.balance).toFixed(2) > 1000
                            ? "There is no issue with your acc"
                            : "Please top-up your balance"}
                        </p>
                      </div>
                      <div className={style.balance__text}>
                        <p
                          className={`${appStyle.smallerText} ${appStyle.hint}`}
                        >
                          Available Balance
                        </p>
                        <p className={appStyle.titleText}>
                          {parseFloat(account.balance).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <NoDataMessage />
                )}
              </div>
            }
            className={style.div7}
          />
        </div>
        <div className={isToggled ? style.spinner_block : ""}></div>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
