import iconMenu from "../../image/icon_menu.svg"
import style from "./menuBtn.module.css"
import x from "../../image/x.svg"

const MenuBtn = ({ handleToggle, isMenu }) => {
  return (
    <button onClick={handleToggle} className={style.menuBtn}>
      <img src={isMenu ? x : iconMenu} alt="menu" />
    </button>
  )
}

export default MenuBtn
