import style from './hintHeader.module.css'
import {Link} from "react-router-dom"
import appStyle from '../../../../app.module.css'

// eslint-disable-next-line react/prop-types
const HintHeader = ({text = '', link = '', hint=''}) => {
  const isLink = link === '' ?
    <p className={`${appStyle.smallerText} ${appStyle.hint}`}>{hint}</p> :
    <Link to={link}>
      <p className={`${appStyle.smallerText} ${appStyle.green}`}>{hint}</p>
    </Link>

  return (
    <div className={style.hint}>
      <p className={`${appStyle.smallerText} ${appStyle.hint}`}>{text}</p>
      {isLink}
    </div>
  )
}

export default HintHeader