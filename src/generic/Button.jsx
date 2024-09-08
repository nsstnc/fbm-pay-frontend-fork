import style from '../style/button.module.css'
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Button = ({text, img = <></>, link = ''}) => {

  return (
    <Link to={link} className={style.button}>
      <button className={style.innerButton}>
        {text}
        {img}
      </button>
    </Link>
  )
}

export default Button