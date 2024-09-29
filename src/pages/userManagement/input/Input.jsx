import style from './input.module.css'
import appStyle from '../../../app.module.css'

// eslint-disable-next-line react/prop-types
const Input = ({ text = '', type, hint = '', img = <></>, readOnly = false, onClick }) => {

  if (type === "onlyText") {
    return (
      <label className={`${style.label} ${appStyle.titleText}`} style={{ justifyContent: 'flex-start' }}>
        {text}
        {hint}
      </label>
    );
  }

  if (type === "") {
    return (
      <label className={`${style.label} ${appStyle.titleText}`}>
        {text}
        {img}
      </label>
    );
  }

  if (type === 'checkbox') {
    return (
      <label className={`${style.labelWithCheckbox} ${style.label} ${appStyle.titleText}`}>
        {text}
        <input type={type}
               className={style.checkBox}
               style={{ borderRadius: '6px' }}
        />
      </label>
    );
  }

  return (
    <label className={`${style.label} ${appStyle.titleText}`} style={{ borderRadius: '4px' }}>
      {text}
      <input
        type={type}
        placeholder={hint}
        className={style.input}
        style={{ borderRadius: '6px', cursor: readOnly ? 'pointer' : 'auto' }}
        readOnly={readOnly}
        onClick={onClick}
      />
      {img}
    </label>
  );
}

export default Input;
