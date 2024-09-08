import style from './limit.module.css';
import BackBottom from '../buttons/WhiteButton.jsx';
import Inp from '../input/Input.jsx';
import GreenButtom from '../buttons/GradientButton.jsx'

const SetCardLimit = () => {
return (
<div className={style.card-limit}>
      <p className={style.header}>Set Card Limits</p>
      <div className={style.frame-limit}>
      <p className={style.header-input}>Limit 30 days</p>
        <div className={style.frame-input}>
          <Inp type='text' placeholder='100.00' />
          <p className={style.simbol}>€</p>
        </div>
      </div>
      <div className={style.frame-limit}>
        <p className={style.header-input}>Limit 7 days</p>
        <div className={style.frame-input}>
        <Inp type='text' placeholder='100.00' />
          <p className="text-7">€</p>
        </div>
      </div>
      <div className={style.frame-limit}>
      <p className={style.header-input}>Limit 1 day</p>
      <div className={style.frame-input}>
      <Inp type='text' placeholder='100.00' />
          <p className={style.simbol}>€</p>
        </div>
      </div>
      <div className={style.frame-bottom}>
        <GreenButtom text="Apply"/>
        <BackBottom text="Cancel"/>
      </div>
    </div>
)
}

export default SetCardLimit


      
