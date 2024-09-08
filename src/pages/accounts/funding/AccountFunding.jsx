import appStyle from "../../../app.module.css"
import Menu from "../../../generic/menu/Menu.jsx"
import HeaderItems from "../../../generic/headerItem/HeaderItems.jsx"
import style from "./accountFunding.module.css"
import ContentCard from "../../../generic/contentCard/ContentCard.jsx"
import Attention from "../../../generic/attention/Attention.jsx"
import Divider from "../../../generic/divider/Divider.jsx"
import contentCardStyle from "../../../generic/contentCard/contentCard.module.css"
import {
  ACCOUNTS_BALANCE_HISTORY_ROUTE,
  ACCOUNTS_FUNDING_ROUTE,
  ACCOUNTS_WALLET_DETAILS_ROUTE,
  ACCOUNTS_WITHDRAW_ACCOUNT_ROUTE,
  ACCOUNTS_WITHDRAW_CRYPTOWALLET_ROUTE,
  ALL_ACCOUNTS_ROUTE,
} from "../../../routing/consts.js"
import copyIcon from "../../../image/copyIcon.svg"
import Status from "../../../generic/status/Status.jsx"
import statusStyle from "../../../generic/status/status.module.css"
import usdtIcon from "../../../image/usdtIcon.svg"
import OrangeButton from "../../../generic/buttons/OrangeButton.jsx"
import plus from "../../../image/plus.svg"
import exchange from "../../../image/exchange.svg"
import BlackButton from "../../../generic/buttons/BlackButton.jsx"
import info from "../../../image/info.svg"
import Footer from "../../../generic/footer/Footer.jsx"
import ShowMore from "../../../generic/filter/showMore/ShowMore.jsx"
import Button from "../../../generic/buttons/Button.jsx"
import showMore from "../../../image/showMore.svg"
import refresh from "../../../image/refreshIcon.svg"
import { useValue } from "../../../generic/model/value.jsx"
import { $isMenuOpened } from "../../../generic/model/menuModel.js"
import { handleWidth } from "../../../generic/handleWidth/handleWidth.js"
import { useEffect, useState } from "react"

const AccountFunding = () => {
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

  let isWidth = handleWidth()

  const [isMenuOpened, setIsMenuOpened] = useValue($isMenuOpened)

  return (
    <div className={appStyle.page}>
      <Menu />

      <div
        className={`${appStyle.main} ${isMenuOpened ? appStyle.active : ""}`}
      >
        <h1 className={`${appStyle.pageTitle} ${appStyle.title}`}>Accounts</h1>

        <HeaderItems
          texts={["All Accounts", "Account Funding", "Balance History"]}
          links={[
            ALL_ACCOUNTS_ROUTE,
            ACCOUNTS_FUNDING_ROUTE,
            ACCOUNTS_BALANCE_HISTORY_ROUTE,
          ]}
        />

        <div className={style.pageContent}>
          <div className={style.block}>
            <div className={style.card} style={{ height: "12rem" }}>
              <ContentCard
                title={
                  <div
                    className={`${contentCardStyle.cardHeader} ${style.cardHeader}`}
                  >
                    <p className={appStyle.titleText}>
                      REPLENISHMENT FEE{" "}
                      <span
                        className={`${appStyle.titleText} ${appStyle.span}`}
                      >
                        %
                      </span>
                    </p>
                  </div>
                }
                content={
                  <div className={style.cardContents}>
                    <div className={style.cardContent}>
                      <p>4.5%</p>
                      <p className={appStyle.mainText}>from $500</p>
                    </div>
                    <Divider />
                  </div>
                }
              />
            </div>

            <div className={style.attention}>
              <Attention />
            </div>
          </div>

          <div className={style.content}>
            <div className={style.headerContainer}>
              <div className={style.header}>
                <div className={style.block_page_refresh}>
                  <div className={style.page}>
                    <p className={`${appStyle.pageTitle} ${style.pageTitle}`}>
                      Tether USDT TRC20
                    </p>
                    {!isWidth && (
                      <img
                        className={style.icon_usdt}
                        alt="USDT icon"
                        src={usdtIcon}
                      />
                    )}
                  </div>
                  <div className={style.refresh}>
                    <a
                      href="#"
                      className={style.refreshLink}
                      onClick={handleClick}
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

                <div
                  className={`${style.textContainer} ${
                    isToggled ? style.preload : ""
                  }`}
                >
                  <div
                    className={`${isToggled ? style.spinner_block : ""}`}
                  ></div>
                  {isWidth ? (
                    <>
                      <div className={style.text}>
                        <p className={appStyle.hint}>
                          AVAILABLE OPERATIONAL BALANCE
                        </p>
                        <p className={appStyle.hint}>WALLET ADDRES</p>
                        <p className={appStyle.hint}>WALLET STATUS</p>
                      </div>

                      <Divider />

                      <div className={style.text}>
                        <p>500,056$</p>
                        <div className={style.wallet}>
                          <p>3525261216524673egdsZ12314</p>
                          <img alt="Copy" src={copyIcon} />
                        </div>
                        <div className={style.status}>
                          <Status
                            className={statusStyle.Active}
                            text="Active"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={style.text}>
                        <p className={appStyle.hint}>
                          AVAILABLE OPERATIONAL BALANCE
                        </p>
                        <p>500,056$</p>
                        <div className={style.wallet}>
                          <div>
                            <p className={appStyle.hint}>WALLET ADDRES</p>
                          </div>

                          <div className={style.wallet_data}>
                            <p>3525261216524673egdsZ12314</p>
                            <img alt="Copy" src={copyIcon} />
                          </div>
                        </div>
                        <div className={style.status}>
                          <p className={appStyle.hint}>WALLET STATUS</p>
                          <Status
                            className={statusStyle.Active}
                            text="Active"
                          />
                        </div>
                      </div>

                      <Divider />

                      <div className={style.text}></div>
                    </>
                  )}
                </div>
              </div>
              {isWidth && <img alt="USDT icon" src={usdtIcon} />}
            </div>

            <div className={style.buttons}>
              {isWidth ? (
                <>
                  <div className={style.orangeButtons}>
                    <OrangeButton
                      text="Withdraw"
                      img={<img alt="Add" src={plus} />}
                      link={ACCOUNTS_WITHDRAW_ACCOUNT_ROUTE}
                    />
                    <OrangeButton
                      text="Exchange Cryptocurrency"
                      img={<img alt="Add" src={exchange} />}
                      link={ACCOUNTS_WITHDRAW_CRYPTOWALLET_ROUTE}
                    />
                  </div>

                  <div className={style.button}>
                    <BlackButton
                      text="Details"
                      img={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13.0137 7.84058C13.0137 8.4619 12.51 8.96558 11.8887 8.96558C11.2674 8.96558 10.7637 8.4619 10.7637 7.84058C10.7637 7.21926 11.2674 6.71558 11.8887 6.71558C12.51 6.71558 13.0137 7.21926 13.0137 7.84058Z"
                            fill="white"
                          />
                          <path
                            d="M10.7314 10.5C10.3172 10.5 9.98145 10.8358 9.98145 11.25C9.98145 11.6642 10.3172 12 10.7314 12H11.4814V16H10.2314C9.81724 16 9.48145 16.3358 9.48145 16.75C9.48145 17.1642 9.81724 17.5 10.2314 17.5H14.2314C14.6456 17.5 14.9814 17.1642 14.9814 16.75C14.9814 16.3358 14.6456 16 14.2314 16H12.9814V11.75C12.9814 11.0596 12.4218 10.5 11.7314 10.5H10.7314Z"
                            fill="white"
                          />
                        </svg>
                      }
                      link={ACCOUNTS_WALLET_DETAILS_ROUTE}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className={style.orangeButtons}>
                    <BlackButton
                      text="Details"
                      img={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13.0137 7.84058C13.0137 8.4619 12.51 8.96558 11.8887 8.96558C11.2674 8.96558 10.7637 8.4619 10.7637 7.84058C10.7637 7.21926 11.2674 6.71558 11.8887 6.71558C12.51 6.71558 13.0137 7.21926 13.0137 7.84058Z"
                            fill="white"
                          />
                          <path
                            d="M10.7314 10.5C10.3172 10.5 9.98145 10.8358 9.98145 11.25C9.98145 11.6642 10.3172 12 10.7314 12H11.4814V16H10.2314C9.81724 16 9.48145 16.3358 9.48145 16.75C9.48145 17.1642 9.81724 17.5 10.2314 17.5H14.2314C14.6456 17.5 14.9814 17.1642 14.9814 16.75C14.9814 16.3358 14.6456 16 14.2314 16H12.9814V11.75C12.9814 11.0596 12.4218 10.5 11.7314 10.5H10.7314Z"
                            fill="white"
                          />
                        </svg>
                      }
                      link={ACCOUNTS_WALLET_DETAILS_ROUTE}
                    />
                    <OrangeButton
                      text="Withdraw"
                      img={<img alt="Add" src={plus} />}
                      link={ACCOUNTS_WITHDRAW_ACCOUNT_ROUTE}
                    />
                  </div>

                  <div className={style.button}>
                    <OrangeButton
                      text="Exchange Cryptocurrency"
                      img={<img alt="Add" src={exchange} />}
                      link={ACCOUNTS_WITHDRAW_CRYPTOWALLET_ROUTE}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={style.buttonsAfterForm}>
            <div className={style.buttonAddNewWallet}>
              <Button text="Add New Wallet" />
            </div>
            <ShowMore
              text="Show 25"
              img={<img alt="Show more" src={showMore} />}
            />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default AccountFunding
