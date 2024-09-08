import loginStyle from '../style/login.module.css'
import appStyle from '../app.module.css'
import twoFactorAuthenticationStyle from '../style/twoFactorAuthentication.module.css'
import HintHeader from "../generic/HintHeader.jsx";
import Input from "../generic/Input.jsx";
import Plate from "../generic/Plate.jsx";
import Button from "../generic/Button.jsx";

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
            <p className={appStyle.mainText}>Contact your manager <span className={appStyle.linkText}>@fbmpay_manager</span> for help</p>
          }
          link="https://t.me/v_astanin"
        />
      </div>

    </div>
  )
}

export default PasswordChange