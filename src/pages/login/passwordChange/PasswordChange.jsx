import loginStyle from '../login.module.css'
import appStyle from '../../../app.module.css'
import twoFactorAuthenticationStyle from '../2fa/twoFactorAuthentication.module.css'
import HintHeader from "../generic/hintHeader/HintHeader.jsx";
import Input from "../../../generic/input/Input.jsx";
import Plate from "../generic/plate/Plate.jsx";
import Button from "../../../generic/buttons/Button.jsx";
import {Link} from "react-router-dom";

const PasswordChange = () => {
  return (
    <div className={loginStyle.background}>
      <div className={loginStyle.login}>
        <h1 className={appStyle.pageTitle}>Password change</h1>

        <div className={twoFactorAuthenticationStyle.hint}>
          <HintHeader
            text=""
            hint="To complete your account login, please enter the two-factor authentication code sent to your email."
            link=""
          />
        </div>

        <Input
          label="E-mail address"
          type="email"
          placeholder="fbmpay@gmail.com"
        />

        <div className={twoFactorAuthenticationStyle.authentication}>
          <div className={twoFactorAuthenticationStyle.input}>
            <Input
              label="Two Factor Authentication"
              type="text"
              placeholder="Enter the 2FA code sent to your email"
            />
          </div>

          <div className={twoFactorAuthenticationStyle.textButton}>
            <Button
              text="Request code"
            />
          </div>
        </div>

        <Plate
          title="Any troubles?"
          text={
            <p className={appStyle.mainText}>Contact your manager <Link to="https://t.me/v_astanin"><span className={`${appStyle.mainText} ${appStyle.green}`}>@fbmpay_manager</span></Link> for help</p>
          }
          link="https://t.me/v_astanin"
        />
      </div>

    </div>
  )
}

export default PasswordChange