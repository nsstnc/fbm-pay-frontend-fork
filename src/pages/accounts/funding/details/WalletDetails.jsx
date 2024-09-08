import style from "./walletDetails.module.css";
import appStyle from "../../../../app.module.css";
import Menu from "../../../../generic/menu/Menu.jsx";
import TextButton from "../../../../generic/buttons/TextButton.jsx";
import back from "../../../../image/arrowBack.svg";
import {
  ACCOUNTS_FUNDING_ROUTE,
  ACCOUNTS_WALLET_DETAILS_ROUTE,
  ACCOUNTS_WITHDRAW_ACCOUNT_ROUTE,
  ACCOUNTS_WITHDRAW_CRYPTOWALLET_ROUTE,
} from "../../../../routing/consts.js";
import Divider from "../../../../generic/divider/Divider.jsx";
import copyIcon from "../../../../image/copyIcon.svg";
import Status from "../../../../generic/status/Status.jsx";
import statusStyle from "../../../../generic/status/status.module.css";
import usdtIcon from "../../../../image/usdtIcon.svg";
import OrangeButton from "../../../../generic/buttons/OrangeButton.jsx";
import plus from "../../../../image/plus.svg";
import exchange from "../../../../image/exchange.svg";
import BlackButton from "../../../../generic/buttons/BlackButton.jsx";
import info from "../../../../image/info.svg";
import accountStyle from "../accountFunding.module.css";
import Results from "../../../../generic/filter/result/Results.jsx";
import Result from "../../../../generic/filter/result/Result.jsx";
import Button from "../../../../generic/buttons/Button.jsx";
import plusIcon from "../../../../image/plus.svg";
import ShowMore from "../../../../generic/filter/showMore/ShowMore.jsx";
import Buttons from "../../../../generic/filter/buttonsFilter/buttons.jsx";
import refresh from "../../../../image/refreshIcon.svg";
import { useState, useEffect } from "react";

const WalletDetails = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsToggled(true);
  };

  useEffect(() => {
    if (isToggled) {
      const timer = setTimeout(() => {
        setIsToggled(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isToggled]);

  return (
    <div className={appStyle.page}>
      <Menu />

      <div className={appStyle.main}>
        <div className={style.header}>
          <h1 className={appStyle.pageTitle}>Wallet Details</h1>
          <TextButton
            text="Go Back"
            img={<img alt="Go back" src={back} />}
            link={ACCOUNTS_FUNDING_ROUTE}
          />
        </div>

        <div className={accountStyle.pageContent}>
          <div className={accountStyle.content}>
            <div className={accountStyle.headerContainer}>
              <div className={accountStyle.header}>
                <div className={style.block_page_refresh}>
                  <div className={style.page}>
                    <p className={appStyle.pageTitle}>Tether USDT TRC20</p>
                  </div>

                  <a
                    onClick={handleClick}
                    href="#"
                    className={style.refreshLink}
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
                <div
                  className={`${accountStyle.textContainer} ${
                    isToggled ? style.preload : ""
                  }`}
                >
                  <div className={isToggled ? style.spinner_block : ""}></div>
                  <div className={accountStyle.text}>
                    <p className={appStyle.hint}>
                      AVAILABLE OPERATIONAL BALANCE
                    </p>
                    <p className={appStyle.hint}>WALLET ADDRESS</p>
                    <p className={appStyle.hint}>WALLET STATUS</p>
                  </div>

                  <Divider />

                  <div className={accountStyle.text}>
                    <p>500,056$</p>
                    <div className={accountStyle.wallet}>
                      <p>3525261216524673egdsZ12314</p>
                      <img alt="Copy" src={copyIcon} />
                    </div>
                    <div className={accountStyle.status}>
                      <Status className={statusStyle.Active} text="Active" />
                    </div>
                  </div>
                </div>
              </div>

              <img alt="USDT icon" src={usdtIcon} />
            </div>

            <div className={accountStyle.buttons}>
              <div className={accountStyle.orangeButtons}>
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
            </div>

            <div className={style.results}>
              <div className={style.filter}>
                <label className={style.search}>
                  Period
                  <select>
                    <option value="">For today</option>
                    <option value="Another option">Another option</option>
                  </select>
                </label>
                <Buttons />
              </div>

              <Results
                preload={isToggled}
                results={[
                  <Result
                    content={[
                      <p className={appStyle.hint}>DATE</p>,
                      <p className={appStyle.hint}>TRANSACTION ID</p>,
                      <p className={appStyle.hint}>TRANSACTION TYPE</p>,
                      <p className={appStyle.hint}>TRANSACTION CATEGORY</p>,
                      <p className={appStyle.hint}>AMOUNT</p>,
                      <p className={appStyle.hint}>AMOUNT CONVERTED</p>,
                      <p className={appStyle.hint}>COMMISSION</p>,
                      <p className={appStyle.hint}>TOTAL AMOUNT</p>,
                      <p className={appStyle.hint}>STATUS</p>,
                    ]}
                  />,
                  <Result
                    content={[
                      <p>10.04.2024</p>,
                      <p>353536</p>,
                      <p>Replenishment</p>,
                      <p>Replenishment</p>,
                      <p>-€22.00</p>,
                      <p>-€22.00</p>,
                      <p>-€22.00</p>,
                      <p>-€22.00</p>,
                      <div>
                        <Status
                          className={statusStyle.Pending}
                          text="Pending"
                        />
                      </div>,
                    ]}
                  />,
                  <Result
                    content={[
                      <p>10.04.2024</p>,
                      <p>547457454</p>,
                      <p>Replenishment</p>,
                      <p>Replenishment</p>,
                      <p>-€245.45</p>,
                      <p>-€22.00</p>,
                      <p>-€22.00</p>,
                      <p>-€22.00</p>,
                      <div>
                        <Status className={statusStyle.Active} text="Active" />
                      </div>,
                    ]}
                  />,
                ]}
              />

              <div className={appStyle.margin}>
                <ShowMore text="Show 25" subText="6 of 27" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDetails;
