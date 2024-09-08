import style from './attention.module.css'
import appStyle from '../../app.module.css'

const Attention = () => {
  return (
    <div className={style.attention}>
      <h1 className={appStyle.titleText}>ATTENTION</h1>

      <div className={style.container}>
        <div className={style.text}>
          <p className={appStyle.mainText}>Due to the current sanctions policy, it is forbidden to
          top-up <span>[FBM] Pay</span> accounts from crypto wallets
          belonging to such platforms, as:</p>
        </div>

        <div className={style.buttons}>
          <div className={style.button}>
            <p className={appStyle.mainText}>Garantex</p>
          </div>
          <div className={style.button}>
            <p className={appStyle.mainText}>Hydra</p>
          </div>
          <div className={style.button}>
            <p className={appStyle.mainText}>Tornado Cash</p>
          </div>
        </div>
      </div>

      <p className={appStyle.mainText}>Payments received from such wallets will be processed with an additional
        commission or may lead to the blocking
        of your account with all funds! For more information about it, please contact with your manager.</p>
    </div>
  )
}

export default Attention