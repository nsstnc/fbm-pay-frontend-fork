import style from './popup.module.css';
import GreenButtom from '../buttons/GradientButton.jsx';
import BackBottom from '../buttons/WhiteButton.jsx';

const HoldCard = () => {
return (
<div className={style.background}>
        <span ClassName={style.header}>Hold The Cards</span>
        <span ClassName={style.main}>All selected cards will be held and payments will be suspended. Are you sure you want to hold the cards?</span>

        <div ClassName={style.bottom-block}>
            <GreenButtom text="Hold"/>
            <BackBottom text="Cancel"/>
</div>
</div>
)
}

export default HoldCard