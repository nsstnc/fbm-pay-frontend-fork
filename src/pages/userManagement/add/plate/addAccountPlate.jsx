import style from "./addAccountPlate.module.css"
import appStyle from "../../../../app.module.css"
import close from "../../../../image/close.svg"

// eslint-disable-next-line react/prop-types
const AddAccountPlate = ({ text, onDelete }) => {
  return (
    <div className={style.plate}>
      <p className={`${appStyle.mainText} ${style.text}`}>{text}</p>
      <img alt="Delete selected user" src={close} className={style.img}
         onClick={onDelete} // Вызываем функцию onDelete при кликем
          style={{ cursor: 'pointer' }}
      />
    </div>
  )
}

export default AddAccountPlate
