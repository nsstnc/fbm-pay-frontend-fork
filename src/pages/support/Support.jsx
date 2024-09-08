import appStyle from "../../app.module.css";
import Menu from "../../generic/menu/Menu.jsx";
import {CREATE_TICKET_ROUTE} from "../../routing/consts.js";
import style from "./support.module.css";
import Divider from "../../generic/divider/Divider.jsx";
import Results from "../../generic/filter/result/supResults.jsx";
import Result from "../../generic/filter/result/supResult.jsx";
import mastercard from "../../image/cards/icons/masterCard.svg";
import card from "../../image/cardNumbers.svg";
import hint from "../../image/questionMark.svg";
import copy from "../../image/copyIcon.svg";
import Button from "../../generic/buttons/Button.jsx";
import Footer from "../../generic/footer/Footer.jsx";
import Card from "../../generic/filter/result/card/Card.jsx";
import Status from "../../generic/status/Status.jsx";
import statusStyle from '../../generic/status/status.module.css'
import arrowWhite from '../../image/arrowWhite.svg'

const Support = () => {
  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Help & Support</h1>

        <div className={style.content}>
          <div className={style.header}>
            <p className={appStyle.titleText}>TICKETS</p>

            <div className={style.showMore}>
              <Button
                text="Create Ticket"
                link={CREATE_TICKET_ROUTE}
              />
            </div>
          </div>

          <Results styles='overflow: hidden;' results={[
            <Result 
            
            content={[
              <p className={appStyle.hint} style={{width: '8rem'}}>#</p>,
              <p className={appStyle.hint} style={{width: '8rem'}}>DATE</p>,
              <p className={appStyle.hint} style={{width: '8rem'}}>STATUS</p>,
              <p className={appStyle.hint} style={{width: '20vw'}}>SUBJECT</p>,
              <p className={appStyle.hint} style={{width: '8vw'}}>MESSAGES COUNT</p>,
              <p className={appStyle.hint} style={{width: '8vw'}}>MANAGER</p>,
              <div style={{width: '12.5vw'}}></div>,
            ]}/>,
            <Result content={[
              <p className={appStyle.mainText} style={{width: '8rem'}}>69892977</p>,
              <p className={appStyle.mainText} style={{width: '8rem'}}>10.04.2024 11:59</p>,
              <div className={style.flex} style={{width: '8rem'}}>
                <Status className={statusStyle.Pending} text="Processing"/>
              </div>,
              <p className={appStyle.mainText} style={{width: '20vw'}}>Replenishment via WIRE in the amount of 500€ </p>,
              <p className={appStyle.mainText} style={{width: '8vw'}}>2</p>,
              <p className={appStyle.mainText} style={{width: '8vw'}}>Ivan Loev</p>,
              <div style={{position: 'absolute', right:'-55px'}}>
                <div className={style.openTicket}>
                  <p className={appStyle.mainText}>Open Ticket</p>
                  <img alt="Open ticket" src={arrowWhite}/>
                </div>
              </div>,
            ]}/>,
            <Result content={[
              <p className={appStyle.mainText} style={{width: '8rem'}}>69892977</p>,
              <p className={appStyle.mainText} style={{width: '8rem'}}>10.04.2024 11:59</p>,
              <div className={style.flex} style={{width: '8rem'}}>
                <Status className={statusStyle.Pending} text="Processing"/>
              </div>,
              <p className={appStyle.mainText} style={{width: '20vw'}}>Replenishment via WIRE in the amount of 500€ </p>,
              <p className={appStyle.mainText} style={{width: '8vw'}}>2</p>,
              <p className={appStyle.mainText} style={{width: '8vw'}}>Ivan Loev</p>,
              <div style={{position: 'absolute', right:'-55px'}}>
                <div className={style.openTicket}>
                  <p className={appStyle.mainText}>Open Ticket</p>
                  <img alt="Open ticket" src={arrowWhite}/>
                </div>
              </div>,
            ]}/>,

          ]}/>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default Support