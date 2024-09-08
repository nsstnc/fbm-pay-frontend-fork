import style from '../../style/headerAccountsItem.module.css'
import appStyle from '../../app.module.css'

// eslint-disable-next-line react/prop-types
const HeaderAccountItem = ({text, link}) => {

  return (
    <a href={link}>
    <div className={`${style.headerAccountsItem} ${style.noActive}`}>
      <p className={appStyle.subTitleText}>{text}</p>
    </div>
    </a>
  )
}

export default HeaderAccountItem