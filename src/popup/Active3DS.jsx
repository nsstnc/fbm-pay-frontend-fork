import style from './popup.module.css';
import GreenButtom from '../buttons/GradientButton.jsx';
import BackBottom from '../buttons/WhiteButton.jsx';

const ActivateDS = () => {
return (
<div className={style.background}>
        <span ClassName={style.header}>Activate 3DS</span>
        <span ClassName={style.main}>3DS OTP codes will be activated for all selected cards. Are you sure you want to activate 3DS?</span>

        <div ClassName={style.bottom-block}>
            <GreenButtom text="Block"/>
            <BackBottom text="Cancel"/>
</div>
</div>
)
}

export default ActivateDS