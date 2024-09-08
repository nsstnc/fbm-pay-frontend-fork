import style from '../profile/profile.module.css'
import appStyle from '../../../../app.module.css'
import Menu from "../../../../generic/menu/Menu.jsx";
import Field from "../../settings/field/Field.jsx";
import {
  PROFILE_SETTINGS_ROUTE,
} from "../../../../routing/consts.js";
import Input from "../../../userManagement/input/Input.jsx";
import Button from "../../../../generic/buttons/Button.jsx";
import WhiteButton from "../../../../generic/buttons/WhiteButton.jsx";

const Password = () => {
  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Change password</h1>

        <div className={style.pageContent}>
          <Field title="New password" value={
            <div className={style.input}>
              <Input hint="Type here a new pass"/>
            </div>
          }/>

          <Field title="Confirm password" value={
            <div className={style.input}>
              <Input hint="Type it again"/>
            </div>
          }/>

          <Field title="E-mail 2FA" value={
            <div className={style.andButton}>
              <div className={style.input1}>
                <Input hint="Enter the 2FA code sent to your email"/>
              </div>
              <div className={style.Button}>
                <Button text="Request code"/>
              </div>
            </div>
          }/>

          <div className={style.buttons}>
            <Button text="Change" link={PROFILE_SETTINGS_ROUTE}/>
            <WhiteButton text="Cancel" link={PROFILE_SETTINGS_ROUTE}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Password