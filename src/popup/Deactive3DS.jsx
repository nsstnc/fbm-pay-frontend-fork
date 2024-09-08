import style from './popup.module.css';
import GreenButtom from '../buttons/GradientButton.jsx';
import BackBottom from '../buttons/WhiteButton.jsx';

const DeactivateDS = () => {
return (
<div className={style.background}>
        <span ClassName={style.header}>Deactivate 3DS</span>
        <span ClassName={style.main}>3DS OTP codes will be deactivated for all selected cards. Are you sure you want to deactivate 3DS?</span>

        <div ClassName={style.bottom-block}>
            <GreenButtom text="Unhold"/>
            <BackBottom text="Cancel"/>
</div>
</div>
)
}

export default DeactivateDS