import style from './popup.module.css';


const UserCardItem = () => {
return (
<div className={style.frame-user}>
          <div className={style.user}>
            <div className={style.frame-info}>
              <p className={style.user-name}>Ivan</p>
              <p className={style.user-mail}>345123shrek@gmail.com</p>
            </div>
            <div className={style.frame-status}>
              <div className={style.frame-tab}>
                <div className={style.statustab}>
                  <p className={style.main-status}>Active</p>
                </div>
                <p className={style.main-user}>Main User</p>
              </div>
            </div>
          </div>
</div>
)
}

export default UserCardItem