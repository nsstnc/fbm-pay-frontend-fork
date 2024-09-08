import appStyle from '../app.module.css'
import Menu from "../components/menu/Menu.jsx";
import HeaderAccountsItems from "../components/headerAccounts/HeaderAccountsItems.jsx";
import style from "../style/accountFunding.module.css";
import ContentCard from "../components/ContentCard.jsx";
import Attention from "../generic/Attention.jsx";
import Divider from "../generic/Divider.jsx";
import contentCardStyle from '../style/contentCard.module.css'

const AccountFunding = () => {
  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Accounts</h1>

        <HeaderAccountsItems/>

        <div className={style.pageContent}>

          <div className={style.block}>
            <div className={style.card}>
              <ContentCard
                title={
                  <div className={contentCardStyle.cardHeader}>
                    <p className={appStyle.titleText}>REPLENOSHMENT FEE <span
                      className={`${appStyle.titleText} ${appStyle.span}`}>%</span></p>
                  </div>
                }
                content={
                  <div className={style.cardContents}>
                    <div className={style.cardContent}>
                      <p>6%</p>
                      <p className={appStyle.mainText}>from $500 to $10,000</p>
                    </div>
                    <Divider/>
                    <div className={style.cardContent}>
                      <p>5%</p>
                      <p className={appStyle.mainText}>from $10,000 to $100,000</p>
                    </div>
                    <Divider/>
                    <div className={style.cardContent}>
                      <p>4.5%</p>
                      <p className={appStyle.mainText}>from $100,000</p>
                    </div>
                  </div>
                }
              />
            </div>

            <div className={style.attention}>
              <Attention/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountFunding