import Menu from "../../../generic/menu/Menu.jsx";
import Footer from "../../../generic/footer/Footer.jsx";
import appStyle from '../../../app.module.css'
import style from '../../userManagement/userManagement.module.css';
import Input from "../../../generic/input/Input.jsx";
import Button from "../../../generic/buttons/Button.jsx";
import WhiteButton from "../../../generic/buttons/WhiteButton.jsx";

const ProfileChange = () => {
  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Change profile</h1>


        <div className={style.pageContent}>
        <div>
            <div>
              <Input
                text="New Password"
                hint="Type here a new pass"
                type="text"
              />
            </div>

            <div>
              <Input
                text="Confirm password"
                hint="Type it again"
                type="text"
              />
            </div>
            <div>
            <div>
              <Input
                text="Timezone"
                hint="Enter the 2FA code sent to your email"
                type="text"
              />
            </div>
            <div className={style.button}>
                <Button text="Request Code"/>
              </div>
            </div>
        </div>

        <div>
              <div className={style.button}>
                <Button text="Change"/>
              </div>
              <div className={style.button}>
                <WhiteButton text="Cancel"/>
              </div>
            </div>

        <Footer/>
      </div>

    </div>
    </div>
  )
}

export default ProfileChange