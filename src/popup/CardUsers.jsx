import style from './card.module.css';
import BackBottom from '../buttons/WhiteButton.jsx';
import UserItem from './MainUserComponent.jsx'

const UsersCard = () => {
return (
<div className={style.users-back}>
        <div className={style.frame-header}>
          <p className={style.header-user}>Card Users</p>
          <div className={style.frame-card}>
            <p className={style.main-header}>Card:</p>
            <p className={style.main-content}>111111*****8484</p>
          </div>
        </div>
            <UserItem />
          
            <UserItem />
        <BackBottom text='Close' />
      </div>
)
}

export default UsersCard


      
