import style from './popup.module.css';
import GreenButtom from '../buttons/GradientButton.jsx';
import BackBottom from '../buttons/WhiteButton.jsx';

const BlockUser = () => {
return (
<div className={style.background}>
    <span ClassName={style.header}>Block User</span>
    <span ClassName={style.main}>User Denis will be blocked. Are you sure you want to block the user?</span>

<div ClassName={style.bottom-block}>
    <GreenButtom text="Block"/>
    <BackBottom text="Cancel"/>
</div>
</div>
)
}

export default BlockUser