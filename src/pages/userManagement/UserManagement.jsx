import style from "./userManagement.module.css"
import Menu from "../../generic/menu/Menu.jsx"
import Footer from "../../generic/footer/Footer.jsx"
import Button from "../../generic/buttons/Button.jsx"
import "../../index.css"
import ShowMore from "../../generic/filter/showMore/ShowMore.jsx"
import Dots from "../../generic/filter/showMore/Dots.jsx"
import appStyle from "../../app.module.css"
import plusIcon from "../../image/plus.svg"
import showMore from "../../image/showMore.svg"
import Result from "../../generic/filter/result/Result.jsx"
import Status from "../../generic/status/Status.jsx"
import statusStyle from "../../generic/status/status.module.css"
import arrowDown from "../../image/arrowDown.svg"
import plusWhite from "../../image/plus.svg"
import { USER_MANAGEMENT_ADD_ROUTE } from "../../routing/consts.js"
import Results from "../../generic/filter/result/Results.jsx"
import { $isMenuOpened } from "../../generic/model/menuModel.js"
import { useValue } from "../../generic/model/value.jsx"

const UserManagement = () => {
  const columnStyle = {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }

  //handleToggle

  const [opened] = useValue($isMenuOpened)

  return (
    <div className={`${appStyle.page} ${style.page}`}>
      <Menu />

      <div className={`${appStyle.main} ${opened ? appStyle.active : ""}`}>
        <h1 className={appStyle.pageTitle}>User Management</h1>

        <div className={style.pageContent}>
          <div className={style.button}>
            <Button
              text="Add Member"
              link={USER_MANAGEMENT_ADD_ROUTE}
              img={<img alt={"Plus icon"} src={plusIcon} />}
            />
          </div>

          <div className={style.userData}>
            <Results
              results={[
                <Result
                  content={[
                    <p
                      className={appStyle.hint}
                      style={{ ...columnStyle, width: "8rem" }}
                    >
                      USERNAME
                    </p>,
                    <p
                      className={appStyle.hint}
                      style={{ ...columnStyle, width: "8rem" }}
                    >
                      USER TYPE
                    </p>,
                    <p
                      className={appStyle.hint}
                      style={{ ...columnStyle, width: "12rem" }}
                    >
                      LOGIN
                    </p>,
                    <p
                      className={appStyle.hint}
                      style={{ ...columnStyle, width: "12rem" }}
                    >
                      AUTHORIZATION EMAIL
                    </p>,
                    <p
                      className={appStyle.hint}
                      style={{ ...columnStyle, width: "10rem" }}
                    >
                      PHONE
                    </p>,
                    <p
                      className={appStyle.hint}
                      style={{ ...columnStyle, width: "10rem" }}
                    >
                      TELEGRAM ID
                    </p>,
                    <p
                      className={appStyle.hint}
                      style={{ ...columnStyle, width: "12rem" }}
                    >
                      AVAILABLE ACCOUNTS
                    </p>,
                    <p
                      className={appStyle.hint}
                      style={{ ...columnStyle, width: "12rem" }}
                    >
                      IBAN
                    </p>,
                    <p
                      className={appStyle.hint}
                      style={{ ...columnStyle, width: "8rem" }}
                    >
                      DESCRIPTION
                    </p>,
                    <p
                      className={appStyle.hint}
                      style={{ ...columnStyle, width: "2rem" }}
                    ></p>,
                  ]}
                />,
                <Result
                  content={[
                    <p
                      className={appStyle.mainText}
                      style={{ ...columnStyle, width: "8rem" }}
                    >
                      Ivan
                    </p>,
                    <p
                      className={appStyle.mainText}
                      style={{ ...columnStyle, width: "8rem" }}
                    >
                      Main User
                    </p>,
                    <p
                      className={appStyle.mainText}
                      style={{ ...columnStyle, width: "12rem" }}
                    >
                      345123shrek@gmail.com
                    </p>,
                    <p
                      className={appStyle.mainText}
                      style={{ ...columnStyle, width: "12rem" }}
                    >
                      345123shrek@gmail.com
                    </p>,
                    <p
                      className={appStyle.mainText}
                      style={{ ...columnStyle, width: "10rem" }}
                    >
                      +1 909 233-45-67
                    </p>,
                    <p
                      className={appStyle.mainText}
                      style={{ ...columnStyle, width: "10rem" }}
                    >
                      @denis_starlight
                    </p>,
                    <div style={{ ...columnStyle, width: "12rem" }}>
                      <p className={`${appStyle.mainText} ${appStyle.green}`}>
                        4
                      </p>
                      <img alt="Arrow down" src={arrowDown} />
                      <div className={style.button}>
                        <Button
                          text="Add Acc"
                          img={<img alt="Add user" src={plusWhite} />}
                        />
                      </div>
                    </div>,
                    <p
                      className={appStyle.mainText}
                      style={{ ...columnStyle, width: "12rem" }}
                    >
                      GB55GUAV009932000003541
                    </p>,
                    <div style={{ ...columnStyle, width: "8rem" }}>
                      <Status className={statusStyle.Blocked} text="Blocked" />
                    </div>,
                    <Dots style={{ width: "2rem" }} />,
                  ]}
                />,
                // Повторите этот паттерн для других строк данных
              ]}
            />
          </div>

          <div className={appStyle.margin}>
            <ShowMore
              text="Show 25"
              subText="6 of 67"
              img={<img alt="Show more icon" src={showMore} />}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default UserManagement
