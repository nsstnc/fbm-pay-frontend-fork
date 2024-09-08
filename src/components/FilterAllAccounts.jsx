import appStyle from '../app.module.css'
import style from '../style/filterAllAccounts.module.css'

// eslint-disable-next-line react/prop-types
const FilterAllAccounts = ({account, users, notification, balance, isHeader = ''}) => {

  if (isHeader === 'header') {
    return (
      <div className={style.data} style={{
        color: "#AAAAAA",
      }}>
        {account}

        {users}

        {notification}

        {balance}

      </div>
    )
  } else {
    return (
      <div className={`${style.data} ${appStyle.mainText}`}>

        {account}

        {users}

        {notification}

        {balance}
      </div>
    )
  }
}

export default FilterAllAccounts