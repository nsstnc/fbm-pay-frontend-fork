import appStyle from "../../../app.module.css";
import Menu from "../../../generic/menu/Menu.jsx";
import style from './createTicket.module.css'
import close from '../../../image/close.svg'
import add from '../../../image/add.svg'
import Button from "../../../generic/buttons/Button.jsx";
import WhiteButtonCancel from "../../../generic/buttons/WhiteButtonBack.jsx";

import Footer from "../../../generic/footer/Footer.jsx";
import {SUPPORT_ROUTE, TICKET_ID_ROUTE} from "../../../routing/consts.js";

const CreateTicket = () => {
  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Help & Support</h1>

        <div className={style.content}>
          <label>
            Theme
            <input type="text" placeholder="Write a theme"/>
          </label>

          <label>
            Description
            <textarea className={style.textarea} placeholder="Tell us about your request"/>
          </label>

          <div className={style.files}>
            <p>Attaching files</p>

            <div>
              <img alt="Add files" src={add}/>
              <div className={style.addableCard}>
                <img alt="Close" src={close}/>
                screenshot.png
              </div>
            </div>
          </div>


          <div className={style.buttons}>
            <Button text="Create" link={TICKET_ID_ROUTE}/>
            <WhiteButtonCancel text="Cancel" link={SUPPORT_ROUTE}/>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default CreateTicket