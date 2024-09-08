import style from "../../style/contact.module.css"
import appStyle from '../../app.module.css'

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
          <p className={appStyle.hintText}>{text}</p>
        </div>

        <div className={style.contact__link}>
          <p className={appStyle.linkText}>{hint}</p>
          {subImg}
        </div>

      </div>
    </div>
  )
}

export default Contact