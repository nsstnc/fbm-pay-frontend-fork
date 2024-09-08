import style from "../style/input.module.css";
import appStyle from "../app.module.css";
import passwordEye from "../image/passwordEye.png";

// eslint-disable-next-line react/prop-types
const Input = ({ label, type, placeholder, onChange }) => {
  const input =
    type === "password" ? (
      <div className={`${style.password}`}>
        <input
          className={`${style.input} ${appStyle.mainText}`}
          type={type}
          placeholder={placeholder}
        />
        <img
          alt="View password"
          src={passwordEye}
          className={`password-control`}
        />
      </div>
    ) : (
      <input
        className={`${style.input} ${appStyle.mainText}`}
        type={type}
        placeholder={placeholder}
      />
    );

  return (
    <label htmlFor="input" className={`${appStyle.mainText} ${style.label}`}>
      {label}
      {input}
    </label>
  );
};

export default Input;
