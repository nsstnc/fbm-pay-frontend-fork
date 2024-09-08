import appStyle from "../../../app.module.css"
import Menu from "../../../generic/menu/Menu.jsx"
import HeaderItems from "../../../generic/headerItem/HeaderItems.jsx"
import {
  ACCOUNTS_BALANCE_HISTORY_ROUTE,
  ACCOUNTS_FUNDING_ROUTE,
  ALL_ACCOUNTS_ROUTE,
} from "../../../routing/consts.js"
import accountStyle from "../all/accountsAll.module.css"
import ContentCard from "../../../generic/contentCard/ContentCard.jsx"
import contentCardStyle from "../../../generic/contentCard/contentCard.module.css"
import Filter from "../../../generic/filter/Filter.jsx"
import Input from "../../../generic/input/Input.jsx"
import Result from "../../../generic/filter/result/Result.jsx"
import Button from "../../../generic/buttons/Button.jsx"
import plusIcon from "../../../image/plus.svg"
import changeBlackIcon from "../../../image/changeBlack.svg"
import arrowDownIcon from "../../../image/arrowDown.svg"
import plusAddIcon from "../../../image/plusAdd.svg"
import Footer from "../../../generic/footer/Footer.jsx"
import style from "./accountBalanceHistory.module.css"
import { $isMenuOpened } from "../../../generic/model/menuModel.js"
import { useValue } from "../../../generic/model/value.jsx"
import { useEffect, useState } from "react"

const AccountBalanceHistory = () => {
  const [isLoading, setIsLoading] = useState(false)
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

  const [isMenuOpened, setIsMenuOpened] = useValue($isMenuOpened)

  return (
    <div className={`${appStyle.page} `}>
      <Menu />

      <div className={`${appStyle.main} ${isMenuOpened ? style.active : ""}`}>
        <h1 className={appStyle.pageTitle}>Accounts</h1>

        <HeaderItems
          texts={["All Accounts", "Account Funding", "Balance History"]}
          links={[
            ALL_ACCOUNTS_ROUTE,
            ACCOUNTS_FUNDING_ROUTE,
            ACCOUNTS_BALANCE_HISTORY_ROUTE,
          ]}
        />

        <div className={accountStyle.pageContent}>
          <div className={accountStyle.cards}>
            <div className={accountStyle.card}>
              <ContentCard
                title={
                  <div className={contentCardStyle.cardHeader}>
                    <p className={appStyle.titleText}>
                      <span
                        className={`${appStyle.titleText} ${appStyle.green}`}
                      >
                        TOTAL
                      </span>{" "}
                      DEPOSIT SUM
                    </p>
                  </div>
                }
                content={<p className={appStyle.pageTitle}>€6728.00</p>}
              />
            </div>
            <div className={accountStyle.card}>
              <ContentCard
                title={
                  <div className={contentCardStyle.cardHeader}>
                    <p className={appStyle.titleText}>
                      <span
                        className={`${appStyle.titleText} ${appStyle.green}`}
                      >
                        TOTAL
                      </span>{" "}
                      AMOUNT CREDITED
                    </p>
                  </div>
                }
                content={<p className={appStyle.pageTitle}>€6264.86</p>}
              />
            </div>
            <div className={accountStyle.card}>
              <ContentCard
                title={
                  <div className={contentCardStyle.cardHeader}>
                    <p className={appStyle.titleText}>
                      TOTAL{" "}
                      <span
                        className={`${appStyle.titleText} ${appStyle.green}`}
                      >
                        FEE AMOUNT
                      </span>
                    </p>
                  </div>
                }
                content={<p className={appStyle.pageTitle}>€728</p>}
              />
            </div>
            <div className={accountStyle.card}>
              <ContentCard
                title={
                  <div className={contentCardStyle.cardHeader}>
                    <p className={appStyle.titleText}>
                      <span
                        className={`${appStyle.titleText} ${appStyle.green}`}
                      >
                        NUMBER
                      </span>{" "}
                      OF DEPOSITS
                    </p>
                  </div>
                }
                content={<p className={appStyle.pageTitle}>2</p>}
              />
            </div>
          </div>

          <div>
            <Filter
              preload={isToggled}
              onClick={handleClick}
              title="BALANCE HISTORY"
              inputs={[
                [
                  <Input label="Date" type="date" placeholder="01.01.2024" />,
                  <Input label="Account" type="text" placeholder="All" />,
                  <Input label="Type" type="text" placeholder="All" />,
                  <Input label="ID SOURCE" type="text" placeholder="32425" />,
                ],
              ]}
              results={[
                <Result
                  content={[
                    // eslint-disable-next-line react/jsx-key
                    <p className={appStyle.hint} style={{ width: "8rem" }}>
                      DOCUMENT
                    </p>,
                    <p className={appStyle.hint} style={{ width: "8rem" }}>
                      DATE
                    </p>,
                    <p className={appStyle.hint} style={{ width: "14rem" }}>
                      ACCOUNT
                    </p>,
                    <p className={appStyle.hint} style={{ width: "8rem" }}>
                      AMOUNT
                    </p>,
                    <p className={appStyle.hint} style={{ width: "8rem" }}>
                      BALANCE
                    </p>,
                    <p className={appStyle.hint} style={{ width: "10rem" }}>
                      TYPE
                    </p>,
                    <p className={appStyle.hint} style={{ width: "9rem" }}>
                      REFILL METHOD
                    </p>,
                    <p className={appStyle.hint} style={{ width: "8rem" }}>
                      ID SOURCE
                    </p>,
                  ]}
                />,
                <Result
                  content={[
                    // eslint-disable-next-line react/jsx-key

                    <p className={appStyle.mainText} style={{ width: "8rem" }}>
                      69892977
                    </p>,
                    <p className={appStyle.mainText} style={{ width: "8rem" }}>
                      10.04.2024 11:59
                    </p>,
                    <div className={style.flex} style={{ width: "14rem" }}>
                      <div className={style.accountId}>
                        <p className={appStyle.smallerText}>#016783</p>
                      </div>
                      <p className={appStyle.mainText}>345123shrek@gmail.com</p>
                    </div>,

                    <p className={appStyle.mainText} style={{ width: "8rem" }}>
                      -€22.00
                    </p>,

                    <p className={appStyle.mainText} style={{ width: "8rem" }}>
                      €528.00
                    </p>,

                    <p className={appStyle.mainText} style={{ width: "10rem" }}>
                      Replenishment fee
                    </p>,

                    <div style={{ width: "9rem" }}>
                      <div className={style.refillMethod}>
                        <p className={appStyle.mainText}>WIRE</p>
                      </div>
                    </div>,

                    <p className={`${appStyle.mainText} ${appStyle.green}`}>
                      147376
                    </p>,
                  ]}
                />,
                <Result
                  content={[
                    // eslint-disable-next-line react/jsx-key

                    <p className={appStyle.mainText} style={{ width: "8rem" }}>
                      69892977
                    </p>,
                    <p className={appStyle.mainText} style={{ width: "8rem" }}>
                      10.04.2024 11:59
                    </p>,
                    <div className={style.flex} style={{ width: "14rem" }}>
                      <div className={style.accountId}>
                        <p className={appStyle.smallerText}>#016783</p>
                      </div>

                      <p className={appStyle.mainText}>345123shrek@gmail.com</p>
                    </div>,
                    <p
                      className={`${appStyle.mainText} ${appStyle.green}`}
                      style={{ width: "8rem" }}
                    >
                      +€22.00
                    </p>,
                    <p className={appStyle.mainText} style={{ width: "8rem" }}>
                      €528.00
                    </p>,
                    <p className={appStyle.mainText} style={{ width: "10rem" }}>
                      Replenishment fee
                    </p>,
                    <div style={{ width: "9rem" }}>
                      <div className={style.refillMethod}>
                        <p className={appStyle.mainText}>CRYPTO</p>
                      </div>
                    </div>,
                    <p
                      className={`${appStyle.mainText} ${appStyle.green}`}
                      style={{ width: "8rem" }}
                    >
                      147376
                    </p>,
                  ]}
                />,
              ]}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default AccountBalanceHistory
