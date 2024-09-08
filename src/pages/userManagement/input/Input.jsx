import style from './input.module.css'
import appStyle from '../../../app.module.css'

// eslint-disable-next-line react/prop-types
const Input = ({text = '', type, hint = '', img = <></>,}) => {

  if (type === "onlyText") {
    return (
      <label className={`${style.label} ${appStyle.titleText}`} style={{justifyContent:'flex-start'}}>
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
               style={{borderRadius:'6px'}}
        />
        {/*<span className={style.customCheckBox}></span>*/}
      </label>
    )
  }

  return (
    <label className={`${style.label} ${appStyle.titleText}`} style={{borderRadius:'4px'}}>
      {text}
      <input type={type}
             placeholder={hint}
             className={style.input}
             style={{borderRadius:'6px'}}
      />
      {img}
    </label>
  )
}

export default Input