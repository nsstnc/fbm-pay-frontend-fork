import style from '../../style/menuItem.module.css'
import appStyle from '../../app.module.css'
import {Link, useLocation} from "react-router-dom";

// eslint-disable-next-line react/prop-types,no-unused-vars
const MenuItem = ({text, subText = '', link = '', image = <></>, imageHover = <></>}) => {

  const location = useLocation()
  const thisLink = location.pathname.split('/')[1]
  console.log(thisLink)
  // eslint-disable-next-line react/prop-types
  if (location.pathname === link) {
    return (
      <Link to={link} className={`${style.activeItem} ${style.menuItem}`}>
        <button className={style.innerButton}>
          {imageHover}
          <div className={`${style.text} ${style.noFap}`} style={{gap: "0 0"}}>
            <p className={`${style.activeText} ${appStyle.titleText}`}>{text}</p>
            <p className={`${style.activeText} ${appStyle.hintText}`}>{subText}</p>
          </div>
        </button>
      </Link>
    )
  } else {
    return (
      <Link to={link} className={style.menuItem}>
        <button className={style.innerButton}>
          {image}
          <div className={`${style.text} ${style.noFap}`} style={{gap: "0 0"}}>
            <p className={appStyle.titleText}>{text}</p>
            <p className={appStyle.hintText}>{subText}</p>
          </div>
        </button>
      </Link>
    )
  }
}


export default MenuItem
