import style from './status.module.css';

const ErrorCard = () => {
return (
<div className={style.err}>
      <div className={style.frame}>
        <div className={style.headline}>
          <p className={style.header-card}>ERROR</p>
        </div>
        <p className={style.main-card}>Selected cards haven’t been holded. Please change selected cards or try later</p>
      </div>
      <img className={style.esc} src="./Close.svg" />
    </div>
)
}

export default ErrorCard