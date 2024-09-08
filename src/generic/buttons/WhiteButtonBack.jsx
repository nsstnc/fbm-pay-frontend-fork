import style from './whiteButton.module.css'
import {Link} from "react-router-dom"

// eslint-disable-next-line react/prop-types
const WhiteButtonCancel = ({text, onClick, img = <></>}) => {
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