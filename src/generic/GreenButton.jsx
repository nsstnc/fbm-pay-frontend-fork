import style from '../style/greenButton.module.css'
import {Link} from "react-router-dom"

// eslint-disable-next-line react/prop-types
const GreenButton = ({text, link = ""}) => {
  return (
    <Link to={link} className={style.button}>
      <button className={style.innerButton}>
        {text}
      </button>
    </Link>
  )
}

export default GreenButton