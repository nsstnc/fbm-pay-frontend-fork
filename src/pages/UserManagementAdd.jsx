import style from '../style/userManagementAdd.module.css'
import appStyle from '../app.module.css'
import Menu from "../components/menu/Menu.jsx";
import Footer from "../generic/Footer.jsx";
import InputAddUser from "../components/InputAddUser.jsx";
import TextButton from "../generic/TextButton.jsx";
import plusGreen from '../image/plusGreen.png'
import AddAccountPlate from "../generic/addAccountPlate.jsx";
import Button from "../generic/Button.jsx";
import WhiteButton from "../generic/WhiteButton.jsx";

const UserManagementAdd = () => {
  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Add User</h1>

        <div className={style.content}>
          <div className={style.form}>
            <div className={style.input}>
              <InputAddUser
                text="Authorization E-mail"
                hint="Write authorization E-mail"
                type="email"
              />
            </div>

            <div className={style.input}>
              <InputAddUser
                text="Name"
                hint="Write user’s name"
                type="text"
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

            <div className={style.accessToAccounts}>
              <InputAddUser
                text="AccessToAccounts*"
                hint=""
                type=""
              />

              <div className={style.addAccount}>
                <TextButton
                  text="Add Account"
                  img={
                    <img alt="Add user" src={plusGreen}/>
                  }
                />

                <AddAccountPlate
                  text="GB16GUAV00993200022188 (OWS1690 OWS1690, Main Balance) 0.06 EUR"
                />

                <AddAccountPlate
                  text="GB16GUAV00993200022188 (OWS1690 OWS1690, Main Balance) 0.06 EUR"
                />

                <AddAccountPlate
                  text="GB16GUAV00993200022188 (OWS1690 OWS1690, Main Balance) 0.06 EUR"
                />
              </div>
            </div>

            <div className={style.attention}>
              <p className={appStyle.titleText}>Attention</p>
              <p className={appStyle.mainText}>We draw your attention, that you can`t edit email, if you want to use a
                new email for a user, you need to create a new user account.</p>
            </div>

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

export default UserManagementAdd