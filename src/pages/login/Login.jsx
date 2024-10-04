import React, {useState, useContext} from "react"
import {useNavigate} from "react-router-dom"
import {AuthContext} from "../context/AuthContext.jsx"
import style from "./login.module.css"
import appStyle from "../../app.module.css"
import logo from "../../image/Logo.svg"
import Input from "../../generic/input/Input.jsx"
import Button from "../../generic/buttons/Button.jsx"
import HintHeader from "./generic/hintHeader/HintHeader.jsx"
import Plate from "./generic/plate/Plate.jsx"

const Login = () => {
    const [password, setPassword] = useState("")
    const {email, setEmail} = useContext(AuthContext)
    const navigate = useNavigate()
    const [message, setMessage] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log("Button clicked!")

        const url = "/api/accounts/registration"
        const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
        const body = {
            name: email,
            email: email,
            password: password,
            password_confirmation: password,
        }
        console.log(body)
        try {
            const response = await fetch(url, {
                method: "POST",
                headers,
                body: JSON.stringify(body),
            })
            console.log(response)
            if (response.ok) {
                const registerResult = await response.json()
                console.log(registerResult)
                localStorage.setItem("token", registerResult.data.token)
                navigate("/dashboard")
            } else {
                const errorText = await response.text()
                console.error(
                    "Ошибка при регистрации:",
                    response.status,
                    response.statusText,
                    errorText
                )

                let result
                try {
                    result = JSON.parse(errorText)
                } catch (parseError) {
                    console.error("Ошибка разбора ответа:", parseError)
                    return
                }

                if (
                    result.success === false &&
                    result.data &&
                    result.data.validate_errors
                ) {
                    const validationErrors = result.data.validate_errors
                    if (validationErrors.email) {
                        setMessage(validationErrors.email)
                    }
                    if (validationErrors.includes("The email has already been taken.")) {
                        const body = {
                            email: email,
                            password: password,
                        }
                        const url = "/api/auth/login"
                        try {
                            console.log(JSON.stringify(body))
                            const loginResponse = await fetch(url, {
                                method: "POST",
                                headers,
                                body: JSON.stringify(body),
                            })

                            if (loginResponse.ok) {
                                const loginResult = await loginResponse.json()
                                console.log(loginResult)
                                setEmail(email)
                                navigate("/2fa")
                            } else if (loginResponse.headers.get("Content-Length") === "0") {
                                console.error("Ошибка при авторизации: Пустой ответ от сервера")
                                setMessage("Ошибка при авторизации: Пустой ответ от сервера")
                            } else {
                                const errorText = await loginResponse.text()
                                const loginError = JSON.parse(errorText)
                                console.error(
                                    "Ошибка при авторизации:",
                                    loginResponse.status,
                                    loginResponse.statusText,
                                    loginError
                                )
                                if (
                                    loginError.data &&
                                    loginError.data.validate_errors &&
                                    loginError.data.validate_errors.email
                                ) {
                                    setMessage(loginError.data.validate_errors.email)
                                } else {
                                    setMessage("Ошибка при авторизации. Попробуйте снова.")
                                }
                            }
                        } catch (loginError) {
                            console.error("Ошибка при авторизации:", loginError)
                            setMessage("Ошибка при авторизации. Попробуйте снова.")
                        }
                    }
                }
            }
        } catch (error) {
            console.error("Ошибка при регистрации:", error)
            setMessage("Ошибка при регистрации. Попробуйте снова.")
        }
    }

    return (
        <div className={style.background}>
            <div className={style.login}>
                <div className={style.logo}>
                    <h1 className={`${appStyle.pageTitle} ${style.title}`}>Welcome to</h1>
                    <img className={style.icon_card} alt="Card icon" src={logo}/>
                </div>

                <Input
                    label="E-mail address"
                    type="email"
                    placeholder="fbmpay@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    label="Password"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p style={{color: "red"}}>{message}</p>
                <Button
                    className={style.btn_login}
                    text="Login"
                    onClick={handleLogin}
                />

                <HintHeader
                    text="Forgot password?"
                    hint="Recover it"
                    link="https://t.me/v_astanin"
                />

                <Plate
                    title="Registration"
                    text={
                        <p className={style.text}>
                            To register on platform please contact your manager
                        </p>
                    }
                    link="https://t.me/v_astanin"
                />
            </div>
        </div>
    )
}

export default Login
