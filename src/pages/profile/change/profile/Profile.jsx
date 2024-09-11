import style from "./profile.module.css"
import appStyle from "../../../../app.module.css"
import Menu from "../../../../generic/menu/Menu.jsx"
import Field from "../../settings/field/Field.jsx"
import { PROFILE_SETTINGS_ROUTE } from "../../../../routing/consts.js"
import Input from "../../../userManagement/input/Input.jsx"
import Button from "../../../../generic/buttons/Button.jsx"
import WhiteButtonCancel from "../../../../generic/buttons/WhiteButtonBack.jsx"
import { useValue } from "../../../../generic/model/value.jsx"
import { $isMenuOpened } from "../../../../generic/model/menuModel.js"

const Profile = () => {
  const [opened] = useValue($isMenuOpened)

  return (
    <div className={appStyle.page}>
      <Menu />

      <div className={`${appStyle.main} ${opened ? appStyle.active : ""}`}>
        <h1 className={appStyle.pageTitle}>Change profile</h1>

        <div className={style.pageContent}>
          <Field
            title="Name"
            value={
              <div className={style.input}>
                <Input hint="Write your name" />
              </div>
            }
          />

          <Field
            title="Telegram"
            value={
              <div className={style.input}>
                <Input hint="Write your nickname" />
              </div>
            }
          />

          <div className={style.buttons_change_cancel}>
            <div className={style.btn_flex}>
              <div className={style.button}>
                <Button text="Change" link={PROFILE_SETTINGS_ROUTE} />
              </div>
              <div className={style.button}>
                <WhiteButtonCancel
                  text="Cancel"
                  link={PROFILE_SETTINGS_ROUTE}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
