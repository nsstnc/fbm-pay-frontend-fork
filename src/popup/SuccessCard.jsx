import style from './status.module.css';

const SuccessCard = () => {
return (
<div className={style.success}>
      <div className={style.frame}>
        <div className={style.headline}>
          <p className={style.header-card}>Success</p>
        </div>
        <p className={style.main-card}>Selected cards have been holded.</p>
      </div>
      <img className={style.esc} src="./Close.svg" />
    </div>
)
}

export default SuccessCard