import style from '../style/blackButton.module.css'
import {Link} from "react-router-dom"

// eslint-disable-next-line react/prop-types
const BlackButton = ({text, link = ""}) => {
  return (
    <Link to={link} className={style.button}>
      <button className={style.innerButton}>
        {text}
      </button>
    </Link>
  )
}

export default BlackButton