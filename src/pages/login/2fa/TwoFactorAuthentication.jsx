import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import style from './twoFactorAuthentication.module.css';
import loginStyle from '../login.module.css';
import appStyle from "../../../app.module.css";
import Input from "../../../generic/input/Input.jsx";
import Button from "../../../generic/buttons/Button.jsx";
import HintHeader from "../generic/hintHeader/HintHeader.jsx";
import TextButton from "../../../generic/buttons/TextButton.jsx";

const TwoFactorAuthentication = () => {
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(50);
  const { email, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/login");
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const handle2fa = async () => {
  const url = "/api/auth/check-code";
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  };
  const body = {
    email: email,
    code: code,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const result = await response.json();
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
      navigate("/dashboard");
    } else {
      const errorText = await response.text();
      console.error("Ошибка при проверке кода:", response.status, response.statusText, errorText);

      let result;
      try {
        result = JSON.parse(errorText);
      } catch (parseError) {
        console.error("Ошибка разбора ответа:", parseError);
        setMessage("Не удалось обработать ответ от сервера.");
        return;
      }

      if (result.success === false && result.data && result.data.validate_errors) {
        setMessage(result.data.validate_errors.join(" "));
      } else {
        setMessage("Ошибка при проверке кода. Попробуйте снова.");
      }
    }
  } catch (error) {
    setMessage("Ошибка при проверке кода. Попробуйте снова.");
    console.error("Ошибка при проверке кода:", error);
  }
};

  return (
    <div className={loginStyle.background}>
      <div className={loginStyle.login}>
        <h1 className={appStyle.pageTitle}>Two-factor authentication</h1>

        <div className={style.hint}>
          <HintHeader
              text=""
              hint="To complete your account login, please enter the two-factor authentication code sent to your email."
              link=""
          />
        </div>

        <div className={style.authentication}>
          <div className={style.input}>
            <Input
                label="Two Factor Authentication"
                type="text"
                placeholder="Enter the 2FA code sent to your email"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
          </div>

          <div className={style.textButton}>
            <TextButton
                text={`${timeLeft} sec`}
            />
          </div>
        </div>
        <p style={{color: "red"}}>{message}</p>
        <Button
            text="Login"
            onClick={handle2fa}
        />
      </div>
    </div>
  );
};

export default TwoFactorAuthentication;