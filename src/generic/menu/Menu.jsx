import style from "./menu.module.css"
import logo from "../../image/Logo.svg"
import MenuItems from "./items/MenuItems.jsx"
import Divider from "../divider/Divider.jsx"
import Contacts from "./contacts/Contacts.jsx"
import { useEffect, useState } from "react"
import { useValue } from "../model/value.jsx"
import { $isMenuOpened } from "../model/menuModel.js"
import { LogoMenu } from "../../generic/logoMenu/LogoMenu.jsx"
import { handleWidth } from "../../generic/handleWidth/handleWidth.js"
const Menu = () => {
  const [totalBalance, setTotalBalance] = useState(0) // сумма балансов по аккаунтам
  const [isClosed, setIsClosed] = useState(false)

  // const isMenu = () => {
  //   return handleMenu(setIsClosed, "c")
  // }

  const fetchAccounts = async () => {
    const url = "/api/accounts"
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
      Accept: "application/json",
    }
    try {
      const response = await fetch(url, {
        method: "GET",
        headers,
      })

      if (response.ok) {
        const result = await response.json()
        // Рассчитываем общую сумму балансов
        const total = result.data.reduce(
          (sum, account) => sum + parseFloat(account.balance),
          0
        )
        setTotalBalance(total) // Сохраняем общую сумму в состояние
      } else {
        const errorText = await response.text()
        console.error(
          "Ошибка получения суммы балансов аккаунтов:",
          response.status,
          response.statusText,
          errorText
        )
      }
    } catch (error) {
      console.error("Ошибка при получении данных аккаунтов:", error)
    }
  }

  useEffect(() => {
    fetchAccounts()
  }, [])

  //handleToggle
  const [isMenuOpened, setIsMenuOpened] = useValue($isMenuOpened)

  const handleToggle = () => {
    setIsMenuOpened(!isMenuOpened)
  }

  //handleWidth
  let isWidth = handleWidth()

  return (
    <>
      {!isWidth && (
        <LogoMenu handleToggle={handleToggle} isMenu={isMenuOpened} />
      )}
      <div className={`${style.menu}  ${!isMenuOpened ? style.active : ""}`}>
        <div className={style.menu__container}>
          <img alt="FBMPAY logo" src={logo} className={style.logo_menu} />

          <div className={style.divider}>
            <Divider />
          </div>

          <MenuItems totalBalance={totalBalance} />
        </div>

        <div className={style.menu__container}>
          <div className={style.divider}>
            <Divider />
          </div>

          <Contacts />
        </div>
      </div>
    </>
  )
}

export default Menu
