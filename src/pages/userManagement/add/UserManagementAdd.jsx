import style from "./userManagementAdd.module.css"
import appStyle from "../../../app.module.css"
import Menu from "../../../generic/menu/Menu.jsx"
import Footer from "../../../generic/footer/Footer.jsx"
import Input from "../input/Input.jsx"
import TextButton from "../../../generic/buttons/TextButton.jsx"
import plusGreen from "../../../image/plusGreen.svg"
import AddAccountPlate from "./plate/addAccountPlate.jsx"
import Button from "../../../generic/buttons/Button.jsx"
import WhiteButtonCancel from "../../../generic/buttons/WhiteButtonBack.jsx"
import {USER_MANAGEMENT_ROUTE} from "../../../routing/consts.js"
import Field from "../../profile/settings/field/Field.jsx"
import {$isMenuOpened} from "../../../generic/model/menuModel.js"
import {useValue} from "../../../generic/model/value.jsx"
import {handleWidth} from "../../../generic/handleWidth/handleWidth.js"
import {useContext, useEffect, useState} from "react"
import {AccountsContext} from "../../context/AccountsContext.jsx";

//handleToggle

// TODO настроить остаток полей и прописать запрос на создание пользователя
const UserManagementAdd = () => {

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        phone: '',
        telegram: '',
        otp_login: 'One time password received via E-mail',
        otp_approve: 'One time password received via E-mail',
        main_user_creation: false,
        access_to_accounts: [],
    });

    // Функция для обновления otpLoginOption и otpApproveOption
    const setOtpLoginOption = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            otp_login: value, // Привязка значения к полю otp_login
        }));
    };

    const setOtpApproveOption = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            otp_approve: value, // Привязка значения к полю otp_approve
        }));
    };


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    console.log(formData);
    const [opened] = useValue($isMenuOpened)
    const options = [
        'One time password received via Phone',
        'One time password received via E-mail',
        'One time password received via Telegram',
    ]
    const [visibleDropdownId, setVisibleDropdownId] = useState(null)
    const [accessToAccounts, setAccessToAccounts] = useState([]);
    const {accounts, setAccounts} = useContext(AccountsContext)
    const handleDeleteAccount = (iban) => {
        // Удаляем аккаунт из массива accessToAccounts
        setAccessToAccounts(accessToAccounts.filter(account => account.iban !== iban));
    };


    const handleAccountClick = (account) => {
        // Добавляем аккаунт в массив accessToAccounts, если его там еще нет
        if (!accessToAccounts.includes(account)) {
            setAccessToAccounts([...accessToAccounts, account]);
        }
        toggleDropdown(2); // Закрываем выпадающий список
    };

    const filteredAccounts = accounts.filter(account => !accessToAccounts.includes(account));

    const toggleDropdown = (Id) => {
        setVisibleDropdownId((prevId) => (prevId === Id ? null : Id))
    }

    //handleWidth
    let isWidth = handleWidth()

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
        }
    }

    useEffect(() => {
        fetchAccounts()
    }, [])


    return (
        <div className={appStyle.page}>
            <Menu/>

            <div className={`${appStyle.main} ${opened ? appStyle.active : ""} `}>
                <h1 className={`${appStyle.pageTitle} ${style.topPageTitle}`}>
                    Add User
                </h1>

                <div className={style.content}>
                    <div className={style.form}>
                        <Field
                            title="Authorization E-mail*"
                            value={
                                <div className={style.input} style={{marginLeft: "-105px"}}>
                                    <Input
                                        name="email"
                                        styleF="borderRadius:'4px'"
                                        hint="Write authorization E-mail"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            }
                        />

                        <Field
                            title="Name*"
                            value={
                                <div className={style.input} style={{marginLeft: "-105px"}}>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        style={{borderRadius: "4px"}}
                                        hint="Write user’s name"
                                        type="text"
                                    />
                                </div>
                            }
                        />

                        <Field
                            title="Phone"
                            value={
                                <div className={style.input} style={{marginLeft: "-105px"}}>
                                    <Input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        hint="Write the phone"
                                        type="phone"/>
                                </div>
                            }
                        />

                        <Field
                            title="Telegram ID*"
                            value={
                                <div className={style.input} style={{marginLeft: "-105px"}}>
                                    <Input name="telegram"
                                           value={formData.telegram}
                                           onChange={handleInputChange}
                                           hint="Write the Telegram ID"
                                           type="text"/>
                                </div>
                            }
                        />

                        <Field
                            title="OTP for Login*"
                            value={
                                <div className={style.input} style={{marginLeft: "-105px"}}>
                                    <div>
                                        <Input
                                            name="otp_login"
                                            readOnly={true}
                                            hint={formData.otp_login}
                                            type="text"
                                            onClick={() => toggleDropdown(0)}
                                        />

                                        {visibleDropdownId === 0 && (
                                            <ul
                                                style={{
                                                    listStyleType: "none",
                                                    padding: 0,
                                                    margin: 0,
                                                    maxHeight: "7rem",
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
                                                {options.map((option, index) => (
                                                    <li
                                                        key={index}
                                                        style={{
                                                            padding: "0.5rem",
                                                            borderBottom:
                                                                index !== options.length - 1
                                                                    ? "1px solid #ccc"
                                                                    : "none",
                                                            whiteSpace: "nowrap",
                                                            display: "block", // Устанавливаем ширину элементов по содержимому
                                                            width: "max-content", // Ширина подстраивается под максимальный контент
                                                            cursor: "pointer", // Устанавливаем курсор для интерактивных элементов
                                                        }}
                                                        onClick={() => {
                                                            setOtpLoginOption(option); // Обновляем состояние при выборе элемента
                                                            toggleDropdown(0); // Закрываем выпадающий список
                                                        }}
                                                    >
                                                        {option}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            }
                        />

                        <Field
                            title="OTP for Approve*"
                            value={
                                <div className={style.input} style={{marginLeft: "-105px"}}>
                                    <div>
                                        <Input
                                            name="otp_approve"
                                            readOnly={true}
                                            hint={formData.otp_approve}
                                            type="text"
                                            onClick={() => toggleDropdown(1)}
                                        />

                                        {visibleDropdownId === 1 && (
                                            <ul
                                                style={{
                                                    listStyleType: "none",
                                                    padding: 0,
                                                    margin: 0,
                                                    maxHeight: "7rem",
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
                                                {options.map((option, index) => (
                                                    <li
                                                        key={index}
                                                        style={{
                                                            padding: "0.5rem",
                                                            borderBottom:
                                                                index !== options.length - 1
                                                                    ? "1px solid #ccc"
                                                                    : "none",
                                                            whiteSpace: "nowrap",
                                                            display: "block", // Устанавливаем ширину элементов по содержимому
                                                            width: "max-content", // Ширина подстраивается под максимальный контент
                                                            cursor: "pointer", // Устанавливаем курсор для интерактивных элементов
                                                        }}
                                                        onClick={() => {
                                                            setOtpApproveOption(option); // Обновляем состояние при выборе элемента
                                                            toggleDropdown(1); // Закрываем выпадающий список
                                                        }}
                                                    >
                                                        {option}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            }
                        />

                        <Field
                            title="Main User Creation"
                            value={
                                <div className={style.input} style={{marginLeft: "-105px"}}>
                                    <Input hint="" type="checkbox"/>
                                </div>
                            }
                        />

                        <div className={style.accessToAccounts}>
                            {isWidth ? (
                                <>
                                    <Input text="AccessToAccounts*" hint="" type=""/>
                                    <div className={style.addAccount}>
                                        <TextButton
                                            text="Add Account"
                                            img={<img alt="Add user" src={plusGreen}/>}
                                            onClick={() => toggleDropdown(2)}
                                        />
                                        {accessToAccounts.map((account, index) => (
                                            <AddAccountPlate
                                                key={index}
                                                text={`${account.iban} ${parseFloat(account.balance).toFixed(2)}`}
                                                onDelete={() => handleDeleteAccount(account.iban)}
                                            />
                                        ))}


                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={style.access_add_account}>
                                        <Input text="AccessToAccounts*" hint="" type=""/>
                                        <TextButton
                                            text="Add Account"
                                            img={<img alt="Add user" src={plusGreen}/>}
                                            onClick={() => toggleDropdown(2)}
                                        />
                                    </div>
                                    <div className={style.addAccount}>
                                        {accessToAccounts.map((account, index) => (
                                            <AddAccountPlate
                                                key={index}
                                                text={`${account.iban} ${parseFloat(account.balance).toFixed(2)}`}
                                                onDelete={() => handleDeleteAccount(account.iban)}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}

                            {visibleDropdownId === 2 && (
                                <ul
                                    style={{
                                        listStyleType: "none",
                                        padding: 0,
                                        margin: 0,
                                        maxHeight: "7rem",
                                        overflowY: "auto",
                                        overflowX: "hidden",
                                        position: "absolute",
                                        zIndex: 1000,
                                        backgroundColor: "white",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {filteredAccounts.map((account, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                padding: "0.5rem",
                                                borderBottom:
                                                    index !== filteredAccounts.length - 1 ? "1px solid #ccc" : "none",
                                                whiteSpace: "nowrap",
                                                display: "block",
                                                width: "max-content",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => handleAccountClick(account)} // Добавляем IBAN при клике
                                        >
                                            {account.iban} {parseFloat(account.balance).toFixed(2)}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className={style.attention} style={{width: "80%"}}>
                            <p className={appStyle.titleText}>Attention</p>
                            <p className={appStyle.mainText} style={{width: "80%"}}>
                                We draw your attention, that you can`t edit email, if you want
                                to use a new email for a user, you need to create a new user
                                account.
                            </p>
                        </div>

                        <div className={style.buttons}>
                            <div className={style.button}>
                                <Button text="Add"/>
                            </div>
                            <div className={style.button}>
                                <WhiteButtonCancel text="Back" link={USER_MANAGEMENT_ROUTE}/>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </div>
    )
}

export default UserManagementAdd
