import style from '../../style/menu.module.css'
import logo from '../../image/Logo.png'
import MenuItems from "./MenuItems.jsx";
import Divider from "../../generic/Divider.jsx";
import Contacts from "./Contacts.jsx";

const classes = `logo-menu`

const Menu = () => {
  return (
    <div className={style.menu}>
      <div className={style.menu__container}>
        <img alt="FBMPAY logo" src={logo} className={classes} />

        <div className={style.divider}>
          <Divider/>
        </div>

        <MenuItems/>
      </div>

      <div className={style.menu__container}>
        <div className={style.divider}>
          <Divider/>
        </div>

        <Contacts/>
      </div>
    </div>
  )
}

export default Menu
