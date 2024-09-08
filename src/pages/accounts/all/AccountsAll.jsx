import Menu from "../../../generic/menu/Menu.jsx"
import Footer from "../../../generic/footer/Footer.jsx"
import style from "./accountsAll.module.css"
import HeaderItems from "../../../generic/headerItem/HeaderItems.jsx"
import appStyle from "../../../app.module.css"
import ContentCard from "../../../generic/contentCard/ContentCard.jsx"
import Input from "../../../generic/input/Input.jsx"
import Button from "../../../generic/buttons/Button.jsx"
import plusIcon from "../../../image/plus.svg"
import changeBlackIcon from "../../../image/changeBlack.svg"
import arrowDownIcon from "../../../image/arrowDown.svg"
import plusAddIcon from "../../../image/plusAdd.svg"
import contentCardStyle from "../../../generic/contentCard/contentCard.module.css"
import {
  ACCOUNTS_BALANCE_HISTORY_ROUTE,
  ACCOUNTS_FUNDING_ROUTE,
  ALL_ACCOUNTS_ROUTE,
} from "../../../routing/consts.js"
import Result from "../../../generic/filter/result/Result.jsx"
import Filter from "../../../generic/filter/Filter.jsx"
import { useState, useEffect, useContext } from "react"
import { AccountsContext } from "../../context/AccountsContext.jsx"
import handleChange from "../../payments/cards/handleChange/handleChange.js"

import { useValue } from "../../../generic/model/value.jsx"
import { $isMenuOpened } from "../../../generic/model/menuModel.js"

import { LogoMenu } from "../../../generic/logoMenu/LogoMenu.jsx"

const AccountsAll = () => {
  const [visibleDropdownId, setVisibleDropdownId] = useState(null)

  const toggleDropdown = (accountId) => {
    setVisibleDropdownId((prevId) => (prevId === accountId ? null : accountId))
  }

  const [isToggled, setIsToggled] = useState(true)
  const { accounts, setAccounts } = useContext(AccountsContext)
  const [filteredAccounts, setFilteredAccounts] = useState([])
  const [ibanFilter, setIbanFilter] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    setIsToggled(true)
  }

  const handleApplyFilter = () => {
    const filtered = accounts.filter((account) =>
      account.iban.toLowerCase().includes(ibanFilter.toLowerCase())
    )
    setFilteredAccounts(filtered)
  }

  const handleCancelFilter = () => {
    setIbanFilter("")
    setFilteredAccounts(accounts)
  }

  // useEffect(() => {
  //     if (isToggled) {
  //         const timer = setTimeout(() => {
  //             setIsToggled(false);
  //         }, 2000);
  //
  //         return () => clearTimeout(timer);
  //     }
  //     fetchAccounts();
  // }, [isToggled]);

  const fetchAccountUsers = async (accountId) => {
    const url = `/api/accounts/${accountId}/users`
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
        if (result.success) {
          return result.data // Возвращаем список пользователей, если запрос успешен
        } else {
          console.error(
            `Ошибка при получении пользователей аккаунта ${accountId}:`,
            result.data
          )
          return [] // Возвращаем пустой массив, если success === false
        }
      } else {
        const errorText = await response.text()
        console.error(
          `Ошибка при получении пользователей аккаунта ${accountId}:`,
          response.status,
          response.statusText,
          errorText
        )
        return []
      }
    } catch (error) {
      console.error(
        `Ошибка при получении пользователей аккаунта ${accountId}:`,
        error
      )
      return []
    }
  }

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
        const accountsData = result.data

        // Получаем список пользователей для каждого аккаунта
        const accountsWithUsers = await Promise.all(
          accountsData.map(async (account) => {
            const users = await fetchAccountUsers(account.id)
            return {
              ...account,
              users: users,
            }
          })
        )

        setAccounts(accountsWithUsers)
        setFilteredAccounts(accountsWithUsers) // Изначально показываем все аккаунты
        console.log(accountsWithUsers)
      } else {
        const errorText = await response.text()
        console.error(
          "Ошибка при получении данных аккаунтов:",
          response.status,
          response.statusText,
          errorText
        )
      }
    } catch (error) {
      console.error("Ошибка при получении данных аккаунтов:", error)
    } finally {
      // Устанавливаем isToggled в false после завершения всех операций
      setIsToggled(false)
    }
  }

  useEffect(() => {
    fetchAccounts()
  }, [])

  // handleMenu

  const [isMenuOpened, setIsMenuOpened] = useValue($isMenuOpened)

  return (
    <div className={`${appStyle.page} ${style.page}`}>
      <Menu />

      <div className={`${appStyle.main} ${isMenuOpened ? style.active : ""}`}>
        <h1 className={appStyle.pageTitle}>Accounts</h1>

        <HeaderItems
          texts={["All Accounts", "Account Funding", "Balance History"]}
          links={[
            ALL_ACCOUNTS_ROUTE,
            ACCOUNTS_FUNDING_ROUTE,
            ACCOUNTS_BALANCE_HISTORY_ROUTE,
          ]}
        />

        <div className={style.pageContent}>
          <div className={style.cards}>
            <div className={style.card}>
              <ContentCard
                title={
                  <div className={contentCardStyle.cardHeader}>
                    <p className={appStyle.titleText}>
                      <span
                        className={`${appStyle.titleText} ${appStyle.green}`}
                      >
                        TOTAL
                      </span>{" "}
                      DEPOSIT SUM
                    </p>
                  </div>
                }
                content={<p className={appStyle.pageTitle}>€6728.00</p>}
              />
            </div>
            <div className={style.card}>
              <ContentCard
                title={
                  <div className={contentCardStyle.cardHeader}>
                    <p className={appStyle.titleText}>
                      <span
                        className={`${appStyle.titleText} ${appStyle.green}`}
                      >
                        TOTAL
                      </span>{" "}
                      AMOUNT CREDITED
                    </p>
                  </div>
                }
                content={<p className={appStyle.pageTitle}>€6000.00</p>}
              />
            </div>
            <div className={style.card}>
              <ContentCard
                title={
                  <div className={contentCardStyle.cardHeader}>
                    <p className={appStyle.titleText}>
                      TOTAL{" "}
                      <span
                        className={`${appStyle.titleText} ${appStyle.green}`}
                      >
                        FEE AMOUNT
                      </span>
                    </p>
                  </div>
                }
                content={<p className={appStyle.pageTitle}>€728</p>}
              />
            </div>
            <div className={style.card}>
              <ContentCard
                title={
                  <div className={contentCardStyle.cardHeader}>
                    <p className={appStyle.titleText}>
                      <span
                        className={`${appStyle.titleText} ${appStyle.green}`}
                      >
                        NUMBER
                      </span>{" "}
                      OF DEPOSITS
                    </p>
                  </div>
                }
                content={<p className={appStyle.pageTitle}>2</p>}
              />
            </div>
          </div>

          <div className={style.relative}>
            <Filter
              preload={isToggled}
              onClick={handleClick}
              onApply={handleApplyFilter}
              onCancel={handleCancelFilter}
              title="ALL ACСOUNTS"
              inputs={[
                [
                  <Input
                    label="IBAN"
                    type="text"
                    placeholder="All"
                    value={ibanFilter}
                    onChange={(e) => setIbanFilter(e.target.value)}
                  />,
                ],
              ]}
              results={[
                <Result
                  content={[
                    // eslint-disable-next-line react/jsx-key
                    <p className={appStyle.hint} style={{ width: "15rem" }}>
                      ACCOUNT NUMBER
                    </p>,
                    <div className={style.flex} style={{ width: "10rem" }}>
                      <p className={appStyle.hint}>USERS</p>
                      <div className={style.button}>
                        <Button
                          text="Add Users"
                          img={<img alt="Add user" src={plusIcon} />}
                        />
                      </div>
                    </div>,
                    <p className={appStyle.hint} style={{ width: "10rem" }}>
                      NOTIFICATION
                    </p>,
                    <p className={appStyle.hint} style={{ width: "10rem" }}>
                      AVAILABLE BALANCE
                    </p>,
                  ]}
                />,
                ...filteredAccounts.map((account, index) => (
                  <Result
                    key={index}
                    content={[
                      // eslint-disable-next-line react/jsx-key
                      <div style={{ width: "16rem" }}>
                        <p className={appStyle.titleText}>{account.name}</p>
                        <div className={style.flex}>
                          <p className={appStyle.mainText}>{account.iban}</p>
                          <img alt="Change" src={changeBlackIcon} />
                        </div>
                      </div>,
                      <div>
                        <div
                          className={style.flex}
                          style={{ marginRight: "10rem" }}
                        >
                          <p
                            className={`${appStyle.mainText} ${appStyle.green}`}
                          >
                            {account.users.length}
                          </p>
                          {account.users.length > 0 && (
                            <img
                              alt="Show more"
                              src={arrowDownIcon}
                              onClick={() => toggleDropdown(account.id)}
                              style={{ cursor: "pointer" }}
                            />
                          )}
                        </div>
                        {visibleDropdownId === account.id && (
                          <ul
                            style={{
                              listStyleType: "none",
                              padding: 0,
                              margin: 0,
                              maxHeight: "6rem",
                              overflowY: "auto",
                              overflowX: "hidden", // Убираем горизонтальную прокрутку
                              position: "absolute", // Располагаем список поверх других элементов
                              zIndex: 1000, // Устанавливаем высокий z-index для наложения
                              backgroundColor: "white", // Белый фон для списка
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Добавляем тень для визуального выделения
                            }}
                          >
                            {account.users.map((user, index) => (
                              <li
                                key={index}
                                style={{
                                  padding: "0.5rem",
                                  borderBottom:
                                    index !== account.users.length - 1
                                      ? "1px solid #ccc"
                                      : "none",
                                  whiteSpace: "nowrap",
                                  display: "block", // Устанавливаем ширину элементов по содержимому
                                  width: "max-content", // Ширина подстраивается под максимальный контент
                                }}
                              >
                                {user.email}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>,
                      <p
                        className={appStyle.mainText}
                        style={{ width: "10rem" }}
                      >
                        {parseFloat(account.balance).toFixed(2) > 1000
                          ? "There is no issue with your acc"
                          : "Please top-up your balance"}
                      </p>,
                      <div className={style.flex} style={{ width: "10rem" }}>
                        <p>{parseFloat(account.balance).toFixed(2)}</p>
                        <img alt="Add balance" src={plusAddIcon} />
                      </div>,
                    ]}
                  />
                )),
              ]}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default AccountsAll
