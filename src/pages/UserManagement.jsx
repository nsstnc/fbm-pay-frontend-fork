import style from "../style/userManagement.module.css";
import Menu from "../components/menu/Menu.jsx";
import Footer from "../generic/Footer.jsx";
import Button from "../generic/Button.jsx";
import UserData from "../components/userManagement/UserData.jsx";
import options from "../image/options.png"
import '../index.css'
import ShowMore from "../generic/ShowMore.jsx";
import appStyle from '../app.module.css'
import plusIcon from '../image/plus.png'
import showMore from "../image/showMore.png";

const UserManagement = () => {
  return (
    <div className={appStyle.page}>
      <Menu/>

      <div className={appStyle.main}>
        <h1 className={appStyle.pageTitle}>User Management</h1>

        <div className={style.pageContent}>
          <div className={style.button}>
          <Button text="Add Memener"
                  thisWidth="12rem"
                  img={
                    <img alt={"Plus icon"} src={plusIcon}/>
                  }
          />
          </div>

          <div className={style.userData}>
            <UserData username="USERNAME"
                      userType="USER TYPE"
                      login="LOGIN"
                      email="AUTHORIZATION EMAIL"
                      phone="PHONE"
                      tg="TELEGRAM ID"
                      iban="IBAN"
                      description={
                        <p>DESCRIPTION</p>
                      }
                      isHeader="header"
            />
            <UserData username="Ivan"
                      userType="Main User"
                      login="345123shrek@gmail.com"
                      email="345123shrek@gmail.com"
                      phone="+1 909 233-45-67"
                      tg="@denis_starlight"
                      iban="GB55GUAV009932000003541"
                      description={
                        <div className={style.descriptionBlock}>
                          <div className={style.active}>
                            <p>Active</p>
                          </div>
                          <img alt="Options icon" src={options}/>
                        </div>
                      }
            />
            <UserData username="Denis"
                      userType="Sub User"
                      login="345123shrek@gmail.com"
                      email="345123shrek@gmail.com"
                      phone="+1 909 233-45-67"
                      tg="@denis_starlight"
                      iban="GB55GUAV009932000003541"
                      description={
                        <div className={style.descriptionBlock}>
                          <div className={style.blocked}>
                            <p>Blocked</p>
                          </div>
                          <img alt="Options icon" src={options}/>
                        </div>
                      }
            />
          </div>

          <div style={{
            marginTop: "2rem",
          }}>
            <ShowMore text="Show 25"
                      subText="6 of 67"
                      img={
                        <img alt="Show more icon" src={showMore}
                             style={{
                               width: "1.2rem",
                               height: "1.2rem",
                             }}
                        />
                      }
            />
          </div>

        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default UserManagement