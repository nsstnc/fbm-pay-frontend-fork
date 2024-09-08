import style from '../style/dashboard.module.css'
import Menu from "../components/menu/Menu.jsx";
import ContentCard from "../components/ContentCard.jsx";
import Footer from "../generic/Footer.jsx";
import questionMark from '../image/questionMark.png'
import card1 from '../image/cards/card1.png'
import card2 from '../image/cards/card2.png'
import card3 from '../image/cards/card3.png'
import arrow from '../image/arrow.png'
import change from '../image/change.png'
import appStyle from '../app.module.css'

const Dashboard = () => {

  const balance = []
  for (let i = 0; i < 4; ++i) {
    balance.push(
      <div className={style.balance}>
        <div className={style.balance__text}>
          <p className={appStyle.hintText}># 2354QW576OSW</p>
          <div className={style.balance__title}>
            <p>Ivan’s Main Balance Account</p>
            <img alt="Change icon" src={change} style={{
              width: "1rem",
              height: "1rem",
            }}/>
          </div>
        </div>

        <div className={style.balance__text}>
          <p className={appStyle.hintText}>Notification</p>
          <p className={appStyle.mainText}>Invoice has been issued for payment of replenishment fee</p>
        </div>

        <div className={style.balance__text}>
          <p className={appStyle.hintText}>Available Balance</p>
          <p>€564.00</p>
        </div>
      </div>
    )
  }

  const payNew = []
  for (let i = 0; i < 5; ++i) {
    payNew.push(
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <div className={style.payNews__text}>
        <div>
          <p className={appStyle.mainText}>Disconnecting BIN 414898</p>
          <p className={appStyle.hintText}>22.04.2024</p>
        </div>

        <img alt="Arrow icon" src={arrow} style={{
          backgroundSize: "contain",
          width: "1.5rem",
          height: "1.5rem",
        }}/>
      </div>
    )
  }

  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Dashboard</h1>

        <div className={style.pageContent}>
          <ContentCard
            title={"TOTAL SPEND FOR"}
            subTitle={
              <span className={`${appStyle.span} ${appStyle.titleText}`}>TODAY</span>
            }
            content={
              <span className={appStyle.pageTitle}>€6728.00</span>
            }
            subContent={
              <span className={appStyle.span}>Details</span>
            }
            className={style.div1}
          />

          <ContentCard
            title={"TOTAL SPEND FOR"}
            subTitle={
              <span className={`${appStyle.span} ${appStyle.titleText}`}>LAST 30 DAYS</span>
            }
            content={
              <span className={appStyle.pageTitle}>€13,284,999.00</span>
            }
            subContent={
              <span className={appStyle.span}>Details</span>
            }
            className={style.div2}
          />

          <ContentCard
            title={"TOTAL DECLINE RATE"}
            subTitle={
              <img src={questionMark} alt="questionMark"/>
            }
            content={
              <div className={style.divContent}>
                <p style={{
                  fontSize: "1.5rem",
                  color: "red",
                }}>12.5%</p>
                <p style={{
                  fontSize: ".8rem",
                  fontWeight: "500",
                }}>in last 7 days</p>
              </div>
            }
            subContent={
              <div className={style.divContent}
                   style={{
                     borderColor: "#21A038"
                   }}
              >
                <p style={{
                  fontSize: "1.5rem",
                  color: "#21A038",
                }}>5%</p>
                <p style={{
                  fontSize: ".8rem",
                  fontWeight: "500",
                }}>in last 30 days</p>
              </div>
            }
            className={style.div3}
          />

          <ContentCard
            title={"CARDS ISSUED TODAY"}
            subTitle={
              <img src={questionMark} alt="questionMark"/>
            }
            content={
              <div className={style.divCardsContainer}>
                <div className={style.divText}>
                  <p className={appStyle.pageTitle}>12</p>
                  <p className={appStyle.hintText}>Cards</p>
                </div>

                <div className={style.divCards}>
                  <img alt="card1" src={card1}
                       style={{
                         marginRight: "-3rem",
                         zIndex: "2"
                       }}
                  />
                  <img alt="card2" src={card2}
                       style={{
                         zIndex: "1"
                       }}
                  />
                  <img alt="card3" src={card3}
                       style={{
                         marginLeft: "-3rem",
                         zIndex: "0"
                       }}
                  />
                </div>
              </div>
            }
            subContent={
              <span className={appStyle.span}>All Cards</span>
            }
            className={style.div4}
          />

          <ContentCard
            title={"ALL VALID CARDS"}
            subTitle={
              <img src={questionMark} alt="questionMark"/>
            }
            content={
              <div className={style.divCardsContainer}>
                <div className={style.divText}>
                  <p className={appStyle.pageTitle}>200</p>
                  <p className={appStyle.hintText}>All valid team cards</p>
                </div>

                <div className={style.divCards}>
                  <img alt="card1" src={card1}
                       style={{
                         marginRight: "-3rem",
                         zIndex: "2"
                       }}
                  />
                  <img alt="card2" src={card2}
                       style={{
                         zIndex: "1"
                       }}
                  />
                  <img alt="card3" src={card3}
                       style={{
                         marginLeft: "-3rem",
                         zIndex: "0"
                       }}
                  />
                </div>
              </div>
            }
            subContent={
              <span className={appStyle.span}>All Cards</span>
            }
            className={style.div5}
          />

          <ContentCard
            title
            subTitle={
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "center",
                width: "100%",
              }}>
                <p className={appStyle.titleText}>[FBM] PAY NEWS</p>
                <p className={appStyle.span}>All News</p>
              </div>

            }
            content={
              <div className={style.payNews}>{payNew}</div>
            }
            className={style.div6}
            position={"space-between"}
          />

          <ContentCard
            title={"ACCOUNT’S BALANCES"}
            subTitle={
              <p>Show More</p>
            }
            content={
              <div className={style.balance__container}>{balance}</div>
            }
            className={style.div7}
            position="space-between"
          />
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default Dashboard