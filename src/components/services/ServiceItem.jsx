import style from '../../style/serviceItem.module.css'

import appStyle from '../../app.module.css'
import GreenButton from "../../generic/GreenButton.jsx";

// eslint-disable-next-line react/prop-types
const ServiceItem = ({img, title, text, buttonText, link, textLink}) => {
  return (
    <div className={style.serviceItem}>
      <div>
        {img}
        <p className={appStyle.titleText}>{title}</p>
      </div>

      <div>
        {text}
      </div>

      <div className={style.button}>
        <GreenButton text={buttonText}
                     link={link}/>
        {textLink}
      </div>
    </div>
  )
}

export default ServiceItem