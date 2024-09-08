import appStyle from "../../../app.module.css";
import Menu from "../../../generic/menu/Menu.jsx";
import style from './ticket.module.css'
import close from '../../../image/close.svg'
import add from '../../../image/add.svg'
import Button from "../../../generic/buttons/Button.jsx";
import WhiteButton from "../../../generic/buttons/WhiteButton.jsx";
import Footer from "../../../generic/footer/Footer.jsx";

const Ticket = () => {
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
            <input type="textarea" placeholder="Tell us about your request"/>
          </label>

          <div>
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
<Button text="Create"/>
<WhiteButton text="Cancel"/>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default Ticket