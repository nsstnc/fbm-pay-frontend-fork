import style from '../style/userManagementAdd.module.css'
import appStyle from '../app.module.css'
import Menu from "../components/menu/Menu.jsx";
import Footer from "../generic/Footer.jsx";
import InputAddUser from "../components/InputAddUser.jsx";
import Button from "../generic/Button.jsx";
import WhiteButton from "../generic/WhiteButton.jsx";

const UserManagementRedact = () => {
  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Redact User’s Info</h1>

        <div className={style.content}>
          <div className={style.form}>
            <div className={style.input}>
              <InputAddUser
                text="Authorization E-mail"
                hint={
                  <p className={appStyle.mainText}>yato345123@gmail.com</p>
                }
                type="onlyText"
              />
            </div>

            <div className={style.input}>
              <InputAddUser
                text="Name"
                hint={
                  <p className={appStyle.mainText}>OWS1690_1</p>
                }
                type="onlyText"
              />
            </div>

            <div className={style.input}>
              <InputAddUser
                text="Phone*"
                hint="Write the phone"
                type="phone"
              />
            </div>

            <div className={style.input}>
              <InputAddUser
                text="Telegram ID"
                hint="Write the Telegram ID"
                type="text"
              />
            </div>

            <div className={style.input}>
              <InputAddUser
                text="OTP for Login*"
                hint="One time password received via E-mail"
                type="text"
              />
            </div>

            <div className={style.input}>
              <InputAddUser
                text="OTP for Approve**"
                hint="One time password received via E-mail"
                type="text"
              />
            </div>

            <div className={style.input}>
              <div className={style.checkBox}>
                <InputAddUser
                  text="Main User Creation"
                  hint=""
                  type="checkbox"
                />
              </div>
            </div>

            <InputAddUser
              text="AccessToAccounts*"
              hint="GB16GUAV00993200022188 (OWS1690 OWS1690, Main Balance) 0.06 EUR"
              type="text"
            />

            <InputAddUser
              text={
                <p className={appStyle.titleText}>Attention</p>
              }
              hint={
                <p className={appStyle.mainText}>We draw your attention, that you can`t edit email, if you want to
                  use a
                  new email for a user, you need to create a new user account.</p>
              }
              type="onlyText"
            />

            <div className={style.buttons}>
              <div className={style.button}>
                <Button text="Add"/>
              </div>
              <div className={style.button}>
                <WhiteButton text="Back"/>
              </div>
            </div>
          </div>

        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default UserManagementRedact