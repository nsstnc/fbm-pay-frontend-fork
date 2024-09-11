import style from "./limits.module.css"
import appStyle from "../../../app.module.css"
import Menu from "../../../generic/menu/Menu.jsx"
import HeaderItems from "../../../generic/headerItem/HeaderItems.jsx"
import {
  PROFILE_LIMITS_ROUTE,
  PROFILE_SETTINGS_ROUTE,
} from "../../../routing/consts.js"
import Footer from "../../../generic/footer/Footer.jsx"
import Field from "../settings/field/Field.jsx"
import ContentCard from "../../../generic/contentCard/ContentCard.jsx"
import Divider from "../../../generic/divider/Divider.jsx"
import Attention from "../../../generic/attention/Attention.jsx"

const Limits = () => {
  return (
    <div className={appStyle.page}>
      <Menu />
      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Profile</h1>

        <HeaderItems
          texts={["Settings", "Limits and conditions"]}
          links={[PROFILE_SETTINGS_ROUTE, PROFILE_LIMITS_ROUTE]}
        />

        <div className={style.pageContent}>
          <Field
            title="Cards per day"
            value={
              <p className={appStyle.mainText} style={{ paddingTop: "none" }}>
                Unlimited
              </p>
            }
          />

          <Field
            title="Total active cards"
            value={<p className={appStyle.mainText}>Unlimited</p>}
          />

          <Field
            title="Limit on card"
            value={<p className={appStyle.mainText}>Unlimited</p>}
          />

          <Field
            title="Limit per transaction, €"
            value={<p className={appStyle.mainText}>Unlimited</p>}
          />
        </div>

        <div className={style.cards}>
          <div className={style.card} style={{ height: `10rem!important` }}>
            <ContentCard
              title={
                <p className={appStyle.titleText}>
                  REPLENISHMENT FEE{" "}
                  <span className={`${appStyle.titleText} ${appStyle.green}`}>
                    %
                  </span>
                </p>
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
          <div className={style.card} style={{ height: "12.7rem!important;" }}>
            <ContentCard
              title={
                <p className={appStyle.titleText}>
                  CARDS{" "}
                  <span className={`${appStyle.titleText} ${appStyle.green}`}>
                    PRICE
                  </span>
                </p>
              }
              content={
                <div className={style.cardContents}>
                  <div className={style.cardContent}>
                    <p>4.5€</p>
                    <p className={appStyle.mainText}>from 1 to 5 cards</p>
                  </div>
                  <Divider />
                  <div className={style.cardContent}>
                    <p>3.5€</p>
                    <p className={appStyle.mainText}>from 6 to 9 cards</p>
                  </div>
                  <Divider />
                  <div className={style.cardContent}>
                    <p>2.5€</p>
                    <p className={appStyle.mainText}>from 10 cards</p>
                  </div>
                </div>
              }
            />
          </div>

          <div className={style.card}>
            <ContentCard
              title={
                <p className={appStyle.titleText}>
                  <span className={`${appStyle.titleText} ${appStyle.green}`}>
                    WITHDRAWAL
                  </span>{" "}
                  CONDITIONS
                </p>
              }
              content={
                <div className={style.text}>
                  <div className={style.flex}>
                    <p className={appStyle.titleText}>4.5%</p>
                    <p className={`${appStyle.hint} ${appStyle.smallerText}`}>
                      for
                      <br />
                      withdrawal
                    </p>
                  </div>
                  <p className={appStyle.smallerText}>
                    Withdrawal takes place in 2-3 business days.
                  </p>
                </div>
              }
            />
          </div>

          <div className={style.card}>
            <ContentCard
              title={
                <p className={appStyle.titleText}>
                  ALLOWABLE{" "}
                  <span className={`${appStyle.titleText} ${appStyle.green}`}>
                    DECLINE RATE
                  </span>
                </p>
              }
              content={
                <div className={style.text}>
                  <div className={style.flex}>
                    <p className={appStyle.titleText}>10%</p>
                    <p className={`${appStyle.hint} ${appStyle.smallerText}`}>
                      If exceeded, we will give
                      <br />
                      you time to fix it.
                    </p>
                  </div>
                  <p className={appStyle.smallerText}>
                    If decline rate won’t change - we will have to freeze your
                    account and{" "}
                    <span className={`${appStyle.smallerText} ${style.red}`}>
                      forcibly withdraw all funds back to your wallet.
                    </span>
                  </p>
                </div>
              }
            />
          </div>
        </div>

        <div className={style.attention}>
          <Attention />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Limits
