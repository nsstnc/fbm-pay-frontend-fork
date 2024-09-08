import style from '../style/footer.module.css'
import Divider from "./Divider.jsx";
import '../index.css'
import appStyle from '../app.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
      <Divider/>
      <p className={`${style.text} ${appStyle.hintText}`}>Copyright © 2024 <span className={`${appStyle.span} ${appStyle.hintText}`}>[FBM]PAY</span>. All rights reserved</p>
    </div>
  )
}

export default Footer