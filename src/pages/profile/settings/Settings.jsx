import style from "./settings.module.css"
import appStyle from "../../../app.module.css"
import statusStyle from "../../../generic/status/status.module.css"
import Menu from "../../../generic/menu/Menu.jsx"
import HeaderItems from "../../../generic/headerItem/HeaderItems.jsx"
import {
  PROFILE_CHANGE_PASSWORD_ROUTE,
  PROFILE_CHANGE_PROFILE_ROUTE,
  PROFILE_LIMITS_ROUTE,
  PROFILE_SETTINGS_ROUTE,
} from "../../../routing/consts.js"
import Status from "../../../generic/status/Status.jsx"
import Field from "./field/Field.jsx"
import GreenButton from "../../../generic/buttons/GreenButton.jsx"
import viewPassword from "../../../image/viewPasswordGreen.svg"
import Footer from "../../../generic/footer/Footer.jsx"
import Divider from "../../../generic/divider/Divider.jsx"
import { useValue } from "../../../generic/model/value.jsx"
import { $isMenuOpened } from "../../../generic/model/menuModel.js"
import { handleWidth } from "../../../generic/handleWidth/handleWidth.js"

const Settings = () => {
  //hanldeToggle
  const [opened] = useValue($isMenuOpened)

  //handleWidth
  let isWidth = handleWidth()

  return (
    <div className={appStyle.page}>
      <Menu />

      <div className={`${appStyle.main} ${opened ? appStyle.active : ""}`}>
        <h1 className={appStyle.pageTitle}>Profile</h1>

        <HeaderItems
          texts={["Settings", "Limits and conditions"]}
          links={[PROFILE_SETTINGS_ROUTE, PROFILE_LIMITS_ROUTE]}
        />

        <div className={style.pageContent}>
          <Field
            title="Status"
            value={<Status className={statusStyle.Active} text="Active" />}
          />

          <Divider />

          <Field
            title="Registration Date"
            value={<p className={appStyle.mainText}>23.12.2022 23:32:40</p>}
          />

          <Divider />

          <Field
            title="Name"
            value={
              <div className={style.flex}>
                <p className={appStyle.mainText}>Ivan</p>
                <div className={style.button}>
                  <GreenButton
                    text="Change"
                    link={PROFILE_CHANGE_PROFILE_ROUTE}
                  />
                </div>
              </div>
            }
          />

          <Divider />

          <Field
            title="E-mail"
            value={
              <div className={style.flex}>
                <p className={appStyle.mainText}>345123shrek@gmail.com</p>
                <div className={style.button}>
                  <GreenButton text="Change" link="/profile/change/email" />
                </div>
              </div>
            }
          />

          <Divider />

          <Field
            title="Telegram Chat"
            value={
              <div className={style.flex}>
                <p className={appStyle.mainText}>tc_traff</p>
                <div className={style.button}>
                  <GreenButton
                    text="Change"
                    link={PROFILE_CHANGE_PROFILE_ROUTE}
                  />
                </div>
              </div>
            }
          />

          <Divider />

          <Field
            title="Password"
            value={
              <div className={style.flex}>
                <div className={style.flex}>
                  <p>******</p>
                  <img alt="View password" src={viewPassword} />
                </div>
                <div className={style.button}>
                  <GreenButton
                    text="Change"
                    link={PROFILE_CHANGE_PASSWORD_ROUTE}
                  />
                </div>
              </div>
            }
          />

          <Divider />

          {isWidth ? (
            <Field
              title="Two-factor authentication*"
              subTitle="We do not allow you to turn it off for security reasons."
              value={
                <label style={{ opacity: "0.7" }}>
                  {" "}
                  <input type="checkbox" className={`switch`} checked />{" "}
                </label>
              }
            />
          ) : (
            <Field
              title="Two-factor authentication*"
              subTitle=""
              value={
                <div className={style.flex}>
                  <p>
                    We do not allow you to turn it off for security reasons.
                  </p>
                  <label style={{ opacity: "0.7" }}>
                    {" "}
                    <input type="checkbox" className={`switch`} checked />{" "}
                  </label>
                </div>
              }
            />
          )}

          <Divider />

          {/* <Field title="Timezone" value={
            <div className={style.flex}>
              <p className={appStyle.mainText}>Europe/Moscow</p>
              <div className={style.button}>
                <GreenButton text="Change" link={PROFILE_CHANGE_PROFILE_ROUTE}/>
              </div>
            </div>
          }/> */}

          {/* <Divider /> */}

          {/* <Field title="Country" value={
            <div className={style.flex}>
              <p className={appStyle.mainText}>Russia</p>
              <div className={style.button}>
                <GreenButton text="Change" link={PROFILE_CHANGE_PROFILE_ROUTE}/>
              </div>
            </div>
          }/> */}
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Settings
