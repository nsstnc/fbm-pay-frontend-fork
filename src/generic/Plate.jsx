import style from '../style/plate.module.css'
import appStyle from '../app.module.css'
import Button from "./Button.jsx"
import tgIcon from '../image/tgIconWhite.png'
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Plate = ({title, text, hint, link}) => {
  return (
    <div className={style.plate}>
      <div className={style.plate__text}>
        <h1 className={appStyle.titleText}>{title}</h1>
        <p className={appStyle.mainText}>{text} <Link to={link} className={appStyle.linkText}>{hint}</Link></p>
      </div>

      <div className={style.button}>
        <Button
          text="Contact"
          img={
            <img alt="Tg icon" src={tgIcon}/>
          }
          link={link}
        />
      </div>
    </div>
  )
}

export default Plate