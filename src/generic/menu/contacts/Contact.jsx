import style from "./contact.module.css"
import appStyle from '../../../app.module.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars,react/prop-types
const Contact = ({img, title, text = "", link = "", hint = "", subimg = ""}) => {

  const subImg = subimg ?
    <img alt="TG icon" src={subimg} className={style.img}/> :
    <></>

  return (
    <div className={style.contact}>
      <img alt="Contact icon Ivan" src={img}/>

      <div className={style.contact__specification}>
        <div className={style.contact__text}>
          <p className={appStyle.titleText}>{title}</p>
          <p className={`${appStyle.hint} ${appStyle.mainText}`}>{text}</p>
        </div>

        <div className={style.contact__link}>
          <Link to={link}><p className={`${appStyle.green} ${appStyle.mainText}`}>{hint}</p></Link>
          {subImg}
        </div>

      </div>
    </div>
  )
}

export default Contact