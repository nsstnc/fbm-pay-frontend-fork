import style from './popup.module.css';
import RedButtom from '../generic/buttons/RedButton.jsx';
import BackBottom from '../generic/buttons/WhiteButton.jsx';

const ClosePop = () => {
  return (
    <div className={style.background}>
      <img className={style.img} src="./Vector.svg" alt=""/>
      <span className={style.header}>Attention</span>
      <span className={style.main}>Closing the cards means the complete termination of the card. Are you sure you want to close the selected cards?</span>

      <div className={style.bottom - block}>
        <RedButtom text="Close Cards"/>
        <BackBottom text="Cancel"/>
      </div>
    </div>
  )
}

export default ClosePop