import style from './redButton.module.css'
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RedButton = ({text, img = <></>, link = ''}) => {

  return (
    <Link to={link} className={style.button}>
      <a href="#"><button className={style.innerButton}>
        {text}
        {img}
      </button> </a>
    </Link>
  )
}

export default RedButton