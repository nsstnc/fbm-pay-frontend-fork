import style from './greenButton.module.css'
import {Link} from "react-router-dom"

// eslint-disable-next-line react/prop-types
const GreenButton = ({text, link = "", onClick = () => {}}) => {

  if (link === "") {
    return (
      <div className={style.button}
            onClick={onClick}>
        <a href="#"><button className={style.innerButton}>
          {text}
        </button> </a>
      </div>
    )
  }

  return (
    <Link to={link} className={style.button}>
     <a href=""> <button className={style.innerButton}>
        {text}
      </button> </a>
    </Link>
  )
}

export default GreenButton