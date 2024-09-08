import MenuBtn from "../../generic/buttons/MenuBtn.jsx"
import style from "./logoMenu.module.css"
import logo from "../../image/Logo.svg"
import x from "../../image/x.svg"

export const LogoMenu = ({ handleToggle, isMenu }) => {
  return (
    <div className={style.logoMenu}>
      <img className={style.icon_card} alt="Card icon" src={logo} />
      <MenuBtn handleToggle={handleToggle} isMenu={isMenu} />
    </div>
  )
}
