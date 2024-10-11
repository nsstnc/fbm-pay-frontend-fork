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
        e.preventDefault();
        console.log("Button clicked!");
        const url = "/api/auth/login";

        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        const body = {
            email: email,
            password: password,
            device_name: "eos",
        };
        try {
            console.log("Request body:", JSON.stringify(body));
            const loginResponse = await fetch(url, {
                method: "POST",
                headers,
                body: JSON.stringify(body),
            });

            console.log("Full response object:", loginResponse); 

            if (loginResponse.ok) {
                const loginResult = await loginResponse.json();
                console.log("Login successful:", loginResult);
                setEmail(email);
                navigate("/2fa");
            } else {
                // Выводим статус и заголовки
                console.error("Response status:", loginResponse.status);
                console.error("Response headers:", loginResponse.headers);

                // Проверяем на пустое тело ответа
                const contentLength = loginResponse.headers.get("Content-Length");
                if (contentLength === "0") {
                    console.error("Ошибка при авторизации: Пустой ответ от сервера");
                    setMessage("Ошибка при авторизации: Пустой ответ от сервера");
                } else {
                    const errorText = await loginResponse.text();
                    console.log("Raw error text:", errorText);

                    try {
                        const loginError = errorText ? JSON.parse(errorText) : {};
                        console.error(
                            "Ошибка при авторизации:",
                            loginResponse.status,
                            loginResponse.statusText,
                            loginError
                        );
                        // Проверяем наличие полей с валидационными ошибками
                        if (
                            loginError.data &&
                            loginError.data.validate_errors &&
                            loginError.data.validate_errors.email
                        ) {
                            setMessage(loginError.data.validate_errors.email);
                        } else {
                            setMessage("Ошибка при авторизации. Попробуйте снова.");
                        }
                    } catch (parseError) {
                        console.error("Ошибка при парсинге JSON:", parseError);
                        setMessage("Ошибка при авторизации. Попробуйте снова.");
                    }
                }
            }
        } catch (loginError) {
            console.error("Ошибка при авторизации:", loginError);
            setMessage("Ошибка при авторизации. Попробуйте снова.");
        }
    };

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
