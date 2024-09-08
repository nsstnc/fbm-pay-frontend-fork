import style from "../style/login.module.css"
import appStyle from "../app.module.css"
import logo from "../image/Logo.png"
import Input from "../generic/Input.jsx"
import Button from "../generic/Button.jsx"
import HintHeader from "../generic/HintHeader.jsx"
import Plate from "../generic/Plate.jsx"

const Login = () => {
  return (
    <div className={style.background}>
      <div className={style.login}>
        <h1 className={` ${appStyle.pageTitle} ${style.pageTitle}`}>
          Welcome to <img alt="Card icon" src={logo} /> !
        </h1>

        <Input
          label="E-mail address"
          type="email"
          placeholder="fbmpay@gmail.com"
        />
        <Input label="Password" type="password" placeholder="********" />
        <Button text="Login" link="/dashboard" />
        <HintHeader
          text="Forgot password?"
          hint="Recover it"
          link="https://t.me/v_astanin"
        />
        <Plate
          title="Registration"
          text="To register on platform please contact your manager"
          hint="@fbmpay_manager"
          link="https://t.me/v_astanin"
        />
      </div>
    </div>
  )
}

export default Login
