import appStyle from "../../../app.module.css";
import Menu from "../../../generic/menu/Menu.jsx";
import Footer from "../../../generic/footer/Footer.jsx";
import style from './ticket.module.css'
import TextButton from "../../../generic/buttons/TextButton.jsx";
import arrowBack from '../../../image/arrowBack.svg'
import {SUPPORT_ROUTE} from "../../../routing/consts.js";

// eslint-disable-next-line react/prop-types
const Ticket = ({ticketId = 69892977}) => {
  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <div className={style.flex}>
          <h1 className={appStyle.pageTitle}>Ticket #{ticketId}</h1>
          <TextButton img={
            <img alt="Go back" src={arrowBack}/>
          } text="Go Back" link={SUPPORT_ROUTE}/>
        </div>

        <div></div>

        <Footer/>
      </div>
    </div>
  )
}

export default Ticket