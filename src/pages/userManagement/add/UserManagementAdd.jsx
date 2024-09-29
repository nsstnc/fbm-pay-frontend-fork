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
import React, {useState} from "react"

//handleToggle


const UserManagementAdd = () => {
    const [opened] = useValue($isMenuOpened)
    const options = [
        'One time password received via Phone',
        'One time password received via E-mail',
        'One time password received via Telegram',
    ]

    const [visibleDropdownId, setVisibleDropdownId] = useState(null)

    const toggleDropdown = (Id) => {
        setVisibleDropdownId((prevId) => (prevId === Id ? null : Id))
    }
    const [otpLoginOption, setOtpLoginOption] = React.useState("One time password received via E-mail");
    const [otpApproveOption, setOtpApproveOption] = React.useState("One time password received via E-mail");
    //handleWidth
    let isWidth = handleWidth()

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
                                        styleF="borderRadius:'4px'"
                                        hint="Write authorization E-mail"
                                        type="email"
                                    />
                                </div>
                            }
                        />

                        <Field
                            title="Name*"
                            value={
                                <div className={style.input} style={{marginLeft: "-105px"}}>
                                    <Input
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
                                    <Input hint="Write the phone" type="phone"/>
                                </div>
                            }
                        />

                        <Field
                            title="Telegram ID*"
                            value={
                                <div className={style.input} style={{marginLeft: "-105px"}}>
                                    <Input hint="Write the Telegram ID" type="text"/>
                                </div>
                            }
                        />

                        <Field
                            title="OTP for Login*"
                            value={
                                <div className={style.input} style={{marginLeft: "-105px"}}>
                                    <div>
                                        <Input
                                            readOnly={true}
                                            hint={otpLoginOption}
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
                                            readOnly={true}
                                            hint={otpApproveOption}
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
                                        />
                                        <AddAccountPlate
                                            text="GB16GUAV00993200022188 (OWS1690 OWS1690, Main Balance) 0.06 EUR"/>

                                        <AddAccountPlate
                                            text="GB16GUAV00993200022188 (OWS1690 OWS1690, Main Balance) 0.06 EUR"/>

                                        <AddAccountPlate
                                            text="GB16GUAV00993200022188 (OWS1690 OWS1690, Main Balance) 0.06 EUR"/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={style.access_add_account}>
                                        <Input text="AccessToAccounts*" hint="" type=""/>
                                        <TextButton
                                            text="Add Account"
                                            img={<img alt="Add user" src={plusGreen}/>}
                                        />
                                    </div>
                                    <div className={style.addAccount}>
                                        <AddAccountPlate text="GB16GUAV00993200022188 (OWS1690 O..."/>

                                        <AddAccountPlate text="GB16GUAV00993200022188 (OWS1690 O..."/>

                                        <AddAccountPlate text="GB16GUAV00993200022188 (OWS1690 O..."/>
                                    </div>
                                </>
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
