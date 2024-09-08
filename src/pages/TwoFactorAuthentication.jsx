import style from '../style/twoFactorAuthentication.module.css'
import loginStyle from '../style/login.module.css'
import appStyle from "../app.module.css";
import Input from "../generic/Input.jsx";
import Button from "../generic/Button.jsx";
import HintHeader from "../generic/HintHeader.jsx";
import TextButton from "../generic/TextButton.jsx";
import {LOGIN_ROUTE} from "../routing/consts.js";

const TwoFactorAuthentication = () => {
  return (
    <div className={loginStyle.background}>
      <div className={loginStyle.login}>
        <h1 className={appStyle.pageTitle}>Two-factor authentication</h1>

        <div className={style.hint}>
          <HintHeader
            text=""
            hint="To complete your account login, please enter the two-factor authentication code sent to your email."
            link=""
          />
        </div>

        <div className={style.authentication}>
          <div className={style.input}>
            <Input
              label="Two Factor Authentication"
              type="text"
              placeholder="Enter the 2FA code sent to your email"
            />
          </div>

          <div className={style.textButton}>
            <TextButton
              text="50 sec"
            />
          </div>
        </div>

        <Button
          text="Login"
          link={LOGIN_ROUTE}
        />

      </div>
    </div>
  )
}

export default TwoFactorAuthentication