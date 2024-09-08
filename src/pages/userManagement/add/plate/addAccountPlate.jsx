import style from "./addAccountPlate.module.css"
import appStyle from "../../../../app.module.css"
import close from "../../../../image/close.svg"

// eslint-disable-next-line react/prop-types
const AddAccountPlate = ({ text }) => {
  return (
    <div className={style.plate}>
      <p className={`${appStyle.mainText} ${style.text}`}>{text}</p>
      <img alt="Delete selected user" src={close} className={style.img} />
    </div>
  )
}

export default AddAccountPlate
