import style from "./plate.module.css"
import appStyle from "../../../../app.module.css"
import Button from "../../../../generic/buttons/Button.jsx"
import tgIcon from "../../../../image/tgIconWhite.svg"

// eslint-disable-next-line react/prop-types
const Plate = ({ title, text, link }) => {
  return (
    <div className={style.plate}>
      <div className={style.plate__text}>
        <h1 className={appStyle.titleText}>{title}</h1>
        {text}
      </div>

      <div className={style.button}>
        <Button
          text={<p>Contact</p>}
          img={<img className={style.icon_tg} alt="Tg icon" src={tgIcon} />}
          link={link}
        />
      </div>
    </div>
  )
}

export default Plate
