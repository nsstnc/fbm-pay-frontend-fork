import style from './popup.module.css';
import GreenButtom from '../buttons/GradientButton.jsx';
import BackBottom from '../buttons/WhiteButton.jsx';

const UnholdCard = () => {
return (
<div className={style.background}>
        <span ClassName={style.header}>Unhold The Cards</span>
        <span ClassName={style.main}>All selected cards will be unhold and payments will become available. Are you sure you want to unhold the cards?</span>

        <div ClassName={style.bottom-block}>
            <GreenButtom text="Unhold"/>
            <BackBottom text="Cancel"/>
</div>
</div>
)
}

export default UnholdCard