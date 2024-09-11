import Menu from "../../../generic/menu/Menu.jsx"
import Footer from "../../../generic/footer/Footer.jsx"
import HeaderItems from "../../../generic/headerItem/HeaderItems.jsx"
import appStyle from "../../../app.module.css"
import {
  PROFILE_CHANGE_PROFILE_ROUTE,
  PROFILE_CHANGE_PASSWORD_ROUTE,
} from "../../../routing/consts.js"
import Status from "../../../generic/status/Status.jsx"
import GreenButton from "../../../generic/buttons/GreenButton.jsx"
import style from "../../userManagement/userManagement.module.css"
import statusStyle from "../../../generic/status/status.module.css"

const ProfileAll = () => {
  return (
    <div className={appStyle.page}>
      <Menu />

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>Profile</h1>

        <HeaderItems
          texts={["Setting", "Limits and conditions"]}
          links={[PROFILE_CHANGE_PROFILE_ROUTE, PROFILE_CHANGE_PASSWORD_ROUTE]}
        />

        <div className={style.pageContent}>
          <div>
            <p className={appStyle.titleText}>Status</p>
            <div>
              <Status className={statusStyle.Pending} text="pending" />
            </div>
          </div>

          <div>
            <p className={appStyle.titleText}>Registration Date</p>
            <p className={appStyle.mainText}>23.12.2022 23:32:40</p>
          </div>

          <div>
            <p className={appStyle.titleText}>Name</p>
            <p className={appStyle.mainText}>Ivan</p>
            <GreenButton text="Change" link={PROFILE_CHANGE_PROFILE_ROUTE} />
          </div>

          <div>
            <p className={appStyle.titleText}>E-mail</p>
            <p className={appStyle.mainText}>345123shrek@gmail.com</p>
          </div>

          <div>
            <p className={appStyle.titleText}>Telegram Chat</p>
            <p className={appStyle.mainText}>TC_traff</p>
            <GreenButton text="Change" link={PROFILE_CHANGE_PASSWORD_ROUTE} />
          </div>

          <div>
            <p className={appStyle.titleText}>Password</p>
            <p className={appStyle.mainText}>******</p>
            <GreenButton text="Change" link={PROFILE_CHANGE_PASSWORD_ROUTE} />
          </div>

          <div>
            <div>
              <p className={appStyle.titleText}>Two-factor authentication*</p>
              <p className={appStyle.mainText}>
                We do not allow you to turn it off for security reasons.
              </p>
            </div>
            <div>
              <input type="checkbox" />
            </div>
          </div>

          <div>
            <p className={appStyle.titleText}>Timezone</p>
            <p className={appStyle.mainText}>Europe/Moscow</p>
            <GreenButton text="Change" link={PROFILE_CHANGE_PASSWORD_ROUTE} />
          </div>

          <div>
            <p className={appStyle.titleText}>Country</p>
            <p className={appStyle.mainText}>Russia</p>
            <GreenButton text="Change" link={PROFILE_CHANGE_PASSWORD_ROUTE} />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default ProfileAll
