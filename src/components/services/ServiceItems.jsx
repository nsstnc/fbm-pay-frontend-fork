import appStyle from '../../app.module.css'
import style from '../../style/serviceItems.module.css'

import globus from '../../image/globus.png'
import ServiceItem from "./ServiceItem.jsx";
import agencyAccoutsIcon from '../../image/services/agencyAccounts.png'

const ServiceItems = () => {
  return (
    <div>
      <ServiceItem
        img={
          <img alt="Agency accounts" src={agencyAccoutsIcon}/>
        }
        text={
          <p className={appStyle.mainText}>Official Facebook, Google, Tik Tok, Taboola agency accounts with credit
            line. <span>We allow to put traffic on WH / GH / BH.</span> Fast issuing, lowest commission.</p>
        }
        buttonText="Start Now"
        link=""
        textLink={
          <div className={style.linkContainer}>
            <p className={`${appStyle.span}`}>fbm.agency</p>
            <img alt="Globus" src={globus}/>
          </div>
        }
      />
    </div>
  )
}

export default ServiceItems