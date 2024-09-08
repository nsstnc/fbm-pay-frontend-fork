import style from '../../style/userData.module.css'
import appStyle from '../../app.module.css'

// eslint-disable-next-line react/prop-types
const UserData = ({username, userType, login, email, phone, tg, iban, description, isHeader = ''}) => {

  if (isHeader === 'header') {
    return (
      <div className={`${style.data}`} style={{
        color: "#AAAAAA",
      }}>
        <p>{username}</p>

        <p>{userType}</p>

        <p>{login}</p>

        <p>{email}</p>

        <p>{phone}</p>

        <p>{tg}</p>

        <p>{iban}</p>

        <div className={style.fieldDescription}>{description}</div>
      </div>
    )
  } else {
    return (
      <div className={`${style.data} ${appStyle.mainText}`}>
        <p>{username}</p>

        <p>{userType}</p>

        <p>{login}</p>

        <p>{email}</p>

        <p>{phone}</p>

        <p>{tg}</p>

        <p>{iban}</p>

        <div className={style.fieldDescription}>{description}</div>
      </div>
    )
  }
}

export default UserData