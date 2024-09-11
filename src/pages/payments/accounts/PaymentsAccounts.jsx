import style from "./paymentsAccounts.module.css"
import appStyle from "../../../app.module.css"
import Menu from "../../../generic/menu/Menu.jsx"
import HeaderItems from "../../../generic/headerItem/HeaderItems.jsx"
import {
  PAYMENTS_ACCOUNTS_ROUTE,
  PAYMENTS_CARDS_ROUTE,
} from "../../../routing/consts.js"
import Filter from "../../../generic/filter/Filter.jsx"
import Footer from "../../../generic/footer/Footer.jsx"
import Input from "../../../generic/input/Input.jsx"
import Result from "../../../generic/filter/result/Result.jsx"
import Status from "../../../generic/status/Status.jsx"
import statusStyle from "../../../generic/status/status.module.css"
import Card from "../../../generic/filter/result/card/Card.jsx"
import mastercard from "../../../image/cards/icons/masterCard.svg"
import { useValue } from "../../../generic/model/value.jsx"
import { $isMenuOpened } from "../../../generic/model/menuModel.js"

const PaymentAccounts = () => {
  //handleToggle
  const [opened] = useValue($isMenuOpened)

  return (
    <div className={appStyle.page}>
      <Menu />

      <div className={`${appStyle.main} ${opened ? appStyle.active : ""}`}>
        <h1 className={appStyle.pageTitle}>Payments</h1>

        <HeaderItems
          texts={["All payments"]}
          links={[PAYMENTS_CARDS_ROUTE, PAYMENTS_ACCOUNTS_ROUTE]}
        />

        <div className={style.pageContent}>
          <Filter
            title="ACCOUNT’S PAYMENTS"
            inputs={[
              [
                <Input
                  label="Payments of account:"
                  type="text"
                  placeholder="GB16GUAV00993200022188 (OWS1690 OWS1690, Main Balance) 0.06 EUR"
                />,
                <Input label="Period" type="text" placeholder="For today" />,
                <Input
                  label="Transaction Type:"
                  type="text"
                  placeholder="Debit and Credit"
                />,
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
                  <p className={appStyle.hint} style={{ width: "8rem" }}>
                    TIME
                  </p>,
                  <p className={appStyle.hint} style={{ width: "8rem" }}>
                    STATUS
                  </p>,
                  <p className={appStyle.hint} style={{ width: "10rem" }}>
                    STATUS CHANGE DATE
                  </p>,
                  <p className={appStyle.hint} style={{ width: "10rem" }}>
                    TRANSACTION AMOUNT
                  </p>,
                  <p className={appStyle.hint} style={{ width: "10rem" }}>
                    ACCOUNT AMOUNT
                  </p>,
                  <p className={appStyle.hint}>PAYMENT DETAILS</p>,
                  <p className={appStyle.hint}>CARD NUMBER</p>,
                  <p className={appStyle.hint} style={{ paddingLeft: "50px" }}>
                    CARD NAME
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
                    10.04.2024
                  </p>,
                  <p className={appStyle.mainText} style={{ width: "8rem" }}>
                    11:59
                  </p>,
                  <div style={{ width: "8rem" }}>
                    <Status className={statusStyle.Pending} text="Pending" />
                  </div>,
                  <p className={appStyle.mainText} style={{ width: "10rem" }}>
                    10.04.2024
                  </p>,
                  <p className={appStyle.mainText} style={{ width: "10rem" }}>
                    -€25.00
                  </p>,
                  <p className={appStyle.mainText} style={{ width: "10rem" }}>
                    -€22.00
                  </p>,
                  <p className={appStyle.mainText}>FACEBK 52H6HY3M22</p>,
                  <div className={style.flex}>
                    <Card card={<img alt="Mastercard" src={mastercard} />} />
                  </div>,
                  <div className={style.flex} style={{ paddingLeft: "50px" }}>
                    <div className={style.accountId}>
                      <p className={`${appStyle.green} ${appStyle.mainText}`}>
                        Card 1
                      </p>
                    </div>
                  </div>,
                ]}
              />,
              <Result
                content={[
                  // eslint-disable-next-line react/jsx-key
                  <p className={appStyle.mainText} style={{ width: "8rem" }}>
                    69892977
                  </p>,
                  <p className={appStyle.mainText} style={{ width: "8rem" }}>
                    10.04.2024
                  </p>,
                  <p className={appStyle.mainText} style={{ width: "8rem" }}>
                    11:59
                  </p>,
                  <div style={{ width: "8rem" }}>
                    <Status className={statusStyle.Active} text="Active" />
                  </div>,
                  <p className={appStyle.mainText} style={{ width: "10rem" }}>
                    10.04.2024
                  </p>,
                  <p className={appStyle.mainText} style={{ width: "10rem" }}>
                    -€25.00
                  </p>,
                  <p className={appStyle.mainText} style={{ width: "10rem" }}>
                    -€22.00
                  </p>,
                  <p className={appStyle.mainText}>FACEBK 52H6HY3M22</p>,
                  <div className={style.flex}>
                    <Card card={<img alt="Mastercard" src={mastercard} />} />
                  </div>,
                  <div className={style.flex} style={{ paddingLeft: "50px" }}>
                    <div className={style.accountId}>
                      <p className={`${appStyle.green} ${appStyle.mainText}`}>
                        Card 1
                      </p>
                    </div>
                  </div>,
                ]}
              />,
            ]}
          />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default PaymentAccounts
