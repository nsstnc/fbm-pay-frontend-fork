import style from "./withdrawAccount.module.css"
import appStyle from "../../../../app.module.css"
import Menu from "../../../../generic/menu/Menu.jsx"
import TextButton from "../../../../generic/buttons/TextButton.jsx"
import back from "../../../../image/arrowBack.svg"
import Button from "../../../../generic/buttons/Button.jsx"
import arrowTo from "../../../../image/arrowTo.svg"
import { ACCOUNTS_FUNDING_ROUTE } from "../../../../routing/consts.js"

const WithdrawAccount = () => {
  return (
    <div className={appStyle.page}>
      <Menu />

      <div className={`${appStyle.main} ${style.main}`}>
        <div className={style.header}>
          <h1 className={appStyle.pageTitle}>Withdraw</h1>
          <TextButton
            text="Go Back"
            img={<img alt="Go back" src={back} />}
            link={ACCOUNTS_FUNDING_ROUTE}
          />
        </div>

        <div className={style.pageContent}>
          <h2 className={appStyle.pageTitle}>CryptoWallet Transaction</h2>

          <div className={style.transaction}>
            <div className={style.form}>
              <p className={appStyle.titleText}>From</p>

              <div>
                <p>Wallet</p>
                <div className={style.input}>
                  <input
                    placeholder="OWS1690 OWS1690, Main Balance"
                    type="text"
                  />
                </div>
              </div>

              <div>
                <p>Payment Amount</p>
                <div className={style.input}>
                  <input placeholder="100.00" type="text" />
                  <p className={appStyle.hint}>$</p>
                </div>
              </div>
            </div>

            <div className={style.img}>
              <img alt="to" src={arrowTo} />
            </div>

            <div className={style.form}>
              <p className={appStyle.titleText}>To</p>

              <div>
                <p>To Type</p>
                <div className={style.input}>
                  <input placeholder="Account" type="text" />
                </div>
              </div>

              <div>
                <p>To Account</p>
                <div className={style.input}>
                  <input
                    placeholder="OWS1690 OWS1690, Main Balance"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={style.button}>
            <Button text="Confirm" link={ACCOUNTS_FUNDING_ROUTE} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithdrawAccount
