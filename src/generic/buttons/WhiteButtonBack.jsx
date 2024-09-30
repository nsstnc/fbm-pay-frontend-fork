import style from './whiteButton.module.css'
import {Link} from "react-router-dom"

// eslint-disable-next-line react/prop-types
const WhiteButtonCancel = ({text, link="", onClick, img = <></>}) => {
  if (link !== ""){
      return (
      <Link to={link} onClick={onClick} className={style.button}>
        <button className={style.innerButton}>
          {text}
          {img}
        </button>
      </Link>
  );
  }

    return (
      <button onClick={onClick} className={style.button}>
        <button className={style.innerButton}>
          {text}
          {img}
        </button>
      </button>
  );
}

export default WhiteButtonCancel;