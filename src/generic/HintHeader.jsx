import style from '../style/hintHeader.module.css'
import {Link} from "react-router-dom"
import appStyle from '../app.module.css'

// eslint-disable-next-line react/prop-types
const HintHeader = ({text = '', link = '', hint=''}) => {
  const isLink = link === '' ?
    <p className={appStyle.hintText}>{hint}</p> :
    <Link to={link}>
      <p className={`${appStyle.hintText} ${appStyle.span}`}>{hint}</p>
    </Link>

  return (
    <div className={style.hint}>
      <p className={appStyle.hintText}>{text}</p>
      {isLink}
    </div>
  )
}

export default HintHeader