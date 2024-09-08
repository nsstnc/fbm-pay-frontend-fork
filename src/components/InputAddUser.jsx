import style from '../style/inputAddUser.module.css'
import appStyle from '../app.module.css'

// eslint-disable-next-line react/prop-types
const InputAddUser = ({text, type, hint, img = <></>}) => {

  if (type === "onlyText") {
    return (
      <label className={`${style.label} ${appStyle.titleText}`}>
        {text}
        {hint}
      </label>
    )
  }

  if (type === "") {
    return (
      <label className={`${style.label} ${appStyle.titleText}`}>
        {text}
        {img}
      </label>
    )
  }

  if (type === 'checkbox') {
    return (
      <label className={`${style.labelWithCheckbox} ${style.label} ${appStyle.titleText}`}>
        {text}
        <input type={type}
               className={style.checkBox}
        />
        {/*<span className={style.customCheckBox}></span>*/}
      </label>
    )
  }

  return (
    <label className={`${style.label} ${appStyle.titleText}`}>
      {text}
      <input type={type}
             placeholder={hint}
             className={style.input}
      />
      {img}
    </label>
  )
}

export default InputAddUser