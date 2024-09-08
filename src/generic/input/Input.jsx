import React, { useState } from "react";
import style from './input.module.css';
import appStyle from '../../app.module.css';
import passwordEye from '../../image/viewPassword.svg';
import hideEye from '../../image/hidePassword.svg';

const Input = ({ label, type, placeholder, value, onChange }) => {
  const [inputType, setInputType] = useState(type);
  const [icon, setIcon] = useState(passwordEye);

  const handleToggle = () => {
    if (inputType === 'password') {
      setIcon(hideEye);
      setInputType('text');
    } else {
      setIcon(passwordEye);
      setInputType('password');
    }
  };

  return (
    <label htmlFor="input" className={`${appStyle.mainText} ${style.label}`}>
      {label}
      {type === 'password' ? (
        <div className={style.password}>
          <input
            className="password-input"
            type={inputType}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
          <div className="password-control">
            <img alt="View password" src={icon} onClick={handleToggle} />
          </div>
        </div>
      ) : (
        <input
          className={`${style.input} ${appStyle.mainText}`}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )}
    </label>
  );
};

export default Input;
