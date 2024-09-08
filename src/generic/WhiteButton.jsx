import style from '../style/whiteButton.module.css'
import {Link} from "react-router-dom"

// eslint-disable-next-line react/prop-types
const WhiteButton = ({text, link = ""}) => {
  return (
    <Link to={link} className={style.button}>
      <button className={style.innerButton}>
        {text}

      </button>
    </Link>
  )
}

export default WhiteButton