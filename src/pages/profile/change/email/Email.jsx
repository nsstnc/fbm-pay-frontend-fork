import style from "../profile/profile.module.css"
import appStyle from "../../../../app.module.css"
import Menu from "../../../../generic/menu/Menu.jsx"
import Field from "../../settings/field/Field.jsx"
import { PROFILE_SETTINGS_ROUTE } from "../../../../routing/consts.js"
import Input from "../../../userManagement/input/Input.jsx"
import Button from "../../../../generic/buttons/Button.jsx"
import WhiteButtonCancel from "../../../../generic/buttons/WhiteButtonBack.jsx"
import { handleWidth } from "../../../../generic/handleWidth/handleWidth.js"
import { useValue } from "../../../../generic/model/value.jsx"
import { $isMenuOpened } from "../../../../generic/model/menuModel.js"

const Email = () => {
  //handleWidth
  let isWidth = handleWidth()

  //handleToggle
  const [opened] = useValue($isMenuOpened)
  return (
    <div className={appStyle.page}>
      <Menu />

      <div className={`${appStyle.main} ${opened ? appStyle.active : ""}`}>
        <h1 className={appStyle.pageTitle}>Change E-Mail</h1>

        <div className={style.pageContent}>
          <Field
            title="New E-Mail"
            value={
              <div className={style.input}>
                <Input hint="Type here a new pass" />
              </div>
            }
          />

          <Field
            title="E-mail 2FA"
            value={
              <div className={style.andButton}>
                <div className={style.input1}>
                  <Input hint="Enter the 2FA code sent to your email" />
                </div>
                <div className={style.Button}>
                  <Button text="Request code" />
                </div>
              </div>
            }
          />
          {isWidth ? (
            <div className={style.buttons}>
              <Button text="Change" link={PROFILE_SETTINGS_ROUTE} />
              <WhiteButtonCancel text="Cancel" link={PROFILE_SETTINGS_ROUTE} />
            </div>
          ) : (
            <div className={style.buttons_change_cancel}>
              <div className={style.btn_flex}>
                {/* <div className={style.btn_request_code}>
                <Button text="Request code" link={PROFILE_SETTINGS_ROUTE} />
              </div> */}
                {/* <div className={style.btn_change_cancel}> */}
                {/* <div className={style.btn_change}> */}{" "}
                <div className={style.button}>
                  <Button text="Change" link={PROFILE_SETTINGS_ROUTE} />
                </div>
                {/* </div> */}
                {/* <div className={style.btn_white__cancel}> */}
                <div className={style.button}>
                  <WhiteButtonCancel
                    text="Cancel"
                    link={PROFILE_SETTINGS_ROUTE}
                  />
                </div>
                {/* </div></div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Email
