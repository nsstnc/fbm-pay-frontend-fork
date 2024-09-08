import style from "./button.module.css"
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Button = ({ text, img = <></>, link = "", onClick }) => {
  if (link || link.length === 0) {
    if (link.length === 0) {
      // console.log("Неактивная кнопка")
      return (
        <button className={style.button} disabled>
          {text}
          {img}
        </button>
      )
    }
    // console.log("Кнопка с ссылкой")
    return (
      <Link to={link} className={style.button}>
        <button className={style.innerButton}>
          {text}
          {img}
        </button>
      </Link>
    )
  } else {
    // console.log("Активная кнопка")
    return (
      <button className={style.button} onClick={onClick}>
        {text}
        {img}
      </button>
    )
  }
}

export default Button
