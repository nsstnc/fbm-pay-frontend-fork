import style from './button.module.css'
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const btn = ({text, img = <></>, link = ''}) => {

  return (
    <Link to={link} className={style.button}>
      <button className={style.innerButton}>
        <div className={style.text}>
          {text}
        </div>
        <div className={style.img}>
          {img}
        </div>
      </button>
    </Link>
  )
}

export default btn