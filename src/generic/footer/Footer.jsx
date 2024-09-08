import style from './footer.module.css'
import Divider from "../divider/Divider.jsx";
import '../../index.css'
import appStyle from '../../app.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
      <Divider/>
      <p className={`${appStyle.smallerText} ${appStyle.hint} ${style.text}`} style={{paddingTop: '20px'}}>Copyright © 2024 <span className={`${appStyle.smallerText} ${style.green}`}>[FBM]PAY</span>. All rights reserved</p>
    </div>
  )
}

export default Footer